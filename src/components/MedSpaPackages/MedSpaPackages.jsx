import arrowImg from '../../imagesfolder/medicaldental/herosection/buttonicon.png'
import leftStarImg from '../../imagesfolder/medicaldental/Packages section/leftstarimg.png'
import boxStarImg from '../../imagesfolder/medicaldental/Packages section/boxstar.png'
import './MedSpaPackages.css'

const packages = [
  {
    key: 'starter',
    title: 'Starter',
    timeline: 'Timeline: 7 days',
    featuresHeading: 'WHAT YOU GET',
    features: [
      'Instagram + website lead capture',
      'AI chatbot on treatment menu & pricing',
      'Treatment, budget & timing qualification',
      'Sub-60-second lead response',
      'Consult booking into your GHL calendar',
    ],
    variant: 'light',
  },
  {
    key: 'gold',
    title: 'Gold',
    timeline: 'Timeline: 15 days',
    featuresHeading: 'EVERYTHING IN STARTER, PLUS',
    features: [
      'AI voice receptionist for missed calls',
      'No-show & deposit reminder flows',
      'Dormant-client reactivation (3-month cycle)',
      'Outbound Follow-Up sequences',
      'Review & referral requests',
    ],
    variant: 'highlight',
    popular: true,
  },
  {
    key: 'platinum',
    title: 'Platinum',
    timeline: 'Timeline: 30 days',
    featuresHeading: 'EVERYTHING IN GOLD, PLUS',
    features: [
      'Content repurposing (before/afters, education)',
      'Membership & package upsell flows',
      'Multi-location systems',
      'Custom AI workflows',
      'Ongoing optimization',
    ],
    variant: 'light',
  },
]

export default function MedSpaPackages() {
  const scroll = (e) => {
    e.preventDefault()
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="packages" className="ms-pkg">
      <img src={leftStarImg} alt="" className="ms-pkg__leftstar" />
      <div className="container">
        <span className="ms-pkg__tag">Packages</span>
        <h2 className="ms-pkg__title">Start Small. Scale When It Pays for Itself.</h2>
        <p className="ms-pkg__subtitle">
          Every tier books into your existing GHL calendar. Pick where to start.
          Most practices see the Starter package pay for itself before upgrading to Gold.
        </p>

        <div className="ms-pkg__cards">
          {packages.map((pkg) => (
            <div
              key={pkg.key}
              className={`ms-pkg__card ms-pkg__card--${pkg.variant}`}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width) * 100
                e.currentTarget.style.setProperty('--hover-origin-x', `${x}%`)
              }}
            >
              {pkg.popular && <span className="ms-pkg__badge">Most Popular</span>}
              <div className="ms-pkg__card-inner">
                <h3 className="ms-pkg__card-title">{pkg.title}</h3>

                <div className="ms-pkg__timeline">
                  <img src={boxStarImg} alt="" className="ms-pkg__timeline-icon" />
                  {pkg.timeline}
                </div>

                <h4 className={`ms-pkg__features-heading ${pkg.variant === 'highlight' ? 'ms-pkg__features-heading--solid' : ''}`}>
                  {pkg.featuresHeading}
                </h4>

                <ul className="ms-pkg__features">
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <a
                  href="#book-a-call"
                  className={`ms-pkg__btn ${pkg.variant === 'highlight' ? 'ms-pkg__btn--grad' : 'ms-pkg__btn--white'}`}
                  onClick={scroll}
                >
                  <span className="ms-pkg__btn-text">Book a Call</span>
                  <span className="ms-pkg__btn-circle">
                    <span
                      className="ms-pkg__btn-arrow"
                      style={{ WebkitMaskImage: `url(${arrowImg})`, maskImage: `url(${arrowImg})` }}
                    />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
