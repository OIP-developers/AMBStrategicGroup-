import starImg from '../../imagesfolder/aboutpageimgs/ourphilosophysection/ourphilsophystarimg.png'
import './OurPhilosophy.css'

export default function OurPhilosophy() {
  return (
    <section className="our-philosophy">
      <div className="our-philosophy__container">
      <div className="our-philosophy__inner">

        <div className="our-philosophy__left">
          <h2 className="our-philosophy__title">Our Philosophy</h2>
          <p className="our-philosophy__desc">
            We don't believe in overcomplicating business transformation.
          </p>
        </div>

        <div className="our-philosophy__right">
          <div className="our-philosophy__star-wrap">
            <img src={starImg} alt="" className="our-philosophy__star" />
            <span className="our-philosophy__badge badge--cleaner">Cleaner processes</span>
            <span className="our-philosophy__badge badge--ownership">Clear Ownership</span>
            <span className="our-philosophy__badge badge--ai">Practical AI Integration</span>
            <span className="our-philosophy__badge badge--smarter">Smarter Systems</span>
          </div>
        </div>

      </div>
      </div>
    </section>
  )
}
