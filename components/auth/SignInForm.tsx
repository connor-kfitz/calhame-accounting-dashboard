"use client";

import AuthHeader from "./AuthHeader";

import { SignIn } from "@clerk/nextjs";

export default function SignInForm() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6">
      <AuthHeader/>
      <SignIn/>
    </div>
  );
}
