import { useState } from "react";

interface UpdateProfileReturn {
  updateProfile: (data: UpdateProfileForm) => Promise<void>;
  isLoading: boolean;
  error: string;
}

export function useUpdateProfile(): UpdateProfileReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const updateProfile = async (data: UpdateProfileForm) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const result = await response.json();
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to update profile";
      setError(errorMessage);
      console.error("Error updating profile:", err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }

  return { updateProfile, isLoading, error }
}
