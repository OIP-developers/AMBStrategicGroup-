import Navbar from '../components/Navbar/Navbar'
import ContactBanner from '../components/ContactBanner/ContactBanner'
import GetStarted from '../components/GetStarted/GetStarted'
import FAQs from '../components/FAQs/FAQs'
import Footer from '../components/Footer/Footer'

export default function ContactPage() {
  return (
    <>
      <div className="hero-wrapper">
        <Navbar />
        <ContactBanner />
      </div>
      <main>
        <GetStarted />
        <FAQs className="faqs--contact" />
      </main>
      <Footer />
    </>
  )
}
