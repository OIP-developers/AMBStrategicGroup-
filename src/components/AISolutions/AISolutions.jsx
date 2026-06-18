import starImg from '../../imagesfolder/howitworks/howitworkstarimg.png'
import btnIcon from '../../imagesfolder/herosectionimg/ambbuttonicon.png'
import icon1 from '../../imagesfolder/businesssolutionspage/solutionsweprovide/Group 48097664.png'
import icon2 from '../../imagesfolder/businesssolutionspage/solutionsweprovide/Group 48097667.png'
import icon3 from '../../imagesfolder/businesssolutionspage/solutionsweprovide/Group 48097697.png'
import icon4 from '../../imagesfolder/businesssolutionspage/solutionsweprovide/Group 48097698.png'
import icon5 from '../../imagesfolder/businesssolutionspage/solutionsweprovide/Group 48097701.png'
import icon6 from '../../imagesfolder/businesssolutionspage/solutionsweprovide/Group 48097702.png'
import icon7 from '../../imagesfolder/businesssolutionspage/solutionsweprovide/Group 48097704.png'
import icon8 from '../../imagesfolder/businesssolutionspage/solutionsweprovide/Group 48097705.png'
import './AISolutions.css'

const solutions = [
  {
    id: 1,
    title: 'AI Voice Receptionist',
    desc: 'A 24/7 AI-powered phone agent that answers calls, qualifies leads, books appointments, and handles FAQs in a natural human voice. Integrated with your CRM and calendar.',
    icon: icon1,
    reverse: false,
  },
  {
    id: 2,
    title: 'AI Outbound SDR — Appointment Setter',
    desc: 'Auto-target outreach that includes sequence outreach, personalized messaging, and books qualified meetings on your calendar. Works around the clock so your pipeline never sleeps.',
    icon: icon2,
    reverse: true,
  },
  {
    id: 3,
    title: 'AI Lead Generation Funnel',
    desc: 'End-to-end funnel architecture — landing pages, lead magnets, multiple sequences, and conversion optimization — engineered to capture and convert high-intent prospects at scale.',
    icon: icon3,
    reverse: false,
  },
  {
    id: 4,
    title: 'AI Cold Email System',
    desc: 'Fully automated email outreach at scale with AI-personalized copy, deliverability optimization, warm-up management, and reply handling to send meetings to your inbox.',
    icon: icon4,
    reverse: true,
  },
  {
    id: 5,
    title: 'Custom Knowledge Base Chatbot (RAG)',
    desc: 'End-to-end funnel architecture — landing pages, lead magnets, multiple sequences, and conversion optimization — engineered to capture and convert high-intent prospects at scale.',
    icon: icon5,
    reverse: false,
  },
  {
    id: 6,
    title: 'Content Repurposing Engine',
    desc: 'Turn one piece of long-form content into dozens of assets — social posts, email snippets, video scripts, and SEO-optimized articles — automatically re-created for every channel.',
    icon: icon6,
    reverse: true,
  },
  {
    id: 7,
    title: 'AI Proposal & Quote Generator',
    desc: 'Automatically generate professional, branded proposals & quotes from discovery call notes or CRM data. Cuts turnaround time from hours to minutes.',
    icon: icon7,
    reverse: false,
  },
  {
    id: 8,
    title: 'AI E-commerce Assistant Suite',
    desc: 'AI-powered product recommendations, abandoned cart recovery, customer support, and decision tools built to increase AOV and LTV while reducing support overhead.',
    icon: icon8,
    reverse: true,
  },
]

export default function AISolutions() {
  return (
    <section className="aisolutions">
      <div className="aisolutions__container">

        {/* Header */}
        <div className="aisolutions__header">
          <img src={starImg} alt="" className="aisolutions__star" />
          <h2 className="aisolutions__title">Solutions We Provide</h2>
        </div>

        {/* Cards */}
        <div className="aisolutions__list">
          {solutions.map((item) => (
            <div
              key={item.id}
              className={`aisolutions__card${item.reverse ? ' aisolutions__card--reverse' : ''}`}
            >
              {/* Content */}
              <div className="aisolutions__content">
                <h3 className="aisolutions__card-title">{item.title}</h3>
                <p className="aisolutions__card-desc">{item.desc}</p>
              </div>

              {/* Icon */}
              <div className="aisolutions__icons">
                <img src={item.icon} alt="" className="aisolutions__icon" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="aisolutions__cta">
          <a href="#contact" className="aisolutions__cta-btn" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <img src={btnIcon} alt="" className="aisolutions__cta-btn-icon" />
            Book a Strategy Call
          </a>
        </div>

      </div>
    </section>
  )
}
