import strategicBottomImg from '../../imagesfolder/strategicsection/strategicsectionbottomimg.png'
import './WhyAMB.css'

export default function WhyAMB({ bottomImg, noFlip }) {
  return (
    <section id="why-amb" className="whyamb">
      <div className="container">
        <div className="whyamb__inner">

          {/* Floating badges */}
          <div className="whyamb__badge whyamb__badge--left">Strategic Expertise</div>
          <div className="whyamb__badge whyamb__badge--right">Measurable Results</div>

          {/* Content */}
          <h2 className="whyamb__title">WHY AMB STRATEGIC GROUP</h2>
          <p className="whyamb__desc">
            We combine enterprise transformation expertise, program delivery excellence, and AI
            innovation to help organizations solve complex challenges, improve operational
            performance, and accelerate growth. From strategic advisory to AI implementation,
            we work alongside your team to ensure every initiative delivers measurable value.
          </p>
        </div>
        <p className="whyamb__statement">
          Led directly by senior-level strategy and transformation expertise, and supported
          by a vetted technical team, we bridge the gap between boardroom strategy and
          real execution.
        </p>
        <div className="whyamb__bottom-row">
          <img
            src={bottomImg || strategicBottomImg}
            alt=""
            className={`whyamb__bottom-img${noFlip ? ' whyamb__bottom-img--no-flip' : ''}`}
          />
        </div>
      </div>
    </section>
  )
}
