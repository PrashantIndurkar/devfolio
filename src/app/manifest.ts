import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "/img/profile.jpg",
        type: "image/jpeg",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/img/profile.jpg",
        type: "image/jpeg",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/img/profile.jpg",
        type: "image/jpeg",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/img/profile.jpg",
        type: "image/jpeg",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "/img/portfolio-light-ss-mobile.png",
        type: "image/png",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "/img/portfolio-dark-ss-mobile.png",
        type: "image/png",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "/img/portfolio-dark-ss.png",
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      {
        src: "/img/portfolio-light-ss.png",
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  };
}
