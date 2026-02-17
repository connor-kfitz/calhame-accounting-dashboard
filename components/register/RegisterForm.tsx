"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

export function RegisterForm() {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    router.push("/dashboard");
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-6">

      {/* Logo and Title */}
      <div className="flex items-center justify-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <BookOpen className="h-5 w-5 text-primary-foreground"/>
        </div>
        <span className="text-xl font-semibold tracking-tight text-foreground">Calhame Accounting</span>
      </div>

      {/* Register Card */}
      <Card className="border-border shadow-sm">

        {/* Card Header */}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-foreground">Create an account</CardTitle>
          <CardDescription className="text-muted-foreground">
            Get started with your accounting dashboard
          </CardDescription>
        </CardHeader>

        {/* Form */}
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Full Name Input */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-foreground">Full name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Smith"
                required
                autoComplete="name"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                required
                autoComplete="email"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                required
                autoComplete="new-password"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="mt-2 w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create account"}
            </Button>

            {/* Login Link */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-foreground underline underline-offset-4 hover:text-accent">
                Sign in
              </Link>
            </p>

          </form>
        </CardContent>

      </Card>
      
    </div>
  );
}
