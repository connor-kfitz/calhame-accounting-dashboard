"use client";

import AuthHeader from "./AuthHeader";

import { SignUp } from "@clerk/nextjs";

export default function SignUpForm() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6">
      <AuthHeader/>
      <SignUp forceRedirectUrl="/dashboard"/>
    </div>
  );
}
