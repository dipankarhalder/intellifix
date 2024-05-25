"use client";

import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton, InstagramLoginButton, LinkedInLoginButton, } from 'react-social-login-buttons';

export const SocialComponent = () => {
  return (
    <div className="flex flex-wrap justify-center btn-style my-1">
      <GoogleLoginButton />
      <FacebookLoginButton />
      <InstagramLoginButton />
      <LinkedInLoginButton />
      <GithubLoginButton />
    </div>
  )
}
