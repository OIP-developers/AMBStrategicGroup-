import { useEffect } from 'react'
import starImg from '../../imagesfolder/howitworks/howitworkstarimg.png'
import phoneIcon from '../../imagesfolder/getstarted/getstartedphone.png'
import emailIcon from '../../imagesfolder/getstarted/emailicon.png'
import locationIcon from '../../imagesfolder/getstarted/locationicon.png'
import dentalToothImg from '../../imagesfolder/medicaldental/getstartsection/getstarttooth.png'
import dentalStarImg from '../../imagesfolder/medicaldental/getstartsection/getstartstar.png'
import dentalLineImg from '../../imagesfolder/medicaldental/getstartsection/getstartLine.png'
import spaStarImg from '../../imagesfolder/medicaldental/herosection/herobannerstar.png'
import './GetStarted.css'

export default function GetStarted({
  className = '',
  sectionId = 'contact',
  bookingSrc = 'https://api.leadconnectorhq.com/widget/booking/rx4FnQDUZqhEEzKmElBs',
  bookingIframeId = 'rx4FnQDUZqhEEzKmElBs_1782148430321',
  dentalVariant = false,
  spaVariant = false,
}) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id={sectionId} className={`getstarted${className ? ' ' + className : ''}`}>
      <div className="container">
        <div className="getstarted__card">

          {/* Left */}
          {dentalVariant ? (
            <div className="getstarted__left getstarted__left--dental">
              <h2 className="getstarted__title getstarted__title--dental">Book A<br />Strategy Call</h2>
              <img src={dentalLineImg} alt="" className="getstarted__underline" />
              <p className="getstarted__desc getstarted__desc--dental">
                In 30 minutes we'll map where your practice is leaking calls and revenue —
                and exactly what a 7-day system would fix first. No pressure, no jargon.
              </p>

              <div className="getstarted__dental-decor">
                <img src={dentalToothImg} alt="" className="getstarted__dental-tooth" />
                <img src={dentalStarImg} alt="" className="getstarted__dental-star" />
              </div>

              <a
                href={`#${sectionId}`}
                className="getstarted__dental-link"
                onClick={(e) => e.preventDefault()}
              >
                Book Your Free AI Strategy Session Today
              </a>
            </div>
          ) : spaVariant ? (
            <div className="getstarted__left getstarted__left--dental">
              <h2 className="getstarted__title getstarted__title--dental">Book a<br />Strategy Call</h2>
              <img src={dentalLineImg} alt="" className="getstarted__underline" />
              <p className="getstarted__desc getstarted__desc--dental">
                In 30 minutes, we'll show you where consults are slipping away and how a
                sub-60-second response system pays for itself. No pressure, no hype.
              </p>

              <div className="getstarted__dental-decor">
                <img src={spaStarImg} alt="" className="getstarted__dental-star" />
              </div>

              <a
                href={`#${sectionId}`}
                className="getstarted__dental-link"
                onClick={(e) => e.preventDefault()}
              >
                Book Your Free AI Strategy Session Today
              </a>
            </div>
          ) : (
            <div className="getstarted__left">
              <div className="getstarted__title-wrap">
                <h2 className="getstarted__title">Ready to<br />Automate<br />Your Business?</h2>
                <img src={starImg} alt="" className="getstarted__star" />
              </div>
              <p className="getstarted__desc">
                Let AI handle the hard work while you focus on growth.
                Book a free AI strategy session today.
              </p>

              <div className="getstarted__contacts">
                <a href="tel:+19714247685" className="getstarted__contact-item">
                  <div className="getstarted__contact-icon-wrap">
                    <img src={phoneIcon} alt="" className="getstarted__contact-icon" />
                  </div>
                  <span className="getstarted__contact-text">+1 971-424-7685</span>
                </a>
                <a href="mailto:info@ambstrategicgroup.com" className="getstarted__contact-item">
                  <div className="getstarted__contact-icon-wrap">
                    <img src={emailIcon} alt="" className="getstarted__contact-icon" />
                  </div>
                  <span className="getstarted__contact-text">info@ambstrategicgroup.com</span>
                </a>
                <div className="getstarted__contact-item">
                  <div className="getstarted__contact-icon-wrap">
                    <img src={locationIcon} alt="" className="getstarted__contact-icon" />
                  </div>
                  <span className="getstarted__contact-text">Teaneck, New Jersey, United States</span>
                </div>
              </div>
            </div>
          )}

          {/* Right - Form */}
          <div className="getstarted__right">
            <div className="getstarted__form-box-wrap">
            <div className="getstarted__form-box">
              <iframe
                src={bookingSrc}
                style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                scrolling="no"
                id={bookingIframeId}
              />
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
