import { NAP, HOURS, SERVICES, REVIEWS, RATINGS, SAME_AS, SERVICE_AREA, SITE_URL } from "./constants"

function buildOpeningHours() {
  return HOURS.filter((h) => h.opens !== null).map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.opens,
    closes: h.closes,
  }))
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE_URL}/#business`,
    name: NAP.name,
    url: SITE_URL,
    telephone: NAP.phone.tel,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
    image: [
      {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.address.street,
      addressLocality: NAP.address.city,
      addressRegion: NAP.address.state,
      postalCode: NAP.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: buildOpeningHours(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "136",
      bestRating: "5",
      worstRating: "1",
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    })),
    description:
      "Two Guys Automotive Repair is a trusted auto repair shop and mechanic garage in Springfield, OR serving Springfield, Eugene, and Junction City. We offer oil changes, brake service, transmission service, auto diagnostics, timing belts, fuel injection, coolant service, and power steering repair.",
    sameAs: SAME_AS,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    hasMap: NAP.mapUrl,
    areaServed: SERVICE_AREA.map((a) => ({
      "@type": "City",
      name: a.city,
      ...(a.primary
        ? { sameAs: "https://en.wikipedia.org/wiki/Springfield,_Oregon" }
        : {}),
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Repair Services",
      itemListElement: [
        { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Brake Repair", url: `${SITE_URL}/services/brake-repair-springfield-or` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Oil Change", url: `${SITE_URL}/services/oil-change-springfield-or` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Transmission Service", url: `${SITE_URL}/services/transmission-service-springfield-or` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Auto Diagnostics", url: `${SITE_URL}/services/auto-diagnostics-springfield-or` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Timing Belt & Chain", url: `${SITE_URL}/services/timing-belt-chain-springfield-or` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Coolant System Service", url: `${SITE_URL}/services/coolant-system-service-springfield-or` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Fuel Injection Service", url: `${SITE_URL}/services/fuel-injection-service-springfield-or` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Power Steering Service", url: `${SITE_URL}/services/power-steering-service-springfield-or` } },
      ],
    },
  }
}

export function buildFaqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildServicePageSchema(
  name: string,
  url: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url,
    description,
    provider: {
      "@type": "AutoRepair",
      name: NAP.name,
      url: SITE_URL,
      telephone: NAP.phone.tel,
      address: {
        "@type": "PostalAddress",
        streetAddress: NAP.address.street,
        addressLocality: NAP.address.city,
        addressRegion: NAP.address.state,
        postalCode: NAP.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: SERVICE_AREA.map((a) => ({ "@type": "City", name: a.city })),
  }
}

export function buildLocationPageSchema(city: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: NAP.name,
    url: SITE_URL,
    telephone: NAP.phone.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.address.street,
      addressLocality: NAP.address.city,
      addressRegion: NAP.address.state,
      postalCode: NAP.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: buildOpeningHours(),
    areaServed: { "@type": "City", name: city },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "136",
      bestRating: "5",
      worstRating: "1",
    },
  }
}

export function buildServiceSchema(service: (typeof SERVICES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.longDesc,
    url: `${SITE_URL}/services#${service.slug}`,
    provider: {
      "@type": "AutoRepair",
      name: NAP.name,
      url: SITE_URL,
      telephone: NAP.phone.tel,
      address: {
        "@type": "PostalAddress",
        streetAddress: NAP.address.street,
        addressLocality: NAP.address.city,
        addressRegion: NAP.address.state,
        postalCode: NAP.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: SERVICE_AREA.map((a) => ({ "@type": "City", name: a.city })),
  }
}
