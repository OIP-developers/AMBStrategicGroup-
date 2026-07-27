import arrowImg from '../../imagesfolder/medicaldental/herosection/buttonicon.png'
import leftStarImg from '../../imagesfolder/medicaldental/Packages section/leftstarimg.png'
import boxStarImg from '../../imagesfolder/medicaldental/Packages section/boxstar.png'
import './MedDentalPackages.css'

const packages = [
  {
    key: 'starter',
    title: 'Starter',
    timeline: 'Timeline: 7 days',
    featuresHeading: 'WHAT YOU GET',
    features: [
      'Website + chat lead capture',
      'AI chatbot: hours, insurance,',
      'new-patient FAQs',
      'New-patient qualification',
      'Instant contact capture',
      'Booking into your GHL calendar',
    ],
    variant: 'light',
  },
  {
    key: 'gold',
    title: 'Gold',
    timeline: 'Timeline: 15 days',
    featuresHeading: 'EVERYTHING IN STARTER, PLUS',
    features: [
      'AI voice receptionist (calls + after-hours)',
      'Booking, reschedule & cancellation handling',
      'No-show reduction sequences',
      'Automated recall and recare campaigns',
      'Follow-Up until booked',
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
      'Multi-provider & multi-location routing',
      'Treatment-plan Follow-Ups',
      'Review generation engine',
      'Custom AI workflows',
      'Ongoing optimization',
    ],
    variant: 'light',
  },
]

export default function MedDentalPackages() {
  const scroll = (e) => {
    e.preventDefault()
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="packages" className="md-pkg">
      <img src={leftStarImg} alt="" className="md-pkg__leftstar" />
      <div className="container">
        <span className="md-pkg__tag">Packages</span>
        <h2 className="md-pkg__title">Start Small. Scale When It Pays for Itself.</h2>
        <p className="md-pkg__subtitle">
          Every tier books into your existing GHL calendar. Pick where to start.
          Most practices see the Starter package pay for itself before Gold goes live.
        </p>

        <div className="md-pkg__cards">
          {packages.map((pkg) => (
            <div
              key={pkg.key}
              className={`md-pkg__card md-pkg__card--${pkg.variant}`}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width) * 100
                e.currentTarget.style.setProperty('--hover-origin-x', `${x}%`)
              }}
            >
              {pkg.popular && <span className="md-pkg__badge">Most Popular</span>}
              <div className="md-pkg__card-inner">
                <h3 className="md-pkg__card-title">{pkg.title}</h3>

                <div className="md-pkg__timeline">
                  <img src={boxStarImg} alt="" className="md-pkg__timeline-icon" />
                  {pkg.timeline}
                </div>

                <h4 className={`md-pkg__features-heading ${pkg.variant === 'highlight' ? 'md-pkg__features-heading--solid' : ''}`}>
                  {pkg.featuresHeading}
                </h4>

                <ul className="md-pkg__features">
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <a
                  href="#book-a-call"
                  className={`md-pkg__btn ${pkg.variant === 'highlight' ? 'md-pkg__btn--grad' : 'md-pkg__btn--white'}`}
                  onClick={scroll}
                >
                  <span className="md-pkg__btn-text">Book a Call</span>
                  <span className="md-pkg__btn-circle">
                    <span
                      className="md-pkg__btn-arrow"
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
