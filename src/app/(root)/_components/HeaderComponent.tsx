import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import { Blocks, Code2 } from "lucide-react";

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
      bg-[#B7B3A1]/80 backdrop-blur-xl p-6 mb-4 rounded-lg
      border border-[#D1CA98]/50 shadow-md"
      >
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div
              className="absolute -inset-2 bg-gradient-to-r from-[#F7F06D]/30 to-[#EDBF85]/30
            rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
            />
            <div
              className="relative bg-gradient-to-br from-[#D1CA98] to-[#B7B3A1] p-2 rounded-xl 
            ring-1 ring-[#EDBF85]/40 group-hover:ring-[#F7F06D]/60 transition-all"
            >
              <Blocks className="size-6 text-[#FFB140] transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>

            <div className="flex flex-col">
              <span
                className="block text-lg font-semibold 
              bg-gradient-to-r from-[#F7F06D] via-[#EDBF85] to-[#FFB140]
              text-transparent bg-clip-text"
              >
                ScriptSpace
              </span>
              <span className="block text-xs text-[#D1CA98]/80 font-medium">
                Interactive Code Editor
              </span>
            </div>
          </Link>

          <nav className="flex items-center space-x-1">
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg 
            text-[#B7B3A1] bg-[#D1CA98]/50 hover:bg-[#EDBF85]/30
            border border-[#B7B3A1]/70 hover:border-[#F7F06D]/50
            transition-all duration-300 shadow-lg overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#F7F06D]/20 to-[#FFB140]/20
              opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <Code2 className="w-4 h-4 relative z-10 text-[#D1CA98] group-hover:text-[#B7B3A1] transition-transform transform group-hover:rotate-3" />
              <span
                className="text-sm font-medium relative z-10
              group-hover:text-[#B7B3A1] transition-colors"
              >
                Snippets
              </span>
            </Link>
          </nav>
        </div>
      </div>


    </div>
  );
}
