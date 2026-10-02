import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Two Guys Automotive Repair",
    short_name: "Two Guys Auto",
    description:
      "Auto repair shop in Springfield, OR — brakes, oil changes, transmission, diagnostics & more.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0d0d",
    theme_color: "#ffb020",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
