import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookAFreeConsultation } from './Buttons.jsx'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="nav">
      <Link to="/">
        <img src="/law-accounting/assets/logo.png" alt="AMB Strategic Group" className="logo-img" />
      </Link>
      <button
        className={`nav-toggle${menuOpen ? ' open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
        <a href="#problems" onClick={closeMenu}>The Problem</a>
        <a href="#process" onClick={closeMenu}>How It Works</a>
        <a href="#pricing" onClick={closeMenu}>Packages</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <BookAFreeConsultation className="header-cta mobile-cta" onClick={closeMenu} />
      </nav>
      <BookAFreeConsultation className="header-cta" />
    </header>
  )
}
