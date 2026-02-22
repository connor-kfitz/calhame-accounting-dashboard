"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useUpdateProfile } from "@/hooks/useUsers";
import { UpdateProfileForm } from "@repo/shared";

interface ProfileSettingsProps {
  initialData: UpdateProfileForm;
}

export default function ProfileSettings({ initialData }: ProfileSettingsProps) {
  const { updateProfile, isLoading: isSaving } = useUpdateProfile();

  const [form, setForm] = useState<UpdateProfileForm>(initialData);

  async function handleSave(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateProfile({ company: form.company });
  }

  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground">Company</CardTitle>
        <CardDescription className="text-muted-foreground">
          Update your company information
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <form onSubmit={handleSave} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="settings-company" className="text-foreground">Company name</Label>
            <Input 
              id="settings-company" 
              name="company" 
              value={form.company} 
              onChange={(e) => setForm({ company: e.target.value })} 
            />
          </div>
          <Separator className="my-2"/>
          <div className="flex justify-end">
            <Button type="submit" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Spinner className="mr-2"/>
                  Saving...
                </>
              ) : (
                "Save changes"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
