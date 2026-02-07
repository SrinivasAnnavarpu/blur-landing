import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blur Your Pics — local-only redaction",
  description:
    "Blur sensitive information from screenshots and photos — no uploads. Fast, private, and local-only.",
  applicationName: "Blur Your Pics",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Blur",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
