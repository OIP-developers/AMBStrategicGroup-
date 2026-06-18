import './Services.css'

const services = [
  {
    number: '01',
    title: 'Corporate Strategy',
    desc: 'We design long-term strategic roadmaps that align your organization\'s vision with market realities, enabling sustainable competitive advantage.',
    tags: ['Market Analysis', 'Growth Planning', 'Competitive Intelligence'],
  },
  {
    number: '02',
    title: 'Financial Advisory',
    desc: 'From capital structuring to M&A advisory, our financial experts guide critical decisions with rigorous analysis and market insight.',
    tags: ['M&A Advisory', 'Capital Markets', 'Risk Management'],
  },
  {
    number: '03',
    title: 'Digital Transformation',
    desc: 'We help organizations harness technology to reimagine operations, enhance customer experiences, and unlock new revenue streams.',
    tags: ['Process Automation', 'Digital Strategy', 'Tech Integration'],
  },
  {
    number: '04',
    title: 'Organizational Development',
    desc: 'Building high-performance cultures and leadership capabilities that drive execution and fuel long-term organizational success.',
    tags: ['Leadership', 'Change Management', 'Culture Design'],
  },
  {
    number: '05',
    title: 'Market Expansion',
    desc: 'Unlock new markets with data-driven entry strategies, local partnerships, and end-to-end go-to-market execution support.',
    tags: ['Market Entry', 'Partnerships', 'GTM Strategy'],
  },
  {
    number: '06',
    title: 'Performance Optimization',
    desc: 'Identify and eliminate inefficiencies across your value chain to boost productivity, reduce costs, and maximize profitability.',
    tags: ['Process Improvement', 'Cost Reduction', 'KPI Frameworks'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <div>
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              Comprehensive Solutions<br />for Every Challenge
            </h2>
          </div>
          <p className="section-subtitle">
            Our integrated suite of services addresses the full spectrum of strategic business
            needs — from vision to execution.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div key={service.number} className={`service-card ${i === 0 ? 'service-card--featured' : ''}`}>
              <div className="service-card__number">{service.number}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <div className="service-card__tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-card__tag">{tag}</span>
                ))}
              </div>
              <div className="service-card__arrow">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
