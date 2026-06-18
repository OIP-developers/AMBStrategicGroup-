import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import HowWeCan from '../components/HowWeCan/HowWeCan'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import WhyAMB from '../components/WhyAMB/WhyAMB'
import Packages from '../components/Packages/Packages'
import FAQs from '../components/FAQs/FAQs'
import GetStarted from '../components/GetStarted/GetStarted'
import Footer from '../components/Footer/Footer'

export default function HomePage() {
  return (
    <>
      <div className="hero-wrapper">
        <Navbar />
        <Hero />
      </div>
      <main>
        <About />
        <HowWeCan />
        <HowItWorks />
        <Packages />
        <WhyAMB />
        <FAQs />
        <GetStarted />
      </main>
      <Footer />
    </>
  )
}
