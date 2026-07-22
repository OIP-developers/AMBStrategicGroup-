import { BookAFreeConsultation } from './Buttons.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Every missed call is a signed client</p>
        <h1 className="hero-title">For the firm that answered.</h1>
        <p className="hero-desc">
          AMB builds AI intake and client-communication systems for law and
          accounting firms — answering, qualifying, and booking consults
          24/7, while filtering out the inquiries that waste your team's
          time. Confidentiality and governance built in.
        </p>
        <BookAFreeConsultation className="hero-cta" />
        <div className="hero-badges">
          <span className="hero-badge">
            <img src="/law-accounting/assets/check-icontext.png" alt="" className="check" /> Live in 7 Days
          </span>
          <span className="hero-badge">
            <img src="/law-accounting/assets/check-icontext.png" alt="" className="check" /> Confidential by Design
          </span>
          <span className="hero-badge">
            <img src="/law-accounting/assets/check-icontext.png" alt="" className="check" /> Practitioner-led
          </span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-visual-inner">
          <img
            src="/law-accounting/assets/hero-gavel-scale.png"
            alt="Scales of justice and gavel"
            className="hero-visual-img"
          />
          <img
            src="/law-accounting/assets/figma-star.png"
            alt=""
            className="decor-img decor-hero-star"
          />
          <span className="hero-chip chip-1">
            <span className="chip-icon">✦</span>
            A client has shared the case details for review.
          </span>
          <span className="hero-chip chip-2">
            <span className="chip-icon">✦</span>
            I've scheduled a call with the new client.
          </span>
          <span className="hero-chip chip-3">
            <span className="chip-icon">✦</span>
            Client wants to file a complaint.
          </span>
        </div>
      </div>
    </section>
  )
}
