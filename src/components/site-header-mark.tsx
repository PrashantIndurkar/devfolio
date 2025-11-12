"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { USER } from "@/features/profile/data/user";

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};

function ProfilePhotoMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Image
      src={USER.avatar}
      alt={`${USER.displayName}'s avatar`}
      width={32}
      height={32}
      className="h-8 w-8 translate-y-2 rounded-full opacity-0 ring-1 ring-border ring-offset-2 ring-offset-background transition-[opacity,translate] duration-300 select-none data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
      data-visible={visible}
      fetchPriority="high"
    />
  );
}

function ProfilePhoto() {
  return (
    <Image
      src={USER.avatar}
      alt={`${USER.displayName}'s avatar`}
      width={32}
      height={32}
      className="h-8 w-8 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none"
      fetchPriority="high"
    />
  );
}

export function SiteHeaderMark() {
  const pathname = usePathname();
  const isHome = ["/", "/index"].includes(pathname);
  return isHome ? <ProfilePhotoMotion /> : <ProfilePhoto />;
}
