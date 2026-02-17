import DashboardHeader from "@/components/shared/DashboardHeader";

export default function DashboardPage() {
  return (
    <main className="w-full overflow-y-auto p-4 lg:p-8">
      <DashboardHeader title="Dashboard" description="Overview of your financial performance"/>
    </main>
  );
}
