import Link from "next/link"
import { NAP } from "@/lib/constants"

type CtaBlockProps = {
  heading: string
  subtext: string
}

export function CtaBlock({ heading, subtext }: CtaBlockProps) {
  return (
    <section
      className="border-t px-4 py-14 text-center sm:px-6"
      style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
    >
      <div className="mx-auto max-w-lg">
        <h2
          className="mb-3 text-4xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
        >
          {heading}
        </h2>
        <p className="mb-8 text-sm" style={{ color: "var(--color-secondary)" }}>
          {subtext}
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm border px-8 py-3 text-base font-semibold transition-colors hover:border-white hover:text-white"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-secondary)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  )
}
