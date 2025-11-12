"use client";

import dayjs from "dayjs";
import { MapPinIcon } from "lucide-react";

import { SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { USER } from "@/features/profile/data/user";

/**
 * Last updated date - set this manually after deploying code changes.
 * Use ISO format for clarity and future automation.
 * Example: "2024-07-20"
 */
const LAST_UPDATED = "12-Nov-2025"; // Update this value on production changes

export function SiteFooter() {
  const formattedLastUpdated = dayjs(LAST_UPDATED).format("MMM D, YYYY");
  const currentTime = dayjs().format("h:mm A");

  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge md:max-w-3xl">
        {/* Signature Text */}
        <div className="flex justify-center px-4 py-10">
          <span
            className="-rotate-6 text-4xl font-normal text-muted-foreground"
            style={{ fontFamily: "var(--font-signature)" }}
          >
            {USER.displayName}
          </span>
        </div>

        {/* Separator Line */}
        <div className="w-full border-t border-edge" />

        {/* Footer Credits */}
        <p className="mb-1 px-4 pt-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Design inspired by{" "}
          <a
            className="link"
            href="https://x.com/iamncdai"
            target="_blank"
            rel="noopener"
          >
            ncdai
          </a>
          &apos;s original work. Built by{` `}
          <a
            className="link"
            href="https://x.com/prashant2weet"
            target="_blank"
            rel="noopener"
          >
            Prashant
          </a>
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Source code available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        {/* Separator Line */}
        <div className="w-full border-t border-edge" />

        {/* Last Updated and Location */}
        <div className="mt-2 flex w-full items-center justify-between px-4 pb-4 text-sm text-muted-foreground">
          {/* Left: Last Updated (codebase change) */}
          <div className="flex items-center gap-1.5">
            <MapPinIcon className="size-3.5 shrink-0" aria-hidden />
            <span>Last updated on {formattedLastUpdated}</span>
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
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}
