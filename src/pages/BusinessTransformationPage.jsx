import Navbar from '../components/Navbar/Navbar'
import BTBanner from '../components/BTBanner/BTBanner'
import BusinessSection from '../components/BusinessSection/BusinessSection'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import FAQs from '../components/FAQs/FAQs'
import GetStarted from '../components/GetStarted/GetStarted'
import Footer from '../components/Footer/Footer'

export default function BusinessTransformationPage() {
  return (
    <>
      <div className="hero-wrapper">
        <Navbar />
        <BTBanner />
      </div>
      <main>
        <BusinessSection />
        <HowItWorks noBefore />
        <WhatWeDo />
        <FAQs />
        <GetStarted />
      </main>
      <Footer />
    </>
  )
}
