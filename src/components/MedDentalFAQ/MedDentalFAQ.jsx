import toothImg from '../../imagesfolder/medicaldental/costofwaiting/3d-tooth.webp'
import sparkleImg from '../../imagesfolder/medicaldental/costofwaiting/star.webp'
import FAQs from '../FAQs/FAQs'
import './MedDentalFAQ.css'

const faqs = [
  {
    question: 'Is this HIPAA-conscious?',
    answer: 'Yes. We design workflows with HIPAA in mind and governance baked in, and we walk your team through exactly how patient data is handled before anything goes live.',
  },
  {
    question: 'Will it replace my front desk?',
    answer: "No — it backs them up. The AI catches the calls, chats, and after-hours inquiries your team can't get to, so staff can focus on the patient in the chair instead of the phone.",
  },
  {
    question: 'Does it work with our current calendar?',
    answer: "Yes. It books directly into the GHL calendar your practice already uses, so there's no new system for your team to learn.",
  },
  {
    question: 'How fast can we go live?',
    answer: 'The Starter system launches in 7 days. Voice and recall automations (Gold) in about 15 days, and full multi-location systems (Platinum) in 30 days.',
  },
]

export default function MedDentalFAQ() {
  return (
    <div id="faq" className="md-faq-wrap">
      <img src={sparkleImg} alt="" className="md-faq__sparkle" loading="lazy" width="240" height="240" />
      <img src={toothImg} alt="" className="md-faq__tooth" loading="lazy" width="235" height="264" />
      <FAQs
        className="faqs--medicaldental"
        tag="FAQ's"
        title="Straight Answers"
        items={faqs}
      />
    </div>
  )
}
