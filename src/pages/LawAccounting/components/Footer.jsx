import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/law-accounting/assets/logo.png"
              alt="AMB Strategic Group"
              className="logo-img logo-img-footer"
            />
            <p>Driving Business Transformation Through Strategy, Systems &amp; AI</p>
            <span className="footer-location">
              Woman-owned · founder-led · Teaneck, New Jersey
            </span>
          </div>
          <div className="two-calaa">
            <div className="footer-col">
              <h4>This page</h4>
              <div className="lin-box">
                <div className="linmain samiclasse">
                  <a href="#problems">The problem</a>
                  <a href="#process">How it works</a>
                </div>
                <div className="flexlin samiclasse">
                  <a href="#pricing">Packages</a>
                  <a href="#faq">FAQ</a>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <h4>Get started</h4>
              <a href="#calendar">Book a strategy call</a>
              <a href="#calendar">Talk to us</a>
            </div>
          </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} AMB Strategic Group. All rights reserved.</span>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-services">Terms of Services</Link>
        </div>
      </div>
    </footer>
  )
}
