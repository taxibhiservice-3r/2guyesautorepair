"use client"

import { useState, useRef } from "react"

type FormState = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState("submitting")
    setErrorMsg("")

    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? "Something went wrong. Please call us instead.")
      }

      setState("success")
      formRef.current?.reset()
    } catch (err) {
      setState("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
      aria-label="Contact form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" id="name" name="name" type="text" required />
        <Field label="Phone (optional)" id="phone" name="phone" type="tel" />
      </div>

      <Field
        label="Email"
        id="email"
        name="email"
        type="email"
        required
      />

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium"
          style={{ color: "var(--color-primary)" }}
        >
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-sm border px-3 py-2 text-sm transition-colors"
          style={{
            backgroundColor: "var(--color-panel)",
            borderColor: "var(--color-border)",
            color: "var(--color-primary)",
          }}
          placeholder="Describe what your vehicle needs…"
        />
      </div>

      {state === "error" && (
        <p role="alert" className="text-sm" style={{ color: "#f87171" }}>
          {errorMsg}
        </p>
      )}

      {state === "success" && (
        <p role="status" className="text-sm" style={{ color: "#4ade80" }}>
          Message sent — we&apos;ll be in touch soon.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-sm px-6 py-3 text-sm font-semibold transition-opacity disabled:opacity-50"
        style={{
          backgroundColor: "var(--color-accent)",
          color: "var(--color-on-accent)",
        }}
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  )
}

function Field({
  label,
  id,
  name,
  type,
  required,
}: {
  label: string
  id: string
  name: string
  type: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium"
        style={{ color: "var(--color-primary)" }}
      >
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border px-3 py-2 text-sm transition-colors"
        style={{
          backgroundColor: "var(--color-panel)",
          borderColor: "var(--color-border)",
          color: "var(--color-primary)",
        }}
      />
    </div>
  )
}
