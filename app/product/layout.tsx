import type { Metadata } from "next";
import Script from "next/script";

// ─── Page-level canonical for /product ────────────────────────────────────────
// This server-component layout wraps the "use client" page.tsx and allows
// us to export Metadata (which cannot be exported from client components).
export const metadata: Metadata = {
    title: "Custom Branded Water Bottles | Private Label Bottled Water | Tatva Beverages",
    description:
        "Explore Tatva Beverages' custom branded water bottles — 200ml, 250ml, 500ml & 1L sizes. Private label packaged drinking water manufacturer in Hyderabad offering matte, glossy & full-wrap label options for hotels, events, and corporate.",
    keywords: [
        "custom branded water bottles",
        "private label water bottles",
        "bulk water bottle supplier",
        "personalized bottled water India",
        "packaged drinking water manufacturer Hyderabad",
        "private label bottled water Hyderabad",
        "bulk water bottle supplier Telangana",
        "200ml custom water bottles",
        "250ml event water bottles",
        "500ml branded water bottles",
        "1L table water bottles",
    ],
    alternates: {
        canonical: "/product",
    },
    openGraph: {
        title: "Custom Branded Water Bottles | Tatva Beverages",
        description:
            "Premium private label water bottles in 200ml, 250ml, 500ml & 1L. Custom labels, matte/glossy finishes, full-wrap branding for hotels, events & corporate — Hyderabad.",
        url: "/product",
        images: [
            {
                url: "/images/tatva-bottle-mockup.png",
                width: 1200,
                height: 630,
                alt: "Custom branded water bottle private label Tatva Beverages",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Custom Branded Bottled Water",
        description:
            "Premium private label packaged drinking water in multiple sizes — 200ml, 250ml, 500ml and 1L. Zinc-enriched, BIS & FSSAI compliant. Custom label printing with matte, glossy or full-wrap finishes.",
        brand: {
            "@type": "Brand",
            name: "Tatva Beverages",
        },
        manufacturer: {
            "@type": "Organization",
            name: "Tatva Beverages",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "IN",
            },
        },
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            areaServed: "India",
            seller: {
                "@type": "Organization",
                name: "Tatva Beverages",
                url: "https://tatvabeverages.com",
            },
        },
        hasVariant: [
            { "@type": "ProductModel", name: "200ml Custom Water Bottle" },
            { "@type": "ProductModel", name: "250ml Event Water Bottle" },
            { "@type": "ProductModel", name: "500ml Branded Water Bottle" },
            { "@type": "ProductModel", name: "1L Table Water Bottle" },
        ],
    };

    return (
        <>
            <Script
                id="product-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
            />
            {children}
        </>
    );
}
