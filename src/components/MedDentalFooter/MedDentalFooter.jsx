import { Link } from 'react-router-dom'
import logoImg from '../../imagesfolder/ambheaderlogo.png'
import './MedDentalFooter.css'

const scrollTo = (e, id) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function MedDentalFooter() {
  return (
    <footer className="md-footer">
      <div className="container">

        <div className="md-footer__top">
          <div className="md-footer__brand">
            <img src={logoImg} alt="AMB Strategic Group" className="md-footer__logo" />
            <p className="md-footer__tagline">Driving Business Transformation Through Strategy, Systems &amp; AI</p>
            <p className="md-footer__location">Woman-owned · founder-led · Teaneck, New Jersey</p>
          </div>

          <div className="md-footer__col md-footer__col--page">
            <h4>This page</h4>
            <div className="md-footer__col-grid">
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

          <div className="md-footer__col md-footer__col--start">
            <h4>Get started</h4>
            <a href="#book-a-call" onClick={(e) => scrollTo(e, 'book-a-call')}>Book a Strategy Call</a>
            <a href="#book-a-call" onClick={(e) => scrollTo(e, 'book-a-call')}>Talk to us</a>
          </div>
        </div>

        <div className="md-footer__divider" />

        <div className="md-footer__bottom">
          <p>© 2026 AMB Strategic Group · Woman-Owned Business</p>
          <div className="md-footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-services">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
