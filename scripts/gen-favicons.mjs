// Generates app/icon.png, app/apple-icon.png, and app/favicon.ico from public/logo.webp
import sharp from "sharp"
import { readFileSync, writeFileSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dir = dirname(fileURLToPath(import.meta.url))
const root = join(__dir, "..")
const src = join(root, "public", "logo.webp")
const appDir = join(root, "app")

async function generatePng(size, outPath) {
  await sharp(src)
    .resize(size, size, { fit: "contain", background: { r: 20, g: 20, b: 20, alpha: 1 } })
    .png()
    .toFile(outPath)
  console.log(`✓ ${outPath.replace(root, "")} (${size}x${size})`)
}

async function generateIco(pngPaths, outPath) {
  const images = pngPaths.map((p) => readFileSync(p))

  // ICO header: 6 bytes
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)           // reserved
  header.writeUInt16LE(1, 2)           // type: 1 = icon
  header.writeUInt16LE(images.length, 4)

  // Directory entries: 16 bytes each
  let offset = 6 + images.length * 16
  const dirs = images.map((img, i) => {
    const size = i === 0 ? 16 : 32     // first is 16x16, second is 32x32
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size, 0)          // width  (0 = 256)
    entry.writeUInt8(size, 1)          // height (0 = 256)
    entry.writeUInt8(0, 2)             // color count
    entry.writeUInt8(0, 3)             // reserved
    entry.writeUInt16LE(1, 4)          // color planes
    entry.writeUInt16LE(32, 6)         // bits per pixel
    entry.writeUInt32LE(img.length, 8) // bytes in resource
    entry.writeUInt32LE(offset, 12)    // offset from start of file
    offset += img.length
    return entry
  })

  const ico = Buffer.concat([header, ...dirs, ...images])
  writeFileSync(outPath, ico)
  console.log(`✓ ${outPath.replace(root, "")} (ICO with ${images.length} sizes)`)
}

async function main() {
  // 1. 32x32 — app/icon.png (browser tab icon)
  const icon32 = join(appDir, "icon.png")
  await generatePng(32, icon32)

  // 2. 16x16 — needed for ICO
  const tmp16 = join(appDir, "_icon16.png")
  await generatePng(16, tmp16)

  // 3. 180x180 — app/apple-icon.png (iOS home screen)
  await generatePng(180, join(appDir, "apple-icon.png"))

  // 4. favicon.ico (16x16 + 32x32 embedded PNGs)
  await generateIco([tmp16, icon32], join(appDir, "favicon.ico"))

  // Clean up temp file
  const { unlinkSync } = await import("fs")
  unlinkSync(tmp16)

  console.log("\nAll favicons generated.")
}

main().catch((err) => { console.error(err); process.exit(1) })
