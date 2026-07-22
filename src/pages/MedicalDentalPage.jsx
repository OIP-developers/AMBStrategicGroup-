import MedDentalHero from '../components/MedDentalHero/MedDentalHero'
import MedDentalProblem from '../components/MedDentalProblem/MedDentalProblem'
import MedDentalHowItWorks from '../components/MedDentalHowItWorks/MedDentalHowItWorks'
import MedDentalPackages from '../components/MedDentalPackages/MedDentalPackages'
import MedDentalTrust from '../components/MedDentalTrust/MedDentalTrust'
import MedDentalFAQ from '../components/MedDentalFAQ/MedDentalFAQ'
import GetStarted from '../components/GetStarted/GetStarted'
import MedDentalFooter from '../components/MedDentalFooter/MedDentalFooter'
import './MedicalDentalPage.css'

export default function MedicalDentalPage() {
  return (
    <div className="md-page">
      <main>
        <MedDentalHero />
        <MedDentalProblem />
        <MedDentalHowItWorks />
        <MedDentalPackages />
        <MedDentalTrust />
        <MedDentalFAQ />
        <GetStarted sectionId="book-a-call" dentalVariant className="getstarted--medicaldental" />
      </main>
      <MedDentalFooter />
    </div>
  )
}
