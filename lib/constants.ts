// ─── Single source of truth for all business facts ───────────────────────────
// TODO: confirm full weekly hours with owner (only Mon open time confirmed)
// TODO: confirm production domain before launch
// TODO: add actual sameAs profile URLs once known

export const DOMAIN = "twoguysautorepair.net"
export const SITE_URL = `https://${DOMAIN}`

export const NAP = {
  name: "Two Guys Automotive Repair",
  address: {
    street: "191 N 39th St",
    city: "Springfield",
    state: "OR",
    zip: "97478",
    full: "191 N 39th St, Springfield, OR 97478",
  },
  phone: {
    display: "(541) 744-3626",
    tel: "+15417443626",
    href: "tel:+15417443626",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=191+N+39th+St+Springfield+OR+97478",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=191+N+39th+St%2C+Springfield%2C+OR+97478&output=embed",
} as const

// TODO: replace all placeholder hours — only Monday 8:00 AM confirmed by owner
export const HOURS: {
  day: string
  opens: string | null
  closes: string | null
  label: string
}[] = [
  { day: "Monday", opens: "08:00", closes: "17:30", label: "8:00 AM – 5:30 PM" },
  { day: "Tuesday", opens: "08:00", closes: "17:30", label: "8:00 AM – 5:30 PM" },
  { day: "Wednesday", opens: "08:00", closes: "17:30", label: "8:00 AM – 5:30 PM" },
  { day: "Thursday", opens: "08:00", closes: "17:30", label: "8:00 AM – 5:30 PM" },
  { day: "Friday", opens: "08:00", closes: "17:30", label: "8:00 AM – 5:30 PM" },
  { day: "Saturday", opens: "08:00", closes: "14:00", label: "8:00 AM – 2:00 PM" },
  { day: "Sunday", opens: null, closes: null, label: "Closed" },
]

export const SERVICES: {
  name: string
  slug: string
  shortDesc: string
  longDesc: string
}[] = [
  {
    name: "Brakes",
    slug: "brakes",
    shortDesc: "Brake repair in Springfield, OR — pads, rotors, calipers, and fluid.",
    longDesc:
      "Our mechanics inspect your entire brake system — pads, rotors, calipers, and fluid — and replace only what's worn. Brakes are your most important safety system; our Springfield auto shop won't upsell you on parts you don't need.",
  },
  {
    name: "Transmission Service",
    slug: "transmission-service",
    shortDesc: "Full transmission service to extend the life of your drivetrain.",
    longDesc:
      "Regular transmission service removes worn fluid and metal particles before they cause internal damage. We service both automatic and manual transmissions.",
  },
  {
    name: "Transmission Filter Service",
    slug: "transmission-filter-service",
    shortDesc: "Filter and gasket replacement to protect transmission internals.",
    longDesc:
      "The transmission filter traps particles that degrade fluid quality. Replacing it on schedule keeps fluid clean and your transmission running smoothly.",
  },
  {
    name: "Transmission Flush",
    slug: "transmission-flush",
    shortDesc: "Complete fluid exchange to remove contaminants and restore performance.",
    longDesc:
      "A transmission flush exchanges all of the old fluid — not just the portion that drains when you drop the pan — giving your transmission a fresh start.",
  },
  {
    name: "Fuel Injection Service",
    slug: "fuel-injection-service",
    shortDesc: "Clean injectors and throttle body to restore fuel economy.",
    longDesc:
      "Deposits build up on fuel injectors and the throttle body over time, reducing fuel economy and causing rough idle. Our fuel injection service cleans the entire system.",
  },
  {
    name: "Coolant System Service",
    slug: "coolant-system-service",
    shortDesc: "Flush and refill to prevent overheating and corrosion.",
    longDesc:
      "Old coolant loses its corrosion inhibitors and can cause radiator and water pump damage. We flush the system and refill with the correct coolant for your vehicle.",
  },
  {
    name: "Auto Diagnostics",
    slug: "auto-diagnostics",
    shortDesc: "Check engine light on? Our mechanics scan and diagnose the root cause.",
    longDesc:
      "When your check engine light comes on, you need a mechanic who will tell you exactly what's wrong — not guess. We use professional diagnostic equipment to read fault codes and live sensor data for every vehicle that comes into our Springfield, OR auto shop.",
  },
  {
    name: "Timing Belts",
    slug: "timing-belts",
    shortDesc: "Replacement before failure causes engine damage.",
    longDesc:
      "A broken timing belt can destroy an engine in seconds. We replace the belt, tensioner, and water pump as a package so everything wears together.",
  },
  {
    name: "Timing Chain",
    slug: "timing-chain",
    shortDesc: "Inspection and replacement of stretched or worn chains.",
    longDesc:
      "Unlike belts, timing chains are designed to last the life of the engine — but they can stretch. We diagnose chain wear and replace the chain, guides, and tensioner when needed.",
  },
  {
    name: "Oil Changes",
    slug: "oil-changes",
    shortDesc: "Fast, affordable oil change service in Springfield, OR — conventional or synthetic.",
    longDesc:
      "Looking for an oil change near you in Springfield or Eugene, OR? We change your oil and filter using the grade specified for your engine, and perform a multi-point inspection of brakes, tires, and fluids while we have the car. No appointment needed — walk-ins welcome.",
  },
  {
    name: "Power Steering Service",
    slug: "power-steering-service",
    shortDesc: "Fluid flush to maintain smooth, responsive steering.",
    longDesc:
      "Power steering fluid degrades and can damage seals and the power steering pump. We flush old fluid and refill with the correct fluid for your vehicle.",
  },
]

export const REVIEWS: {
  text: string
  author: string
  platform: string
}[] = [
  {
    text: "Great customer service and great prices only place I take my car",
    author: "Rebecca Yaroma",
    platform: "Google",
  },
  {
    text: "Fair prices, good service.",
    author: "Mike Flippin",
    platform: "Google",
  },
  {
    text: "You gave me hope there are still decent people out here.",
    author: "Judy Collis",
    platform: "Google",
  },
]

export const RATINGS = [
  { platform: "Google", score: 4.6, count: null },
  { platform: "SureCritic", score: 4.8, count: 136 },
  { platform: "Facebook", score: 5.0, count: 9 },
] as const

export const SERVICE_AREA = [
  { city: "Springfield", state: "OR", primary: true },
  { city: "Eugene", state: "OR", primary: false },
  { city: "Junction City", state: "OR", primary: false },
] as const

// TODO: replace with actual profile URLs before launch
export const SAME_AS = [
  "https://www.facebook.com/two-guys-automotive-repair", // TODO: confirm
  "https://www.yelp.com/biz/two-guys-automotive-repair-springfield", // TODO: confirm
  "https://surecritics.com/two-guys-automotive-repair", // TODO: confirm
  "https://www.bbb.org/us/or/springfield/profile/auto-repair/two-guys-automotive-repair", // TODO: confirm
]
