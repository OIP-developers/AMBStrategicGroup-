import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import '../components/LegalContent/LegalContent.css'

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page-wrap">
      <Navbar />
      <main className="legal">
        <div className="container">
        <div className="legal__container">

          <h1 className="legal__title">Privacy Policy</h1>
          <p className="legal__date">Last Updated: June 2026</p>

          <p className="legal__intro">
            <b>AMB Strategic Group</b> ("Company", "we", "our", or "us") respects your privacy and is
            committed to protecting the personal information you provide through our website, services,
            and communication channels. By accessing or using <b>AMB Strategic Group</b>, you agree to
            the terms of this policy.
          </p>

          <div className="legal__section">
            <h2 className="legal__h2">1. Information We Collect</h2>
            <h3 className="legal__h3">A. Information You Provide</h3>
            <ul className="legal__ul">
              <li className="legal__li"><b>Name &amp; Contact:</b> First and last name, email address, phone number</li>
              <li className="legal__li"><b>Business Details:</b> Company name, business information, project requirements</li>
              <li className="legal__li"><b>Communication Preferences:</b> How you prefer to be contacted</li>
            </ul>
            <h3 className="legal__h3">B. Information Collected Automatically</h3>
            <ul className="legal__ul">
              <li className="legal__li"><b>Usage Data:</b> Website activity, pages visited, and analytics data</li>
              <li className="legal__li"><b>Device &amp; Location Data:</b> IP address, browser type, device information</li>
              <li className="legal__li"><b>Cookies &amp; Tracking:</b> We use cookies and similar technologies for functionality and analytics</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">2. How We Use Your Information</h2>
            <p className="legal__p">We use your information to:</p>
            <ul className="legal__ul">
              <li className="legal__li">Respond to inquiries and requests</li>
              <li className="legal__li">Schedule consultations and meetings</li>
              <li className="legal__li">Deliver services and support</li>
              <li className="legal__li">Improve our website and services</li>
              <li className="legal__li">Send service-related communications</li>
              <li className="legal__li">Provide requested information and resources</li>
              <li className="legal__li">Analyze website performance and user experience</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">3. AI &amp; Automation Services</h2>
            <p className="legal__p">Some communications may be handled by AI-powered technologies including:</p>
            <ul className="legal__ul">
              <li className="legal__li">AI Chatbots</li>
              <li className="legal__li">AI Voice Agents</li>
              <li className="legal__li">Automated Email Systems</li>
              <li className="legal__li">Automated SMS Systems</li>
            </ul>
            <p className="legal__p">
              Information shared through these systems may be stored and processed to provide requested
              services and improve customer experience.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">4. SMS Communications</h2>
            <p className="legal__p">
              By providing your phone number, you consent to receive service-related communications,
              appointment reminders, updates, and follow-ups from AMB Strategic Group.
            </p>
            <p className="legal__p">Message frequency may vary. Message and data rates may apply.</p>
            <p className="legal__p">You may opt out at any time by replying STOP.</p>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">5. Email Communications</h2>
            <p className="legal__p">By submitting your information, you may receive emails related to:</p>
            <ul className="legal__ul">
              <li className="legal__li">Consultations</li>
              <li className="legal__li">Project updates</li>
              <li className="legal__li">Service information</li>
              <li className="legal__li">Requested resources</li>
              <li className="legal__li">Marketing communications</li>
            </ul>
            <p className="legal__p">You may unsubscribe from marketing emails at any time.</p>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">6. Information Sharing</h2>
            <p className="legal__p">We do not sell, rent, or trade your personal information.</p>
            <p className="legal__p">
              Information may be shared with trusted service providers only when necessary to deliver
              services, including:
            </p>
            <ul className="legal__ul">
              <li className="legal__li">CRM platforms</li>
              <li className="legal__li">Hosting providers</li>
              <li className="legal__li">Email service providers</li>
              <li className="legal__li">Communication platforms</li>
              <li className="legal__li">Analytics providers</li>
              <li className="legal__li">AI technology providers</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">7. Data Security</h2>
            <p className="legal__p">
              We implement commercially reasonable safeguards designed to protect personal information
              from unauthorized access, disclosure, or misuse.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">8. Your Rights</h2>
            <p className="legal__p">You may request:</p>
            <ul className="legal__ul">
              <li className="legal__li">Access to your personal information</li>
              <li className="legal__li">Correction of inaccurate information</li>
              <li className="legal__li">Deletion of personal information</li>
              <li className="legal__li">Removal from marketing communications</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">9. Contact Us</h2>
            <div className="legal__contact-block">
              <p>AMB Strategic Group</p>
              <p>Website: <a href="https://www.ambstrategicgroup.com">www.ambstrategicgroup.com</a></p>
              <p>Email: <a href="mailto:info@ambstrategicgroup.com">info@ambstrategicgroup.com</a></p>
              <p>Address: 1209 Barton Springs Rd Texas, Austin, United States</p>
            </div>
          </div>

        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
