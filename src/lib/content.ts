/**
 * lib/content.ts
 * Single source of truth for site copy & data — all typed, no `any`.
 * Edit content here; components stay presentational.
 *
 * NOTE: Items marked PLACEHOLDER need real info from the client before launch
 * (exact address, hours, phone/email, genuine testimonials).
 */

/* ----------------------------------------------------------------------------
 * Core business facts
 * ------------------------------------------------------------------------- */

export const SITE = {
  name: "Achieve Performance Training",
  legalName: "Achieve Performance Inc.",
  short: "Achieve",
  tagline: "Build Better Athletes",
  city: "Clinton, MA",
  established: 2010,
  founder: "Jeremy Frisch",
  description:
    "Strength & conditioning, youth athletic development, and physical education in Clinton, MA — in person and online.",
  // PLACEHOLDER — client to confirm public contact details.
  contact: {
    phone: "(978) 706-1692",
    email: "hello@achieveperformance.example", // PLACEHOLDER
    address: "Clinton, MA 01510", // PLACEHOLDER — confirm street address
  },
} as const;

export const LINKS = {
  schedule: "/schedule",
  learningPlatform: "/learning-platform",
  subscribe: "/subscribe",
  programs: "/programs",
  gym: "/clinton-ma",
  gear: "https://teamlocker.squadlocker.com/#/lockers/achieve-performance-training?_k=qzbist", // SquadLocker "Achieve Gear" store
  login: "/login",
  blog: "/blog",
  contact: "/contact",
  about: "/about",
} as const;

export const SOCIALS = {
  facebook: "https://facebook.com/achieveperformance.training",
  instagram: "https://www.instagram.com/jeremy_frisch17/",
  twitter: "https://twitter.com/JeremyFrisch",
} as const;

/* ----------------------------------------------------------------------------
 * Navigation
 * ------------------------------------------------------------------------- */

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const NAV: NavItem[] = [
  {
    // Parent is a dropdown group only — it never navigates; each child is unique.
    label: "Training",
    href: LINKS.programs,
    children: [
      { label: "Programs", href: LINKS.programs },
      { label: "Our Gym — Clinton, MA", href: LINKS.gym },
      { label: "Schedule", href: LINKS.schedule },
    ],
  },
  { label: "Learning Platform", href: LINKS.learningPlatform },
  { label: "Subscribe", href: LINKS.subscribe },
  { label: "Achieve Gear", href: LINKS.gear },
];

/* ----------------------------------------------------------------------------
 * Offerings teaser (3 quick tiles under the hero)
 * ------------------------------------------------------------------------- */

export type IconName =
  | "youth"
  | "speed"
  | "strength"
  | "groupFitness"
  | "stretch"
  | "play"
  | "stopwatch"
  | "location"
  | "whistle"
  | "trophy"
  | "people"
  | "arrow";

export interface Offering {
  name: string;
  icon: IconName;
  href: string;
}

export const OFFERINGS: Offering[] = [
  { name: "Youth Development", icon: "youth", href: LINKS.programs },
  { name: "Strength & Conditioning", icon: "strength", href: LINKS.programs },
  { name: "Adult Fitness", icon: "groupFitness", href: LINKS.programs },
];

/* ----------------------------------------------------------------------------
 * Badge marquee phrases
 * ------------------------------------------------------------------------- */

export const BADGES: string[] = [
  "Locally Owned",
  "Since 2010",
  "Youth Athletic Development",
  "Strength & Conditioning",
  "In-Person + Online",
  "Expert Coaching",
  "Clinton, MA",
];

/* ----------------------------------------------------------------------------
 * Program cards (§5.5)
 * ------------------------------------------------------------------------- */

export interface Program {
  title: string;
  blurb: string;
  href: string;
  img: string;
  alt: string;
}

