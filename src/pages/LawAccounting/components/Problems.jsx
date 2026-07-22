import { BookAFreeConsultation } from './Buttons.jsx'

const PROBLEMS = [
  {
    titleLine1: 'Missed intake',
    titleLine2: ' calls',
    desc: 'A single unanswered call can be a matter worth tens of thousands in fees — signed by whoever called back first.',
  },
  {
    titleLine1: 'Unqualified',
    titleLine2: ' inquiries',
    desc: 'Paralegals and staff burn hours on wrong-jurisdiction, wrong-service, no-case leads.',
  },
  {
    titleLine1: 'After-hours',
    titleLine2: ' black hole',
    desc: 'Voicemail and message-only answering services let serious clients slip to a competitor.',
  },
  {
    titleLine1: 'Repetitive',
    titleLine2: ' client questions',
    desc: '"Any update?" and "Did you get my documents?" eat billable and productive time.',
  },
]

export default function Problems() {
  return (
    <section id="problems" className="problems">
      <div className="imagebefor">
        <img src="/law-accounting/assets/boc-new-image/one-imag.png" alt="" className="decor-img decor-gavel-1" />
      </div>
      <img
        src="/law-accounting/assets/boc-new-image/two-imag.png"
        alt=""
        className="decor-img decor-star-problems"
      />
      <div className="section-header problems-header">
        <h2 className="section-title bottom-zoro">Where the</h2>
        <h2 className="section-title">fees quietly walk out</h2>
        <p className="section-subtitle">
          For firms that live on intake, a missed call isn't a missed call —
          it's a client who signed with whoever picked up first. And your
          team is too busy on billable work to catch them all.
        </p>
      </div>
      <div className="problem-grid">
        {PROBLEMS.map((p) => (
          <div key={p.titleLine1} className="problem-card">
            <h3>
              {p.titleLine1}
              <br />
              {p.titleLine2}
            </h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="section-cta">
        <BookAFreeConsultation />
      </div>
    </section>
  )
}
