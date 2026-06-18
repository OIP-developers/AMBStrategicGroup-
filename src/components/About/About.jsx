import starIcon from '../../imagesfolder/aboutsection/aboutleftstar.png'
import azraImg from '../../imagesfolder/aboutsection/azrarehan.png'
import womanIcon from '../../imagesfolder/aboutsection/womanownedicon.png'
import consultingIcon from '../../imagesfolder/aboutsection/consultingicon.png'
import enterpriseIcon from '../../imagesfolder/aboutsection/enterprisereadyicon.png'
import strategyIcon from '../../imagesfolder/aboutsection/strategyexecutionicon.png'
import btnIcon from '../../imagesfolder/ambiconbutton.png'
import './About.css'

const boxes = [
  { icon: womanIcon,      label: 'Woman-owned business' },
  { icon: consultingIcon, label: 'AI + Consulting Expertise' },
  { icon: enterpriseIcon, label: 'Enterprise-Ready Delivery' },
  { icon: strategyIcon,   label: 'Strategy + Execution Model' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        {/* Top Row */}
        <div className="about__top">
          <div className="about__left">
            <p className="about__tag">
              <img src={starIcon} alt="" className="about__tag-icon" />
              About us
            </p>
            <h2 className="about__title">Led by Industry Experts.</h2>
            <p className="about__desc">
              AMB Strategic Group is led by seasoned transformation professionals who have delivered
              complex programs, operational improvements, and technology initiatives across enterprise
              organizations. Our experience enables us to align strategy, execution, and innovation
              to drive measurable business outcomes.
            </p>
          </div>

          <div className="about__right">
            <img src={azraImg} alt="Azra Rehan" className="about__person-img" />
            <div className="about__person-info">
              <p className="about__founder">Founder &amp; CEO</p>
              <h3 className="about__name">Azra Rehan</h3>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="about__linkedin">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Boxes Row */}
        <div className="about__boxes">
          {boxes.map((box) => (
            <div key={box.label} className="about__box">
              <img src={box.icon} alt={box.label} className="about__box-icon" />
              <p className="about__box-label">{box.label}</p>
            </div>
          ))}
        </div>

        {/* Know More Button */}
        <div className="about__btn-wrap">
          <a href="#contact" className="about__btn" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Know More
            <img src={btnIcon} alt="" className="about__btn-icon" />
          </a>
        </div>

      </div>
    </section>
  )
}
