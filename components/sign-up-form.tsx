"use client";

import { cn } from "@/lib/utils";
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
import { validatePassword, PASSWORD_RULES } from "@/lib/auth/password-rules";

export function SignUpForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const errors = validatePassword(value);
    setPasswordErrors(errors);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    const validationErrors = validatePassword(password);
    if (validationErrors.length > 0) {
      setError(`Password must contain: ${validationErrors.join(', ')}.`);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      router.push("/auth/login");
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
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} noValidate>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. m@example.com"
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
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                {password && (
                  <div className="mt-2 space-y-1 text-xs">
                    <div className={password.length >= PASSWORD_RULES.minLength ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                      {password.length >= PASSWORD_RULES.minLength ? "✓" : "✗"} At least {PASSWORD_RULES.minLength} characters
                    </div>
                    <div className={PASSWORD_RULES.requireUppercase && /[A-Z]/.test(password) ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                      {PASSWORD_RULES.requireUppercase && /[A-Z]/.test(password) ? "✓" : "✗"} At least 1 uppercase letter
                    </div>
                    <div className={PASSWORD_RULES.requireLowercase && /[a-z]/.test(password) ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                      {PASSWORD_RULES.requireLowercase && /[a-z]/.test(password) ? "✓" : "✗"} At least 1 lowercase letter
                    </div>
                    <div className={PASSWORD_RULES.requireNumber && /[0-9]/.test(password) ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                      {PASSWORD_RULES.requireNumber && /[0-9]/.test(password) ? "✓" : "✗"} At least 1 number
                    </div>
                    <div className={PASSWORD_RULES.requireSpecial && /[^A-Za-z0-9]/.test(password) ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                      {PASSWORD_RULES.requireSpecial && /[^A-Za-z0-9]/.test(password) ? "✓" : "✗"} At least 1 special character
                    </div>
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="repeat-password">Repeat Password</Label>
                </div>
                <Input
                  id="repeat-password"
                  type="password"
                  placeholder="Re-enter your password"
                  required
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              {error && (
                <div className=" rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-700 dark:bg-red-950 dark:text-red-100">
                  {error}
                </div>
              )}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating an account..." : "Sign up"}
              </Button>
            </div>
            <Separator />
            <SocialAuthButtons />
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
