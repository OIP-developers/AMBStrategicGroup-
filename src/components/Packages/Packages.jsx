import packagesBg from '../../imagesfolder/Packages/packagesimg.png'
import starterIcon from '../../imagesfolder/Packages/startericon.png'
import goldIcon from '../../imagesfolder/Packages/goldicon.png'
import checkIcon from '../../imagesfolder/Packages/checkboximg.png'
import btnIcon from '../../imagesfolder/ambiconbutton.png'
import './Packages.css'

const packages = [
  {
    icon: starterIcon,
    title: 'Starter',
    desc: 'The essential AI systems every business needs to capture, engage, and qualify leads automatically.',
    timeline: 'Timeline: 7 days',
    popular: false,
    features: [
      'AI Lead Generation Funnel',
      'Knowledge Base Chatbot',
      'Lead Qualification Automation',
      'Customer Inquiry Handling',
      'Contact Capture Workflows',
    ],
  },
  {
    icon: goldIcon,
    title: 'Gold',
    desc: 'Multi-channel AI systems designed to generate conversations, qualify prospects, and book more meetings.',
    timeline: 'Timeline: 15 days',
    popular: true,
    features: [
      'Everything in Starter',
      'AI Voice Receptionist',
      'AI Outbound SDR',
      'AI Cold Email System',
      'Automated Follow-Up Sequences',
      'Meeting Booking Automation',
    ],
  },
  {
    icon: starterIcon,
    title: 'Premium',
    desc: 'A complete AI-powered workforce operating across sales, support, content, and business operations.',
    timeline: 'Timeline: 30 days',
    popular: false,
    features: [
      'Everything in Gold',
      'Content Repurposing Engine',
      'AI E-commerce Assistant',
      'Custom AI Solutions',
      'Advanced Workflow Automation',
      'Multi-Department AI Systems',
      'Ongoing Optimization & Support',
    ],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="packages">
      <div className="container">

        <div className="packages__header">
          <img src={packagesBg} alt="" className="packages__hero-img" />
          <h2 className="packages__title">Packages</h2>
        </div>

        <div className="packages__cards">
          {packages.map((pkg) => (
            <div key={pkg.title} className={`pkg-card ${pkg.popular ? 'pkg-card--popular' : ''}`}>
              {pkg.popular && (
                <div className="pkg-card__badge">Most Popular</div>
              )}

              <div className="pkg-card__header">
                <img src={pkg.icon} alt={pkg.title} className="pkg-card__icon" />
                <h3 className="pkg-card__title">{pkg.title}</h3>
              </div>

              <p className="pkg-card__desc">{pkg.desc}</p>

              <a href="#contact" className={`pkg-card__btn ${pkg.popular ? 'pkg-card__btn--popular' : ''}`} onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Talk To Us
                <img src={btnIcon} alt="" className="pkg-card__btn-icon" />
              </a>

              <ul className="pkg-card__features">
                {pkg.features.map((feature) => (
                  <li key={feature} className="pkg-card__feature">
                    <img src={checkIcon} alt="" className="pkg-card__check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="pkg-card__timeline">{pkg.timeline}</p>
            </div>
          ))}
        </div>

        <p className="packages__note">
          * Final price and timeline depend on workflow scope. After the audit call, we'll send a written proposal — that's where everything is confirmed. No surprises after.
        </p>

      </div>
    </section>
  )
}
