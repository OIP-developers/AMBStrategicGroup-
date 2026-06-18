import starImg from '../../imagesfolder/howitworks/howitworkstarimg.png'
import diagnoseIcon from '../../imagesfolder/howitworks/diagnoseicon.png'
import designIcon from '../../imagesfolder/howitworks/designicon.png'
import deliverIcon from '../../imagesfolder/howitworks/deliver.png'
import btnIcon from '../../imagesfolder/herosectionimg/ambbuttonicon.png'
import './HowItWorks.css'

const cards = [
  {
    icon: diagnoseIcon,
    title: 'Diagnose',
    desc: 'We identify operational friction, inefficiencies, and automation opportunities.',
  },
  {
    icon: designIcon,
    title: 'Design',
    desc: 'We build a clear, executable transformation roadmap.',
  },
  {
    icon: deliverIcon,
    title: 'Deliver',
    desc: 'We implement systems, workflows, and AI solutions that actually stick.',
  },
]

export default function HowItWorks({ noBefore }) {
  return (
    <section id="how-it-works" className={`howitworks${noBefore ? ' howitworks--no-before' : ''}`}>
      <div className="container">

        <div className="howitworks__header">
          <img src={starImg} alt="" className="howitworks__star" />
          <h2 className="howitworks__title">How It Works</h2>
          <p className="howitworks__desc">
            AMB Strategic Group helps organizations transform the way they operate and grow by
            combining strategic consulting, enterprise transformation expertise, and AI-driven
            solutions that deliver measurable business results.
          </p>
        </div>

        <div className="howitworks__cards">
          {cards.map((card) => (
            <div key={card.title} className="hiw-card">
              <div className="hiw-card__top">
                <h3 className="hiw-card__title">{card.title}</h3>
                <img src={card.icon} alt={card.title} className="hiw-card__icon" />
              </div>
              <p className="hiw-card__desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="howitworks__btn-wrap">
          <a href="#contact" className="hero__btn howitworks__btn" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <img src={btnIcon} alt="" className="hero__btn-icon" />
            Book a Strategy Call
          </a>
        </div>

      </div>
    </section>
  )
}
