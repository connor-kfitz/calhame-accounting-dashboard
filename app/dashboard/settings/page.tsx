import DashboardHeader from "@/components/shared/DashboardHeader";
import UpdateProfileForm from "@/components/dashboard/settings/UpdateProfileForm";

export default function DashboardSettingsPage() {
  return (
    <main className="w-full overflow-y-auto p-4 lg:p-8">
      <DashboardHeader title="Settings" description="Manage your account settings"/>
      <div className="flex flex-col gap-6">
        <UpdateProfileForm/>
      </div>
    </main>
  );
}
