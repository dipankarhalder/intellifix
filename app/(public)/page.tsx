import Link from "next/link";
import { SigninComponent } from "@/components/compages/signin";
import { SocialComponent } from  "@/components/compages/social";

export default function SigninPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center mb-4">
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
      </div>
      <div className="grid gap-6">
        <SigninComponent />
        <div className="text-center text-sm mt-2">
          <p>Don’t have an account?  <Link href="/signup" className="font-medium underline hover:text-blue-700">Create now</Link></p>
        </div>
        <div className="relative mt-12">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground font-semibold text-xs">Or continue with</span>
          </div>
        </div>
        <SocialComponent />
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">By clicking continue, you agree to our&nbsp;
        <a className="font-medium underline hover:text-blue-700" href="/">Terms of Service</a> and&nbsp;
        <a className="font-medium underline hover:text-blue-700" href="/">Privacy Policy</a>.
      </p>
    </div>
  )
}
