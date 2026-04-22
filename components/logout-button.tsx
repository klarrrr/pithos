"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LogOut } from 'lucide-react';

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    // Use the global scope to ensure it logs out from everywhere, clearing session data properly
    await supabase.auth.signOut({ scope: 'local' });
    
    // Force a hard navigation instead of router.push to clear any lingering client-side state
    window.location.href = "/auth/login";
  };

  return <Button variant={'red_ghost'} className="justify-start items-center flex flex-row gap-4" onClick={logout}>
    <LogOut size={18} />
    Logout
  </Button>;
}
