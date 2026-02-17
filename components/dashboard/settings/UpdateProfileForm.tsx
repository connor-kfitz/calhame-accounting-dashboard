"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function UpdateProfileForm() {

  const [form, setForm] = useState<UpdateProfileForm>({
    name: "Connor Fitzsimmons",
    email: "connorkfitzsimmons@fitzsystems.ca",
    company: "Fitzsystems"
  });

  const [isSaving, setIsSaving] = useState(false);

  async function handleSave(e: React.SyntheticEvent<HTMLFormElement>) {
    // Todo: Integrate with Clerk
    e.preventDefault();
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 700));
    setIsSaving(false);
  }

  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground">Profile</CardTitle>
        <CardDescription className="text-muted-foreground">
          Update your personal information
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <form onSubmit={handleSave} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="settings-name" className="text-foreground">Full name</Label>
              <Input id="settings-name" name="name" value={form.name} onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}/>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="settings-email" className="text-foreground">Email</Label>
              <Input id="settings-email" name="email" value={form.email} onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}/>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="settings-company" className="text-foreground">Company name</Label>
            <Input id="settings-company" name="company" value={form.company} onChange={(e) => setForm(prev => ({ ...prev, company: e.target.value }))}/>
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
