import './AboutBanner.css'

const stats = [
  { number: '15+',   label: 'Years of practice'                   },
  { number: '10+',   label: 'Public-sector agencies transformed'   },
  { number: '35%',   label: 'Avg. operational efficiency lift'     },
  { number: '$80M+', label: 'Infrastructure under governance'      },
]

export default function AboutBanner() {
  return (
    <section className="about-banner">
      <div className="container">
        <div className="about-banner__content">

          <span className="about-banner__badge">About Us 12</span>

          <h1 className="about-banner__title">AMB Strategic Group</h1>

          <p className="about-banner__desc">
            AMB Strategic Group was built on a simple belief: most organizations
            don't fail because of ideas — they fail because of execution gaps.
          </p>

          <p className="about-banner__sub">We exist to close that gap.</p>

          <div className="about-banner__stats">
            {stats.map((stat) => (
              <div key={stat.number} className="about-banner__stat-box">
                <span className="about-banner__stat-number">{stat.number}</span>
                <span className="about-banner__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
