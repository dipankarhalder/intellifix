import Link from "next/link";
import { login_page } from "@/lib/router";
import { register_content } from "@/lib/content";
import { SignupComponent } from "@/components/compages/signup";

export default function SignupPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center mb-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          {register_content.heading}
        </h1>
        <p className="text-sm text-muted-foreground">
          {register_content.sub_heading}
        </p>
      </div>
      <div className="grid gap-6">
        <SignupComponent />
      </div>
      <div className="text-center text-sm mt-4">
        <p>
          {register_content.footer_text}&nbsp;
          <Link 
            href={login_page} 
            className="font-medium underline hover:text-blue-700">
            {register_content.sign_link}
          </Link>
        </p>
      </div>
    </div>
  );
}
