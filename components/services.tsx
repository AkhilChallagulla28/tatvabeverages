import { Package, Tag, Truck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Package,
    title: "Custom-Branded Bottles",
    description: "Your logo, your design, your brand identity — beautifully printed on premium quality bottles.",
  },
  {
    icon: Tag,
    title: "Private Labeling",
    description: "Complete white-label solutions for businesses looking to launch their own water brand.",
  },
  {
    icon: Truck,
    title: "Bulk Supply",
    description: "Reliable, timely delivery of large quantities for events, hotels, and corporate offices.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="h-32 w-32 md:h-36 md:w-36 rounded-full bg-sky-100 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
