import starImg from '../../imagesfolder/aboutpageimgs/outmodel/star.png'
import './WhatWeDo.css'

const cards = [
  { number: '01', label: 'Operate More Efficiently'      },
  { number: '02', label: 'Deliver faster and cleaner'    },
  { number: '03', label: 'Reduce manual overhead'        },
  { number: '04', label: 'Implement AI where it matters' },
]

export default function WhatWeDo() {
  return (
    <section className="whatwedo">
      <div className="container">
        <div className="whatwedo__content">

          <img src={starImg} alt="" className="whatwedo__star" />

          <h2 className="whatwedo__title">What We Do</h2>

          <p className="whatwedo__desc">
            AMB Strategic Group helps organizations transform the way they operate and grow
            by combining strategic consulting, enterprise transformation expertise, and
            AI-driven solutions that deliver measurable business results.
          </p>

          <div className="whatwedo__cards">
            {cards.map((card) => (
              <div key={card.number} className="whatwedo__card">
                <span className="whatwedo__card-number">{card.number}</span>
                <span className="whatwedo__card-label">{card.label}</span>
              </div>
            ))}
          </div>

          <p className="whatwedo__tagline">Without disrupting what already works</p>

        </div>
      </div>
    </section>
  )
}
