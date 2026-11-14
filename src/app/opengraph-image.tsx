import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { highlights, profile } from "@/content/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const portrait = await readFile(join(process.cwd(), "src/assets/og-portrait.jpg"), "base64");
const portraitSrc = `data:image/jpeg;base64,${portrait}`;

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#060b16",
          color: "#e8edf5",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10, background: "#f2877c" }} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1, paddingRight: 48 }}>
          <div style={{ fontSize: 24, color: "#f2877c", letterSpacing: 3, textTransform: "uppercase" }}>
            {profile.role}
          </div>
          <div style={{ fontSize: 80, fontWeight: 700, marginTop: 20, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 36, color: "#f8b4ac", marginTop: 20, lineHeight: 1.25 }}>{profile.headline}</div>
          <div style={{ display: "flex", marginTop: "auto", gap: 44 }}>
            {highlights.map((h) => (
              <div key={h.label} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 40, fontWeight: 700 }}>{h.value}</div>
                <div style={{ fontSize: 17, color: "#a3b0c5", maxWidth: 170 }}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            width={300}
            height={300}
            alt=""
            style={{ borderRadius: 20, border: "2px solid #2f4166" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
