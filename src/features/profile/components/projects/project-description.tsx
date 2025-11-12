import React from "react";

import { Markdown } from "@/components/markdown";
import { Prose } from "@/components/ui/typography";

interface ProjectDescriptionProps {
  description?: string;
}

export function ProjectDescription({ description }: ProjectDescriptionProps) {
  if (!description) return null;

  return (
    <Prose>
      <Markdown>{description}</Markdown>
    </Prose>
  );
}
