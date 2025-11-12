import type React from "react";

export type SocialLink = {
  /** Icon image URL (absolute or path under /public) or React component shown beside the title. */
  icon: string | React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  /** Optional handle/username or subtitle displayed under the title. */
  description?: string;
  /** External profile URL opened when the item is clicked. */
  href: string;
  /** Whether to apply rounded-xl border to the icon. */
  rounded?: boolean;
};
