"use client";

import dayjs from "dayjs";
import { MapPinIcon } from "lucide-react";

import { USER } from "@/features/profile/data/user";

import { Panel, PanelContent } from "./panel";

export function Signature() {
  const currentDate = dayjs().format("MMM D, YYYY");
  const currentTime = dayjs().format("h:mm A");

  return (
    <Panel id="signature">
      <PanelContent className="flex flex-col items-center space-y-1 py-2">
        {/* Signature Text */}
        <div className="flex justify-center">
          <div className="inline-flex rounded px-3">
            <span
              className="text-red text-4xl font-light"
              style={{ fontFamily: "var(--font-signature)" }}
            >
              Prashant Indurkar
            </span>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full border-t border-edge" />

        {/* Bottom Info */}
        <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
          {/* Left: Last Updated */}
          <div className="flex items-center gap-1.5">
            <MapPinIcon className="size-3.5 shrink-0" aria-hidden />
            <span>Last updated on {currentDate}</span>
          </div>

          {/* Right: Location and Time */}
          <div className="flex items-center gap-1.5">
            <span
              className="size-1.5 shrink-0 rounded-full bg-muted-foreground"
              aria-hidden
            />
            <span>
              {USER.address}, {currentTime}
            </span>
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
