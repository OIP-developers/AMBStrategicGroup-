import starImg      from '../../imagesfolder/aboutpageimgs/outmodel/star.png'
import vectorBoxImg from '../../imagesfolder/businesssolutionspage/businesssection/vectorboximg.png'
import btnIcon    from '../../imagesfolder/herosectionimg/ambbuttonicon.png'
import img672     from '../../imagesfolder/businesssolutionspage/businesssection/Group 48097672.png'
import img690     from '../../imagesfolder/businesssolutionspage/businesssection/Group 48097690.png'
import img693     from '../../imagesfolder/businesssolutionspage/businesssection/Group 48097693.png'
import img694     from '../../imagesfolder/businesssolutionspage/businesssection/Group 48097694.png'
import img696     from '../../imagesfolder/businesssolutionspage/businesssection/Group 48097696.png'
import './BusinessSection.css'

const topCards = [
  {
    title:    'Enterprise Transformation',
    desc:     'End-to-end program delivery across regulated environments — financial services, public sector, and global nonprofits. Cloud migrations, legacy modernization, and operating-model redesign.',
    img:      img672,
    imgClass: 'bsection__img--enterprise',
    hasStar:  false,
  },
  {
    title:    'AI Automation',
    desc:     'Workflow automation, low-code platforms, and intelligent process redesign. Reduce manual effort, accelerate turnaround, and surface decision-grade insights from your operational data.',
    img:      img690,
    imgClass: 'bsection__img--ai-automation',
    hasStar:  false,
  },
  {
    title:    'Custom AI Solutions',
    desc:     "Tailored AI agents, copilots, and analytics built for your industry's risk and regulatory posture. From discovery to deployment with the governance baked in.",
    img:      img693,
    imgClass: 'bsection__img--custom-ai',
    hasStar:  true,
  },
]

const bottomCards = [
  {
    title:    'Program & Project Delivery',
    desc:     'Executive-grade program management for complex, cross-functional initiatives. Structured execution, risk mitigation, and stakeholder alignment from kickoff to benefits realization.',
    img:      img694,
    imgClass: 'bsection__img--program',
    wrapClass: 'bsection__card-img-wrap--program',
    hasStar:  false,
  },
  {
    title:    'Strategic Advisory',
    desc:     'Operational diagnostics, organizational design, and data-driven roadmaps. We bring structure to fragmented organizations and clarity to ambiguous mandates.',
    img:      img696,
    imgClass: 'bsection__img--strategic',
    wrapClass: 'bsection__card-img-wrap--strategic',
    hasStar:  false,
  },
]

export default function BusinessSection() {
  return (
    <section className="bsection">
      <div className="container">

        {/* Header */}
        <div className="bsection__header">
          <img src={starImg} alt="" className="bsection__star" />
          <h2 className="bsection__title">Business Solutions We Provide</h2>
        </div>

        {/* Top row — 3 cards */}
        <div className="bsection__row bsection__row--top">
          {topCards.map((card) => (
            <div key={card.title} className="bsection__card">
              <div className="bsection__card-header">
                <h3 className="bsection__card-title">{card.title}</h3>
                {card.hasStar && (
                  <img src={vectorBoxImg} alt="" className="bsection__card-star" />
                )}
              </div>
              <p className="bsection__card-desc">{card.desc}</p>
              <div className="bsection__card-img-wrap">
                <img src={card.img} alt={card.title} className={`bsection__card-img ${card.imgClass}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row — 2 cards */}
        <div className="bsection__row bsection__row--bottom">
          {bottomCards.map((card) => (
            <div key={card.title} className="bsection__card bsection__card--bottom">
              {/* Left: text content */}
              <div className="bsection__card-content">
                <h3 className="bsection__card-title">{card.title}</h3>
                <p className="bsection__card-desc">{card.desc}</p>
              </div>
              {/* Right: image */}
              <div className={`bsection__card-img-wrap ${card.wrapClass}`}>
                <img src={card.img} alt={card.title} className={`bsection__card-img bsection__card-img--bottom ${card.imgClass}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Book Consultation CTA */}
        <div className="bsection__cta">
          <a href="#contact" className="bsection__cta-btn" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <img src={btnIcon} alt="" className="bsection__cta-icon" />
            Book a Strategy Call
          </a>
        </div>

      </div>
    </section>
  )
}
