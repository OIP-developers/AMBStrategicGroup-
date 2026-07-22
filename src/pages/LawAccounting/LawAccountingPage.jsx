import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problems from './components/Problems.jsx'
import Process from './components/Process.jsx'
import Pricing from './components/Pricing.jsx'
import Trust from './components/Trust.jsx'
import Faq from './components/Faq.jsx'
import BookCall from './components/BookCall.jsx'
import Footer from './components/Footer.jsx'
import './LawAccounting.css'

export default function LawAccountingPage() {
  return (
    <div className="law-accounting-page">
      <div className="page">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="glow glow-3" />
        <div className="glow glow-4" />

        <div className="container">
          <Header />
          <Hero />
          <Problems />
          <Process />
          <Pricing />
          <Trust />
          <Faq />
          <BookCall />
          <Footer />
        </div>
      </div>
    </div>
  )
}
