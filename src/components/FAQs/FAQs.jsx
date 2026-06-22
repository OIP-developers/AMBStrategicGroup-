import { useState } from 'react'
import starImg from '../../imagesfolder/howitworks/howitworkstarimg.png'
import faqIcon from '../../imagesfolder/faqsection/faqimg.png'
import './FAQs.css'

const faqs = [
  {
    question: 'Can I request a custom AI solution?',
    answer: 'Yes. We specialize in building custom AI solutions tailored to your business needs. Whether you need sales automation, customer support, lead generation, workflow automation, or a completely unique AI system, we design and implement solutions that fit your goals and existing processes.',
  },
  {
    question: 'How can AI automation help my business?',
    answer: 'AI automation helps reduce manual work, improve response times, increase productivity, and create better customer experiences. From handling inquiries and generating leads to automating follow-ups and internal workflows, AI allows your team to focus on growth instead of repetitive tasks.',
  },
  {
    question: 'Is AI difficult to integrate into my current system?',
    answer: 'Not at all. Our team handles the entire integration process and can connect AI solutions with your existing CRM, website, phone system, email platform, calendar, e-commerce store, and other business tools. We ensure a smooth implementation with minimal disruption.',
  },
  {
    question: 'How long does AI setup take?',
    answer: 'Most AI solutions can be implemented within 1–4 weeks depending on the complexity of the project, required integrations, and customization needs. During our consultation, we\'ll provide a clear timeline based on your specific requirements.',
  },
  {
    question: 'What kind of support do you provide after setup?',
    answer: 'We provide ongoing monitoring, optimization, and technical support. Our retainer plans include regular performance reviews and updates to ensure your AI systems continuously improve over time.',
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
