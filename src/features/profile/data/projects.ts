import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "ocean-ui-component-library",
    title: "Ocean UI Component Library",
    period: {
      start: "11.2025",
    },
    link: "https://components.prashantindurkar.in",
    skills: [
      "SolidJS",
      "Solid-UI",
      "TypeScript",
      "TailwindCSS",
      "Ark UI",
      "Vue",
      "Svelte",
      "React",
      "Next.js",
      "Vercel",
      "ArchitectUI",
      "Component Library",
    ],
    description: `Ocean UI is a collection of Beautiful UI components for your favorite frameworks. 
  
- It supports almost all frameworks and libraries. Like React, Next.js, SolidJS, Vue, Svelte.
- Its build on top of Ark UI library.
- Its supports copy and paste code from the website to your project similar to shadcn/ui.
`,
    image: "/img/projects/ocean-ui.png",
    imageDark: "/img/projects/ocean-ui-dark.png",
    isExpanded: true,
  },
  {
    id: "shadcn-solid-landing-page",
    title: "shadcn landing page solidjs",
    period: {
      start: "11.2025",
      end: "11.2025",
    },
    link: "https://shadcn-solid-landing-page.vercel.app/",
    skills: ["SolidJS", "Solid-UI", "TypeScript", "TailwindCSS"],
    description: `This is a SolidJS conversion of the original landing page template.

- The original design and UI were created by [Leo Miranda](https://github.com/leoMirandaa/shadcn-landing-page) for multiple tech stacks (React, Next.js, Vue, Svelte). 
- This version has been converted for the SolidJS community. 
- It is open-source and free to use.`,
    image: "/img/projects/shadcn-landing-light.png",
    imageDark: "/img/projects/shadcn-landing-dark.png",
    isExpanded: true,
  },
  {
    id: "pure-beauty",
    title: "Beauty Tech E-Commerce",
    period: {
      start: "10.2022",
      end: "12.2023",
    },
    link: "https://pure-beauty.vercel.app/",
    skills: [
      "TypeScript",
      "Next.js",
      "Redux",
      "Redux-toolkit",
      "TailwindCSS",
      "Framer Motion",
      "Sanity.io",
    ],
    description: `Full-Stack Application with Next.js for the Front-End and Sanity.io as a Back-End. 
    
- It has 6+ pages including Home, Products, Product Details, Checkout, Stripe payment, and Order history page. 
- It's a Beauty Tech cosmetic eCommerce App.`,
    image: "/img/projects/pureBeauty.png",
  },
  {
    id: "spotify-ui-clone",
    title: "Spotify Desktop UI Clone",
    period: {
      start: "08.2022",
    },
    link: "https://spotify-ui-puce.vercel.app/",
    skills: [
      "React.js",
      "TailwindCSS",
      "React-icons",
      "Tailwind-Scrollbar",
      "Git & Github",
      "Vercel",
    ],
    description: `Clone are almost similar to the original sites achieved using TailwindCSS Grid Flex-box, Media Queries, and Configuration. 
    
- Everything is fully Responsive.`,
    image: "/img/projects/spotify.png",
  },
  {
    id: "movie-time",
    title: "Movie Time App to research about movies",
    period: {
      start: "09.2022",
      end: "09.2022",
    },
    link: "https://movie-time-navy.vercel.app/",
    skills: [
      "TypeScript",
      "Next.js",
      "React",
      "Redux",
      "TailwindCSS",
      "Vercel",
    ],
    description: `It's a movie time app. 
    
- It has a list of movies and their ratings and lot of details about movie. 
- It also has a search bar to search for movies. 
- Fun fact: this app is made with my friend to learn how real world app is made in team environment.`,
    image: "/img/projects/movieTime.png",
  },
  {
    id: "github-ui-clone",
    title: "Fully Responsive Github UI Clone",
    period: {
      start: "08.2022",
      end: "12.2022",
    },
    link: "https://github-repo-ui-clone.vercel.app/",
    skills: [
      "React.js",
      "TailwindCSS",
      "React-icons",
      "Tailwind-Scrollbar",
      "Git & Github",
      "Vercel",
    ],
    description: `Github Clone are almost similar to the original sites achieved using TailwindCSS Grid Flex-box, Media Queries, and Configuration. 
    
- Everything is fully Responsive.

- Its pixel perfect clone of the original site.`,
    image: "/img/projects/github.png",
  },
  {
    id: "ping-media",
    title:
      "Social Media for developers and designers (Not working on it anymore)",
    period: {
      start: "05.2024",
      end: "06.2024",
    },
    link: "https://ping-media.vercel.app/",
    skills: [
      "TypeScript",
      "NextJs",
      "React",
      "Prisma",
      "TailwindCSS",
      "Tanstack-query",
      "NextAuth",
    ],
    description: `Open-source full stack social network and job hunting platform for developers and designers to connect and have fun. 
    
- Designed and implemented a comprehensive Social Network website with robust login and register functionalities. 
- Ensured accurate error handling, data security, and privacy by integrating protected routes. 
- Optimized code structure by splitting it into reusable components, facilitating easy integration and maintenance across the project.
`,
    image: "/img/projects/pingMedia.png",
  },
  {
    id: "reddit-clone",
    title: "Full-stack Reddit clone",
    period: {
      start: "10.2022",
    },
    link: "https://reddit-ish.vercel.app/",
    skills: [
      "TypeScript",
      "NEXT.js",
      "React.js",
      "Recoil",
      "ChakraUI",
      "Firebase V9",
      "React-firebase-hook",
    ],
    description: `Performed CRUD operations. They can Join, Create Communities upVote/downVote posts. They can leave comments and delete them also. Authentication: Sign up with Google, Email & Password, & Forgot password.`,
    image: "/img/projects/reddit.png",
  },
];
