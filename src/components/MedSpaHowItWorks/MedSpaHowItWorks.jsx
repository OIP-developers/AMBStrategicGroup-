import arrowImg from '../../imagesfolder/medicaldental/herosection/buttonicon.png'
import './MedSpaHowItWorks.css'

const steps = [
  {
    num: '01',
    title: 'Capture',
    desc: 'Every DM, form, and missed call is captured the instant it lands Instagram, TikTok, website, phone.',
  },
  {
    num: '02',
    title: 'Qualify',
    desc: 'The AI answers pricing and candidacy questions and qualifies treatment interest, budget, and timing.',
    highlight: true,
  },
  {
    num: '03',
    title: 'Book',
    desc: 'It offers real openings and books the consult straight into your existing GHL calendar.',
  },
  {
    num: '04',
    title: 'Followup',
    desc: 'Reminders, deposit confirmations, and 3-month reactivation keep the calendar full.',
  },
]

export default function MedSpaHowItWorks() {
  const scroll = (e) => {
    e.preventDefault()
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="how-it-works" className="ms-hiw">
      <div className="container">
        <span className="ms-hiw__tag">How It Works</span>
        <h2 className="ms-hiw__title">Capture. Qualify. Book. Follow up.</h2>
        <p className="ms-hiw__subtitle">
          One system running quietly behind your team — plugged into the tools you already use.
        </p>

        <div className="ms-hiw__grid">
          {steps.map((s) => (
            <div
              key={s.num}
              className={`ms-hiw__card ${s.highlight ? 'ms-hiw__card--highlight' : ''}`}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width) * 100
                e.currentTarget.style.setProperty('--hover-origin-x', `${x}%`)
              }}
            >
              <div className="ms-hiw__card-inner">
                <span className="ms-hiw__num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ms-hiw__cta">
          <a href="#book-a-call" className="ms-hiw__btn" onClick={scroll}>
            Book A Free Consultation
            <span className="ms-hiw__btn-circle">
              <span
                className="ms-hiw__btn-arrow-mask"
                style={{ WebkitMaskImage: `url(${arrowImg})`, maskImage: `url(${arrowImg})` }}
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
