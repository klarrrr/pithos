"use server";

import { createAdminClient } from "@/lib/supabase/admin";

export type SystemConfig = {
    max_login_attempts: number;
    min_char_length: number;
    min_uppercase: number;
    min_lowercase: number;
    min_numbers: number;
    min_spec_chars: number;
};

/**
 * Fetches the system configuration using the admin client.
 * Returns defaults if no configuration is found.
 */
export async function getSystemConfig() {
    const admin = createAdminClient();

    const { data, error } = await admin
        .from('system_configs')
        .select('max_login_attempts, min_char_length, min_uppercase, min_lowercase, min_numbers, min_spec_chars')
        .single();

    if (error && error.code !== 'PGRST116') {
        console.error("Error fetching system configuration:", error.message || error.details);
        return { data: null, error: error.message };
    }

    return { data, error: null };
}

/**
 * Updates or creates the system configuration using the admin client.
 * Sanitizes input to ensure only specific columns are updated.
 */
export async function saveSystemConfig(newConfig: SystemConfig) {
    const admin = createAdminClient();

    // Sanitize the input to only include the specific columns
    // Enforce hard minimums on the server for security
    const sanitizedConfig = {
        max_login_attempts: Math.max(3, newConfig.max_login_attempts),
        min_char_length: Math.max(12, newConfig.min_char_length),
        min_uppercase: Math.max(1, newConfig.min_uppercase),
        min_lowercase: Math.max(1, newConfig.min_lowercase),
        min_numbers: Math.max(1, newConfig.min_numbers),
        min_spec_chars: Math.max(1, newConfig.min_spec_chars)
    };

    const { error } = await admin
        .from('system_configs')
        .upsert({
            id: 1, // Ensure we are always updating the single config record
            ...sanitizedConfig
        });

    if (error) {
        console.error("Save error:", error.message || error.details);
        return { success: false, error: error.message || "Unknown error occurred" };
    }

    return { success: true };
}
