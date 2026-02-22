import type { Metadata } from "next";

// ─── Page-level canonical for /about ──────────────────────────────────────────
// This server-component layout wraps the "use client" page.tsx and allows
// us to export Metadata (which cannot be exported from client components).
export const metadata: Metadata = {
    title: "About Tatva Beverages | Premium Packaged Drinking Water Manufacturer",
    description:
        "Learn about Tatva Beverages — a premium packaged drinking water manufacturer in Hyderabad offering private label bottling, FSSAI-licensed bulk supply, and BIS-certified products.",
    alternates: {
        canonical: "https://tatvabeverages.com/about",
    },
    openGraph: {
        url: "https://tatvabeverages.com/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
