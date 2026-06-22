import { Link, NavLink } from 'react-router-dom'
import footerLogo from '../../imagesfolder/ambheaderlogo.png'
import facebookIcon from '../../imagesfolder/footersection/facebookicon.png'
import instaIcon from '../../imagesfolder/footersection/instaicon.png'
import linkedIcon from '../../imagesfolder/footersection/linkedicon.png'
import xIcon from '../../imagesfolder/footersection/xicon.png'
import './Footer.css'

const navLinks = [
  { label: 'Home',                    to: '/'                        },
  { label: 'About',                   to: '/about'                   },
  { label: 'Business Transformation', to: '/business-transformation' },
  { label: 'AI & Automation',         to: '/ai-automation'           },
  { label: 'FAQs',                    to: '/faqs'                    },
  { label: 'Contact Us',              to: '/contact'                 },
]

const socialIcons = [
  { label: 'Facebook',  img: facebookIcon, href: 'https://www.facebook.com/profile.php?id=61590599206805' },
  { label: 'Instagram', img: instaIcon,     href: 'https://www.instagram.com/ambstrategicgroup/' },
  // { label: 'LinkedIn',  img: linkedIcon,    href: 'https://www.linkedin.com/company/amb-strategic-group/?viewAsMember=true' },
  // { label: 'X',         img: xIcon,         href: 'https://www.x.com'               },
]

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer__main">
        <div className="container">

          {/* Row 1: Logo + Desc | Nav */}
          <div className="footer__row1">
            <div className="footer__left">
              <img src={footerLogo} alt="AMB Strategic Group" className="footer__logo" />
              <p className="footer__desc">
                Whether you're modernizing a regulated platform, standing up governance,
                or exploring where AI fits in your operating model — we'd be glad to talk.
              </p>
            </div>
            <nav className="footer__nav">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.to} className="footer__nav-link">
                  <span className="footer__nav-link-text" data-text={link.label}>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Row 2: Social Icons | Contact + Location */}
          <div className="footer__row2">
            <div className="footer__social">
              <p className="footer__social-label">Follow us on</p>
              <div className="footer__social-icons">
                {socialIcons.map((icon) => (
                  <a key={icon.label} href={icon.href} target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label={icon.label}>
                    <img src={icon.img} alt={icon.label} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer__right">
              <div className="footer__info-block">
                <h4 className="footer__info-title">Contact Us</h4>
                <a href="tel:+19292635128" className="footer__info-text footer__info-text--mb">+1 929-263-5128</a><br/>
                <a href="mailto:info@ambstrategicgroup.com" className="footer__info-text">info@ambstrategicgroup.com</a>
              </div>
              <div className="footer__info-block">
                <h4 className="footer__info-title">Location</h4>
                <p className="footer__info-text footer__info-text--address">Teaneck, New Jersey, United States</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copy">© 2026 AMB Strategic Group · Woman-Owned Business</p>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-services">Terms of Services</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
