import Image from "next/image";
import React from "react";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

// Map tech keys to actual icon filenames
const ICON_MAP: Record<
  string,
  { light?: string; dark?: string; default: string }
> = {
  typescript: { default: "/img/tech/TypeScriptIcon.svg" },
  js: { default: "/img/tech/JavaScriptIcon.svg" },
  python: { default: "/img/tech/Pythonlogo.svg" },
  nodejs: { default: "/img/tech/Node.jsIcon.svg" },
  react: { default: "/img/tech/ReactIcon.svg" },
  nextjs2: {
    dark: "/img/tech/Next.jsDarkIcon.svg",
    default: "/img/tech/Next.jsDarkIcon.svg",
  },
  tailwindcss: { default: "/img/tech/TailwindCSSIcon.svg" },
  "shadcn-ui": {
    light: "/img/tech/ShadcnUILight.svg",
    dark: "/img/tech/ShadcnUIDarkIcon.svg",
    default: "/img/tech/ShadcnUIDarkIcon.svg",
  },
  radixui: {
    light: "/img/tech/RadixUILight.svg",
    dark: "/img/tech/RadixUIDarkIcon.svg",
    default: "/img/tech/RadixUIDarkIcon.svg",
  },
  motion: { default: "/img/tech/MotionIcon.svg" },
  tanstack: {
    light: "/img/tech/Tanstack Light Icon.svg",
    dark: "/img/tech/TanstackDarkIcon.svg",
    default: "/img/tech/TanstackDarkIcon.svg",
  },
  redux: { default: "/img/tech/ReduxIcon.svg" },
  "react-router": {
    dark: "/img/tech/ReactRouterDark.svg",
    default: "/img/tech/ReactRouterDark.svg",
  },
  git: { default: "/img/tech/GitIcon.svg" },
  docker: { default: "/img/tech/DockerIcon.svg" },
  mysql: { default: "/img/tech/MySQLIcon.svg" },
  mongodb: { default: "/img/tech/MongoDBIcon.svg" },
  redis: { default: "/img/tech/RedisIcon.svg" },
  figma: { default: "/img/tech/FigmaIcon.svg" },
  solidjs: { default: "/img/tech/SolidJSLogo.svg" },
  svelte: { default: "/img/tech/SvelteLogo.png" },
  zagjs: { default: "/img/tech/zagJs.png" },
  ark: { default: "/img/tech/ark.png" },
};

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />

          <MarqueeContent>
            {TECH_STACK.map((tech) => {
              const iconConfig = ICON_MAP[tech.key];
              if (!iconConfig) return null;

              return (
                <MarqueeItem key={tech.key} className="mx-4 flex shrink-0">
                  <SimpleTooltip content={tech.title}>
                    <a
                      href={tech.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={tech.title}
                      className="flex items-center justify-center transition-opacity hover:opacity-80"
                    >
                      {tech.theme && (iconConfig.light || iconConfig.dark) ? (
                        <>
                          {iconConfig.light ? (
                            <Image
                              src={iconConfig.light}
                              alt={`${tech.title} light icon`}
                              width={32}
                              height={32}
                              className="hidden [html.light_&]:block"
                              unoptimized
                            />
                          ) : (
                            <Image
                              src={iconConfig.default}
                              alt={`${tech.title} icon`}
                              width={32}
                              height={32}
                              className="hidden [html.light_&]:block"
                              unoptimized
                            />
                          )}
                          {iconConfig.dark ? (
                            <Image
                              src={iconConfig.dark}
                              alt={`${tech.title} dark icon`}
                              width={32}
                              height={32}
                              className="hidden [html.dark_&]:block"
                              unoptimized
                            />
                          ) : (
                            <Image
                              src={iconConfig.default}
                              alt={`${tech.title} icon`}
                              width={32}
                              height={32}
                              className="hidden [html.dark_&]:block"
                              unoptimized
                            />
                          )}
                        </>
                      ) : (
                        <Image
                          src={iconConfig.default}
                          alt={`${tech.title} icon`}
                          width={32}
                          height={32}
                          unoptimized
                        />
                      )}
                      <span className="sr-only">{tech.title}</span>
                    </a>
                  </SimpleTooltip>
                </MarqueeItem>
              );
            })}
          </MarqueeContent>
        </Marquee>
      </PanelContent>
    </Panel>
  );
}
