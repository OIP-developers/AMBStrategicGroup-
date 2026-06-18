import { useEffect } from 'react'
import starImg from '../../imagesfolder/howitworks/howitworkstarimg.png'
import phoneIcon from '../../imagesfolder/getstarted/getstartedphone.png'
import emailIcon from '../../imagesfolder/getstarted/emailicon.png'
import locationIcon from '../../imagesfolder/getstarted/locationicon.png'
import './GetStarted.css'

export default function GetStarted() {
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
    <section id="contact" className="getstarted">
      <div className="container">
        <div className="getstarted__card">

          {/* Left */}
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
              <a href="tel:+12345678910" className="getstarted__contact-item">
                <div className="getstarted__contact-icon-wrap">
                  <img src={phoneIcon} alt="" className="getstarted__contact-icon" />
                </div>
                <span className="getstarted__contact-text">+12 3456789 10</span>
              </a>
              <a href="mailto:info@ambstrategicgroup.com" className="getstarted__contact-item">
                <div className="getstarted__contact-icon-wrap">
                  <img src={emailIcon} alt="" className="getstarted__contact-icon" />
                </div>
                <span className="getstarted__contact-text">ambstrategicgroup.com</span>
              </a>
              <div className="getstarted__contact-item">
                <div className="getstarted__contact-icon-wrap">
                  <img src={locationIcon} alt="" className="getstarted__contact-icon" />
                </div>
                <span className="getstarted__contact-text">1209 Barton Springs Rd Texas, Austin, United States</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="getstarted__right">
            <div className="getstarted__form-box-wrap">
            <div className="getstarted__form-box">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/KFInBiyxT7Ueg4h2tZhK"
                style={{ width: '100%', height: '100%', border: 'none' }}
                id="inline-KFInBiyxT7Ueg4h2tZhK"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Form"
                data-height="854"
                data-layout-iframe-id="inline-KFInBiyxT7Ueg4h2tZhK"
                data-form-id="KFInBiyxT7Ueg4h2tZhK"
                title="Website Form"
              />
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
