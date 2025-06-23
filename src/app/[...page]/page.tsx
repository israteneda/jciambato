"use client";

import { builder, BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { useEffect, useState } from "react";
import { usePathname, notFound } from "next/navigation";

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BuilderContent {
  id: string;
  name: string;
  data: Record<string, unknown>;
}

export default function CatchAllPage() {
  const isPreviewing = useIsPreviewing();
  const [content, setContent] = useState<BuilderContent | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    builder
      .get("page", {
        userAttributes: {
          urlPath: pathname,
        },
      })
      .promise()
      .then((content) => {
        setContent(content as BuilderContent | null);
      })
      .catch((error) => {
        console.error("Error fetching Builder.io content:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pathname]);

  if (!loading && !content && !isPreviewing) {
    notFound();
  }

  return (
    <div className="w-full">
      {content && (
        <BuilderComponent
          content={content}
          data={{
            title: "Builder.io Page",
            path: pathname,
          }}
          model="page"
        />
      )}
    </div>
  );
}
