import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://prashantindurkar.in",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Devfolio",
    href: "/",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
];

export const GITHUB_USERNAME = "prashantindurkar";
export const SOURCE_CODE_GITHUB_REPO = "PrashantIndurkar/devfolio";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/PrashantIndurkar/devfolio";

export const SPOTIFY_USERNAME = "h0zw2h4earqhkyv7le06o5038"; // Your Spotify username

export const UTM_PARAMS = {
  utm_source: "prashantindurkar.in",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
