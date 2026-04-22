import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { validatePassword } from '@/lib/auth/password-rules';

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { status: 'error', message: 'Missing fields.' },
                { status: 400 }
            );
        }

        // Check if user already exists
        const adminSupabase = createAdminClient();
        const { data: existingUsers, error: userLookupError } = await adminSupabase.auth.admin.listUsers();
        
        if (!userLookupError) {
            const userExists = existingUsers.users.some(u => u.email === email);
            if (userExists) {
                return NextResponse.json(
                    { status: 'error', message: 'User already registered.' },
                    { status: 400 }
                );
            }
        }

        // Password complexity check
        const errors = validatePassword(password);

        if (errors.length > 0) {
            return NextResponse.json(
                {
                    status: 'error',
                    message: `Password must contain: ${errors.join(', ')}.`,
                },
                { status: 400 }
            );
        }

        const supabase = await createClient();

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${request.nextUrl.origin}/auth/login`,
            }
        });

        if (error) {
            return NextResponse.json(
                { status: 'error', message: error.message },
                { status: 400 }
            );
        }

        return NextResponse.json({ status: 'ok', user_id: data.user?.id });
    } catch (error) {
        console.error('Sign up error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Internal server error' },
            { status: 500 }
        );
    }
}