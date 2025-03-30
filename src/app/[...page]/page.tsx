'use client';

import { builder } from '@builder.io/react';
import { BuilderComponent } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function CatchAllPage() {
  const [content, setContent] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Fetch content from Builder.io based on the current path
    builder
      .get('page', {
        userAttributes: {
          urlPath: pathname,
        },
      })
      .promise()
      .then((content) => {
        setContent(content);
      })
      .catch((error) => {
        console.error('Error fetching Builder.io content:', error);
      });
  }, [pathname]);

  return (
    <div className="w-full">
      <BuilderComponent
        model="page"
        content={content}
        data={{ 
          title: 'Builder.io Page',
          path: pathname 
        }}
      />
    </div>
  );
} 