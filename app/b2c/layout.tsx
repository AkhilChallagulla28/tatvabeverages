import type { Metadata } from "next";

// ─── Page-level canonical for /b2c ────────────────────────────────────────────
// This server-component layout wraps the "use client" page.tsx and allows
// us to export Metadata (which cannot be exported from client components).
export const metadata: Metadata = {
    title: "Personalised Water Bottles for Events | Tatva Beverages",
    description:
        "Custom label water bottles for weddings, birthdays, engagements and celebrations in Hyderabad. Make every moment memorable with Tatva Beverages personalised bottled water.",
    alternates: {
        canonical: "/b2c",
    },
    openGraph: {
        url: "/b2c",
    },
};

export default function B2CLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
