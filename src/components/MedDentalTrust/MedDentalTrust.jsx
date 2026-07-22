import mdVectorImg from '../../imagesfolder/medicaldental/md-trust section/mdvector.png'
import './MedDentalTrust.css'

const stats = [
  { label: '7-day launch', desc: 'Starter system live in a week.' },
  { label: '24/7 coverage', desc: 'Every call and message, day or night.' },
  { label: 'Governance baked in', desc: 'HIPAA-conscious by design.' },
]

export default function MedDentalTrust() {
  return (
    <section className="md-trust">
      <div className="md-trust__wrap">
        <div className="md-trust__row">

          <div className="md-trust__left">
            <span className="md-trust__tag">Why AMB</span>
            <h2 className="md-trust__title">Why practices trust AMB</h2>
            <p className="md-trust__bio">
              Patient data isn't an afterthought. We build HIPAA-conscious workflows with
              governance baked in — not bolted on after the fact.
              <br /><br />
              AMB is a woman-owned, founder-led consulting firm led by Azra Rehan, with
              practitioner experience across Accenture, Guidehouse, Bank of America, and
              United Bank. We've delivered in regulated environments where mistakes aren't
              an option — and we bring that same discipline to your front desk.
            </p>
            <p className="md-trust__tagline">Not theory. Not another chatbot. Not hype.</p>
          </div>

          <div className="md-trust__right">
            {stats.map((s) => (
              <div key={s.label} className="md-trust__card">
                <div className="md-trust__card-inner">
                  <img src={mdVectorImg} alt="" className="md-trust__card-icon" />
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
