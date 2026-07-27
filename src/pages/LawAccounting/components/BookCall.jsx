import { useEffect } from 'react'

export default function BookCall() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="calendar" className="book-call">
      <div className="book-call-card">
        <div className="book-call-text">
          <h2>Book a Strategy Call</h2>
          <div className="para-text-img">
                <p>
                In 30 minutes we'll map where your firm is leaking calls and
                revenue — and exactly what a 7-day system would fix first. No
                pressure, no jargon.
              </p>
            <div className="imagebox">
              <img src="/law-accounting/assets/figma-star-group.png" alt="" className="decor-img decor-bookcall-1"
              />
            </div>
          </div>
          <span className="book-call-cta">
            Book Your Free AI Strategy Session Today
          </span>
        </div>
        <div className="getstarted__right">
          <div className="getstarted__form-box-wrap">
            <div className="getstarted__form-box">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/rx4FnQDUZqhEEzKmElBs"
                style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                scrolling="no"
                id="rx4FnQDUZqhEEzKmElBs_1782148430321"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
