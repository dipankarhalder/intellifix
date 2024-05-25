import Link from "next/link";
import { SignupComponent } from "@/components/compages/signup";

export default function SignupPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center mb-4">
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
      </div>
      <div className="grid gap-6">
        <SignupComponent />
      </div>
      <div className="text-center text-sm mt-4">
        <p>If you have already account. <Link href="/" className="font-medium underline hover:text-blue-700">Sign in now</Link></p>
      </div>
    </div>
  );
}
