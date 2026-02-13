import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://tatvabeverages.com"),

  alternates: {
    canonical: "https://tatvabeverages.com",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },

  title: {
    default: "Tatva Beverages - Premium Packaged Drinking Water Hyderabad",
    template: "%s | Tatva Beverages",
  },

  description:
    "Premium packaged drinking water manufacturer in Hyderabad, Telangana. Bulk supply and private label custom branded bottles.",

  keywords: [
    "Packaged drinking water manufacturer",
    "Private label water bottles",
    "Bulk water bottle supplier",
    "Custom branded water bottles",
    "Water bottle manufacturer India",
    "Tatva Beverages",
  ],

  openGraph: {
    title: "Tatva Beverages - Premium Packaged Drinking Water",
    description:
      "Bulk supply and private label packaged drinking water manufacturer based in Hyderabad.",
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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tatva Beverages",
    url: "https://tatvabeverages.com",
    telephone: "+91 9505454855",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: "India",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
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
