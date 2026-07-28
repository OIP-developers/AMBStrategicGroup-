import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../imagesfolder/ambheaderlogo.png'
import MedDentalCtaButton from '../MedDentalCtaButton/MedDentalCtaButton'
import './MedDentalNavbar.css'

const navLinks = [
  { label: 'The Problem', to: 'problem' },
  { label: 'How it Works', to: 'how-it-works' },
  { label: 'Packages', to: 'packages' },
  { label: 'FAQ', to: 'faq' },
]

export default function MedDentalNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const scrollTo = (e, id) => {
    e.preventDefault()
    closeMenu()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="md-navbar">
      <div className="container md-navbar__inner">

        <Link to="/" className="md-navbar__logo">
          <img src={logoImg} alt="AMB Strategic Group" />
        </Link>

        <nav className={`md-navbar__links ${menuOpen ? 'md-navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={`#${link.to}`}
              className="md-navbar__link"
              onClick={(e) => scrollTo(e, link.to)}
            >
              {link.label}
            </a>
          ))}
          <div className="md-navbar__cta md-navbar__cta--mobile">
            <MedDentalCtaButton to="book-a-call">Book a Free Appointment</MedDentalCtaButton>
          </div>
        </nav>

        <div className="md-navbar__cta md-navbar__cta--desktop">
          <MedDentalCtaButton to="book-a-call">Book a Free Appointment</MedDentalCtaButton>
        </div>

        <button
          className={`md-navbar__toggle ${menuOpen ? 'md-navbar__toggle--open' : ''}`}
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
