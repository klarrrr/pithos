import { NextRequest, NextResponse } from 'next/server';
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

        // Initialize Supabase admin client for user creation
        const supabase = createAdminClient();

        // Create user in auth.users table
        const { data, error } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
        });

        if (error) {
            return NextResponse.json(
                { status: 'error', message: error.message },
                { status: 400 }
            );
        }

        return NextResponse.json({ status: 'ok', user_id: data.user.id });
    } catch (error) {
        console.error('Sign up error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Internal server error' },
            { status: 500 }
        );
    }
}