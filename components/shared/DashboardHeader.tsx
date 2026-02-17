"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

interface DashboardHeaderProps {
  title: string;
  description: string;
}

export default function DashboardHeader({ title, description }: DashboardHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-start justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
        <SidebarTrigger/>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
 