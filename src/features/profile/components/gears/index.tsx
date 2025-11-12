import { MonitorIcon } from "lucide-react";
import React from "react";

import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

import { GEARS } from "../../data/gears";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { GearItem } from "./gear-item";

export function Gears() {
  return (
    <Panel id="gears">
      <CollapsibleWithContext defaultOpen={false}>
        <CollapsibleTrigger asChild>
          <PanelHeader className="cursor-pointer transition-colors select-none hover:bg-muted/50">
            <div className="flex w-full items-center justify-between py-4">
              <div className="flex-1">
                <PanelTitle className="flex items-center gap-2">
                  <span>
                    Gears
                    <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
                      ({GEARS.length})
                    </sup>
                  </span>
                </PanelTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                  Productivity Tools, Gears i use to get my work done.
                </p>
              </div>
              <div
                className="ml-4 shrink-0 text-muted-foreground [&_svg]:size-5"
                aria-hidden
              >
                <CollapsibleChevronsIcon />
              </div>
            </div>
          </PanelHeader>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
          <div className="space-y-0 pr-2 pb-4 pl-4">
            {GEARS.map((gear, index) => (
              <div
                key={gear.name}
                className={cn(
                  index !== GEARS.length - 1 && "border-b border-edge"
                )}
              >
                <GearItem gear={gear} />
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </CollapsibleWithContext>
    </Panel>
  );
}
