export function BtnIcon() {
  return (
    <span className="btn-icon">
      <img src="/law-accounting/assets/button-arrow-icon.png" alt="" />
    </span>
  )
}

export function scrollToCalendar() {
  document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })
}

export function BookAFreeConsultation({ className = '', onClick }) {
  const handleClick = (e) => {
    scrollToCalendar()
    onClick?.(e)
  }

  return (
    <button type="button" className={`btn-pill ${className}`.trim()} onClick={handleClick}>
      Book a Free Consultation
      <BtnIcon />
    </button>
  )
}
