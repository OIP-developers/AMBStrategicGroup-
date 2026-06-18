import azraImg from '../../imagesfolder/aboutpageimgs/ourfoundersection/azraimg.png'
import './Founder.css'

export default function Founder() {
  return (
    <section className="founder">
      <div className="founder__container">
        <h2 className="founder__title">Our Founder</h2>

        <div className="founder__inner">

          {/* Left: image + overlaid card */}
          <div className="founder__left">
            <div className="founder__image-wrap">
              <img src={azraImg} alt="Azra Rehan" className="founder__img" />
              <div className="founder__card">
                <p className="founder__card-role">Founder &amp; CEO</p>
                <h3 className="founder__card-name">
                  Azra<br />Rehan
                </h3>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="founder__card-btn">Connect on LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Right: description + credentials */}
          <div className="founder__right">
            <p className="founder__desc founder__desc--1">
              Azra Rehan is the Founder &amp; CEO of AMB Strategic Group, bringing over 15 years
              of experience leading enterprise transformation initiatives across financial services,
              public sector, and global nonprofit organizations. Her background includes consulting
              and leadership roles with Accenture, Guidehouse, UNICEF, HSBC, and Bank of America.
            </p>
            <p className="founder__desc founder__desc--2">
              Azra specializes in enterprise transformation, program delivery, governance, and
              operational excellence. She helps organizations modernize processes, strengthen
              compliance, align stakeholders, and implement scalable solutions that drive
              measurable business outcomes and sustainable growth.
            </p>
            <div className="founder__cred-row">
              <div className="founder__cred-box">
                <span className="founder__cred-label">Education</span>
                <span className="founder__cred-name">NYU Wagner · MPA</span>
                <span className="founder__cred-detail">
                  Staffordshire University · BS Computer Science
                </span>
              </div>
              <div className="founder__cred-box">
                <span className="founder__cred-label">Credentials</span>
                <span className="founder__cred-name">SIX SIGMA GREEN BELT</span>
                <span className="founder__cred-detail">Applied AI · Lean Practitioner</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
