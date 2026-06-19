import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import '../components/LegalContent/LegalContent.css'

export default function TermsOfServicesPage() {
  return (
    <div className="legal-page-wrap">
      <Navbar />
      <main className="legal">
        <div className="container">
        <div className="legal__container">

          <h1 className="legal__title">Terms of Service</h1>
          <p className="legal__date">Last Updated: June 2026</p>

          <p className="legal__intro">
            By accessing this website or using services provided by <b>AMB Strategic Group</b>, you
            agree to these Terms of Service.
          </p>

          <div className="legal__section">
            <h2 className="legal__h2">1. Services</h2>
            <p className="legal__p">AMB Strategic Group provides services including but not limited to:</p>
            <ul className="legal__ul">
              <li className="legal__li">AI Automation Solutions</li>
              <li className="legal__li">AI Voice Agents</li>
              <li className="legal__li">AI Chatbots</li>
              <li className="legal__li">AI Lead Generation Systems</li>
              <li className="legal__li">AI Outbound SDR Solutions</li>
              <li className="legal__li">AI Cold Email Systems</li>
              <li className="legal__li">CRM Automation</li>
              <li className="legal__li">Content Automation</li>
              <li className="legal__li">AI Consulting</li>
              <li className="legal__li">Custom AI Solutions</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">2. Service Scope</h2>
            <p className="legal__p">
              Project scope, pricing, timelines, and deliverables are defined in individual proposals,
              agreements, or statements of work.
            </p>
            <p className="legal__p">
              Any work outside the agreed scope may require a separate proposal and additional fees.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">3. No Guarantee of Results</h2>
            <p className="legal__p">
              While we strive to provide high-quality solutions, AMB Strategic Group does not guarantee:
            </p>
            <ul className="legal__ul">
              <li className="legal__li">Specific revenue outcomes</li>
              <li className="legal__li">Lead volume</li>
              <li className="legal__li">Sales performance</li>
              <li className="legal__li">Advertising results</li>
              <li className="legal__li">Business growth metrics</li>
            </ul>
            <p className="legal__p">Results depend on many factors beyond our control.</p>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">4. Client Responsibilities</h2>
            <p className="legal__p">Clients agree to:</p>
            <ul className="legal__ul">
              <li className="legal__li">Provide accurate information</li>
              <li className="legal__li">Provide required access to systems and accounts</li>
              <li className="legal__li">Supply requested materials and approvals promptly</li>
              <li className="legal__li">Maintain necessary third-party subscriptions where applicable</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">5. Intellectual Property</h2>
            <p className="legal__p">
              Upon full payment, clients receive ownership of final deliverables specifically created
              for their project.
            </p>
            <p className="legal__p">AMB Strategic Group retains ownership of:</p>
            <ul className="legal__ul">
              <li className="legal__li">Internal frameworks</li>
              <li className="legal__li">Templates</li>
              <li className="legal__li">Methodologies</li>
              <li className="legal__li">Reusable code</li>
              <li className="legal__li">Proprietary systems and processes</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">6. Third-Party Services</h2>
            <p className="legal__p">Our solutions may integrate with third-party platforms including:</p>
            <ul className="legal__ul">
              <li className="legal__li">OpenAI</li>
              <li className="legal__li">GoHighLevel</li>
              <li className="legal__li">HubSpot</li>
              <li className="legal__li">Twilio</li>
              <li className="legal__li">Meta</li>
              <li className="legal__li">Google</li>
              <li className="legal__li">Microsoft</li>
              <li className="legal__li">Other approved providers</li>
            </ul>
            <p className="legal__p">
              We are not responsible for outages, policy changes, or interruptions caused by
              third-party platforms.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">7. Payments</h2>
            <p className="legal__p">
              Payment terms are outlined in client proposals and service agreements.
            </p>
            <p className="legal__p">
              Late or unpaid balances may result in paused services until payment is received.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">8. Limitation of Liability</h2>
            <p className="legal__p">
              AMB Strategic Group shall not be liable for any indirect, incidental, consequential, or
              special damages arising from the use of our services.
            </p>
            <p className="legal__p">
              Maximum liability shall not exceed the amount paid by the client for services directly
              related to the claim.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">9. Termination</h2>
            <p className="legal__p">
              Either party may terminate services according to the terms outlined in the applicable
              service agreement.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">10. Changes to Terms</h2>
            <p className="legal__p">
              We reserve the right to update these Terms of Service at any time. Updated versions will
              be posted on this website.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__h2">11. Contact Information</h2>
            <div className="legal__contact-block">
              <p>AMB Strategic Group</p>
              <p>Website: <a href="https://www.ambstrategicgroup.com">www.ambstrategicgroup.com</a></p>
              <p>Email: <a href="mailto:info@ambstrategicgroup.com">info@ambstrategicgroup.com</a></p>
              <p>Address: Teaneck, New Jersey, United States</p>
            </div>
          </div>

        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
