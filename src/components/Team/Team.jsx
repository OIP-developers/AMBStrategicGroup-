import './Team.css'

const team = [
  {
    name: 'Ahmed M. Baig',
    role: 'Founder & CEO',
    bio: 'Former McKinsey partner with 20+ years driving strategic transformations for Fortune 500 companies across MENA and Asia.',
    initials: 'AB',
  },
  {
    name: 'Mariam Khalil',
    role: 'Managing Director',
    bio: 'Expert in organizational restructuring and M&A integration with a track record spanning 80+ successful transactions.',
    initials: 'MK',
  },
  {
    name: 'Bilal Siddiqui',
    role: 'Chief Financial Advisor',
    bio: 'CFA charterholder with deep expertise in capital markets, private equity, and cross-border investment structuring.',
    initials: 'BS',
  },
  {
    name: 'Sara Nawaz',
    role: 'Head of Digital Strategy',
    bio: 'Technology strategist who has led digital transformation programs for leading banks and retail conglomerates globally.',
    initials: 'SN',
  },
]

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="team__header">
          <span className="section-tag">Our Leadership</span>
          <h2 className="section-title">
            The Minds Behind<br />Our Success
          </h2>
          <p className="section-subtitle">
            A team of seasoned professionals united by a shared commitment to delivering
            transformative outcomes for our clients.
          </p>
        </div>

        <div className="team__grid">
          {team.map((member) => (
            <div key={member.name} className="team-card">
              <div className="team-card__avatar">
                <span className="team-card__initials">{member.initials}</span>
                <div className="team-card__avatar-ring"></div>
              </div>
              <div className="team-card__info">
                <h3 className="team-card__name">{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
