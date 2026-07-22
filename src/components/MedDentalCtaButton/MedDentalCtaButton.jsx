import arrowImg from '../../imagesfolder/medicaldental/herosection/buttonicon.png'
import './MedDentalCtaButton.css'

export default function MedDentalCtaButton({ to = 'book-a-call', variant = 'primary', children }) {
  const scroll = (e) => {
    e.preventDefault()
    document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a href={`#${to}`} className={`md-btn md-btn--${variant}`} onClick={scroll}>
      {children}
      <span className="md-btn__circle">
        <img src={arrowImg} alt="" className="md-btn__arrow" />
      </span>
    </a>
  )
}
