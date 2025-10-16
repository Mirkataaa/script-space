"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "../../../convex/_generated/api";
import ProfileHeaderComponent from "./_components/ProfileHeaderComponent";
import NavigationHeaderComponent from "@/components/NavigationHeaderComponent";


export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const userStats = useQuery(api.codeExecutions.getUserStats, {
    userId: user?.id ?? "",
  });

  const userData = useQuery(api.users.getUser, {
    userId: user?.id ?? "",
  });

  if (!user && isLoaded) return router.push("/");
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavigationHeaderComponent />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* profile header */}

        {userStats && userData && (
          <ProfileHeaderComponent
            userStats={userStats}
            userData={userData}
            user={user}
          />
        )}
      </div>
    </div>
  );
}
