// src/components/blur-fade-text.tsx
"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

export function BlurFadeText({
  delay,
  className,
  yOffset,
  children,
}: {
  delay: number;
  className: string;
  yOffset: number;
  children: React.ReactNode;
}) {
  return (
    <BlurFade delay={delay} className={className} yOffset={yOffset}>
      {children}
    </BlurFade>
  );
}
