"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "../AuthProvider";
import Image from "next/image";
import { useState, useEffect } from "react";

// This component is used in the header of the seller dashboard to show the user's avatar and provide links to account settings, or show sign in/up buttons if not authenticated.

export function AuthButton() {
  const { user, loading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Still show loading state during SSR + initial client render
  if (loading || !mounted) {
    return <div className="h-8 w-20 animate-pulse bg-muted rounded" />;
    // or return null; most aggressive (no mismatch possible)
    // or a skeleton avatar + button placeholder TODO: nalang
  }

  const user_avatar = user?.user_metadata?.avatar_url ?? "";
  const user_avatar_size = 28;

  return user ? (
    <div className="flex items-center gap-4 text-white">
      {user_avatar ? (
        <Link href={'/seller/account'}>
          <Image
            src={user_avatar}
            width={user_avatar_size}
            height={user_avatar_size}
            className="rounded-full hover:cursor-pointer"
            alt={user.email ?? "User avatar"}
          />
        </Link>
      ) : (
        // fallback avatar / initials
        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
          {user.email?.[0]?.toUpperCase() ?? "?"}
        </div>
      )}
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant="default">
        <Link href="/auth/login">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant="outline">
        <Link href="/auth/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}