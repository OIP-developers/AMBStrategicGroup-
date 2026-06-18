import { useState } from 'react'
import starImg from '../../imagesfolder/howitworks/howitworkstarimg.png'
import faqIcon from '../../imagesfolder/faqsection/faqimg.png'
import './FAQs.css'

const faqs = [
  {
    question: 'Can I request a custom AI solution?',
    answer: 'Yes! We offer full social media management, including content creation, strategy development, scheduling, and engagement. We help grow your presence, connect with your audience, and turn followers into loyal customers.',
  },
  {
    question: 'How can AI automation help my business?',
    answer: 'AI automation eliminates repetitive tasks, reduces operational costs, and allows your team to focus on high-value work. From lead generation to customer support, automation drives measurable efficiency gains.',
  },
  {
    question: 'Is AI difficult to integrate into my current system?',
    answer: 'Not at all. We handle the full integration process — from audit to deployment — ensuring your existing tools and workflows connect seamlessly with the new AI systems.',
  },
  {
    question: 'How long does AI setup take?',
    answer: 'Setup timelines vary by package. Starter systems are typically live within 7 days, Gold within 15 days, and Premium within 30 days. Complex custom builds may take longer.',
  },
  {
    question: 'How can AI automation help my business?',
    answer: 'AI automation gives your business a competitive edge by operating 24/7, reducing human error, and scaling without additional headcount.',
  },
]

export default function FAQs({ className = '' }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className={`faqs${className ? ' ' + className : ''}`}>
      <div className="container">
        <div className="faqs__layout">

          {/* Left */}
          <div className="faqs__left">
            <div className="faqs__title-row">
              <h2 className="faqs__title">FAQs</h2>
              <img src={starImg} alt="" className="faqs__star" />
            </div>
            <p className="faqs__desc">
              Our AI-driven automation eliminates busywork, streamlines your operations,
              and helps your business grow, without extra effort.
            </p>
          </div>

          {/* Right */}
          <div className="faqs__right">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
              >
                <button
                  className="faq-item__trigger"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="faq-item__question">{faq.question}</span>
                  <span className="faq-item__icon">
                    <img src={faqIcon} alt="" className="faq-item__icon-img" />
                  </span>
                </button>
                <div className={`faq-item__body ${openIndex === index ? 'faq-item__body--open' : ''}`}>
                  <p className="faq-item__answer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
