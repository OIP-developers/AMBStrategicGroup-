import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../../imagesfolder/ambheaderlogo.png'
import iconBtn from '../../imagesfolder/ambiconbutton.png'
import './Navbar.css'

const navLinks = [
  { label: 'Home',                    to: '/'                       },
  { label: 'About',                   to: '/about'                  },
  {
    label: 'Industries',
    dropdown: [
      { label: 'Med Spa',             to: '/med-spa'                },
      { label: 'Medical & Dental',    to: '/medicaldental'          },
      { label: 'Law & Accounting',    to: '/law-accounting'         },
    ],
  },
  { label: 'Business Transformation', to: '/business-transformation' },
  { label: 'AI & Automation',         to: '/ai-automation'          },
  { label: 'FAQs',                    to: '/faqs'                   },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => {
    setMenuOpen(false)
    setIndustriesOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">

        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src={logoImg} alt="AMB Strategic Group" className="navbar__logo-img" />
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.label} className="navbar__dropdown-wrap">
                <button
                  type="button"
                  className={`navbar__link navbar__dropdown-toggle ${link.dropdown.some((item) => item.to === location.pathname) ? 'navbar__link--active' : ''} ${industriesOpen ? 'navbar__dropdown-toggle--open' : ''}`}
                  onClick={() => setIndustriesOpen((open) => !open)}
                >
                  <span className="navbar__link-text" data-text={link.label}>{link.label}</span>
                  <span className="navbar__dropdown-arrow" />
                </button>
                <div className={`navbar__dropdown-menu ${industriesOpen ? 'navbar__dropdown-menu--open' : ''}`}>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`navbar__dropdown-link ${location.pathname === item.to ? 'navbar__dropdown-link--active' : ''}`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
                onClick={closeMenu}
              >
                <span className="navbar__link-text" data-text={link.label}>{link.label}</span>
              </Link>
            )
          ))}
          <Link to="/contact" className="navbar__cta navbar__cta--mobile" onClick={closeMenu}>
            Contact us
            <img src={iconBtn} alt="" className="navbar__cta-icon" />
          </Link>
        </nav>

        <Link to="/contact" className="navbar__cta navbar__cta--desktop" onClick={closeMenu}>
          Contact us
          <img src={iconBtn} alt="" className="navbar__cta-icon" />
        </Link>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
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
