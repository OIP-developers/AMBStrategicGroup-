import Navbar from '../components/Navbar/Navbar'
import aboutBottomImg from '../imagesfolder/aboutpageimgs/aboutpagestar.png'
import AboutBanner from '../components/AboutBanner/AboutBanner'
import Founder from '../components/Founder/Founder'
import OurModel from '../components/OurModel/OurModel'
import OurPhilosophy from '../components/OurPhilosophy/OurPhilosophy'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import WhyAMB from '../components/WhyAMB/WhyAMB'
import FAQs from '../components/FAQs/FAQs'
import GetStarted from '../components/GetStarted/GetStarted'
import Footer from '../components/Footer/Footer'

export default function AboutPage() {
  return (
    <>
      <div className="hero-wrapper">
        <Navbar />
        <AboutBanner />
      </div>
      <main>
        <Founder />
        <OurModel />
        <OurPhilosophy />
        <WhatWeDo />
        <WhyAMB bottomImg={aboutBottomImg} noFlip />
        <FAQs />
        <GetStarted />
      </main>
      <Footer />
    </>
  )
}
