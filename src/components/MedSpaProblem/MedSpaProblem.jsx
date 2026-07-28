import { Fragment } from 'react'
import toothImg from '../../imagesfolder/MedSpaLanding/bottleimg.png'
import sparkleImg from '../../imagesfolder/medicaldental/costofwaiting/star.webp'
import arrowImg from '../../imagesfolder/medicaldental/herosection/buttonicon.png'
import './MedSpaProblem.css'

const cards = [
  {
    title: 'Slow lead response',
    desc: "Ad leads arrive at 2 AM. Whoever replies first wins the consult — and it usually isn't you.",
  },
  {
    title: 'Calls Missed \nMid-Treatment',
    desc: "Your injector can't stop mid-appointment. Every missed call could mean losing a $400–$1,500 consultation.",
  },
  {
    title: 'No-shows & \nlost deposits',
    desc: 'High-value consults vanish without reminders and confirmations working around the clock.',
  },
  {
    title: 'Rebooking leak',
    desc: 'Botox runs on a 3–4 month cycle, but nobody systematically brings clients back.',
  },
]

export default function MedSpaProblem() {
  const scroll = (e) => {
    e.preventDefault()
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="problem" className="ms-problem">
      <img src={toothImg} alt="" className="ms-problem__tooth" />
      <img src={sparkleImg} alt="" className="ms-problem__sparkle" />

      <div className="container">
        <span className="ms-problem__tag">The Cost of Waiting</span>
        <h2 className="ms-problem__title">Where Your Consults Slip Away</h2>
        <p className="ms-problem__subtitle">
          In aesthetics, the fastest reply wins. Every hour a lead waits, the odds of booking
          fall off a cliff and most of your leads arrive when the front desk is closed.
        </p>

        <div className="ms-problem__grid">
          {cards.map((c) => (
            <div key={c.title} className="ms-problem__card">
              <div className="ms-problem__card-inner">
                <h3>
                  {c.title.split('\n').map((line, i, arr) => (
                    <Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </Fragment>
                  ))}
                </h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ms-problem__cta">
          <a href="#book-a-call" className="ms-problem__btn" onClick={scroll}>
            <span className="ms-problem__btn-text">Book a Free Appointment</span>
            <span className="ms-problem__btn-circle">
              <span
                className="ms-problem__btn-arrow-mask"
                style={{ WebkitMaskImage: `url(${arrowImg})`, maskImage: `url(${arrowImg})` }}
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
