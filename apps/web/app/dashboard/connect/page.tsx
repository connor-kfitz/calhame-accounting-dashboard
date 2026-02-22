import DashboardHeader from "@/components/shared/DashboardHeader";
import AccountingProviderConnect from "@/components/dashboard/connect/AccountingProviderConnect";

export default function DashboardConnectPage() {
  return (
    <main className="w-full overflow-y-auto p-4 lg:p-8">
      <DashboardHeader title="Connect" description="Connect and sync your accounting providers"/>
      <div className="flex flex-col gap-6">
        <AccountingProviderConnect provider="quickbooks"/>
      </div>
    </main>
  );
}
