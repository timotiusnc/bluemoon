import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What materials does Blue Moon use for its jewelry?',
      answer:
        'Our creations are crafted in 18K gold, available in three tones: White, Yellow, and Rose Gold.',
    },
    {
      question: 'What types of precious stones does Blue Moon offer?',
      answer:
        'Currently, we only specialize in both natural and lab-grown diamonds.',
    },
    {
      question: 'How long will it take to receive my order?',
      answer:
        "The delivery time varies depending on what you order. For items that are in stock, we'll deliver them to you within 1-2 working days after we receive your payment. For pre-orders or custom orders, please allow 4-6 weeks for delivery.",
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We primarily accept bank transfers. However, we can also provide a payment link through Tokopedia if needed.',
    },
  ],
  [
    {
      question: 'Does Blue Moon have offline store?',
      answer:
        'No, we currently operate online only. However, if you are in Jakarta and would like to see our ready stocks in person, we can set up an appointment at your convenience, depending on availability.',
    },
    {
      question: 'What is a lab-grown diamond?',
      answer:
        'Lab-grown diamonds are created in a laboratory setting and possess the same chemical composition, optical qualities, physical properties, and crystal structure as natural diamonds. (Source: GIA – Gemological Institute of America)',
    },
    {
      question:
        'What is the difference between natural and lab grown diamonds?',
      answer:
        'The main differences lie in their origin and price. Natural diamonds often contain minute amounts of nitrogen, whereas lab-grown diamonds do not.',
    },
  ],
  [
    {
      question:
        'Is it possible to distinguish between a natural and a lab-grown diamond by sight alone?',
      answer: 'No, discerning the difference requires special equipment.',
    },
    {
      question: 'Do lab grown diamonds come with certification?',
      answer:
        'Yes, similar to natural diamonds, lab-grown diamonds starting from 0.3 carats come with certification from the International Gemological Institute (IGI). For center stones above 1 carat, certification from the Gemological Institute of America (GIA) is also provided.',
    },
    {
      question: "Why don't you offer a buyback program for lab-grown diamonds?",
      answer:
        'We offer lab-grown diamonds to help make your dream of owning a diamond a reality. We believe that jewelry, especially pieces that hold sentimental value, should be cherished forever.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
