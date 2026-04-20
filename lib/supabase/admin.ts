import { createClient } from "@supabase/supabase-js";

/**
 * Creates a Supabase admin client for server-side operations
 * that require elevated privileges (e.g., user creation, deletion).
 * Should only be used in secure server-side contexts.
 */
export function createAdminClient() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_KEY!,
        {
            auth: { autoRefreshToken: false, persistSession: false },
        }
    );
}
