import { UserIcon, Zap } from "lucide-react";
import { Id } from "../../../../convex/_generated/dataModel";
import { UserResource } from "@clerk/types";
import Image from "next/image";

interface ProfileHeaderProps {
  userStats: {
    totalExecutions: number;
    languagesCount: number;
    languages: string[];
    last24Hours: number;
    favLanguage: string;
    languageStats: Record<string, number>;
    mostStarredLanguage: string;
  };
  userData: {
    _id: Id<"users">;
    _creationTime: number;
    premiumSince?: number | undefined;
    lemonSqueezyCustomerId?: string | undefined;
    lemonSqueezyOrderId?: string | undefined;
    name: string;
    userId: string;
    email: string;
    isPremium: boolean;
  };
  user: UserResource | undefined;
}

export default function ProfileHeaderComponent({
  userStats,
  userData,
  user,
}: ProfileHeaderProps) {
  return (
    <div
      className="relative mb-8 bg-gradient-to-br from-[#12121a] to-[#1a1a2e] rounded-2xl p-8 border
     border-gray-800/50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />

      {/* user info */}
      <div className="relative flex items-center gap-8">
        <div className="relative group">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full 
          blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
          />
          <Image
            src={user!.imageUrl}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-800/50 relative z-10 group-hover:scale-105 transition-transform"
            width={24}
            height={24}
          />
          {userData.isPremium && (
            <div
              className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-purple-600 p-2
             rounded-full z-20 shadow-lg animate-pulse"
            >
              <Zap className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-white">{userData.name}</h1>
            {userData.isPremium && (
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium">
                Premium Member
              </span>
            )}
          </div>
          <p className="text-gray-400 flex items-center gap-2">
            <UserIcon className="w-4 h-4" />
            {userData.email}
          </p>
        </div>
      </div>
    </div>
  );
}
