import mdVectorImg from '../../imagesfolder/medicaldental/md-trust section/mdvector.png'
import './MedSpaTrust.css'

const stats = [
  { label: 'Under 60s', desc: 'Every lead answered, day or night.' },
  { label: '7-day launch', desc: 'Starter system live in a week.' },
  { label: 'Books, not chats', desc: 'Qualified consults on your calendar.' },
]

export default function MedSpaTrust() {
  return (
    <section className="ms-trust">
      <div className="ms-trust__wrap">
        <div className="ms-trust__row">

          <div className="ms-trust__left">
            <span className="ms-trust__tag">Why AMB</span>
            <h2 className="ms-trust__title">Why Aesthetic Practices Choose AMB</h2>
            <p className="ms-trust__bio">
              These are medical procedures, and patient data is handled that way.
              <br />
              The system is HIPAA-conscious, governed, and secure — while staying
              laser-focused on filling your calendar.
              <br /><br />
              AMB is a woman-owned, founder-led consulting firm led by Azra Rehan, with
              practitioner experience across Accenture, Guidehouse, Bank of America, and
              United Bank. We build systems that actually stick — not another chatbot that
              answers once and forgets to book.
            </p>
            <p className="ms-trust__tagline">Not theory. Not another chatbot. Not hype.</p>
          </div>

          <div className="ms-trust__right">
            {stats.map((s) => (
              <div key={s.label} className="ms-trust__card">
                <div className="ms-trust__card-inner">
                  <img src={mdVectorImg} alt="" className="ms-trust__card-icon" />
                  <div>
                    <h3>{s.label}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
