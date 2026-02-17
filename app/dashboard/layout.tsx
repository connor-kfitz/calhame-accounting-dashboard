import DashboardSideNav from "@/components/nav/DashboardSideNav";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
    <SidebarProvider>
      <DashboardSideNav/>
      {children}
    </SidebarProvider>
	);
}
