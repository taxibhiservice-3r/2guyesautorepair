import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema } from "@/lib/schemas"
import { NAP, REVIEWS, RATINGS, SAME_AS, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Reviews — Auto Repair Shop Springfield OR | Two Guys Automotive",
  description:
    "See why Springfield and Eugene drivers trust Two Guys Automotive Repair. 4.6★ Google, 4.8★ SureCritic (136 reviews), 5.0★ Facebook. Honest auto shop, fair prices.",
  alternates: { canonical: `${SITE_URL}/reviews` },
  openGraph: {
    title: "Reviews — Auto Repair Shop Springfield OR | Two Guys Automotive",
    description:
      "4.6★ Google · 4.8★ SureCritic (136 reviews) · 5.0★ Facebook. Springfield's trusted mechanic shop.",
    url: `${SITE_URL}/reviews`,
  },
}

const PLATFORM_LINKS = [
  {
    name: "Google",
    href: "https://g.co/kgs/two-guys-automotive-springfield", // TODO: confirm actual URL
    label: "Read on Google",
    score: 4.6,
    count: null,
  },
  {
    name: "SureCritic",
    href: SAME_AS[2],
    label: "Read on SureCritic",
    score: 4.8,
    count: 136,
  },
  {
    name: "Facebook",
    href: SAME_AS[0],
    label: "Read on Facebook",
    score: 5.0,
    count: 9,
  },
  {
    name: "Yelp",
    href: SAME_AS[1],
    label: "Read on Yelp",
    score: null,
    count: null,
  },
  {
    name: "BBB",
    href: SAME_AS[3],
    label: "View BBB Profile",
    score: null,
    count: null,
  },
]

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Reviews", url: `${SITE_URL}/reviews` },
        ])}
      />

      {/* Page header */}
      <section
        className="border-b px-4 py-14 sm:px-6"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex gap-2 text-sm" style={{ color: "var(--color-secondary)" }}>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>
                Reviews
              </li>
            </ol>
          </nav>

          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            What Customers Say
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Springfield drivers have been trusting Two Guys Automotive Repair with their
            vehicles. Here&apos;s what they have to say.
          </p>
        </div>
      </section>

      {/* Aggregate ratings */}
      <section
        aria-labelledby="ratings-heading"
        className="border-b px-4 py-12 sm:px-6"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="ratings-heading"
            className="mb-6 text-3xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Ratings Across Platforms
          </h2>

          <div
            className="grid gap-px border sm:grid-cols-3"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-border)",
            }}
          >
            {RATINGS.map((r) => (
              <div
                key={r.platform}
                className="flex flex-col gap-1 p-6"
                style={{ backgroundColor: "var(--color-panel)" }}
              >
                <p
                  className="text-4xl font-extrabold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-accent)" }}
                >
                  {r.score}
                  <span className="text-lg" style={{ color: "var(--color-secondary)" }}>
                    /5
                  </span>
                </p>
                <p
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
                >
                  {r.platform}
                </p>
                {r.count != null && (
                  <p className="text-sm" style={{ color: "var(--color-secondary)" }}>
                    {r.count} verified reviews
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="testimonials-heading"
        className="px-4 py-12 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="testimonials-heading"
            className="mb-8 text-3xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Customer Testimonials
          </h2>

          <div className="flex flex-col gap-px border" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-border)" }}>
            {REVIEWS.map((r) => (
              <blockquote
                key={r.author}
                className="p-8"
                style={{ backgroundColor: "var(--color-panel)" }}
              >
                <p
                  className="mb-4 text-xl leading-relaxed"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-primary)",
                    fontWeight: 600,
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-sm" style={{ color: "var(--color-secondary)" }}>
                  <cite
                    className="not-italic font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {r.author}
                  </cite>
                  {" · "}
                  {r.platform}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* External profiles */}
      <section
        aria-labelledby="profiles-heading"
        className="border-t px-4 py-12 sm:px-6"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="profiles-heading"
            className="mb-2 text-3xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Verify Our Reputation
          </h2>
          <p className="mb-8 text-sm" style={{ color: "var(--color-secondary)" }}>
            Read independent reviews directly on each platform.
          </p>

          <ul
            className="grid gap-px border sm:grid-cols-2 lg:grid-cols-3"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-border)",
            }}
            role="list"
          >
            {PLATFORM_LINKS.map((p) => (
              <li key={p.name} style={{ backgroundColor: "var(--color-panel)" }}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 transition-colors hover:bg-white/5"
                >
                  <div>
                    <p
                      className="font-bold"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
                    >
                      {p.name}
                    </p>
                    {p.score != null && (
                      <p className="text-sm" style={{ color: "var(--color-secondary)" }}>
                        <span style={{ color: "var(--color-accent)" }}>&#9733;</span>{" "}
                        {p.score}
                        {p.count != null && ` · ${p.count} reviews`}
                      </p>
                    )}
                  </div>
                  <span className="text-sm" style={{ color: "var(--color-accent)" }}>
                    {p.label} &#8599;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t px-4 py-14 text-center sm:px-6"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="mx-auto max-w-lg">
          <h2
            className="mb-3 text-4xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Experience It for Yourself
          </h2>
          <p className="mb-8 text-sm" style={{ color: "var(--color-secondary)" }}>
            Join hundreds of Springfield drivers who trust Two Guys Automotive Repair.
          </p>
          <a
            href={NAP.phone.href}
            className="inline-flex items-center rounded-sm px-8 py-3 text-base font-semibold transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-on-accent)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Call {NAP.phone.display}
          </a>
        </div>
      </section>
    </>
  )
}
