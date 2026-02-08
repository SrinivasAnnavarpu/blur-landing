import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Blur",
  description:
    "Privacy Policy for Blur (bluryourpics.com) — local-only image redaction Chrome extension.",
};

export default function PrivacyPage() {
  return (
    <main className="container">
      <div className="nav">
        <div className="brand" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src="/blur.svg" alt="Blur" width={26} height={26} style={{ display: "block" }} />
            <span>Blur</span>
          </Link>
        </div>
        <div className="navlinks">
          <Link href="/">Home</Link>
        </div>
      </div>

      <section className="section">
        <h1 className="h1" style={{ fontSize: 34 }}>
          Privacy Policy
        </h1>
        <p className="p" style={{ opacity: 0.9 }}>
          Blur is built for privacy. This extension processes images locally in your browser.
        </p>

        <div className="card" style={{ marginTop: 12 }}>
          <div className="cardTitle">What Blur does</div>
          <div className="cardBody">
            <ul>
              <li>Processes images locally on your device (on-device / in-browser)</li>
              <li>Lets you add redaction boxes and export a redacted PNG</li>
            </ul>
          </div>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div className="cardTitle">What Blur does not do</div>
          <div className="cardBody">
            <ul>
              <li>No uploads of your images to our servers</li>
              <li>No tracking or analytics inside the extension</li>
              <li>No accounts / sign-up</li>
              <li>No selling of user data</li>
            </ul>
          </div>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div className="cardTitle">Data collection</div>
          <div className="cardBody">
            <p className="p">
              The Blur extension does not collect personal data from users.
              Chrome Web Store may provide aggregate install and active-user metrics to developers.
            </p>
          </div>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div className="cardTitle">Contact</div>
          <div className="cardBody">
            <p className="p">
              If you have questions about this privacy policy, contact us via the Chrome Web Store listing developer contact information.
            </p>
          </div>
        </div>

        <p className="p" style={{ fontSize: 13, opacity: 0.8 }}>
          Last updated: {new Date().toISOString().slice(0, 10)}
        </p>
      </section>

      <div className="hr" />
      <div className="footer">
        <div>© {new Date().getFullYear()} Blur</div>
        <div>
          <span style={{ marginRight: 10 }}>Local-only. No uploads. No tracking.</span>
        </div>
      </div>
    </main>
  );
}
