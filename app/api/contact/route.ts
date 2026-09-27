import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { NAP } from "@/lib/constants"

// Configure these in Vercel environment variables:
//   RESEND_API_KEY  — your Resend API key (re_xxx)
//   CONTACT_EMAIL   — inbox that receives form submissions

type ContactPayload = {
  name: unknown
  email: unknown
  phone: unknown
  message: unknown
}

function sanitize(val: unknown): string {
  return typeof val === "string" ? val.trim().slice(0, 2000) : ""
}

function isValidEmail(val: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
}

export async function POST(req: NextRequest) {
  let body: ContactPayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const name = sanitize(body.name)
  const email = sanitize(body.email)
  const phone = sanitize(body.phone)
  const message = sanitize(body.message)

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL

  if (!apiKey || !contactEmail) {
    console.error("RESEND_API_KEY or CONTACT_EMAIL env vars are not set.")
    return NextResponse.json(
      { error: "Contact form is not configured. Please call us instead." },
      { status: 503 }
    )
  }

  try {
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: "Two Guys Auto Website <noreply@twoguyesautorepair.com>", // TODO: verify sending domain in Resend
      to: contactEmail,
      replyTo: email,
      subject: `New message from ${name} — ${NAP.name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "",
        "",
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Resend error:", err)
    return NextResponse.json(
      { error: "Failed to send. Please call us directly at (541) 744-3626." },
      { status: 500 }
    )
  }
}
