import { Navigation } from "@/components/navigation"
import { FloatingBottle } from "@/components/floating-bottle"
import { Essence } from "@/components/essence"
import { About } from "@/components/about"
import { WhyChooseTatva } from "@/components/why-tatva"
import { PurificationSection } from "@/components/purification-section"
import { B2BSection } from "@/components/b2b-section"
import { B2CSection } from "@/components/b2c-section"
import { Products } from "@/components/products"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const faqs = [
    {
      question: "Bulk water bottle supply in Hyderabad?",
      answer:
        "Yes, we specialize in bulk B2B supply of packaged drinking water in Hyderabad and nearby regions, with reliable delivery for hotels, corporates, events, and distributors.",
    },
    {
      question: "Do you offer private label water bottles in India?",
      answer:
        "We offer custom private label water bottles across India, including branding on 250ml, 500ml, and 1L bottles for businesses, events, and premium hospitality brands.",
    },
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer:
        "Our minimum order quantity depends on the bottle size and customization, but we are optimized for bulk B2B orders and can guide you to the right MOQ for your requirement.",
    },
    {
      question: "What are the delivery timelines?",
      answer:
        "Standard delivery timelines for bulk orders in Hyderabad typically range from a few days to a week based on order volume, customization, and schedule availability.",
    },
    {
      question: "Are you FSSAI and BIS compliant?",
      answer:
        "Yes, our packaged drinking water is produced in facilities that follow FSSAI and BIS standards, with rigorous quality checks at every stage of purification and bottling.",
    },
    {
      question: "What bottle sizes are available?",
      answer:
        "We currently offer popular sizes including 250ml, 500ml, and 1L packaged drinking water bottles suitable for events, corporate use, hospitality, and retail.",
    },
  ] as const

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <Navigation />
      <FloatingBottle />
      <main className="min-h-screen pt-20">
        <Essence />
        <About />
        <WhyChooseTatva />
        <PurificationSection />
        <B2BSection />
        <B2CSection />
        <Products />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <section id="faq" className="py-24 bg-sky-50/50">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-primary heading-font mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index + 1}`}
                  className="border border-sky-100 bg-white/80 rounded-3xl shadow-sm hover:bg-sky-50/80 transition-colors"
                >
                  <AccordionTrigger className="px-6 text-base md:text-lg text-slate-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-slate-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
