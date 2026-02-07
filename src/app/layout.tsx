import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blur — Local-only redaction for screenshots",
  description: "Blur is a local-only Chrome extension to redact sensitive info from screenshots and images. No uploads. No tracking.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
