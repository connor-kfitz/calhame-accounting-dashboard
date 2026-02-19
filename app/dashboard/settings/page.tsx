import DashboardHeader from "@/components/shared/DashboardHeader";
import ProfileSettings from "@/components/dashboard/settings/ProfileSettings";

import { auth } from "@clerk/nextjs/server";

export default async function DashboardSettingsPage() {
  const { userId: clerkId } = await auth();
  
  if (!clerkId) return null;
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const profileResponse = await fetch(`${baseUrl}/api/users/${clerkId}`, {
    cache: 'no-store'
  });

  const profileData = await profileResponse.json();

  return (
    <main className="w-full overflow-y-auto p-4 lg:p-8">
      <DashboardHeader title="Settings" description="Manage your account settings"/>
      <div className="flex flex-col gap-6">
        <ProfileSettings initialData={profileData}/>
      </div>
    </main>
  );
}
