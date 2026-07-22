import arrowImg from '../../imagesfolder/medicaldental/herosection/buttonicon.png'
import leftStarImg from '../../imagesfolder/medicaldental/Packages section/leftstarimg.png'
import './MedDentalPackages.css'

const timelineIcon = () => (
  <svg width="17.7" height="17.7" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="pkgTimelineGrad" x1="0" y1="0" x2="24" y2="0">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#008ef9" />
      </linearGradient>
    </defs>
    <path d="M12 2l2.6 7.2H22l-6 4.4 2.3 7.4L12 16.8 5.7 21l2.3-7.4-6-4.4h7.4L12 2z" fill="url(#pkgTimelineGrad)" />
  </svg>
)

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
      'Automated recall / recare campaigns',
      'Follow-up until booked',
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
      'Treatment-plan follow-ups',
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
        <h2 className="md-pkg__title">Start small. Scale when it pays for itself.</h2>
        <p className="md-pkg__subtitle">
          Every tier books into your existing GHL calendar. Pick where to start.
          most practices see the Starter pay for itself before Gold goes live.
        </p>

        <div className="md-pkg__cards">
          {packages.map((pkg) => (
            <div key={pkg.key} className={`md-pkg__card md-pkg__card--${pkg.variant}`}>
              {pkg.popular && <span className="md-pkg__badge">Most Popular</span>}
              <div className="md-pkg__card-inner">
                <h3 className="md-pkg__card-title">{pkg.title}</h3>

                <div className="md-pkg__timeline">
                  {timelineIcon()}
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
                  Book A Call
                  <span className="md-pkg__btn-circle">
                    <img src={arrowImg} alt="" className={pkg.variant === 'highlight' ? '' : 'md-pkg__btn-arrow--white'} />
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
