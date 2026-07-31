export type StoreLinks = {
  github: string;
  play?: string;
  fdroid?: string;
  policy: string;
};

export type FossifyApp = {
  slug: string;
  repo: string;
  title: string;
  shortTitle: string;
  status: "Stable" | "Beta";
  category: "Everyday" | "Communication" | "Media" | "Utilities" | "Funding";
  packageName?: string;
  isFree?: boolean;
  tagline: string;
  summary: string;
  description: string;
  featureHeading: string;
  features: string[];
  privacy: string;
  dataAccess: string[];
  permissionSummary: string[];
  dataLeavingDevice: string;
  icon: string;
  featureImage?: string;
  screenshotLayout?: "phone" | "wide";
  screenshotSize?: {
    width: number;
    height: number;
  };
  screenshots: string[];
  screenshotCaptions?: string[];
  links: StoreLinks;
};

const github = (repo: string) => `https://github.com/FossifyOrg/${repo}`;
const play = (id: string) =>
  `https://play.google.com/store/apps/details?id=${id}`;
const fdroid = (id: string) => `https://f-droid.org/packages/${id}/`;
const appAsset = (slug: string, name: string) => `/assets/apps/${slug}/${name}`;

export const apps: FossifyApp[] = [
  {
    slug: "gallery",
    repo: "Gallery",
    title: "Fossify Gallery",
    shortTitle: "Gallery",
    status: "Stable",
    category: "Media",
    packageName: "org.fossify.gallery",
    tagline: "Local photo and video browsing.",
    summary:
      "Browse, organize, edit, hide, recover, and share local photos and videos.",
    description:
      "Browse albums, make basic edits, recover deleted media, manage hidden folders, and control EXIF details before sharing.",
    featureHeading: "Local albums and media tools",
    features: [
      "Local photo and video albums",
      "Editor tools for crop, rotate, resize, draw, and filters",
      "Hidden folders, app locking, recycle bin, and file recovery controls",
      "EXIF and metadata controls for sharing",
      "Theme and layout controls",
    ],
    privacy:
      "Gallery reads local media. Files stay on the device unless you share them.",
    dataAccess: [
      "Photos and videos available through Android media or storage access",
      "Album names, file paths, and media metadata used for browsing and editing",
      "Hidden-item and recycle-bin records created inside Gallery",
    ],
    permissionSummary: [
      "Photos and videos or storage access, depending on the Android version",
      "Media location when you choose to view location metadata",
      "Notifications for background media work",
      "Wallpaper access when you set an image as wallpaper",
      "Fingerprint access when biometric protection is selected",
    ],
    dataLeavingDevice:
      "Media leaves the device only when you use Android sharing or a storage or sync provider configured on the device.",
    icon: appAsset("gallery", "icon.webp"),
    featureImage: appAsset("gallery", "feature.webp"),
    screenshotSize: { width: 540, height: 1170 },
    screenshots: [
      appAsset("gallery", "screenshot-1.webp"),
      appAsset("gallery", "screenshot-2.webp"),
      appAsset("gallery", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["Album grid", "Photo viewer", "Photo editor"],
    links: {
      github: github("Gallery"),
      play: play("org.fossify.gallery"),
      fdroid: fdroid("org.fossify.gallery"),
      policy: "/policy/gallery.html",
    },
  },
  {
    slug: "calendar",
    repo: "Calendar",
    title: "Fossify Calendar",
    shortTitle: "Calendar",
    status: "Stable",
    category: "Everyday",
    packageName: "org.fossify.calendar",
    tagline: "Calendar events, reminders, and routines.",
    summary:
      "Plan events, reminders, widgets, holidays, and recurring schedules with local calendar data.",
    description:
      "Use offline views, recurring events, import/export, reminders, holidays, and home-screen widgets.",
    featureHeading: "Events, reminders, and calendar views",
    features: [
      "Day, week, month, year, and event-list views",
      "Recurring events, reminders, holidays, and celebrations",
      "Calendar import and export for portable data",
      "Custom widgets for schedules at a glance",
      "Color, theme, and display controls",
    ],
    privacy:
      "Event data follows the calendar storage and sync choices configured on the device.",
    dataAccess: [
      "Calendar events, reminders, and calendar-account information",
      "Contact information used for birthdays, anniversaries, or event participants",
      "Imported and exported calendar files when you choose those actions",
    ],
    permissionSummary: [
      "Calendar read and write access",
      "Contacts access for contact-based events",
      "Notifications, alarms, wake locks, and restart handling for reminders",
      "Legacy storage access for import and export on older Android versions",
    ],
    dataLeavingDevice:
      "Calendar data can sync through accounts or calendar providers configured on the device. Fossify does not operate a calendar sync service.",
    icon: appAsset("calendar", "icon.webp"),
    featureImage: appAsset("calendar", "feature.webp"),
    screenshots: [
      appAsset("calendar", "screenshot-1.webp"),
      appAsset("calendar", "screenshot-2.webp"),
      appAsset("calendar", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["Month view", "Event checklist", "Daily schedule"],
    links: {
      github: github("Calendar"),
      play: play("org.fossify.calendar"),
      fdroid: fdroid("org.fossify.calendar"),
      policy: "/policy/calendar.html",
    },
  },
  {
    slug: "file-manager",
    repo: "File-Manager",
    title: "Fossify File Manager",
    shortTitle: "File Manager",
    status: "Stable",
    category: "Utilities",
    packageName: "org.fossify.filemanager",
    tagline: "Local file browsing and storage tools.",
    summary:
      "Browse folders, manage archives, organize storage, and move files on the device.",
    description:
      "Browse favorites, search and sort folders, compress or extract archives, move files, inspect details, and work directly with device storage.",
    featureHeading: "Files, folders, and archives",
    features: [
      "Folder browsing with favorites and configurable home paths",
      "Copy, move, rename, share, compress, and extract files",
      "Search, sorting, hidden files, and storage details",
      "Password, pattern, or fingerprint protection",
      "Local storage without a sign-in step",
    ],
    privacy: "File Manager works with device storage, not a remote file index.",
    dataAccess: [
      "Files, folders, archives, file names, paths, sizes, and timestamps",
      "Files you choose to open, move, copy, rename, compress, extract, or delete",
    ],
    permissionSummary: [
      "Broad file access when needed to manage device storage",
      "Package-install access when you explicitly open an APK for installation",
      "Notifications for file operations that continue in the background",
      "Fingerprint access when biometric protection is selected",
    ],
    dataLeavingDevice:
      "Files leave the device only when you share them or open them with another app or storage provider.",
    icon: appAsset("file-manager", "icon.webp"),
    featureImage: appAsset("file-manager", "feature.webp"),
    screenshots: [
      appAsset("file-manager", "screenshot-1.webp"),
      appAsset("file-manager", "screenshot-2.webp"),
      appAsset("file-manager", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["Folder list", "Grid view", "Storage summary"],
    links: {
      github: github("File-Manager"),
      play: play("org.fossify.filemanager"),
      fdroid: fdroid("org.fossify.filemanager"),
      policy: "/policy/filemanager.html",
    },
  },
  {
    slug: "documents",
    repo: "Documents",
    title: "Fossify Documents",
    shortTitle: "Documents",
    status: "Beta",
    category: "Utilities",
    packageName: "org.fossify.documents",
    isFree: false,
    tagline: "Offline document reading and organization.",
    summary:
      "Read and organize PDF, DOCX, text, Markdown, CSV, TSV, and HTML files.",
    description:
      "Read and organize documents, edit text and Markdown, and browse recent files, favorites, and selected folders.",
    featureHeading: "Documents, folders, and offline reading",
    features: [
      "PDF, DOCX, text, Markdown, CSV, TSV, and HTML viewing",
      "Text and Markdown editing, with plain-text editing for CSV and TSV",
      "Recent documents, favorites, selected folders, search, filtering, and sorting",
      "Password-protected PDFs, page navigation, zoom, and printing",
      "Offline use without an account or Internet permission",
    ],
    privacy:
      "Documents works with files chosen through Android's file picker and keeps its library records locally.",
    dataAccess: [
      "Documents and folders selected through Android's file picker",
      "Document names, locations, recent activity, favorites, and selected folder references",
      "Appearance, sorting, and viewing preferences",
    ],
    permissionSummary: [
      "Read access to documents and folders selected through Android's file picker",
      "Write access when a supported document is edited or a new document is created",
      "Persisted access to selected folders so they remain available after the app restarts",
    ],
    dataLeavingDevice:
      "A document is passed to another app or system service only when you choose Share, Open with, or Print. The selected app, storage provider, or print service then handles it.",
    icon: appAsset("documents", "icon.webp"),
    screenshotSize: { width: 540, height: 1212 },
    screenshots: [
      appAsset("documents", "screenshot-1.webp"),
      appAsset("documents", "screenshot-2.webp"),
      appAsset("documents", "screenshot-3.webp"),
    ],
    screenshotCaptions: [
      "Document library",
      "Selected folder",
      "Markdown preview",
    ],
    links: {
      github: github("Documents"),
      play: play("org.fossify.documents"),
      policy: "/policy/documents.html",
    },
  },
  {
    slug: "messages",
    repo: "Messages",
    title: "Fossify Messages",
    shortTitle: "Messages",
    status: "Stable",
    category: "Communication",
    packageName: "org.fossify.messages",
    tagline: "SMS and MMS search, scheduling, backup, and blocking.",
    summary:
      "Send, schedule, search, back up, block, and manage SMS/MMS conversations.",
    description:
      "Search conversations, schedule messages, block numbers, import or export message history, use MMS, and send quick replies.",
    featureHeading: "SMS/MMS search, scheduling, backup, and blocking",
    features: [
      "SMS and MMS conversations with group messaging support",
      "Conversation search, blocking, and blocked-number import/export",
      "Backup and restore options for message history",
      "Scheduled messages and quick replies",
      "Contact actions and media attachments",
    ],
    privacy:
      "Messages works with SMS/MMS content and metadata. It contains no advertising, does not track users, and requires no Fossify account.",
    dataAccess: [
      "SMS and MMS content, attachments, recipients, senders, and timestamps",
      "Contact names and numbers used to label conversations",
      "Backup or export files when you create or restore them",
    ],
    permissionSummary: [
      "SMS and MMS read, write, send, and receive access when used as the messaging app",
      "Contacts and phone-state access for conversation and SIM handling",
      "Call access for contact actions",
      "Notifications, exact alarms, wake locks, and restart handling for delivery and scheduled messages",
      "Fingerprint access when biometric app protection is selected",
    ],
    dataLeavingDevice:
      "Messages are sent through the device's carrier and MMS services. Data also leaves when you share or export it; Fossify does not receive message content.",
    icon: appAsset("messages", "icon.webp"),
    featureImage: appAsset("messages", "feature.webp"),
    screenshots: [
      appAsset("messages", "screenshot-1.webp"),
      appAsset("messages", "screenshot-2.webp"),
      appAsset("messages", "screenshot-3.webp"),
    ],
    screenshotCaptions: [
      "Conversation list",
      "Message thread",
      "Conversation details",
    ],
    links: {
      github: github("Messages"),
      play: play("org.fossify.messages"),
      fdroid: fdroid("org.fossify.messages"),
      policy: "/policy/messages.html",
    },
  },
  {
    slug: "phone",
    repo: "Phone",
    title: "Fossify Phone",
    shortTitle: "Phone",
    status: "Stable",
    category: "Communication",
    packageName: "org.fossify.phone",
    tagline: "Calls, contacts, blocking, and call history.",
    summary:
      "Manage calls with number blocking, call history, contact integration, and multi-SIM support.",
    description:
      "Use call logs, contact shortcuts, number blocking, dialer tools, favorites, and multi-SIM support where Android exposes it.",
    featureHeading: "Dialer, call history, and blocking",
    features: [
      "Dialer, recent calls, favorites, and contact shortcuts",
      "Number blocking and call handling controls",
      "Multi-SIM support where Android exposes it",
      "Call history and quick follow-up actions",
      "Theme and color controls",
    ],
    privacy:
      "Phone works with call metadata. It contains no advertising, does not track users, and requires no Fossify account.",
    dataAccess: [
      "Contacts, favorites, blocked numbers, and call-history records",
      "Phone and SIM state needed to place and manage calls",
      "Audio handled during calls when the app acts as the phone interface",
    ],
    permissionSummary: [
      "Contacts, phone, call-log, and call-management access",
      "Microphone and audio-setting access for calls",
      "Notifications and full-screen call alerts",
      "Overlay or phone-account access where Android requires it for call controls",
    ],
    dataLeavingDevice:
      "Calls are handled by Android, the mobile carrier, and any phone account configured on the device. Fossify does not receive call content or call history.",
    icon: appAsset("phone", "icon.webp"),
    featureImage: appAsset("phone", "feature.webp"),
    screenshots: [
      appAsset("phone", "screenshot-1.webp"),
      appAsset("phone", "screenshot-2.webp"),
      appAsset("phone", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["Dialpad", "Incoming call", "Contacts list"],
    links: {
      github: github("Phone"),
      play: play("org.fossify.phone"),
      fdroid: fdroid("org.fossify.phone"),
      policy: "/policy/phone.html",
    },
  },
  {
    slug: "music-player",
    repo: "Music-Player",
    title: "Fossify Music Player",
    shortTitle: "Music Player",
    status: "Stable",
    category: "Media",
    packageName: "org.fossify.musicplayer",
    tagline: "Local music playback with playlists and widgets.",
    summary:
      "Play local music, manage playlists, use widgets, set sleep timers, and keep listening offline.",
    description:
      "Music Player is for people with local libraries. It focuses on albums, artists, playlists, queue controls, widgets, sleep timers, and offline playback.",
    featureHeading: "Local playback and library tools",
    features: [
      "Local playback for albums, artists, songs, and playlists",
      "Queue controls, shuffle, repeat, equalizer, and sleep timer",
      "Home-screen widgets and lock-screen controls",
      "Library browsing by album, artist, genre, and folder",
      "No streaming account or network connection required",
    ],
    privacy:
      "Music Player reads local files instead of using a streaming account.",
    dataAccess: [
      "Audio files and embedded metadata such as title, album, artist, and artwork",
      "Playlists, queue state, favorites, and playback settings stored on the device",
    ],
    permissionSummary: [
      "Audio or storage access, depending on the Android version",
      "Foreground-service, notification, and wake-lock access for background playback",
      "Audio-setting access for playback controls",
    ],
    dataLeavingDevice:
      "Music files and metadata leave the device only when you share them or another configured app or provider handles them.",
    icon: appAsset("music-player", "icon.webp"),
    featureImage: appAsset("music-player", "feature.webp"),
    screenshots: [
      appAsset("music-player", "screenshot-1.webp"),
      appAsset("music-player", "screenshot-2.webp"),
      appAsset("music-player", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["Album library", "Now playing", "Album details"],
    links: {
      github: github("Music-Player"),
      play: play("org.fossify.musicplayer"),
      fdroid: fdroid("org.fossify.musicplayer"),
      policy: "/policy/musicplayer.html",
    },
  },
  {
    slug: "contacts",
    repo: "Contacts",
    title: "Fossify Contacts",
    shortTitle: "Contacts",
    status: "Stable",
    category: "Communication",
    packageName: "org.fossify.contacts",
    tagline: "Contacts, groups, import, and export.",
    summary:
      "Search, edit, group, favorite, import, and export contacts stored on the device.",
    description:
      "Use address book fields, groups, favorites, vCard import/export, communication actions, and search.",
    featureHeading: "Contacts, groups, and imports",
    features: [
      "Contact search and favorites",
      "Group management for people and teams",
      "vCard import and export",
      "Custom fields and contact editing",
      "Call, message, and email actions",
    ],
    privacy:
      "Contacts works without a Fossify account, advertising, or tracking.",
    dataAccess: [
      "Names, phone numbers, email addresses, photos, groups, and other contact fields",
      "Contact accounts and sync settings exposed by Android",
      "vCard files when you import or export contacts",
    ],
    permissionSummary: [
      "Contacts read and write access",
      "Account and sync-setting access for Android contact providers",
      "Call access when you start a call from a contact",
      "Legacy storage access for vCard import and export on older Android versions",
    ],
    dataLeavingDevice:
      "Contacts may sync through accounts or contact providers configured on the device. Fossify does not operate a contact sync service.",
    icon: appAsset("contacts", "icon.webp"),
    featureImage: appAsset("contacts", "feature.webp"),
    screenshots: [
      appAsset("contacts", "screenshot-1.webp"),
      appAsset("contacts", "screenshot-2.webp"),
      appAsset("contacts", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["Contact list", "Contact search", "Contact details"],
    links: {
      github: github("Contacts"),
      play: play("org.fossify.contacts"),
      fdroid: fdroid("org.fossify.contacts"),
      policy: "/policy/contacts.html",
    },
  },
  {
    slug: "voice-recorder",
    repo: "Voice-Recorder",
    title: "Fossify Voice Recorder",
    shortTitle: "Voice Recorder",
    status: "Beta",
    category: "Media",
    packageName: "org.fossify.voicerecorder",
    tagline: "Record lectures, notes, and ideas without network access.",
    summary: "Capture audio, manage recordings, and keep files local.",
    description:
      "Record audio, play it back, rename files, manage the recording list, and share files when needed.",
    featureHeading: "Recordings and local audio files",
    features: [
      "Recording for voice notes, meetings, and ideas",
      "Local recording list with playback and file management",
      "Controls for naming, sharing, and deleting recordings",
      "Recording without internet access",
      "Plain start screen for new recordings",
    ],
    privacy:
      "Recordings stay local unless you share them. The app contains no advertising and does not track users.",
    dataAccess: [
      "Microphone audio while you are recording",
      "Recording files, file names, durations, and playback state",
    ],
    permissionSummary: [
      "Microphone access while recording",
      "Foreground-service, notification, and wake-lock access for recordings in progress",
      "Legacy storage access on older Android versions",
    ],
    dataLeavingDevice:
      "Recordings leave the device only when you share them or save them through another app or storage provider.",
    icon: appAsset("voice-recorder", "icon.webp"),
    featureImage: appAsset("voice-recorder", "feature.webp"),
    screenshots: [
      appAsset("voice-recorder", "screenshot-1.webp"),
      appAsset("voice-recorder", "screenshot-2.webp"),
      appAsset("voice-recorder", "screenshot-3.webp"),
    ],
    screenshotCaptions: [
      "Recording screen",
      "Recording list",
      "Recorder settings",
    ],
    links: {
      github: github("Voice-Recorder"),
      play: play("org.fossify.voicerecorder"),
      fdroid: fdroid("org.fossify.voicerecorder"),
      policy: "/policy/voicerecorder.html",
    },
  },
  {
    slug: "launcher",
    repo: "Launcher",
    title: "Fossify Launcher",
    shortTitle: "Launcher",
    status: "Beta",
    category: "Everyday",
    packageName: "org.fossify.home",
    tagline: "Home screen, app drawer, widgets, and search.",
    summary:
      "Customize your home screen, app drawer, widgets, search, and layout without a content feed.",
    description:
      "Search the app drawer, place widgets, adjust layouts, set gestures, and personalize the home screen without an account or content feed.",
    featureHeading: "Home screen, drawer, and widgets",
    features: [
      "Home screen layout and app drawer customization",
      "Widget support and app search",
      "Optional automatic keyboard opening in the app drawer",
      "Fossify theme and icon controls",
      "Home screen without account or content feed",
    ],
    privacy:
      "Launcher arranges the home screen and opens apps without advertising or tracking.",
    dataAccess: [
      "The list of installed apps and their labels and icons",
      "Home-screen layout, folders, gestures, widgets, and launcher settings",
    ],
    permissionSummary: [
      "Installed-app visibility so the launcher can show the app drawer",
      "Widget binding and status-bar controls used by launcher features",
      "Package removal when you explicitly request an uninstall",
      "Optional device-admin access for supported screen-lock actions",
    ],
    dataLeavingDevice:
      "Launcher data stays on the device. Opening another app hands control to that app under its own privacy terms.",
    icon: appAsset("launcher", "icon.webp"),
    featureImage: appAsset("launcher", "feature.webp"),
    screenshots: [
      appAsset("launcher", "screenshot-1.webp"),
      appAsset("launcher", "screenshot-2.webp"),
      appAsset("launcher", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["Home screen", "App drawer", "Launcher settings"],
    links: {
      github: github("Launcher"),
      play: play("org.fossify.home"),
      fdroid: fdroid("org.fossify.home"),
      policy: "/policy/home.html",
    },
  },
  {
    slug: "clock",
    repo: "Clock",
    title: "Fossify Clock",
    shortTitle: "Clock",
    status: "Beta",
    category: "Everyday",
    packageName: "org.fossify.clock",
    tagline: "Alarms, timers, stopwatch, and widgets.",
    summary:
      "Check time zones, set alarms, run timers, use a stopwatch, and add clock widgets.",
    description:
      "Add cities to the world clock, set alarms, tune snooze behavior, run timers and a stopwatch, and add widgets.",
    featureHeading: "World clock, alarms, timers, and stopwatch",
    features: [
      "World clock with custom labels for time zones",
      "Multiple alarms with labels, vibration, and ringtone controls",
      "Timers and stopwatch",
      "Clock widgets for the home screen",
      "Gradual alarm volume and snooze customization",
    ],
    privacy:
      "Clock data stays on the device and avoids network account sign-in.",
    dataAccess: [
      "World-clock locations, alarms, timers, stopwatch state, ringtones, and widget settings",
      "Labels and schedules you enter for alarms and timers",
    ],
    permissionSummary: [
      "Exact-alarm, wake, vibration, notification, and restart access",
      "Full-screen and overlay access used for alarm screens where Android permits it",
      "Foreground-service access while time-sensitive features are running",
    ],
    dataLeavingDevice:
      "Clock data stays on the device unless Android includes it in a device backup.",
    icon: appAsset("clock", "icon.webp"),
    featureImage: appAsset("clock", "feature.webp"),
    screenshots: [
      appAsset("clock", "screenshot-1.webp"),
      appAsset("clock", "screenshot-2.webp"),
      appAsset("clock", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["World clock", "Alarms", "Timers"],
    links: {
      github: github("Clock"),
      play: play("org.fossify.clock"),
      fdroid: fdroid("org.fossify.clock"),
      policy: "/policy/clock.html",
    },
  },
  {
    slug: "keyboard",
    repo: "Keyboard",
    title: "Fossify Keyboard",
    shortTitle: "Keyboard",
    status: "Beta",
    category: "Everyday",
    packageName: "org.fossify.keyboard",
    tagline: "Offline typing with layouts, symbols, and clipboard help.",
    summary:
      "Type with a keyboard that works offline, supports multiple layouts, and avoids network permission by design.",
    description:
      "Use language layouts, special characters, emoji access, clipboard snippets, and typing preferences without cloud typing.",
    featureHeading: "Offline layouts and typing controls",
    features: [
      "Offline keyboard without internet permission",
      "Multiple languages, layouts, numbers, and symbols",
      "Clipboard snippets for frequently used text",
      "Typing preferences and vibration controls",
      "Theme controls for Fossify apps",
    ],
    privacy:
      "Keyboard has no internet permission and links to its source code.",
    dataAccess: [
      "Text processed while the keyboard is active so it can send keystrokes to the current app",
      "Clipboard snippets and keyboard preferences you save inside Keyboard",
    ],
    permissionSummary: [
      "Android input-method binding, which allows the keyboard to enter text into the active app",
      "Legacy storage access on older Android versions",
    ],
    dataLeavingDevice:
      "Keyboard does not send typed text to Fossify. Text is delivered to the app you are typing in, and that app may handle it under its own privacy terms.",
    icon: appAsset("keyboard", "icon.webp"),
    featureImage: appAsset("keyboard", "feature.webp"),
    screenshots: [
      appAsset("keyboard", "screenshot-1.webp"),
      appAsset("keyboard", "screenshot-2.webp"),
      appAsset("keyboard", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["Typing view", "Emoji keyboard", "Number layout"],
    links: {
      github: github("Keyboard"),
      play: play("org.fossify.keyboard"),
      fdroid: fdroid("org.fossify.keyboard"),
      policy: "/policy/keyboard.html",
    },
  },
  {
    slug: "notes",
    repo: "Notes",
    title: "Fossify Notes",
    shortTitle: "Notes",
    status: "Beta",
    category: "Everyday",
    packageName: "org.fossify.notes",
    tagline: "Notes, lists, and widgets without an account.",
    summary:
      "Write notes, shopping lists, and checklists, and keep them visible with home-screen widgets.",
    description:
      "Write plain notes and checklists, add widgets, protect notes, and import, export, or back up your data.",
    featureHeading: "Notes, checklists, and widgets",
    features: [
      "Text notes and checklists",
      "Home-screen widgets for keeping notes visible",
      "Optional app and note locking",
      "Import, export, and optional automatic backups",
      "Color and display customization",
      "Local note-taking without sign-in",
    ],
    privacy: "Notes stores text locally and avoids Fossify account sign-in.",
    dataAccess: [
      "Notes, checklists, colors, protection settings, and widget settings",
      "Imported files and files created for exports or automatic backups",
    ],
    permissionSummary: [
      "Exact-alarm, wake, and restart access for optional automatic backups",
      "Fingerprint access when biometric protection is selected",
      "Legacy storage access for files on older Android versions",
    ],
    dataLeavingDevice:
      "Notes leave the device only when you share or export them, or when Android includes app data in a device backup configured by the user.",
    icon: appAsset("notes", "icon.webp"),
    featureImage: appAsset("notes", "feature.webp"),
    screenshots: [
      appAsset("notes", "screenshot-1.webp"),
      appAsset("notes", "screenshot-2.webp"),
      appAsset("notes", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["Notes list", "Note editor", "Checklist"],
    links: {
      github: github("Notes"),
      play: play("org.fossify.notes"),
      fdroid: fdroid("org.fossify.notes"),
      policy: "/policy/notes.html",
    },
  },
  {
    slug: "camera",
    repo: "Camera",
    title: "Fossify Camera",
    shortTitle: "Camera",
    status: "Beta",
    category: "Media",
    packageName: "org.fossify.camera",
    tagline: "Camera for photos and videos.",
    summary:
      "Capture photos and videos with camera switching, zoom, quality controls, and configurable save paths.",
    description:
      "Capture photos and videos, switch cameras, zoom, set quality, choose save paths, and adjust themes.",
    featureHeading: "Photo and video capture controls",
    features: [
      "Photo and video capture with mode switching",
      "Zoom, flash, and front/rear camera controls",
      "Output quality and save-path preferences",
      "Maximum brightness option for preview",
      "Photo and video capture without an account or cloud gallery",
    ],
    privacy:
      "Photos and videos are saved to the paths you choose. The app does not request Android's Internet permission.",
    dataAccess: [
      "Camera preview frames while the app is open",
      "Photos and videos you capture or select",
      "Location metadata only when you enable location tagging",
    ],
    permissionSummary: [
      "Camera access for photos and videos",
      "Microphone access for video audio",
      "Photo, video, or legacy storage access depending on Android version",
      "Optional coarse and precise location access for location metadata",
      "Lock-screen access when Camera is opened from a locked device",
    ],
    dataLeavingDevice:
      "Captured media stays in the selected device storage location unless you share it or a configured storage provider handles it.",
    icon: appAsset("camera", "icon.webp"),
    featureImage: appAsset("camera", "feature.webp"),
    screenshots: [
      appAsset("camera", "screenshot-1.webp"),
      appAsset("camera", "screenshot-2.webp"),
      appAsset("camera", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["Photo mode", "Camera preview", "Video mode"],
    links: {
      github: github("Camera"),
      play: play("org.fossify.camera"),
      fdroid: fdroid("org.fossify.camera"),
      policy: "/policy/camera.html",
    },
  },
  {
    slug: "calculator",
    repo: "Calculator",
    title: "Fossify Calculator",
    shortTitle: "Calculator",
    status: "Beta",
    category: "Utilities",
    packageName: "org.fossify.math",
    tagline: "Offline calculations and unit conversions.",
    summary:
      "Handle everyday calculations, advanced functions, unit conversions, and history.",
    description:
      "Use basic and advanced operations, convert common units, review calculation history, and adjust display and haptic preferences.",
    featureHeading: "Calculations, conversions, and history",
    features: [
      "Basic arithmetic plus roots, powers, and common functions",
      "Conversions for common units",
      "Offline use with no internet permission",
      "Button vibration and display preferences",
      "Theme and color controls",
    ],
    privacy: "Calculator runs locally without account or network service.",
    dataAccess: [
      "Calculations, conversion choices, history, and display preferences stored locally",
    ],
    permissionSummary: [
      "Calculator does not request sensitive runtime permissions",
    ],
    dataLeavingDevice:
      "Calculator does not send calculations or history to Fossify.",
    icon: appAsset("calculator", "icon.webp"),
    featureImage: appAsset("calculator", "feature.webp"),
    screenshots: [
      appAsset("calculator", "screenshot-1.webp"),
      appAsset("calculator", "screenshot-2.webp"),
      appAsset("calculator", "screenshot-3.webp"),
    ],
    screenshotCaptions: [
      "Basic calculator",
      "Unit conversion",
      "Advanced calculator",
    ],
    links: {
      github: github("Calculator"),
      play: play("org.fossify.math"),
      fdroid: fdroid("org.fossify.math"),
      policy: "/policy/math.html",
    },
  },
  {
    slug: "paint",
    repo: "Paint",
    title: "Fossify Paint",
    shortTitle: "Paint",
    status: "Beta",
    category: "Utilities",
    packageName: "org.fossify.paint",
    tagline: "Sketchpad for drawing.",
    summary: "Draw, pick colors, set backgrounds, and export images.",
    description:
      "Choose brush sizes, colors, backgrounds, and export options for sketches and drawings.",
    featureHeading: "Drawing canvas and color tools",
    features: [
      "Drawing canvas for sketches and notes",
      "Brush size and color controls",
      "Background customization",
      "PNG, JPG, and SVG export options",
      "Offline drawing without an account",
    ],
    privacy:
      "Paint uses a local canvas. Drawings stay local unless you export or share them.",
    dataAccess: [
      "Drawings, imported images, colors, backgrounds, and export settings",
    ],
    permissionSummary: [
      "Legacy storage access for opening or saving images on older Android versions",
    ],
    dataLeavingDevice:
      "Drawings leave the device only when you export or share them through another app or storage provider.",
    icon: appAsset("paint", "icon.webp"),
    featureImage: appAsset("paint", "feature.webp"),
    screenshots: [
      appAsset("paint", "screenshot-1.webp"),
      appAsset("paint", "screenshot-2.webp"),
      appAsset("paint", "screenshot-3.webp"),
    ],
    screenshotCaptions: ["Drawing canvas", "Export dialog", "Color picker"],
    links: {
      github: github("Paint"),
      play: play("org.fossify.paint"),
      fdroid: fdroid("org.fossify.paint"),
      policy: "/policy/paint.html",
    },
  },
  {
    slug: "thank-you",
    repo: "Thank-You",
    title: "Fossify Thank You",
    shortTitle: "Thank You",
    status: "Stable",
    category: "Funding",
    packageName: "org.fossify.thankyou",
    isFree: false,
    tagline: "Additional customization and shared settings for Fossify apps.",
    summary:
      "Purchasing Thank You funds Fossify and adds customization options and shared settings to supported apps.",
    description:
      "Keep Thank You installed to use additional customization options and shared themes and preferences in supported Fossify apps. It also lists installed Fossify apps.",
    featureHeading: "Customization and shared settings",
    features: [
      "Additional customization options in supported Fossify apps",
      "Shared color themes and preferences",
      "Installed Fossify app details",
      "Package signer and install-source details",
      "Warnings for packages without the expected Fossify signature",
    ],
    privacy:
      "Thank You reads installed Fossify app details and shares supported settings on the device.",
    dataAccess: [
      "Installed status, version, signer, and install source of known Fossify app packages",
      "Shared Fossify theme and preference values stored on the device",
    ],
    permissionSummary: [
      "Package visibility for known Fossify apps",
      "Package removal when you explicitly request an uninstall",
      "A signature-protected permission used to share settings between compatible Fossify apps",
    ],
    dataLeavingDevice:
      "Installed-app details and shared settings are not sent to Fossify. Links opened from the app are handled by the selected external service.",
    icon: appAsset("thank-you", "icon.webp"),
    featureImage: appAsset("thank-you", "feature.webp"),
    screenshots: [
      appAsset("thank-you", "screenshot-1.webp"),
      appAsset("thank-you", "screenshot-2.webp"),
      appAsset("thank-you", "screenshot-3.webp"),
    ],
    screenshotCaptions: [
      "Support message",
      "Installed Fossify apps",
      "Color settings",
    ],
    links: {
      github: github("Thank-You"),
      play: play("org.fossify.thankyou"),
      policy: "/policy/thankyou.html",
    },
  },
];

export const featuredApps = apps.filter((app) =>
  [
    "gallery",
    "calendar",
    "file-manager",
    "messages",
    "phone",
    "music-player",
  ].includes(app.slug),
);

export const appCategories = Array.from(
  new Set(apps.map((app) => app.category)),
);
