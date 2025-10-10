import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import { Blocks, Code2, Sparkles } from "lucide-react";
import { SignedIn } from "@clerk/nextjs";
import ThemeSelectorComponent from "./ThemeSelectorComponent";
import LanguageSelectorComponent from "./LanguageSelectorComponent";
import RunButtonComponent from "./RunButtonComponent";
import ProfileBtnComponent from "./HeaderProfileBtnComponent";

export default async function HeaderComponent() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const user = await currentUser(); // clerk user

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  });

  console.log({ convexUser });

  return (
    <div className="relative z-10">
      <div
        className="flex items-center lg:justify-between justify-center
        bg-gradient-to-r from-[#0F172A]/95 via-[#1E1B4B]/90 to-[#0F172A]/95 
        backdrop-blur-xl p-6 mb-4 rounded-lg
        border border-[#334155]/60 shadow-lg shadow-indigo-900/20"
      >
        {/* Left side (Logo + Navigation) */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div
              className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20
              rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
            />
            <div
              className="relative bg-gradient-to-br from-indigo-500 to-fuchsia-600 p-2 rounded-xl 
              ring-1 ring-fuchsia-500/40 group-hover:ring-indigo-400/60 transition-all"
            >
              <Blocks className="size-6 text-violet-200 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>

            <div className="flex flex-col">
              <span
                className="block text-lg font-semibold 
                bg-gradient-to-r from-indigo-300 via-fuchsia-400 to-pink-400
                text-transparent bg-clip-text"
              >
                ScriptSpace
              </span>
              <span className="block text-xs text-slate-400 font-medium">
                Interactive Code Editor
              </span>
            </div>
          </Link>

          <nav className="flex items-center space-x-1">
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg 
              text-slate-300 bg-slate-800/40 hover:bg-indigo-900/40
              border border-slate-700 hover:border-indigo-600
              transition-all duration-300 shadow-md overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10
                opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <Code2 className="w-4 h-4 relative z-10 text-indigo-300 group-hover:text-fuchsia-400 transition-transform transform group-hover:rotate-3" />
              <span
                className="text-sm font-medium relative z-10
                group-hover:text-fuchsia-300 transition-colors"
              >
                Snippets
              </span>
            </Link>
          </nav>
        </div>

        {/* Right side (Controls + Buttons) */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <ThemeSelectorComponent />
            <LanguageSelectorComponent
              hasAccess={Boolean(convexUser?.isPremium)}
            />
          </div>

          {!convexUser?.isPremium && (
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
                to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 
                transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
              <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                Premium
              </span>
            </Link>
          )}

          <SignedIn>
            <RunButtonComponent />
          </SignedIn>

          <div className="pl-3 border-l border-gray-800">
            <ProfileBtnComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
