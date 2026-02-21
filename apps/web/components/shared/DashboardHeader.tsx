"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

interface DashboardHeaderProps {
  title: string;
  description: string;
}

export default function DashboardHeader({ title, description }: DashboardHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-start">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground mr-auto">{title}</h1>
        <UserButton/>
        <SidebarTrigger className="ml-2" variant="outline"/>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
 