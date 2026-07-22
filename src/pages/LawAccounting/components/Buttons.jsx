export function BtnIcon() {
  return (
    <span className="btn-icon">
      <img src="/law-accounting/assets/button-arrow-icon.png" alt="" />
    </span>
  )
}

export function BookAFreeConsultation({ className = '', onClick }) {
  return (
    <a href="#calendar" className={`btn-pill ${className}`.trim()} onClick={onClick}>
      Book a Free Consultation
      <BtnIcon />
    </a>
  )
}
