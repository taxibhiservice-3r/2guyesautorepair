import Link from "next/link"

export function ServiceAreaLinks() {
  return (
    <section
      className="border-t px-4 py-12 sm:px-6"
      style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
    >
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-3 text-2xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
        >
          Serving Springfield, Eugene &amp; Junction City, OR
        </h2>
        <p className="mb-6 text-sm" style={{ color: "var(--color-secondary)" }}>
          Our shop is in Springfield — customers from Eugene, Junction City, and across Lane County
          rely on us for honest service and fair pricing.
        </p>
        <div
          className="grid gap-px border sm:grid-cols-3"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-border)",
          }}
        >
          <Link
            href="/locations/springfield-or-auto-repair"
            className="block p-5 transition-colors hover:bg-white/5"
            style={{ backgroundColor: "var(--color-panel)" }}
          >
            <p
              className="text-lg font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-accent)" }}
            >
              Springfield, OR
            </p>
            <p className="mt-1 text-xs" style={{ color: "var(--color-secondary)" }}>
              Our shop — 191 N 39th St
            </p>
          </Link>
          <Link
            href="/locations/eugene-or-auto-repair"
            className="block p-5 transition-colors hover:bg-white/5"
            style={{ backgroundColor: "var(--color-panel)" }}
          >
            <p
              className="text-lg font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Eugene, OR
            </p>
            <p className="mt-1 text-xs" style={{ color: "var(--color-secondary)" }}>
              ~15 min drive west via I-105
            </p>
          </Link>
          <Link
            href="/locations/junction-city-or-auto-repair"
            className="block p-5 transition-colors hover:bg-white/5"
            style={{ backgroundColor: "var(--color-panel)" }}
          >
            <p
              className="text-lg font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Junction City, OR
            </p>
            <p className="mt-1 text-xs" style={{ color: "var(--color-secondary)" }}>
              ~25 min drive north via OR-99
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
