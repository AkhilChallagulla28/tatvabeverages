import type { Metadata } from "next";

// ─── Page-level canonical for /b2b ────────────────────────────────────────────
// This server-component layout wraps the "use client" page.tsx and allows
// us to export Metadata (which cannot be exported from client components).
export const metadata: Metadata = {
    title: "B2B Private Label Water Bottles | Tatva Beverages Hyderabad",
    description:
        "Custom branded water bottles for businesses across Hyderabad — hotels, restaurants, corporate offices and events. Private label packaged drinking water from Tatva Beverages.",
    alternates: {
        canonical: "/b2b",
    },
    openGraph: {
        url: "/b2b",
    },
};

export default function B2BLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
