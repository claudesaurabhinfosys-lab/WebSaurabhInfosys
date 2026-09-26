import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";

/** 1200 × 630: the size LinkedIn, WhatsApp, X and Facebook all crop to. */
export const OG_SIZE = { width: 1200, height: 630 };

const PUBLIC = path.join(process.cwd(), "public");

async function dataUri(file: string, resize?: { width: number; height: number }) {
  // Satori reads PNG/JPEG only, and our assets are mostly WebP — so every
  // image goes through sharp and comes out as a PNG data URI.
  const input = await readFile(path.join(PUBLIC, file));
  const image = resize ? sharp(input).resize({ ...resize, fit: "cover", position: "centre" }) : sharp(input);
  const png = await image.png().toBuffer();
  return `data:image/png;base64,${png.toString("base64")}`;
}

type Card = {
  /** Small label above the title, e.g. "Blog · AI Automation". */
  eyebrow: string;
  title: string;
  /** Optional public/ path of a real screenshot shown on the right. */
  image?: string;
};

/**
 * The one social-preview card every route uses, rendered at build time (the
 * site is a static export). Dark slab, brand-blue rule, white logo, the page's
 * own title — and, for case studies, the project's real cover shot.
 */
export async function ogCard({ eyebrow, title, image }: Card) {
  const logo = await dataUri("SaurabhInfosysWhite.png");
  const shot = image ? await dataUri(image, { width: 440, height: 520 }).catch(() => null) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          padding: 64,
          gap: 48,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori, not the DOM */}
          <img src={logo} width={176} height={108} alt="" />
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", width: 72, height: 6, backgroundColor: "#00a0e3" }} />
            <div style={{ display: "flex", fontSize: 26, color: "#9d9d9d", textTransform: "uppercase", letterSpacing: 2 }}>
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: shot ? 52 : 64,
                lineHeight: 1.1,
                fontWeight: 600,
                letterSpacing: -1,
              }}
            >
              {title}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#9d9d9d" }}>saurabhinfosys.com</div>
        </div>
        {shot ? (
          // eslint-disable-next-line @next/next/no-img-element -- Satori, not the DOM
          <img src={shot} width={440} height={502} alt="" style={{ borderRadius: 24, objectFit: "cover" }} />
        ) : null}
      </div>
    ),
    OG_SIZE,
  );
}
