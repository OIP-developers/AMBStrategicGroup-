export default function MedDentalSparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mdSparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bfe4ff" />
          <stop offset="55%" stopColor="#3aa0ff" />
          <stop offset="100%" stopColor="#0271ff" />
        </linearGradient>
      </defs>
      <path
        d="M50 4C52 30 58 44 90 50C58 56 52 70 50 96C48 70 42 56 10 50C42 44 48 30 50 4Z"
        fill="url(#mdSparkleGrad)"
      />
    </svg>
  )
}
