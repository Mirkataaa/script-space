"use client";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import SnippetLoadingSkeletenComponent from "../_components/SnippetLoadingSkeletenComponent";

export default function SnippetsDetailPagePage() {
  const snippetId = useParams().id;

  const snippet = useQuery(api.snippets.getSnippetById, {
    snippetId: snippetId as Id<"snippets">,
  });
  // const comments = ?

  if (snippet === undefined) {
    return <SnippetLoadingSkeletenComponent />;
  }

  return <div>hi from details</div>;
}
