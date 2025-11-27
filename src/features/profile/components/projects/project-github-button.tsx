"use client";

import { Github } from "lucide-react";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

interface ProjectGithubButtonProps {
  githubLink: string;
}

export function ProjectGithubButton({ githubLink }: ProjectGithubButtonProps) {
  return (
    <SimpleTooltip content="View Source Code on GitHub">
      <a
        className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
        href={addQueryParams(githubLink, UTM_PARAMS)}
        target="_blank"
        rel="noopener"
        onClick={(e) => e.stopPropagation()}
      >
        <Github className="pointer-events-none size-4" />
        <span className="sr-only">View Source Code on GitHub</span>
      </a>
    </SimpleTooltip>
  );
}

