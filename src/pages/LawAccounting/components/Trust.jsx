const TRUST_CARDS = [
  {
    title: 'Confidential By Design',
    desc: 'Privilege- and conflict-aware handling.',
  },
  {
    title: '7-Day Launch',
    desc: 'Starter system live in a week.',
  },
  {
    title: 'Qualifies, Never Advises',
    desc: 'Screens intake, routes to you.',
  },
]

export default function Trust() {
  return (
    <section id="trust" className="trust">
      <img
        src="/law-accounting/assets/figma-star.png"
        alt=""
        className="decor-img decor-star-a"
      />
      <div className="trust-grid">
        <div className="trust-text">
          <span className="badge">Why AMB</span>
          <h2 className="section-title">Why Firms Trust AMB</h2>
          <p>
            Confidentiality and privilege aren't features — they're the
            foundation. We build conflict-aware, governed data handling that
            answers the objection your team raises first.
          </p>
          <p>
            AMB is a woman-owned, founder-led consulting firm led by Azra
            Rehan, with practitioner experience across Accenture, Guidehouse,
            Bank of America, and United Bank. We've delivered in regulated
            financial and public-sector environments — the AI captures,
            qualifies, and books, but it never advises.
          </p>
          <p className="trust-tagline">
            Not theory. Not another chatbot. Not hype.
          </p>
        </div>
        <ul className="trust-list">
          {TRUST_CARDS.map((c) => (
            <li key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
