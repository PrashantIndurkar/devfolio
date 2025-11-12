"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";

import { Tooltip } from "@/components/ui/tooltip-card";

interface ProjectTooltipWrapperProps {
  image?: string;
  imageDark?: string;
  children: React.ReactNode;
}

export function ProjectTooltipWrapper({
  image,
  imageDark,
  children,
}: ProjectTooltipWrapperProps) {
  const { resolvedTheme } = useTheme();

  // Determine which image to show based on theme
  const tooltipImage =
    resolvedTheme === "dark" && imageDark ? imageDark : image;

  // Create tooltip content if image exists
  const tooltipContent = tooltipImage ? (
    <Image
      src={tooltipImage}
      alt="Project preview"
      width={1400}
      height={1050}
      quality={90}
      className="block h-auto w-full max-w-[1400px] rounded-md"
      unoptimized
    />
  ) : null;

  if (tooltipContent) {
    return (
      <Tooltip content={tooltipContent} containerClassName="!block w-full">
        {children}
      </Tooltip>
    );
  }

  return <>{children}</>;
}
