import Link from "next/link";
import { login_page, register_page } from "@/lib/router";
import { login_content } from "@/lib/content";
import { SigninComponent } from "@/components/compages/signin";
import { SocialComponent } from "@/components/compages/social";

export default function SigninPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center mb-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          {login_content.heading}
        </h1>
        <p className="text-sm text-muted-foreground">
          {login_content.sub_heading}
        </p>
      </div>
      <div className="grid gap-6">
        <SigninComponent />
        <div className="text-center text-sm mt-2">
          <p>
            {login_content.create_text}&nbsp;
            <Link 
              href={register_page} 
              className="font-medium underline hover:text-blue-700">
              {login_content.create_link}
            </Link>
          </p>
        </div>
        <div className="relative mt-12">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground font-semibold text-xs">
              {login_content.continue}
            </span>
          </div>
        </div>
        <SocialComponent />
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground leading-6">
        {login_content.footer_text}&nbsp;
        <Link 
          className="font-medium underline hover:text-blue-700" 
          href={login_page}>
          {login_content.terms}
        </Link>&nbsp;
        {login_content.and}&nbsp;
        <Link 
          className="font-medium underline hover:text-blue-700" 
          href={login_page}>
          {login_content.privacy}
        </Link>.
      </p>
    </div>
  )
}
