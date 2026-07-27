import doctorImg from '../../imagesfolder/medicaldental/herosection/herodoctorimg.png'
import sparkleImg from '../../imagesfolder/medicaldental/herosection/herobannerstar.png'
import arrowImg from '../../imagesfolder/medicaldental/herosection/buttonicon.png'
import checkImg from '../../imagesfolder/medicaldental/herosection/checkicon.png'
import vectorHeroImg from '../../imagesfolder/medicaldental/herosection/vectorhero.png'
import MedDentalNavbar from '../MedDentalNavbar/MedDentalNavbar'
import './MedDentalHero.css'

const stats = ['AI that works 24/7.', 'Faster patient responses.', 'Every call answered.']

export default function MedDentalHero() {
  const scroll = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="md-hero">
      <MedDentalNavbar />

      <div className="container">
        <div className="md-hero__row">

          <div className="md-hero__content">
            <h1 className="md-hero__title">
              Every missed call is<br />a patient who booked<br />somewhere else.
            </h1>

            <p className="md-hero__desc">
              AMB builds AI-powered phone, chat, and patient recall systems for medical and dental practices —
              answering every call, filling the schedule, and bringing lapsed patients back.
              Around the clock, HIPAA-conscious, running quietly in the background.
            </p>

            <div className="md-hero__actions">
              <a href="#book-a-call" className="md-hero__btn md-hero__btn--primary" onClick={(e) => scroll(e, 'book-a-call')}>
                <span className="md-hero__btn-text">Book a Free Appointment</span>
                <span className="md-hero__btn-circle md-hero__btn-circle--grad">
                  <span
                    className="md-hero__btn-arrow-mask"
                    style={{ WebkitMaskImage: `url(${arrowImg})`, maskImage: `url(${arrowImg})` }}
                  />
                </span>
              </a>
              <a href="#how-it-works" className="md-hero__btn md-hero__btn--white" onClick={(e) => scroll(e, 'how-it-works')}>
                <span className="md-hero__btn-text">See How It Works</span>
                <span className="md-hero__btn-circle md-hero__btn-circle--grad-bg">
                  <span
                    className="md-hero__btn-arrow-white-mask"
                    style={{ WebkitMaskImage: `url(${arrowImg})`, maskImage: `url(${arrowImg})` }}
                  />
                </span>
              </a>
            </div>

            <ul className="md-hero__stats">
              {stats.map((s) => (
                <li key={s}>
                  <img src={checkImg} alt="" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="md-hero__visual">
            <img src={doctorImg} alt="Friendly dental practice doctor" className="md-hero__doctor" />
            <img src={sparkleImg} alt="" className="md-hero__sparkle" />

            <div className="md-hero__note md-hero__note--top">
              <span className="md-hero__note-icon">
                <img src={vectorHeroImg} alt="" />
              </span>
              <span className="md-hero__note-text">The patient has confirmed their appointment for tomorrow at 3 PM.</span>
            </div>
            <div className="md-hero__note md-hero__note--bottom">
              <span className="md-hero__note-icon">
                <img src={vectorHeroImg} alt="" />
              </span>
              <span className="md-hero__note-text">Patient is experiencing pain after a recent filling and needs your advice.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