export const PROGRAMS: Program[] = [
  {
    title: "Youth Athletic Development",
    blurb:
      "Age-appropriate speed, agility, coordination, and strength that builds confident, capable young athletes.",
    href: LINKS.programs,
    img: "/images/program-youth.svg",
    alt: "Young athletes running an agility drill at the Achieve gym",
  },
  {
    title: "Speed & Agility",
    blurb:
      "Sprinting, cutting, and movement mechanics to make athletes faster and more explosive.",
    href: LINKS.programs,
    img: "/images/program-speed.svg",
    alt: "Athlete sprinting through speed and agility training",
  },
  {
    title: "Strength & Conditioning",
    blurb:
      "Coach-led strength training and conditioning for athletes of every level.",
    href: LINKS.programs,
    img: "/images/program-strength.svg",
    alt: "Athlete lifting weights during a strength and conditioning session",
  },
  {
    title: "Adult Group Fitness",
    blurb:
      "Energetic group classes that keep adults strong, mobile, and moving well.",
    href: LINKS.programs,
    img: "/images/program-group.svg",
    alt: "Adults training together in a group fitness class",
  },
  {
    title: "Adult Stick Stretch",
    blurb:
      "A mobility and stretch program to keep you loose, balanced, and injury-resistant.",
    href: LINKS.programs,
    img: "/images/program-stretch.svg",
    alt: "Adult mobility and stick-stretch session",
  },
  {
    title: "Online Learning Platform",
    blurb:
      "Youth athletic development and PE videos plus an exercise reference guide — train anywhere, anytime.",
    href: LINKS.subscribe,
    img: "/images/program-online.svg",
    alt: "The Achieve online learning platform on a laptop and phone",
  },
];

/* ----------------------------------------------------------------------------
 * Transformation / gym gallery (§5.7)
 * ------------------------------------------------------------------------- */

export const TRANSFORMATION = {
  before: {
    img: "/images/before.svg",
    alt: "Athlete on day one of training at Achieve",
    label: "DAY 1",
  },
  after: {
    img: "/images/after.svg",
    alt: "The same athlete after a block of coach-led training",
    label: "NOW",
  },
} as const;

export interface GalleryImage {
  img: string;
  alt: string;
}

export const GALLERY: GalleryImage[] = [
  { img: "/images/gallery-1.svg", alt: "Speed and agility drills in progress" },
  { img: "/images/gallery-2.svg", alt: "Strength training on the gym floor" },
  { img: "/images/gallery-3.svg", alt: "Youth athletic development class" },
  { img: "/images/gallery-4.svg", alt: "Adult group fitness session" },
];

/* ----------------------------------------------------------------------------
 * Reviews (§5.8) — PLACEHOLDER copy for the client to replace
 * ------------------------------------------------------------------------- */

export interface Review {
  quote: string;
  name: string;
  role: string;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "PLACEHOLDER — Add a real parent testimonial here. My kid is faster, stronger, and far more confident since starting at Achieve.",
    name: "Client Review",
    role: "Parent",
  },
  {
    quote:
      "PLACEHOLDER — Add a real athlete testimonial here. The coaching is next level and the programming actually works.",
    name: "Client Review",
    role: "Youth Athlete",
  },
  {
    quote:
      "PLACEHOLDER — Add a real adult member testimonial here. Best group fitness community in Clinton — I never miss a session.",
    name: "Client Review",
    role: "Adult Member",
  },
];

/* ----------------------------------------------------------------------------
 * "From the Coach" articles strip (§5.9)
 * ------------------------------------------------------------------------- */

export interface Article {
  title: string;
  excerpt: string;
  href: string;
}

export const ARTICLES: Article[] = [
  {
    title: "10 Things to Work On",
    excerpt:
      "Coach Jeremy Frisch on the foundational movement skills every young athlete should be developing.",
    href: LINKS.blog,
  },
  {
    title: "Active Children = Smarter Children",
    excerpt:
      "Why physical literacy and daily movement fuel focus, learning, and lifelong health.",
    href: LINKS.blog,
  },
  {
    title: "Building Long-Term Athletes",
    excerpt:
      "The case for age-appropriate, progressive development over early specialization.",
    href: LINKS.blog,
  },
];

