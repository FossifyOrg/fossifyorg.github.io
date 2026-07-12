export type FaqItem = {
  category: "install" | "privacy" | "support" | "contribute";
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
};

export const faqItems: FaqItem[] = [
  {
    category: "install",
    question: "Where can I install Fossify apps?",
    answer:
      "Each app page links to its available Google Play and F-Droid listings. GitHub is used for source, release notes, and issue history rather than as a general app store.",
    links: [
      { label: "Browse apps", href: "/apps/" },
      { label: "Install guide", href: "/install/" },
    ],
  },
  {
    category: "install",
    question: "Why can stores show different versions?",
    answer:
      "Google Play and F-Droid publish releases on their own schedules, while the Releases page follows the latest GitHub release or tag.",
    links: [{ label: "Releases", href: "/updates/" }],
  },
  {
    category: "install",
    question: "What do Stable and Beta mean?",
    answer:
      "Stable means the app is published for general use. Beta means it is published while active testing and development are still under way.",
    links: [{ label: "Apps", href: "/apps/" }],
  },
  {
    category: "install",
    question: "Can I switch between Play and F-Droid?",
    answer:
      "Fossify uses the same package name and signing key for Google Play and F-Droid releases. You can install the destination store's copy over the existing app when it offers the same or a newer version, so no uninstall or data reset is needed. Release timing can differ between stores.",
    links: [{ label: "Changing stores", href: "/install/#switching" }],
  },
  {
    category: "privacy",
    question: "Do Fossify apps send data to Fossify?",
    answer:
      "Fossify apps contain no advertising, do not track users, and do not send app data or usage records to Fossify. An app can still pass data to a carrier, account provider, share target, or storage service when you choose a feature that uses it.",
    links: [{ label: "App policies", href: "/policy/" }],
  },
  {
    category: "privacy",
    question: "Why do the apps need Android permissions?",
    answer:
      "Permissions provide access to the Android data or system service needed for a feature, such as photos, calendars, contacts, calls, messages, storage, microphone, or camera. Each app page and policy lists the relevant access.",
    links: [{ label: "Browse apps", href: "/apps/" }],
  },
  {
    category: "support",
    question: "Where should I report a bug?",
    answer:
      "Report an app bug in that app's issue tracker. Include the app version, Android version, device model, install source, and steps to reproduce it. Use Discussions for questions or problems involving several apps.",
    links: [{ label: "Help guide", href: "/support/" }],
  },
  {
    category: "support",
    question: "How should I report a security issue or private matter?",
    answer:
      "Do not post personal information or details of an unpublished security issue in a public issue. Contact Fossify through the private email route on the Help page.",
    links: [{ label: "Private contact", href: "/support/#private-contact" }],
  },
  {
    category: "contribute",
    question: "Where are translations managed?",
    answer:
      "App translations are managed in Hosted Weblate. It contains the current strings, language progress, comments, and review tools.",
    links: [{ label: "Translations", href: "/translations/" }],
  },
  {
    category: "contribute",
    question: "Can I open a code pull request?",
    answer:
      "Read the affected repository's contribution guidance and check its open issues before starting work.",
    links: [{ label: "Contribute", href: "/contribute/" }],
  },
];
