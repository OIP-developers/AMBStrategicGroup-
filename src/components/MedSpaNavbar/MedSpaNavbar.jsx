import { useState } from 'react'
import logoImg from '../../imagesfolder/ambheaderlogo.png'
import MedDentalCtaButton from '../MedDentalCtaButton/MedDentalCtaButton'
import './MedSpaNavbar.css'

const navLinks = [
  { label: 'The Problem', to: 'problem' },
  { label: 'How it Works', to: 'how-it-works' },
  { label: 'Packages', to: 'packages' },
  { label: 'FAQ', to: 'faq' },
]

export default function MedSpaNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const scrollTo = (e, id) => {
    e.preventDefault()
    closeMenu()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="ms-navbar">
      <div className="container ms-navbar__inner">

        <div className="ms-navbar__logo">
          <img src={logoImg} alt="AMB Strategic Group" />
        </div>

        <nav className={`ms-navbar__links ${menuOpen ? 'ms-navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={`#${link.to}`}
              className="ms-navbar__link"
              onClick={(e) => scrollTo(e, link.to)}
            >
              {link.label}
            </a>
          ))}
          <div className="ms-navbar__cta ms-navbar__cta--mobile">
            <MedDentalCtaButton to="book-a-call">Book A Free Consultation</MedDentalCtaButton>
          </div>
        </nav>

        <div className="ms-navbar__cta ms-navbar__cta--desktop">
          <MedDentalCtaButton to="book-a-call">Book A Free Consultation</MedDentalCtaButton>
        </div>

        <button
          className={`ms-navbar__toggle ${menuOpen ? 'ms-navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  )
}
