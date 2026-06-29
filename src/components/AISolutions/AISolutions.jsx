import starImg from '../../imagesfolder/howitworks/howitworkstarimg.png'
import btnIcon from '../../imagesfolder/herosectionimg/ambbuttonicon.png'
import icon1 from '../../imagesfolder/aiAutomation/AIVoiceReceptionist.png'
import icon2 from '../../imagesfolder/aiAutomation/AIOutboundSDRAppointmentSetter.png'
import icon3 from '../../imagesfolder/aiAutomation/AILeadGenerationFunnel.png'
import icon4 from '../../imagesfolder/aiAutomation/AIColdEmailSystem.png'
import icon5 from '../../imagesfolder/aiAutomation/CustomKnowledgeBaseChatbot.png'
import icon6 from '../../imagesfolder/aiAutomation/ContentRepurposingEngine.png'
import icon7 from '../../imagesfolder/aiAutomation/AIProposalQuote Generator.png'
import icon8 from '../../imagesfolder/aiAutomation/AIEcommerceAssistantSuite.png'
import './AISolutions.css'

// OLD DESIGN DATA — kept for future use
// const solutions = [
//   { id: 1, title: 'AI Voice Receptionist', desc: 'A 24/7 AI-powered phone agent...', icon: icon1, reverse: false },
//   { id: 2, title: 'AI Outbound SDR — Appointment Setter', desc: '...', icon: icon2, reverse: true },
//   { id: 3, title: 'AI Lead Generation Funnel', desc: '...', icon: icon3, reverse: false },
//   { id: 4, title: 'AI Cold Email System', desc: '...', icon: icon4, reverse: true },
//   { id: 5, title: 'Custom Knowledge Base Chatbot (RAG)', desc: '...', icon: icon5, reverse: false },
//   { id: 6, title: 'Content Repurposing Engine', desc: '...', icon: icon6, reverse: true },
//   { id: 7, title: 'AI Proposal & Quote Generator', desc: '...', icon: icon7, reverse: false },
//   { id: 8, title: 'AI E-commerce Assistant Suite', desc: '...', icon: icon8, reverse: true },
// ]

