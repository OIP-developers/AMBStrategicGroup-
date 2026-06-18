import Navbar from '../components/Navbar/Navbar'
import AIAutomationBanner from '../components/AIAutomationBanner/AIAutomationBanner'
import AISolutions from '../components/AISolutions/AISolutions'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import Packages from '../components/Packages/Packages'
import FAQs from '../components/FAQs/FAQs'
import GetStarted from '../components/GetStarted/GetStarted'
import Footer from '../components/Footer/Footer'

export default function AIAutomationPage() {
  return (
    <>
      <div className="hero-wrapper">
        <Navbar />
        <AIAutomationBanner />
      </div>
      <main>
        <AISolutions />
        <HowItWorks noBefore />
        <WhatWeDo />
        <Packages />
        <FAQs />
        <GetStarted />
      </main>
      <Footer />
    </>
  )
}
