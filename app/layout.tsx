import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://tatvabeverages.com"),

  title: {
    default:
      "Tatva Beverages | Packaged Drinking Water Manufacturer & Private Label Supplier",
    template: "%s | Tatva Beverages",
  },

  description:
    "Tatva Beverages is a premium packaged drinking water manufacturer offering bulk supply and private-label custom branded bottles for hotels, corporates, events, and distributors across India.",

  keywords: [
    "Packaged drinking water manufacturer",
    "Private label water bottles",
    "Bulk water bottle supplier",
    "Custom branded water bottles",
    "Water bottle manufacturer India",
    "Tatva Beverages",
  ],

  openGraph: {
    title:
      "Tatva Beverages | Premium Packaged Drinking Water Manufacturer",
    description:
      "Bulk packaged drinking water supply and private-label custom branded water bottles for businesses, hotels and large-scale events.",
    url: "https://tatvabeverages.com",
    siteName: "Tatva Beverages",
    images: [
      {
        url: "/images/tatva-bottle-mockup.png",
        width: 1200,
        height: 630,
        alt: "Tatva Beverages Premium Water Bottle",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tatva Beverages | Private Label Water Bottle Manufacturer",
    description:
      "Premium packaged drinking water manufacturer offering bulk supply and custom branded bottles.",
    images: ["/images/tatva-bottle-mockup.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tatva Beverages",
              url: "https://tatvabeverages.com",
              logo:
                "https://tatvabeverages.com/images/tatva-bottle-mockup.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9505454855",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "English",
              },
            }),
          }}
        />

        {/* Structured Data - Local Business */}
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tatva Beverages",
              image:
                "https://tatvabeverages.com/images/tatva-bottle-mockup.png",
              "@id": "https://tatvabeverages.com",
              url: "https://tatvabeverages.com",
              telephone: "+91-9505454855",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>

      <body>
        {children}

        {/* Google Analytics 4 */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-WY8K8V4X46"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WY8K8V4X46');
  `}
</Script>
      </body>
    </html>
  );
}
