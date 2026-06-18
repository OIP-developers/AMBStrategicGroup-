import starImg       from '../../imagesfolder/aboutpageimgs/outmodel/star.png'
import strategicIcon from '../../imagesfolder/aboutpageimgs/outmodel/strategicicon.png'
import technicalIcon from '../../imagesfolder/aboutpageimgs/outmodel/technicalicon.png'
import deliveryIcon  from '../../imagesfolder/aboutpageimgs/outmodel/deliveryicon.png'
import './OurModel.css'

const cards = [
  { label: <>Strategic<br />Direction</>,       icon: strategicIcon },
  { label: <>Technical<br />Execution Capability</>, icon: technicalIcon },
  { label: <>Delivery Accountability</>,       icon: deliveryIcon  },
]

export default function OurModel() {
  return (
    <section className="our-model">
      <div className="container">
        <div className="our-model__content">

          <img src={starImg} alt="" className="our-model__star" />

          <h2 className="our-model__title">Our Model</h2>

          <p className="our-model__desc">
            AMB Strategic Group is a woman-owned consulting firm supported by a network of
            experienced technical specialists.
          </p>

          <div className="our-model__cards">
            {cards.map((card) => (
              <div key={card.label} className="our-model__card">
                <span className="our-model__card-label">{card.label}</span>
                <img src={card.icon} alt={card.label} className="our-model__card-icon" />
              </div>
            ))}
          </div>

          <p className="our-model__tagline">
            That structure matters. All in one model.
          </p>

        </div>
      </div>
    </section>
  )
}