const solutions = [
  {
    id: 1,
    title: 'AI Voice Receptionist',
    desc: 'A 24/7 AI-powered phone agent that answers calls, qualifies leads, books appointments, and handles FAQs in a natural human voice. Integrated with your CRM and calendar.',
    icon: icon1,
    bullets: [
      '24/7 inbound voice agent on a dedicated number',
      'Captures name, contact & intent into the CRM',
      'Live transfer to a human agent on demand',
      'Multilingual conversation support',
      'FAQs from a custom knowledge base',
      'Books appointments to the client\'s calendar',
      'Voicemail-to-text with AI summary',
      'Full call recording & searchable transcripts',
    ],
    bestFor: 'Clinics, dental practices, salons, law firms, real estate offices, and service agencies',
  },
  {
    id: 2,
    title: 'AI Outbound SDR — Appointment Setter',
    desc: 'Automated outreach that researches prospects, personalizes messaging, and books qualified meetings into your calendar. Works around the clock so your pipeline never sleeps.',
    icon: icon2,
    bullets: [
      'Inbound leads contacted within 60 seconds',
      'Direct calendar booking with sales reps',
      'No-show recovery sequences',
      'Full transcripts, recordings & outcome tracking',
      'BANT-style qualification (Budget, Authority, Need, Timeline)',
      'Pre-appointment SMS & email reminders',
      'AI lead scoring with CRM sync',
      'Per-rep round-robin assignment',
    ],
    bestFor: 'Coaches, agencies, solar, insurance, home services, and B2B SaaS',
  },
  {
    id: 3,
    title: 'AI Lead Generation Funnel',
    desc: 'End-to-end funnel architecture — landing pages, lead magnets, nurture sequences, and conversion optimization — engineered to capture and convert high-intent prospects at scale.',
    icon: icon3,
    bullets: [
      'AI-driven scraping from Apollo, Clay & Apify',
      'AI-personalized sequences using prospect data',
      'Post-opt-in AI voice + email follow-up',
      'Multi-channel attribution dashboard',
      'Cold email infrastructure with warmed domains',
      'Branded opt-in landing page',
      'Direct calendar booking for qualified prospects',
      'Per-vertical lead-quality scoring',
    ],
    bestFor: 'Agencies and B2B operators without a predictable source of qualified leads',
  },
  {
    id: 4,
    title: 'AI Cold Email System',
    desc: 'Fully managed cold email infrastructure with AI-personalized copy, deliverability optimization, warm-up management, and reply handling to land meetings in your inbox.',
    icon: icon4,
    bullets: [
      '10–50 sending domains provisioned & warmed',
      'Personalization from site, LinkedIn & news',
      'Inbox rotation & deliverability monitoring',
      'Open, reply & meeting-rate dashboards',
      'Lead scraping & enrichment via Apollo & Clay',
      'Multi-step sequences with reply detection',
      'Direct calendar booking on positive replies',
      'Channel ops managed by HIP — not just provisioned',
    ],
    bestFor: 'B2B agencies, SaaS companies, recruiters, and consultants',
  },
  {
    id: 5,
    title: 'Custom Knowledge Base Chatbot (RAG)',
    desc: 'Provide accurate, instant answers using your business knowledge, helping website visitors and customers get the information they need, resolve questions quickly, and receive reliable support anytime, 24/7.',
    icon: icon5,
    bullets: [
      'Ingests SOPs, manuals, policies, product docs',
      'Deploys as website widget, Slack bot, or portal',
      'Continuous improvement from new content + feedback',
      'Multi-language responses',
      'Vector DB with hybrid retrieval & source citation',
      'Confidence-based escalation to a human agent',
      'Admin panel for content updates & analytics',
      'Role-based access & audit log',
    ],
    bestFor: 'SaaS support, internal HR/IT, consulting firms, and online retailers',
  },
  {
    id: 6,
    title: 'Content Repurposing Engine',
    desc: 'Turn one piece of long-form content into dozens of assets — social posts, email snippets, video scripts, and SEO-optimized articles — automatically formatted for every channel.',
    icon: icon6,
    bullets: [
      'Single input → 20+ outputs (podcast, video, webinar, blog)',
      'Blog articles, newsletters & long-form rewrites',
      'Auto-publishing to Buffer, Hootsuite, LinkedIn & X',
      'Cross-platform performance tracking',
      'LinkedIn, X threads, IG captions, YT shorts, carousels',
      'Per-brand voice and tone training',
      'Content calendar with approval workflow',
      'Auto-cuts & captions for short-form video',
    ],
    bestFor: 'Podcasters, YouTubers, course creators, and B2B marketing teams',
  },
  {
    id: 7,
    title: 'AI Proposal & Quote Generator',
    desc: 'Automatically generate professional, branded proposals and quotes from discovery-call notes or CRM data. Cuts turnaround time from hours to minutes.',
    icon: icon7,
    bullets: [
      'Generates proposal from discovery call or intake form',
      'Auto-sent for e-signature via PandaDoc / DocuSign',
      'CRM sync (HubSpot, GoHighLevel, Salesforce)',
      'Approval routing for senior reviewers',
      'Branded scope, pricing, timeline & terms in < 5 minutes',
      'Version tracking & acceptance analytics',
      'Template library per service line',
      'Revenue forecasting from open proposals',
    ],
    bestFor: 'Agencies, contractors, consultants, and B2B service providers',
  },
  {
    id: 8,
    title: 'AI E-commerce Assistant Suite',
    desc: 'AI-powered product recommendations, abandoned-cart recovery, customer support, and upsell automation. Built to increase AOV and LTV while reducing support overhead.',
    icon: icon8,
    bullets: [
      'Recommendation Engine — personalized on-site & email',
      'Abandoned Cart Recovery — SMS, email & WhatsApp',
      'Dynamic incentives based on cart value',
      'Revenue attribution dashboards per module',
      'AI Support Chat — tracking, returns, sizing, FAQs',
      'Native Shopify, Klaviyo & WhatsApp Business integration',
      'Multilingual customer support',
      'A/B testing of recovery flows',
    ],
    bestFor: 'DTC brands and Shopify stores doing $50k+ per month',
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

        {/* OLD DESIGN — hidden, kept for future use */}
        {false && (
          <div className="aisolutions__list">
            {solutions.map((item) => (
              <div
                key={item.id}
                className={`aisolutions__card${item.reverse ? ' aisolutions__card--reverse' : ''}`}
              >
                <div className="aisolutions__content">
                  <h3 className="aisolutions__card-title">{item.title}</h3>
                  <p className="aisolutions__card-desc">{item.desc}</p>
                </div>
                <div className="aisolutions__icons">
                  <img src={item.icon} alt="" className="aisolutions__icon" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* NEW GRID DESIGN */}
        <div className="aisolutions__grid">
          {solutions.map((item) => (
            <div key={item.id} className="aisolutions__card aisolutions__card-v2">

              {/* Header row: title + icon box */}
              <div className="aisv2__header-row">
                <h3 className="aisv2__title">{item.title}</h3>
                <div className="aisv2__icon-box">
                  <img src={item.icon} alt="" className="aisv2__icon-img" />
                </div>
              </div>

              {/* Description */}
              <p className="aisv2__desc">{item.desc}</p>

              {/* Bullet list */}
              <ul className="aisv2__bullets">
                {item.bullets.map((b, i) => (
                  <li key={i} className="aisv2__bullet-item">
                    <span className="aisv2__bullet-dot" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="aisv2__divider" />

              {/* Best for */}
              <div className="aisv2__bestfor-row">
                <span className="aisv2__bestfor-badge">BEST FOR</span>
                <p className="aisv2__bestfor-text">{item.bestFor}</p>
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
