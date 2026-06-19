import { useState } from 'react'
import './Contact.css'

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5zm0 7a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/>
      </svg>
    ),
    label: 'Office',
    value: 'Teaneck, New Jersey\nUnited States',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.5l6 3.75 6-3.75V4H4zm0 2.25V16h12V6.25l-6 3.75-6-3.75z" fill="currentColor"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@ambstrategic.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6.5 2h7a1 1 0 011 1v14a1 1 0 01-1 1h-7a1 1 0 01-1-1V3a1 1 0 011-1zm3.5 12.5a1 1 0 100-2 1 1 0 000 2zM7 4v8h6V4H7z" fill="currentColor"/>
      </svg>
    ),
    label: 'Phone',
    value: '+1 929-263-5128',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">
            Let's Build Something<br />Exceptional Together
          </h2>
          <p className="contact__text">
            Ready to accelerate your organization's growth? Our team of experts is
            here to understand your challenges and craft the right strategic approach.
          </p>

          <div className="contact__details">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact__detail">
                <div className="contact__detail-icon">{item.icon}</div>
                <div>
                  <span className="contact__detail-label">{item.label}</span>
                  <p className="contact__detail-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact__social">
            {['LinkedIn', 'Twitter', 'Instagram'].map((s) => (
              <a key={s} href="#" className="contact__social-link">{s}</a>
            ))}
          </div>
        </div>

        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message Received!</h3>
              <p>Thank you for reaching out. Our team will contact you within 24 business hours.</p>
              <button className="contact__success-btn" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option>Corporate Strategy</option>
                    <option>Financial Advisory</option>
                    <option>Digital Transformation</option>
                    <option>Organizational Development</option>
                    <option>Market Expansion</option>
                    <option>Performance Optimization</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your challenge or project..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact__submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
