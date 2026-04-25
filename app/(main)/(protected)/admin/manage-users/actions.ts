"use server";

import { createAdminClient } from "@/lib/supabase/admin";

export async function unlockUser(userId: string) {
    const supabase = createAdminClient();
    
    try {
        const { error } = await supabase
            .from('users')
            .update({ 
                login_attempts: 0, 
                is_locked: false 
            })
            .eq('id', userId);

        if (error) throw error;
        
        return { success: true };
    } catch (error: any) {
        console.error("Error unlocking user:", error);
        return { success: false, error: error.message };
    }
}
