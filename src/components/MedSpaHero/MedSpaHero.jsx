import injectorImg from '../../imagesfolder/MedSpaLanding/medspaimg.png'
import injectionImg from '../../imagesfolder/MedSpaLanding/injectionimg.png'
import sparkleImg from '../../imagesfolder/MedSpaLanding/spaherostar.png'
import arrowImg from '../../imagesfolder/medicaldental/herosection/buttonicon.png'
import checkImg from '../../imagesfolder/medicaldental/herosection/checkicon.png'
import vectorHeroImg from '../../imagesfolder/medicaldental/herosection/vectorhero.png'
import MedSpaNavbar from '../MedSpaNavbar/MedSpaNavbar'
import './MedSpaHero.css'

const stats = ['Replies in under 60s', 'Live in 7 days', 'HIPAA-conscious']

export default function MedSpaHero() {
  const scroll = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="ms-hero">
      <MedSpaNavbar />

      <div className="container">
        <div className="ms-hero__row">

          <div className="ms-hero__content">
            <p className="ms-hero__eyebrow">Your injectors treat patients.</p>
            <h1 className="ms-hero__title">
              Your <span className="ms-hero__title-grad">AI</span> books them in 60 seconds.
            </h1>

            <p className="ms-hero__desc">
              Aesthetic leads don't wait. AMB answers every DM, form, and missed call within
              seconds — day or night — qualifies the treatment, and books the consult before
              your competitor even replies.
            </p>

            <div className="ms-hero__actions">
              <a href="#book-a-call" className="ms-hero__btn ms-hero__btn--primary" onClick={(e) => scroll(e, 'book-a-call')}>
                <span className="ms-hero__btn-text">Book A Free Consultation</span>
                <span className="ms-hero__btn-circle ms-hero__btn-circle--grad">
                  <span
                    className="ms-hero__btn-arrow-mask"
                    style={{ WebkitMaskImage: `url(${arrowImg})`, maskImage: `url(${arrowImg})` }}
                  />
                </span>
              </a>
              <a href="#how-it-works" className="ms-hero__btn ms-hero__btn--white" onClick={(e) => scroll(e, 'how-it-works')}>
                <span className="ms-hero__btn-text">See how it works</span>
                <span className="ms-hero__btn-circle ms-hero__btn-circle--grad-bg">
                  <span
                    className="ms-hero__btn-arrow-white-mask"
                    style={{ WebkitMaskImage: `url(${arrowImg})`, maskImage: `url(${arrowImg})` }}
                  />
                </span>
              </a>
            </div>

            <ul className="ms-hero__stats">
              {stats.map((s) => (
                <li key={s}>
                  <img src={checkImg} alt="" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="ms-hero__visual">
            <img src={injectionImg} alt="" className="ms-hero__tooth" />
            <img src={injectorImg} alt="Injector performing a treatment" className="ms-hero__doctor" />
            <img src={sparkleImg} alt="" className="ms-hero__sparkle" />

            <div className="ms-hero__note ms-hero__note--top">
              <span className="ms-hero__note-icon">
                <img src={vectorHeroImg} alt="" />
              </span>
              <span className="ms-hero__note-text">The client booked a facial treatment today.</span>
            </div>
            <div className="ms-hero__note ms-hero__note--bottom">
              <span className="ms-hero__note-icon">
                <img src={vectorHeroImg} alt="" />
              </span>
              <span>A skincare consultation is booked for 5 PM.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
