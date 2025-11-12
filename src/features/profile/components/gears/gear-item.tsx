import { ArrowUpRightIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import type { Gear } from "../../types/gears";

export function GearItem({
  className,
  gear,
}: {
  className?: string;
  gear: Gear;
}) {
  return (
    <a
      className={cn("group/gear flex items-center py-2 pr-2", className)}
      href={gear.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex-1 pl-4">
        <h3 className="leading-snug font-medium text-balance underline-offset-4 group-hover/gear:underline">
          {gear.name}
        </h3>
      </div>

      <ArrowUpRightIcon
        className="size-4 shrink-0 text-muted-foreground"
        aria-hidden
      />
    </a>
  );
}
