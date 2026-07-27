import toothImg from '../../imagesfolder/medicaldental/md-trust section/stethoscope-3d.png'
import sparkleImg from '../../imagesfolder/medicaldental/costofwaiting/star.webp'
import arrowImg from '../../imagesfolder/medicaldental/herosection/buttonicon.png'
import './MedDentalProblem.css'

const cards = [
  {
    title: 'Missed calls',
    desc: 'Patients call during appointments and after hours. Every unanswered call is a booking that goes to the practice down the road.',
  },
  {
    title: 'Lapsed recall',
    desc: 'Patients due for cleanings and checkups quietly disappear. Nobody has time to chase six-month recalls by hand.',
  },
  {
    title: 'No-shows',
    desc: 'Last-minute cancellations blow holes in the day that never get refilled.',
  },
  {
    title: 'Front-desk overload',
    desc: 'Insurance questions, reschedules, and new-patient intake bury your staff before lunch.',
  },
]

export default function MedDentalProblem() {
  const scroll = (e) => {
    e.preventDefault()
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="problem" className="md-problem">
      <img src={toothImg} alt="" className="md-problem__tooth" />
      <img src={sparkleImg} alt="" className="md-problem__sparkle" />

      <div className="container">
        <span className="md-problem__tag">The Cost of Waiting</span>
        <h2 className="md-problem__title">Where Your Schedule Quietly Leaks</h2>
        <p className="md-problem__subtitle">
          Most practices don't lose patients to bad care. They lose them to a phone nobody
          could pick up and a recall list nobody had time to chase.
        </p>

        <div className="md-problem__grid">
          {cards.map((c) => (
            <div key={c.title} className="md-problem__card">
              <div className="md-problem__card-inner">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md-problem__cta">
          <a href="#book-a-call" className="md-problem__btn" onClick={scroll}>
            <span className="md-problem__btn-text">Book a Free Consultation</span>
            <span className="md-problem__btn-circle">
              <span
                className="md-problem__btn-arrow-mask"
                style={{ WebkitMaskImage: `url(${arrowImg})`, maskImage: `url(${arrowImg})` }}
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
