import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShieldCheck, Factory, MapPin, Award } from "lucide-react"

export default function ManufacturerPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* HERO */}
        <section className="py-20 bg-gradient-to-b from-sky-50 via-background to-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
              MANUFACTURING PARTNER
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-primary heading-font">
              Trusted Manufacturing Excellence
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              M/s <span className="font-semibold text-foreground">
              Bhanu Agro Foods
              </span>{" "}
              is our trusted manufacturing partner, bringing years of expertise
              and operational excellence to every bottle we produce.
            </p>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">

            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* LEFT CONTENT */}
              <div className="mt-8 md:mt-4 space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Bhanu Agro Foods has built its reputation by doing the basics exceptionally well—consistent quality, strong systems, and a constant drive to improve. 
                  Over the years, this focus has made it a trusted name in beverage manufacturing, known for reliability and attention to detail.
                </p>

                <p>
                  As an <span className="font-semibold text-foreground">ISO 9001:2015 certified</span> facility,
                  every step of the process is guided by globally recognized quality and safety standards, ensuring that what leaves the plant is dependable, compliant, and carefully crafted.
                </p>

                <p>
                  Their commitment to excellence aligns seamlessly with Tatva’s
                  philosophy of delivering pure, trusted, and uncompromising
                  packaged drinking water.
                </p>
              </div>

              {/* RIGHT INFO CARDS */}
              <div className="space-y-6">

                <div className="rounded-3xl border border-sky-200/60 bg-sky-50 p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Factory className="h-8 w-8 text-sky-700 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        FSSAI License Number
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        13625034000251
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-sky-200/60 bg-sky-50 p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-sky-700 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        ISO 9001:2015 Certified
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Structured quality management systems ensuring
                        consistency and compliance at every stage.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-sky-200/60 bg-sky-50 p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-8 w-8 text-sky-700 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        Location
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Sadashiva Nagar, Narapally, 500088
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* CLOSING STATEMENT */}
        <section className="py-16 bg-gradient-to-r from-sky-50 via-white to-sky-50">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <ShieldCheck className="mx-auto h-10 w-10 text-sky-700 mb-6" />

            <h2 className="text-3xl font-bold text-primary heading-font">
              Built on Trust. Delivered with Integrity.
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Together, Tatva and Bhanu Agro Foods ensure that every bottle
              reaching you reflects precision manufacturing, regulatory
              compliance, and uncompromising purity.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
