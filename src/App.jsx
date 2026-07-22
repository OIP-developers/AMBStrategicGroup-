import { Routes, Route } from 'react-router-dom'
import ScrollToTop            from './components/ScrollToTop/ScrollToTop'
import HomePage               from './pages/HomePage'
import AboutPage              from './pages/AboutPage'
import BusinessTransformationPage from './pages/BusinessTransformationPage'
import AIAutomationPage       from './pages/AIAutomationPage'
import FAQsPage               from './pages/FAQsPage'
import ContactPage            from './pages/ContactPage'
import PrivacyPolicyPage      from './pages/PrivacyPolicyPage'
import TermsOfServicesPage    from './pages/TermsOfServicesPage'
import MedicalDentalPage      from './pages/MedicalDentalPage'
import './App.css'
import './responsive.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/"                        element={<HomePage />} />
      <Route path="/about"                   element={<AboutPage />} />
      <Route path="/business-transformation" element={<BusinessTransformationPage />} />
      <Route path="/ai-automation"           element={<AIAutomationPage />} />
      <Route path="/faqs"                    element={<FAQsPage />} />
      <Route path="/contact"                 element={<ContactPage />} />
      <Route path="/privacy-policy"          element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-services"       element={<TermsOfServicesPage />} />
      <Route path="/medicaldental"           element={<MedicalDentalPage />} />
      </Routes>
    </>
  )
}

export default App
