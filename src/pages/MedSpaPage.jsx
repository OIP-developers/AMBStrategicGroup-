import MedSpaHero from '../components/MedSpaHero/MedSpaHero'
import MedSpaProblem from '../components/MedSpaProblem/MedSpaProblem'
import MedSpaHowItWorks from '../components/MedSpaHowItWorks/MedSpaHowItWorks'
import MedSpaPackages from '../components/MedSpaPackages/MedSpaPackages'
import MedSpaTrust from '../components/MedSpaTrust/MedSpaTrust'
import MedSpaFAQ from '../components/MedSpaFAQ/MedSpaFAQ'
import GetStarted from '../components/GetStarted/GetStarted'
import MedSpaFooter from '../components/MedSpaFooter/MedSpaFooter'
import './MedSpaPage.css'

export default function MedSpaPage() {
  return (
    <div className="ms-page">
      <main>
        <MedSpaHero />
        <MedSpaProblem />
        <MedSpaHowItWorks />
        <MedSpaPackages />
        <MedSpaTrust />
        <MedSpaFAQ />
        <GetStarted sectionId="book-a-call" spaVariant className="getstarted--medspa" />
      </main>
      <MedSpaFooter />
    </div>
  )
}
