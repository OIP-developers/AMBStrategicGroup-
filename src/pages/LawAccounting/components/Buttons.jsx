export function BtnIcon() {
  return (
    <span className="btn-icon">
      <span className="btn-icon-arrow" />
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
      <span className="btn-label">Book a Free Consultation</span>
      <BtnIcon />
    </button>
  )
}
