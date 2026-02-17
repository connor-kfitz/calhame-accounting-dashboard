import DashboardHeader from "@/components/shared/DashboardHeader";
import Connect from "@/components/dashboard/Connect";

export default function DashboardPage() {
  return (
    <main className="w-full overflow-y-auto p-4 lg:p-8">
      <DashboardHeader title="Dashboard" description="Overview of your financial performance"/>
      <div className="flex flex-col gap-6">
        <Connect/>
      </div>
    </main>
  );
}
