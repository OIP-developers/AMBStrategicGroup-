import './Stats.css'

const stats = [
  { number: '500+', label: 'Projects Delivered', desc: 'Across 30+ industries worldwide' },
  { number: '98%', label: 'Client Retention', desc: 'Long-term strategic partnerships' },
  { number: '$2.4B', label: 'Value Created', desc: 'For clients over 15 years' },
  { number: '45+', label: 'Countries Served', desc: 'Global reach, local expertise' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__bg-line"></div>
      <div className="container stats__grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <div className="stat-item__number">{stat.number}</div>
            <div className="stat-item__label">{stat.label}</div>
            <div className="stat-item__desc">{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
