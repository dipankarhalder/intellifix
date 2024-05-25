import { SignupComponent } from "@/components/compages/signup";

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center mb-4">
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
      </div>
      <div className="grid gap-6">
        <SignupComponent />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground font-semibold text-xs">Or continue with</span>
          </div>
        </div>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">By clicking continue, you agree to our&nbsp;
        <a className="font-medium" href="/terms">Terms of Service</a> and&nbsp;
        <a className="font-medium" href="/privacy">Privacy Policy</a>.
      </p>
    </div>
  )
}
