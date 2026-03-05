import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-black p-6 md:p-10 text-white">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}