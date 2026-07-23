import { BtnIcon, scrollToCalendar } from './Buttons.jsx'

const PRICING = [
  {
    title: 'Capture',
    timeline: '7 days',
    label: 'WHAT YOU GET',
    features: [
      'Website intake assistant',
      'Case / service qualification & screening',
      'Jurisdiction / entity check',
      'Instant contact capture',
      'Consult booking into your GHL calendar',
    ],
  },
  {
    title: 'Gold',
    timeline: '15 days',
    label: 'EVERYTHING IN STARTER, PLUS',
    featured: true,
    features: [
      'AI voice receptionist that qualifies callers',
      'Replaces message-only answering service',
      'After-hours coverage',
      'Follow-up until the consult is booked',
      'Document-request reminders (accounting)',
    ],
  },
  {
    title: 'Platinum',
    timeline: '30 days',
    label: 'EVERYTHING IN GOLD, PLUS',
    features: [
      'Document intake & status-update AI',
      'Multi-practice / multi-service routing',
      'Client reactivation & advisory upsell',
      'Custom AI workflows',
      'Ongoing optimization',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <img
        src="/law-accounting/assets/boc-new-image/three-image.png"
        alt=""
        className="decor-img decor-pricing"
      />
      <div className="section-header">
        <span className="badge">PACKAGES</span>
        <h2 className="section-title">
          Start small. Scale when it pays for itself.
        </h2>
        <p className="section-subtitle">
          Every tier books into your existing GHL calendar.
          <br />
          Pick where to start most practices see the Starter pay for itself before Gold goes live.
        </p>
      </div>
      <div className="pricing-grid">
        {PRICING.map((tier) => (
          <div
            key={tier.title}
            className={`pricing-card${tier.featured ? ' featured' : ''}`}
          >
            {tier.featured && (
              <span className="most-popular">Most Popular</span>
            )}
            <h3 className="pricing-title">{tier.title}</h3>
            <p className="pricing-timeline">
              Timeline: <span className="pricing-timeline-value">{tier.timeline}</span>
            </p>
            <p className="pricing-label">{tier.label}</p>
            <ul className="pricing-features">
              {tier.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button type="button" className="btn-pill" onClick={scrollToCalendar}>
              Book a call
              <BtnIcon />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
