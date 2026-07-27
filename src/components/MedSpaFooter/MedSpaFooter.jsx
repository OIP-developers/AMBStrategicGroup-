import { Link } from 'react-router-dom'
import logoImg from '../../imagesfolder/ambheaderlogo.png'
import './MedSpaFooter.css'

const scrollTo = (e, id) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function MedSpaFooter() {
  return (
    <footer className="ms-footer">
      <div className="container">

        <div className="ms-footer__top">
          <div className="ms-footer__brand">
            <img src={logoImg} alt="AMB Strategic Group" className="ms-footer__logo" />
            <p className="ms-footer__tagline">Driving Business Transformation Through Strategy, Systems &amp; AI</p>
            <p className="ms-footer__location">Woman-owned · founder-led · Teaneck, New Jersey</p>
          </div>

          <div className="ms-footer__col ms-footer__col--page">
            <h4>This page</h4>
            <div className="ms-footer__col-grid">
              <div>
                <a href="#problem" onClick={(e) => scrollTo(e, 'problem')}>The problem</a>
                <a href="#how-it-works" onClick={(e) => scrollTo(e, 'how-it-works')}>How it works</a>
              </div>
              <div>
                <a href="#packages" onClick={(e) => scrollTo(e, 'packages')}>Packages</a>
                <a href="#faq" onClick={(e) => scrollTo(e, 'faq')}>FAQ</a>
              </div>
            </div>
          </div>

          <div className="ms-footer__col ms-footer__col--start">
            <h4>Get started</h4>
            <a href="#book-a-call" onClick={(e) => scrollTo(e, 'book-a-call')}>Book a Strategy Call</a>
            <a href="#book-a-call" onClick={(e) => scrollTo(e, 'book-a-call')}>Talk to us</a>
          </div>
        </div>

        <div className="ms-footer__divider" />

        <div className="ms-footer__bottom">
          <p>© 2026 AMB Strategic Group · Woman-Owned Business</p>
          <div className="ms-footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
