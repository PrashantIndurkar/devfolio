"use client";

import { LinkIcon } from "lucide-react";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

interface ProjectLinkButtonProps {
  link: string;
}

export function ProjectLinkButton({ link }: ProjectLinkButtonProps) {
  return (
    <SimpleTooltip content="Open Project Link">
      <a
        className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
        href={addQueryParams(link, UTM_PARAMS)}
        target="_blank"
        rel="noopener"
        onClick={(e) => e.stopPropagation()}
      >
        <LinkIcon className="pointer-events-none size-4" />
        <span className="sr-only">Open Project Link</span>
      </a>
    </SimpleTooltip>
  );
}

