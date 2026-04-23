import { createAdminClient } from "./admin";
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { isProtectedRoute, getAllowedRoutes } from "./site_routes";

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({ request });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) =>
                        request.cookies.set(name, value)
                    );
                    supabaseResponse = NextResponse.next({ request });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    const supabaseAdmin = createAdminClient();

    // Get claims safely
    const { data: claimsData } = await supabase.auth.getClaims();
    const claims = claimsData?.claims;
    const uid = claims?.sub;   // This can still be undefined

    // console.log("UID from claims:", uid);

    let role: string | null = null;

    // Only query the users table if we actually have a valid uid
    if (uid) {
        const { data: roleRes, error } = await supabaseAdmin
            .from('users')
            .select('user_role')
            .eq('id', uid)
            .single();

        if (error) {
            console.error("Error fetching user role:", error);
            // Don't throw here in middleware — it can break navigation
            // Just continue with role = null (treat as no special role)
        } else {
            role = roleRes?.user_role || null;
            // console.log("User role:", role);
        }
    } else {
        console.log("No UID found — unauthenticated or invalid token");
    }

    const pathname = request.nextUrl.pathname;

    // Skip Api routes
    if (pathname.startsWith("/api")) {
        return NextResponse.next()
    }

    // Public route — everyone can access
    if (pathname === "/") {
        return supabaseResponse;
    }

    // Protected route but not logged in
    if (isProtectedRoute(pathname) && !uid) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    // Role-based access check (only if logged in)
    if (uid) {
        const allowedRoutes = getAllowedRoutes(role || "");

        const hasAccess = allowedRoutes.some((route) =>
            pathname.startsWith(route)
        );

        if (!hasAccess) {
            return NextResponse.redirect(new URL("/unauthorized", request.url));
        }
    }

    return supabaseResponse;
}