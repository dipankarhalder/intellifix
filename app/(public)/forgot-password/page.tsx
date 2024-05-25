import Link from "next/link";
import { login_page } from "@/lib/router";
import { forgot_content } from "@/lib/content";
import { ForgotPasswordComponent } from "@/components/compages/forgotpassword";

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center mb-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          {forgot_content.heading}
        </h1>
        <p className="text-sm text-muted-foreground leading-6">
          {forgot_content.sub_heading}
        </p>
      </div>
      <div className="grid gap-6">
        <ForgotPasswordComponent />
      </div>
      <div className="text-center text-sm mt-4">
        <p>
          <Link 
            href={login_page} 
            className="font-medium underline hover:text-blue-700">
            {forgot_content.forgot_link}
          </Link>
        </p>
      </div>
    </div>
  )
}
