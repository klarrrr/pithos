"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SocialAuthButtons from "./SocialAuthButtons";
import Separator from "@/components/Separator";
import Image from "next/image";
import PithosLogo from "./PithosLogo";

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      // 1. Attempt login via Supabase first so we can track the attempt
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      // 2. Handle failure (increment attempts unconditionally)
      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          const { data: status } = await supabase.rpc("handle_failed_login", { login_email: email });

          if (status?.is_locked) {
            throw new Error(`Account is locked due to too many failed attempts (${status.login_attempts} total). Please contact support.`);
          } else if (status?.login_attempts) {
            const attemptsLeft = 3 - status.login_attempts;
            throw new Error(`Invalid credentials. You have ${attemptsLeft} attempt(s) left.`);
          }
        }
        throw error;
      }

      // 3. Even if password is correct, we must check if account was ALREADY locked 
      // from previous attempts before we let them in.
      const { data: isLocked } = await supabase.rpc("check_account_locked", { login_email: email });
      if (isLocked) {
        // If they managed to guess the password AFTER getting locked, we still block them
        // and we immediately sign them back out
        await supabase.auth.signOut();
        throw new Error("Account is locked. Even with the correct password, you must contact support to unlock it.");
      }

      // 4. Handle true success (correct password AND not locked)
      await supabase.rpc("reset_login_attempts", { login_email: email });

      router.push("/");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 items-center", className)} {...props}>

      <div className="flex items-center gap-3 text-4xl font-bold uppercase">
        <PithosLogo size={60} color="foreground" />
        <span className="font-inter tracking-wide text-foreground">PITHOS</span>
      </div>

      <Card className="w-full">
        <CardHeader>
          <Link href="/" className="text-xs text-muted-foreground hover:underline w-fit mb-4 block">
            &lt; Return
          </Link>
          <div className="flex flex-col gap-2 items-start">
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} noValidate>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>

                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link
                  href="/auth/forgot-password"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              {error && (
                <div className=" rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-700 dark:bg-red-950 dark:text-red-100">
                  {error}
                </div>
              )}              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
            <Separator />
            <SocialAuthButtons />
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
