import { Dancing_Script, Space_Mono } from "next/font/google";

export const fontSans = Space_Mono({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = Space_Mono({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSignature = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-signature",
});
