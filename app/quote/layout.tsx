import type { Metadata } from "next";

// ─── Page-level canonical for /quote ─────────────────────────────────────────
export const metadata: Metadata = {
    title: "Request a Quote | Tatva Beverages",
    description:
        "Request a custom quote for bulk packaged drinking water or private label water bottles from Tatva Beverages, Hyderabad.",
    alternates: {
        canonical: "https://tatvabeverages.com/quote",
    },
    openGraph: {
        url: "https://tatvabeverages.com/quote",
    },
};

export default function QuoteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
