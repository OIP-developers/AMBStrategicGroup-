import arrowImg from '../../imagesfolder/medicaldental/herosection/buttonicon.png'
import './MedDentalHowItWorks.css'

const steps = [
  {
    num: '01',
    title: 'Capture',
    desc: 'Every call, form, and website chat is captured instantly — nothing drops to voicemail or sits unread.',
  },
  {
    num: '02',
    title: 'Qualify',
    desc: "The AI answers questions, covers insurance basics, and screens new patients — accurately, in your practice's voice.",
    highlight: true,
  },
  {
    num: '03',
    title: 'Book',
    desc: 'It offers real openings and books straight into the GHL calendar your front desk already uses.',
  },
  {
    num: '04',
    title: 'Followup',
    desc: 'Automated recall and no-show sequences bring patients back and keep the chairs full.',
  },
]

export default function MedDentalHowItWorks() {
  const scroll = (e) => {
    e.preventDefault()
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="how-it-works" className="md-hiw">
      <div className="md-hiw__glow" />
      <div className="container">
        <span className="md-hiw__tag">How It Works</span>
        <h2 className="md-hiw__title">Capture. Qualify. Book. Follow up.</h2>
        <p className="md-hiw__subtitle">
          One system running quietly behind your team — plugged into the tools you already use.
        </p>

        <div className="md-hiw__grid">
          {steps.map((s) => (
            <div
              key={s.num}
              className={`md-hiw__card ${s.highlight ? 'md-hiw__card--highlight' : ''}`}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width) * 100
                e.currentTarget.style.setProperty('--hover-origin-x', `${x}%`)
              }}
            >
              <div className="md-hiw__card-inner">
                <span className="md-hiw__num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md-hiw__cta">
          <a href="#book-a-call" className="md-hiw__btn" onClick={scroll}>
            <span className="md-hiw__btn-text">Book A Free Consultation</span>
            <span className="md-hiw__btn-circle">
              <span
                className="md-hiw__btn-arrow-mask"
                style={{ WebkitMaskImage: `url(${arrowImg})`, maskImage: `url(${arrowImg})` }}
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
