export default function Home() {
  return (
    <main className="container">
      <div className="nav">
        <div className="brand" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/blur.svg" alt="Blur" width={26} height={26} style={{ display: "block" }} />
          <span>Blur</span>
        </div>
        <div className="navlinks">
          <a href="#privacy">Privacy</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>

      <section className="hero">
        <h1 className="h1">Redact screenshots locally.</h1>
        <p className="sub">
          Blur is a local-only Chrome extension to quickly hide sensitive information in screenshots and images.
          No uploads. No tracking.
        </p>

        <div className="ctaRow">
          {/* Replace with your Chrome Web Store URL once published */}
          <a className="btn btnPrimary" href="#">
            Get Blur (Chrome Web Store)
          </a>
          <a className="btn" href="#privacy">Read privacy</a>
        </div>

        <div className="grid">
          <div className="card">
            <div className="cardTitle">Local-only</div>
            <div className="cardBody">Your images are processed on-device. Nothing is uploaded.</div>
          </div>
          <div className="card">
            <div className="cardTitle">Fast redaction</div>
            <div className="cardBody">Add, move, resize black bars. Preview and export in seconds.</div>
          </div>
          <div className="card">
            <div className="cardTitle">Creator-friendly</div>
            <div className="cardBody">Designed for sharing screenshots safely—no login required.</div>
          </div>
        </div>
      </section>

      <section className="section" id="privacy">
        <h2 className="h2">Privacy</h2>
        <p className="p">
          Blur is built for privacy.
        </p>
        <div className="card" style={{ marginTop: 12 }}>
          <div className="cardTitle">What we do</div>
          <div className="cardBody">
            <ul>
              <li>Process images locally on your device</li>
              <li>Export a redacted image you can share</li>
            </ul>
          </div>
        </div>
        <div className="card" style={{ marginTop: 12 }}>
          <div className="cardTitle">What we don’t do</div>
          <div className="cardBody">
            <ul>
              <li>No uploads</li>
              <li>No tracking / analytics</li>
              <li>No accounts / sign-up</li>
              <li>No saving of your images by Blur</li>
            </ul>
          </div>
        </div>
        <p className="p" style={{ fontSize: 13 }}>
          Note: Chrome Web Store may provide aggregate install/active-user metrics to developers.
        </p>
      </section>

      <section className="section" id="faq">
        <h2 className="h2">FAQ</h2>
        <div className="card" style={{ marginTop: 12 }}>
          <div className="cardTitle">Does Blur work offline?</div>
          <div className="cardBody">Yes. Blur is local-only and does not require a server.</div>
        </div>
        <div className="card" style={{ marginTop: 12 }}>
          <div className="cardTitle">How do you know how many users you have?</div>
          <div className="cardBody">
            We rely on Chrome Web Store’s aggregated install and active-user metrics. Blur itself does not collect analytics.
          </div>
        </div>
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
