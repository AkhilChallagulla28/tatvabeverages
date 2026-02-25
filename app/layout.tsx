import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

// ─── Canonical domain (non-www only) ─────────────────────────────────────────
// Single source of truth for metadataBase, canonical tags, OG urls, and JSON-LD.
// The www → non-www 301 redirect is enforced in next.config.mjs.
const SITE_URL = "https://tatvabeverages.com";

export const metadata: Metadata = {
  // metadataBase resolves relative image/URL paths to the canonical domain.
  // Must NOT contain "www." — this is the authoritative non-www origin.
  metadataBase: new URL(SITE_URL),

  // Root-level canonical for the homepage.
  // metadataBase (set above) resolves this relative path to:
  //   https://tatvabeverages.com/
  // Sub-pages each export their own relative alternates.canonical.
  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
    url: SITE_URL,
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
    title: "Tatva Beverages | Private Label Water Bottle Manufacturer",
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
    url: SITE_URL,
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
