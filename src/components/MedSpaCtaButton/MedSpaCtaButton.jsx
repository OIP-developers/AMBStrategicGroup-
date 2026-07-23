import arrowImg from '../../imagesfolder/medicaldental/herosection/buttonicon.png'
import './MedSpaCtaButton.css'

export default function MedSpaCtaButton({ to = 'book-a-call', variant = 'primary', children }) {
  const scroll = (e) => {
    e.preventDefault()
    document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a href={`#${to}`} className={`ms-btn ms-btn--${variant}`} onClick={scroll}>
      {children}
      <span className="ms-btn__circle">
        <img src={arrowImg} alt="" className="ms-btn__arrow" />
      </span>
    </a>
  )
}