/* ----------------------------------------------------------------------------
 * "Why Achieve" value cards (§5.10)
 * ------------------------------------------------------------------------- */

export interface ValueCard {
  stat: string;
  icon: IconName;
  title: string;
  copy: string;
}

export const VALUES: ValueCard[] = [
  {
    stat: "01",
    icon: "trophy",
    title: "Athlete-Centered",
    copy: "Age-appropriate, long-term athletic development — never one-size-fits-all.",
  },
  {
    stat: "MA",
    icon: "location",
    title: "Locally Owned",
    copy: "A Clinton, MA gym, operated by coaches who know the community.",
  },
  {
    stat: "24/7",
    icon: "play",
    title: "In-Person + Online",
    copy: "Train at the facility or anywhere via the Learning Platform.",
  },
  {
    stat: "2010",
    icon: "stopwatch",
    title: "Proven Since 2010",
    copy: "A decade-plus of coaching athletes of all ages and abilities.",
  },
];

/* ----------------------------------------------------------------------------
 * Get-started steps (§5.11)
 * ------------------------------------------------------------------------- */

export interface Step {
  n: number;
  title: string;
  copy: string;
}

export const STEPS: Step[] = [
  { n: 1, title: "Check the Schedule", copy: "Find a class or program that fits your goals." },
  { n: 2, title: "Come Train", copy: "Join us in person at the Clinton, MA facility." },
  {
    n: 3,
    title: "Train Anywhere",
    copy: "Access exclusive videos and the exercise guide on the Learning Platform.",
  },
  { n: 4, title: "Achieve Your Goals", copy: "Progress with expert, coach-led programming." },
];

/* ----------------------------------------------------------------------------
 * Location / hours (§5.12) — PLACEHOLDER details
 * ------------------------------------------------------------------------- */

export interface HoursBlock {
  label: string;
  detail: string;
}

export const HOURS: HoursBlock[] = [
  { label: "Youth Programs", detail: "Weekday afternoons & evenings" }, // PLACEHOLDER
  { label: "Adult Group Fitness", detail: "Mornings & evenings" }, // PLACEHOLDER
  { label: "Open Training", detail: "See full schedule for details" }, // PLACEHOLDER
];

/* ----------------------------------------------------------------------------
 * Learning Platform features (§/learning-platform)
 * ------------------------------------------------------------------------- */

export interface Feature {
  icon: IconName;
  title: string;
  copy: string;
}

export const PLATFORM_FEATURES: Feature[] = [
  {
    icon: "play",
    title: "Exclusive Video Library",
    copy: "Youth athletic development and physical education videos, with new content released regularly.",
  },
  {
    icon: "whistle",
    title: "Exercise Reference Guide",
    copy: "A searchable guide to movements, drills, and progressions you can pull up on the floor.",
  },
  {
    icon: "people",
    title: "Built for Coaches & Parents",
    copy: "Made for teachers, coaches, trainers, and parents who want to develop young athletes.",
  },
  {
    icon: "stopwatch",
    title: "Anytime, Anywhere",
    copy: "Stream from any computer or phone, whenever and wherever you train.",
  },
];

/* ----------------------------------------------------------------------------
 * Subscribe plans (§/subscribe) — PLACEHOLDER pricing for the client
 * ------------------------------------------------------------------------- */

