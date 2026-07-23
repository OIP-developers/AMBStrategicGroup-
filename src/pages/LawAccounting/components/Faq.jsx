import { useState } from 'react'

const FAQS = [
  {
    q: 'Is client information kept confidential?',
    a: 'Yes. We build with confidentiality, privilege-awareness, and governed data handling as the foundation — and we show your team exactly how before launch.',
  },
  {
    q: 'Will it give legal or financial advice?',
    a: "No. It captures, qualifies, and books — it never advises. It screens inquiries, routes qualified prospects to you, and filters out what doesn't fit.",
  },
  {
    q: 'Can it replace our answering service?',
    a: 'Yes. Instead of just taking a message, it qualifies the caller and books the consult — 24/7, including after hours.',
  },
  {
    q: 'Does it fit our current scheduling?',
    a: 'Yes. It books directly into the GHL calendar your firm already uses.',
  },
]

export default function Faq() {
  const [openFaqs, setOpenFaqs] = useState([0, 1, 2, 3])

  const toggleFaq = (i) => {
    setOpenFaqs((prev) =>
      prev.includes(i) ? prev.filter((n) => n !== i) : [...prev, i]
    )
  }

  return (
    <section id="faq" className="faq">
      <div className="glow glow-faq-1" />
      <div className="glow glow-faq-2" />
      <img
        src="/law-accounting/assets/boc-new-image/four-right.png"
        alt=""
        className="decor-img decor-star-c"
      />
      <img
        src="/law-accounting/assets/boc-new-image/five-left.png"
        alt=""
        className="decor-img decor-star-faq-2"
      />
      <div className="section-header">
        <span className="badge">FAQ</span>
        <h2 className="section-title">Straight answers</h2>
      </div>
      <div className="faq-list">
        {FAQS.map((item, i) => {
          const isOpen = openFaqs.includes(i)
          return (
            <div
              key={item.q}
              className={`faq-item${isOpen ? ' open' : ''}`}
              onClick={() => toggleFaq(i)}
            >
              <div className="faq-question">
                {item.q}
                <span className="faq-toggle" aria-hidden="true" />
              </div>
              <div className="faq-answer-wrap">
                <p className="faq-answer">{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
