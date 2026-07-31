export const site = {
  name: "Fossify",
  title: "Fossify - open-source Android apps",
  description:
    "Open-source Android apps for gallery, calendar, files, documents, messages, phone, notes, camera, music, and more.",
  url: "https://www.fossify.org",
  brandColor: "#216e39",
  email: "hello@fossify.org",
  github: "https://github.com/FossifyOrg",
  discussions: "https://github.com/orgs/FossifyOrg/discussions",
  issues: "https://github.com/FossifyOrg/General-Discussion/issues",
  websiteIssues: "https://github.com/FossifyOrg/fossifyorg.github.io/issues",
  translations: "https://hosted.weblate.org/engage/fossify/",
  sponsor: "https://github.com/sponsors/FossifyOrg",
  reddit: "https://www.reddit.com/r/Fossify/",
  telegram: "https://t.me/Fossify",
};

export const externalProfiles = [
  site.github,
  site.translations,
  site.reddit,
  site.telegram,
];

export const navItems = [
  { label: "Apps", href: "/apps/" },
  { label: "Install", href: "/install/" },
  { label: "Help", href: "/support/" },
  { label: "Contribute", href: "/contribute/" },
  { label: "Fund", href: "/donate/" },
  { label: "About", href: "/about/" },
];

export const donateLinks = [
  { label: "GitHub Sponsors", href: "https://github.com/sponsors/FossifyOrg" },
  { label: "Patreon", href: "https://www.patreon.com/naveen3singh" },
  { label: "PayPal", href: "https://paypal.me/naveen3singh" },
  { label: "Liberapay", href: "https://liberapay.com/naveensingh" },
  { label: "Open Collective", href: "https://opencollective.com/fossify" },
];

export const cryptoDonations = [
  {
    label: "Bitcoin",
    network: "Bitcoin network",
    value: "bc1q5flmuh5f3canqza07cfekjn64p2aqvd2w7pnn3",
  },
  {
    label: "Ethereum",
    network: "Ethereum network",
    value: "0x9354fC372BC3BdA58766a8a9Fabadf77A76CdE01",
  },
  {
    label: "Monero",
    network: "Monero network",
    value:
      "48FkVUcJ7AGeBMR4SC4J7QU5nAt6YNwKZWz6sGDT1s5haEY7reZtJr5CniXLaQzTzGAuZNoc83BQAcETHw1d3Lkn8AAf1XF",
  },
  {
    label: "Tron",
    network: "TRON network",
    value: "TGi4VpD1D9A9ZvyP9d3aVowwzMSvev2hub",
  },
];

export type PolicyDetails = {
  privacy: string;
  dataAccess: string[];
  permissionsIntro?: string;
  permissionSummary: string[];
  permissionsFooter?: string;
  dataLeavingDevice: string;
  otherServices?: string;
  storageAndDeletion?: string[];
};

export type PolicyRoute = {
  slug: string;
  appName: string;
  updated: string;
  unlisted?: boolean;
  details?: PolicyDetails;
};

export const policyRoutes: PolicyRoute[] = [
  { slug: "calendar", appName: "Fossify Calendar", updated: "July 12, 2026" },
  { slug: "camera", appName: "Fossify Camera", updated: "July 12, 2026" },
  { slug: "clock", appName: "Fossify Clock", updated: "July 12, 2026" },
  { slug: "contacts", appName: "Fossify Contacts", updated: "July 12, 2026" },
  {
    slug: "documents",
    appName: "Fossify Documents",
    updated: "July 31, 2026",
    details: {
      privacy:
        "The app works with documents chosen through Android's file picker and keeps its own history, favorites, folder list, and settings locally.",
      dataAccess: [
        "PDF, DOCX, text, Markdown, CSV, TSV, and HTML documents opened through Android or chosen with the system file picker.",
        "Document names, locations, recent activity, favorites, and selected folders used to organize those documents.",
        "App preferences such as appearance, sorting, and viewing options.",
      ],
      permissionsIntro:
        "The app does not request broad access to device storage. File access is limited to documents and folders selected through the system file picker:",
      permissionSummary: [
        "Read access to documents and folders selected through Android's file picker.",
        "Write access when a supported document is edited or a new document is created.",
        "Persisted access to selected folders so they remain available after the app restarts.",
      ],
      permissionsFooter:
        "Selected access can be removed in the app or by clearing the app's storage. Features that use a document or folder stop working when access is unavailable.",
      dataLeavingDevice:
        "A document is passed to another app or system service only when the user chooses Share, Open with, or Print. The selected app, storage provider, or print service then handles that document.",
      otherServices:
        "Android's file picker, storage providers, backup and device-transfer services, print services, and apps selected through Share or Open with operate under their own terms and privacy policies.",
      storageAndDeletion: [
        "Recent activity, favorites, selected folder references, and app settings remain in app storage until they are changed, cleared through the app or Android settings, or removed by uninstalling the app.",
        "Clearing the app's records does not delete the original documents. The files remain with their storage provider and can still be edited or deleted through that provider or another app.",
        "Android backup or device transfer may include app settings and local app records according to the device's backup settings.",
      ],
    },
  },
  {
    slug: "filemanager",
    appName: "Fossify File Manager",
    updated: "July 12, 2026",
  },
  { slug: "gallery", appName: "Fossify Gallery", updated: "July 12, 2026" },
  { slug: "home", appName: "Fossify Launcher", updated: "July 12, 2026" },
  { slug: "keyboard", appName: "Fossify Keyboard", updated: "July 12, 2026" },
  { slug: "math", appName: "Fossify Calculator", updated: "July 12, 2026" },
  {
    slug: "messages",
    appName: "Fossify Messages",
    updated: "July 12, 2026",
  },
  {
    slug: "musicplayer",
    appName: "Fossify Music Player",
    updated: "July 12, 2026",
  },
  { slug: "notes", appName: "Fossify Notes", updated: "July 12, 2026" },
  { slug: "paint", appName: "Fossify Paint", updated: "July 12, 2026" },
  { slug: "phone", appName: "Fossify Phone", updated: "July 12, 2026" },
  {
    slug: "thankyou",
    appName: "Fossify Thank You",
    updated: "July 12, 2026",
  },
  {
    slug: "voicerecorder",
    appName: "Fossify Voice Recorder",
    updated: "July 12, 2026",
  },
];
