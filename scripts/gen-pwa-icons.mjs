import { PNG } from "pngjs";
import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "public", "pwa");
fs.mkdirSync(outDir, { recursive: true });

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function drawRoundedRect(png, x, y, w, h, r, color) {
  const { width, height, data } = png;
  const rr = Math.max(0, Math.min(r, Math.floor(Math.min(w, h) / 2)));

  function setPixel(px, py) {
    if (px < 0 || py < 0 || px >= width || py >= height) return;
    const idx = (width * py + px) << 2;
    data[idx] = color.r;
    data[idx + 1] = color.g;
    data[idx + 2] = color.b;
    data[idx + 3] = 255;
  }

  const x0 = x;
  const y0 = y;
  const x1 = x + w - 1;
  const y1 = y + h - 1;

  for (let py = y0; py <= y1; py++) {
    for (let px = x0; px <= x1; px++) {
      const inLeft = px < x0 + rr;
      const inRight = px > x1 - rr;
      const inTop = py < y0 + rr;
      const inBottom = py > y1 - rr;

      let ok = true;
      if (inLeft && inTop) {
        const dx = px - (x0 + rr);
        const dy = py - (y0 + rr);
        ok = dx * dx + dy * dy <= rr * rr;
      } else if (inRight && inTop) {
        const dx = px - (x1 - rr);
        const dy = py - (y0 + rr);
        ok = dx * dx + dy * dy <= rr * rr;
      } else if (inLeft && inBottom) {
        const dx = px - (x0 + rr);
        const dy = py - (y1 - rr);
        ok = dx * dx + dy * dy <= rr * rr;
      } else if (inRight && inBottom) {
        const dx = px - (x1 - rr);
        const dy = py - (y1 - rr);
        ok = dx * dx + dy * dy <= rr * rr;
      }

      if (ok) setPixel(px, py);
    }
  }
}

function writeIcon({ size, filename, maskable }) {
  const bg = hexToRgb("#0b0b0f");
  const fg = hexToRgb("#ffffff");

  const png = new PNG({ width: size, height: size });
  // fill bg
  for (let i = 0; i < png.data.length; i += 4) {
    png.data[i] = bg.r;
    png.data[i + 1] = bg.g;
    png.data[i + 2] = bg.b;
    png.data[i + 3] = 255;
  }

  // Draw a simple "blur bar" mark.
  // For maskable icons, keep content well inset.
  const inset = maskable ? Math.floor(size * 0.22) : Math.floor(size * 0.16);
  const markW = size - inset * 2;
  const barH = Math.floor(size * 0.10);
  const gap = Math.floor(size * 0.06);
  const top = Math.floor((size - (barH * 3 + gap * 2)) / 2);

  const radius = Math.floor(barH / 2);
  drawRoundedRect(png, inset, top, markW, barH, radius, fg);
  drawRoundedRect(png, inset, top + barH + gap, markW, barH, radius, fg);
  drawRoundedRect(png, inset, top + (barH + gap) * 2, markW, barH, radius, fg);

  const outPath = path.join(outDir, filename);
  fs.writeFileSync(outPath, PNG.sync.write(png));
  console.log("wrote", outPath);
}

writeIcon({ size: 192, filename: "icon-192.png", maskable: false });
writeIcon({ size: 512, filename: "icon-512.png", maskable: false });
writeIcon({ size: 512, filename: "maskable-512.png", maskable: true });
