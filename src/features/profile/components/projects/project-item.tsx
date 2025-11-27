"use client";

import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Icons } from "@/components/icons";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";

import type { Project } from "../../types/projects";
import { ProjectGithubButton } from "./project-github-button";
import { ProjectLinkButton } from "./project-link-button";
import { ProjectTooltipWrapper } from "./project-tooltip-wrapper";

export function ProjectItem({
  className,
  project,
  description,
}: {
  className?: string;
  project: Project;
  description?: React.ReactNode;
}) {
  const { start, end } = project.period;
  const isOngoing = !end;

  // Shared trigger content
  const triggerContent = (
    <div className="flex w-full items-center justify-between">
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 leading-snug font-medium text-balance">
          {project.title}
        </h3>

        <dl className="text-sm text-muted-foreground">
          <dt className="sr-only">Period</dt>
          <dd className="flex items-center gap-0.5">
            <span>{start}</span>
            <span className="font-mono">—</span>
            {isOngoing ? (
              <>
                <InfinityIcon
                  className="size-4.5 translate-y-[0.5px]"
                  aria-hidden
                />
                <span className="sr-only">Present</span>
              </>
            ) : (
              <span>{end}</span>
            )}
          </dd>
        </dl>
      </div>
      <div className="ml-auto flex shrink-0 items-center gap-2">
        {project.githubLink && (
          <ProjectGithubButton githubLink={project.githubLink} />
        )}
        {project.link && <ProjectLinkButton link={project.link} />}

        <div
          className="shrink-0 text-muted-foreground [&_svg]:size-4"
          aria-hidden
        >
          <CollapsibleChevronsIcon />
        </div>
      </div>
    </div>
  );

  return (
    <CollapsibleWithContext defaultOpen={project.isExpanded} asChild>
      <div className={className}>
        <div className="flex w-full items-center hover:bg-accent2">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={32}
              height={32}
              quality={100}
              className="mx-4 flex size-6 shrink-0 select-none"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
              aria-hidden="true"
            >
              <Icons.project className="size-4" />
            </div>
          )}

          <div className="w-full flex-1 border-l border-dashed border-edge">
            <ProjectTooltipWrapper
              image={project.image}
              imageDark={project.imageDark}
            >
              <CollapsibleTrigger className="flex w-full items-center p-4 pr-2 text-left select-none">
                {triggerContent}
              </CollapsibleTrigger>
            </ProjectTooltipWrapper>
          </div>
        </div>

        <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="border-t border-edge shadow-inner">
            <div className="space-y-4 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
              {description}

              {project.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="flex">
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}
