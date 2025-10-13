"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import NavigationHeaderComponent from "@/components/NavigationHeaderComponent";
import SnippetsPageSkeletonComponent from "./_components/SnippetsPageSkeletonComponent";

export default function SnippetsPage() {
  const snippets = useQuery(api.snippets.getSnippets);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

  if (true) {
    return (
      <div className="min-h-screen">
        <NavigationHeaderComponent />
        <SnippetsPageSkeletonComponent />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavigationHeaderComponent />

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* hero seciton */}
      </div>
    </div>
  );
}
