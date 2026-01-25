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

export default function Home() {
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
        <Footer />
      </main>
    </>
  )
}
