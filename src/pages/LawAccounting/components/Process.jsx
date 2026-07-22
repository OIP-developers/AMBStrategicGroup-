import { BookAFreeConsultation } from './Buttons.jsx'

const PROCESS = [
  {
    number: '01',
    title: 'Capture',
    desc: 'Every call, form, and website inquiry is captured instantly — nothing goes to voicemail after hours.',
  },
  {
    number: '02',
    title: 'Qualify',
    desc: "The AI screens case or service type, jurisdiction or entity, and urgency — filtering out what doesn't fit.",
    featured: true,
  },
  {
    number: '03',
    title: 'Book',
    desc: 'It books qualified prospects straight into the GHL calendar your firm already uses.',
  },
  {
    number: '04',
    title: 'Follow up',
    desc: 'Automated follow-up chases every consult to booked; for accounting, it chases missing documents too.',
  },
]

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="section-header process-header">
        <span className="badge">How It Works</span>
        <h2 className="section-title">Capture. Qualify. Book. Follow up.</h2>
        <p className="section-subtitle">
          One system running quietly behind your team — plugged into the
          tools you already use.
        </p>
      </div>
      <div className="process-grid">
        {PROCESS.map((step) => (
          <div
            key={step.number}
            className={`process-card${step.featured ? ' featured' : ''}`}
          >
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="section-cta">
        <BookAFreeConsultation />
      </div>
    </section>
  )
}
