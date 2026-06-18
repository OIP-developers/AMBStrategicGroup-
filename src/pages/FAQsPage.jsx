import Navbar from '../components/Navbar/Navbar'
import FAQsBanner from '../components/FAQsBanner/FAQsBanner'
import FAQs from '../components/FAQs/FAQs'
import GetStarted from '../components/GetStarted/GetStarted'
import Footer from '../components/Footer/Footer'

export default function FAQsPage() {
  return (
    <>
      <div className="hero-wrapper">
        <Navbar />
        <FAQsBanner />
      </div>
      <main>
        <FAQs />
        <GetStarted />
      </main>
      <Footer />
    </>
  )
}
