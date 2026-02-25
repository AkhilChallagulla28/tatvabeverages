import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingBottle } from "@/components/floating-bottle"
import { ScrollReveal } from "@/components/scroll-reveal"
import { HowToOrderSection } from "@/components/how-to-order-section"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Frequently Asked Questions – Tatva Beverages",
    description:
        "Everything you need to know about our private label packaged drinking water, bulk supply, customization, and delivery process.",
    alternates: {
        canonical: "/faq",
    },
}

const faqCategories = [
    {
        category: "Product & Quality",
        id: "product-quality",
        questions: [
            {
                question: "What makes Tatva water different from other packaged drinking water brands?",
                answer: "Tatva Beverages offers premium, customized private label water that serves as a canvas for your brand. Beyond aesthetics, our water undergoes a rigorous purification process and is enriched with essential minerals for a premium hydration experience. Learn more about our offerings on our <a href='/product' class='text-sky-600 underline font-medium hover:text-sky-700'>Product</a> page."
            },
            {
                question: "Is Tatva water zinc-enriched?",
                answer: "Yes, our water is carefully purified and enriched with zinc to provide added nutritional value and an exceptionally crisp taste."
            },
            {
                question: "Are you BIS certified?",
                answer: "Yes, we are fully BIS (Bureau of Indian Standards) certified, ensuring that every bottle we produce meets stringent national quality and safety benchmarks."
            },
            {
                question: "Is Tatva FSSAI compliant?",
                answer: "Absolutely. Our manufacturing and bottling processes are 100% compliant with FSSAI regulations, maintaining the highest levels of hygiene and food safety."
            },
            {
                question: "What purification process do you use?",
                answer: "We use an advanced multi-stage purification system that includes reverse osmosis, UV treatment, and ozonation to eliminate impurities while retaining optimal taste before enriching the water with elements like zinc."
            },
            {
                question: "What bottle sizes are available?",
                answer: "We offer three primary sizes to suit different needs: 250ml for events, 500ml for standard hospitality and retail, and 1 Litre for premium table settings."
            }
        ]
    },
    {
        category: "Custom Branding & Orders",
        id: "custom-branding",
        questions: [
            {
                question: "Do you offer private label water bottles?",
                answer: "Yes, our core expertise is providing high-quality private label water for <a href='/b2b' class='text-sky-600 underline font-medium hover:text-sky-700'>B2B partners</a> (hotels, restaurants, corporates) and <a href='/b2c' class='text-sky-600 underline font-medium hover:text-sky-700'>B2C events</a> (weddings, parties)."
            },
            {
                question: "What is the minimum order quantity?",
                answer: "Our minimum order quantity (MOQ) depends on the bottle size and level of customization required. Please reach out via our <a href='/contact' class='text-sky-600 underline font-medium hover:text-sky-700'>Contact</a> page for detailed MOQ information tailored to your specific needs."
            },
            {
                question: "Can I customize the label design completely?",
                answer: "Yes, the label is completely yours. You can feature your logo, brand colors, event date, and any other design elements you prefer. We make sure your brand shines on every bottle."
            },
            {
                question: "Do you provide design assistance?",
                answer: "We do. If you have existing artwork, we can help format it for print. If you need help conceptualizing a label from scratch, our design team can guide you to create a premium look."
            },
            {
                question: "What label finishes are available?",
                answer: "We offer multiple premium finishes, including sleek matte for an understated elegance, and vibrant glossy finishes to make colors pop."
            }
        ]
    },
    {
        category: "Delivery & Timelines",
        id: "delivery-timelines",
        questions: [
            {
                question: "How long does production take?",
                answer: "Standard production time typically ranges from 5 to 7 business days from the moment your label design is approved. Large bulk orders may have customized timelines."
            },
            {
                question: "Do you deliver outside Hyderabad?",
                answer: "While we are based in Hyderabad, we can coordinate deliveries across Telangana and potentially other regions based on the order volume. Contact us to discuss your specific location."
            },
            {
                question: "What are your bulk delivery timelines?",
                answer: "For recurring B2B clients, we establish scheduled delivery timelines to ensure consistent stock without interruptions. Initial setup and delivery may take up to a week."
            },
            {
                question: "How do I place an order?",
                answer: "Placing an order is simple. Just head over to our <a href='/contact' class='text-sky-600 underline font-medium hover:text-sky-700'>Contact</a> page, fill out your requirements or message us on WhatsApp, and our team will get back to you with a custom quote within hours."
            }
        ]
    }
]

export default function FAQPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqCategories.flatMap((category) =>
            category.questions.map((q) => ({
                "@type": "Question",
                name: q.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    // Strip HTML tags for schema
                    text: q.answer.replace(/<[^>]*>?/gm, ""),
                },
            }))
        ),
    }

    return (
        <>
            <Navigation />
            <FloatingBottle />

            <main className="pt-[80px]">
                {/* Schema injection */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />

                {/* HERO SECTION */}
                <section className="hero-py bg-gradient-to-b from-sky-50 via-background to-white overflow-hidden text-center">
                    <div className="site-container max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700 animate-in fade-in slide-in-from-bottom-4 duration-700 mb-6">
                            SUPPORT & INFORMATION
                        </div>

                        <h1 className="h1-scale font-bold text-primary heading-font animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 mb-6">
                            Frequently Asked Questions
                        </h1>

                        <p className="text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            Everything you need to know about our private label packaged drinking water, bulk supply, customization, and delivery process.
                        </p>
                    </div>
                </section>

                {/* FAQ CONTENT */}
                <section className="section-py bg-white">
                    <div className="site-container max-w-4xl mx-auto">
                        <div className="space-y-16">
                            {faqCategories.map((category, catIndex) => (
                                <ScrollReveal key={category.id}>
                                    <div>
                                        {/* Category Header */}
                                        <h2 className="text-2xl md:text-3xl font-bold text-primary heading-font mb-8 flex items-center gap-4">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 text-sm font-bold">
                                                {catIndex + 1}
                                            </span>
                                            {category.category}
                                        </h2>

                                        {/* Accordion */}
                                        <Accordion type="single" collapsible className="space-y-4">
                                            {category.questions.map((item, index) => (
                                                <AccordionItem
                                                    key={index}
                                                    value={`${category.id}-${index}`}
                                                    className="border border-sky-100 bg-white/80 rounded-2xl shadow-sm hover:bg-sky-50/50 transition-colors"
                                                >
                                                    <AccordionTrigger className="px-6 py-5 text-base md:text-lg font-medium text-slate-900 data-[state=open]:text-sky-700 hover:no-underline text-left">
                                                        {item.question}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="px-6 pb-6 text-slate-600 leading-relaxed pt-0 text-base">
                                                        <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Support CTA */}
                        <ScrollReveal>
                            <div className="mt-20 p-8 rounded-3xl bg-sky-50/80 border border-sky-100 text-center max-w-2xl mx-auto">
                                <h3 className="text-xl font-bold text-primary mb-3">
                                    Still have questions?
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Can’t find the answer you’re looking for? Our team is here to help with any specific queries regarding your custom water order.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm shadow-sm"
                                >
                                    Contact Support
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <HowToOrderSection />
                <Footer />
            </main>
        </>
    )
}
