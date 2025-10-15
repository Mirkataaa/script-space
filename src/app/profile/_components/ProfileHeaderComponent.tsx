import { Id } from "../../../../convex/_generated/dataModel";
import { UserResource } from "@clerk/types";

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
    console.log(userStats);
    console.log(userData);
    console.log(user);
    
  return <div>hello from profile header</div>;
}
