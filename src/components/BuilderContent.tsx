'use client';

import { BuilderComponent } from '@builder.io/react';

interface BuilderContentProps {
  content: any;
  pathname: string;
}

export default function BuilderContent({ content, pathname }: BuilderContentProps) {
  if (!content) {
    return <div className="w-full h-[50vh] flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="w-full relative">
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