import { Link } from 'react-router-dom'
import aiImg from '../../imagesfolder/Howwecansection/aiautomationboximg.png'
import bizImg from '../../imagesfolder/Howwecansection/businesstransformationboximg.png'
import btnIcon from '../../imagesfolder/ambiconbutton.png'
import './HowWeCan.css'

const cards = [
  {
    title: 'AI & Automation',
    img: aiImg,
    desc: 'We help organizations identify where AI actually improves performance — then design and implement systems that reduce manual work and increase operational speed.',
    btnText: 'Learn More About AI & Automation',
    link: '/ai-automation',
  },
  {
    title: 'Business Transformation',
    img: bizImg,
    desc: 'We fix the real problem underneath most "AI initiatives" — broken processes, unclear ownership, and inefficient delivery systems.',
    btnText: 'Learn More About Business Transformation',
    link: '/business-transformation',
  },
]

export default function HowWeCan() {
  return (
    <section id="services" className="howwecan">
      <div className="container">

        <div className="howwecan__top">
          <h2 className="howwecan__title">
            How we can transform<br />your business.
          </h2>
          <p className="howwecan__desc">
            We operate at the intersection of business consulting and applied AI.<br />
            Not theory. Not dashboards. Not hype.
          </p>
        </div>

        <div className="howwecan__cards">
          {cards.map((card) => (
            <div key={card.title} className="hwc-card">
              <h3 className="hwc-card__title">{card.title}</h3>
              <img src={card.img} alt={card.title} className="hwc-card__img" />
              <p className="hwc-card__desc">{card.desc}</p>
              <Link to={card.link} className="hwc-card__btn">
                <span>{card.btnText}</span>
                <img src={btnIcon} alt="" className="hwc-card__btn-icon" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
