import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Prashant",
  lastName: "Indurkar",
  displayName: "Prashant Indurkar",
  username: "prashantindurkar",
  gender: "male",
  pronouns: "he/him",
  bio: "Design Engineer",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Frontend Engineer",
    "Design Engineer",
    "Open Source Contributor",
  ],
  address: "Nanded, Maharashtra, India",
  phoneNumber: "KzkxOTI4NDM0MzgwOA==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "cHJhc2hhbnRpbmR1cmthcnJAZ21haWwuY29t", // base64 encoded
  website: "https://prashantindurkar.in",
  jobTitle: "Design Engineer",
  // jobs: [
  //   {
  //     title: "Senior Frontend Developer & UI Design Lead",
  //     company: "-",
  //     website: "https://simplamo.com?ref=IN-926722",
  //   },
  //   {
  //     title: "Founder",
  //     company: "Quaric",
  //     website: "https://quaric.com",
  //   },
  // ],
  about: `
I’ve been a Design Engineer for over 3 years, working mainly with SolidJS, React, TypeScript, Next.js, and more. Passionate about what I do, I get deeply involved in every project, blending design, pixel-perfect detail, and purpose into everything I create.

I approach my work with devotion and gratitude — a way to build with care and meaning.

Right now, I’m exploring UI components from the inside out — designing them from their core logic to polished, standalone interfaces. In my spare time, I love experimenting with new UI patterns, learning backend technologies, and working on personal projects that inspire creativity and growth.
  `,
  avatar: "/img/profile.jpg",
  ogImage: "/img/portfolio-light-ss.png",
  namePronunciationUrl: "/audio/PrashantIndurkar.m4a",
  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2025-11-10", // YYYY-MM-DD
};
