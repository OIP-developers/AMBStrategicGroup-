import toothImg from '../../imagesfolder/MedSpaLanding/phoolimg.webp'
import sparkleImg from '../../imagesfolder/medicaldental/costofwaiting/star.webp'
import FAQs from '../FAQs/FAQs'
import './MedSpaFAQ.css'

const faqs = [
  {
    question: 'How fast does it actually reply to leads?',
    answer: 'Under 60 seconds, day or night. That speed is the difference between booking the consult and watching the lead go to a competitor.',
  },
  {
    question: 'Can it answer pricing and treatment questions?',
    answer: 'Yes. We train it on your treatment menu, pricing ranges, and pre/post-care answers so it responds accurately and books qualified consults.',
  },
  {
    question: 'Is client data handled securely?',
    answer: 'Yes these are medical procedures and data is treated that way: HIPAA-conscious, governed, and secure.',
  },
  {
    question: 'Does it book into our calendar?',
    answer: 'It books straight into your existing GHL calendar and schedules deposit and confirmation reminders automatically.',
  },
]

export default function MedSpaFAQ() {
  return (
    <div id="faq" className="ms-faq-wrap">
      <img src={sparkleImg} alt="" className="ms-faq__sparkle" loading="lazy" width="240" height="240" />
      <img src={toothImg} alt="" className="ms-faq__tooth" loading="lazy" width="235" height="238" />
      <FAQs
        className="faqs--medspa"
        tag="FAQs"
        title="Straight Answers"
        items={faqs}
      />
    </div>
  )
}
