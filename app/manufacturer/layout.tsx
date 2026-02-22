import type { Metadata } from "next";

// ─── Page-level canonical for /manufacturer ──────────────────────────────────
// This server-component layout wraps the "use client" page.tsx and allows
// us to export Metadata (which cannot be exported from client components).
export const metadata: Metadata = {
    title: "Our Manufacturing Partner | Tatva Beverages",
    description:
        "Tatva Beverages is manufactured by M/s Bhanu Agro Foods — an ISO 9001:2015 certified, FSSAI-licensed packaged drinking water facility in Hyderabad, Telangana.",
    alternates: {
        canonical: "https://tatvabeverages.com/manufacturer",
    },
    openGraph: {
        url: "https://tatvabeverages.com/manufacturer",
    },
};

export default function ManufacturerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