export interface Plan {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

export const PLANS: Plan[] = [
  {
    name: "Monthly",
    price: "$—", // PLACEHOLDER
    cadence: "per month",
    blurb: "Full access to the Learning Platform, billed monthly.",
    features: [
      "Complete video library",
      "Exercise reference guide",
      "New content every month",
      "Cancel anytime",
    ],
    cta: "Subscribe Monthly",
    href: LINKS.subscribe,
  },
  {
    name: "Annual",
    price: "$—", // PLACEHOLDER
    cadence: "per year",
    blurb: "The same full access — at the best value.",
    features: [
      "Everything in Monthly",
      "Two months free (placeholder)",
      "Priority new releases",
      "Best for year-round coaching",
    ],
    cta: "Subscribe Annually",
    href: LINKS.subscribe,
    featured: true,
  },
  {
    name: "Teams & Schools",
    price: "Custom",
    cadence: "group access",
    blurb: "Multi-seat access for programs, schools, and clubs.",
    features: [
      "Bulk seats for staff",
      "Shared exercise library",
      "Onboarding support",
      "Invoiced billing",
    ],
    cta: "Contact Us",
    href: LINKS.contact,
  },
];

/* ----------------------------------------------------------------------------
 * Weekly training schedule (§/schedule) — PLACEHOLDER times for the client
 * ------------------------------------------------------------------------- */

export interface ScheduleSession {
  time: string;
  name: string;
  group: string;
}

export interface ScheduleDay {
  day: string;
  sessions: ScheduleSession[];
}

// PLACEHOLDER — all class times below are samples; client to confirm real schedule.
export const SCHEDULE: ScheduleDay[] = [
  {
    day: "Monday",
    sessions: [
      { time: "3:30–4:30 PM", name: "Youth Athletic Development", group: "Ages 7–11" },
      { time: "4:30–5:30 PM", name: "Speed & Agility", group: "Ages 12+" },
      { time: "6:00–7:00 PM", name: "Adult Group Fitness", group: "Adults" },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "9:00–10:00 AM", name: "Adult Stick Stretch", group: "Adults" },
      { time: "4:00–5:00 PM", name: "Strength & Conditioning", group: "Ages 12+" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "3:30–4:30 PM", name: "Youth Athletic Development", group: "Ages 7–11" },
      { time: "6:00–7:00 PM", name: "Adult Group Fitness", group: "Adults" },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      { time: "9:00–10:00 AM", name: "Adult Stick Stretch", group: "Adults" },
      { time: "4:00–5:00 PM", name: "Speed & Agility", group: "Ages 12+" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { time: "3:30–4:30 PM", name: "Youth Athletic Development", group: "Ages 7–11" },
      { time: "5:00–6:00 PM", name: "Strength & Conditioning", group: "Ages 12+" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { time: "8:30–9:30 AM", name: "Adult Group Fitness", group: "Adults" },
      { time: "10:00–11:00 AM", name: "Youth Athletic Development", group: "All ages" },
    ],
  },
];

/* ----------------------------------------------------------------------------
 * FAQs (§/faqs)
 * ------------------------------------------------------------------------- */

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "What ages do you train?",
    a: "Achieve works with athletes of all ages — from youth athletic development for kids through speed, strength, and conditioning for teens, plus group fitness and stick-stretch programs for adults.",
  },
  {
    q: "Do I need experience to get started?",
    a: "No. Our coaching is age- and ability-appropriate, so beginners and experienced athletes alike start at the right level and progress from there.",
  },
  {
    q: "What's the difference between in-person training and the Learning Platform?",
    a: "In-person training happens at our Clinton, MA facility with our coaches. The online Learning Platform gives teachers, coaches, trainers, and parents exclusive videos and an exercise reference guide to use anywhere, anytime.",
  },
  {
    q: "How do I get started?",
    a: "Check the schedule for a class or program that fits your goals, then come train with us in Clinton, MA — or subscribe to the Learning Platform to train from anywhere.",
  },
  {
    q: "Where are you located?",
    a: "We're a locally owned facility in Clinton, MA. See the map on our gym page for directions. (Exact address to be confirmed.)",
  },
  {
    q: "Do you offer team or school programs?",
    a: "Yes — we offer group access for programs, schools, and clubs. Reach out through the contact page to set it up.",
  },
];
