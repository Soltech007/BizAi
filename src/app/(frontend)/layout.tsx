// src/app/(site)/layout.tsx
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="bg-white min-h-[calc(100vh_-_var(--header-height)_-_var(--footer-height))]">
                {children}
            </main>
            <Footer />
        </>
    );
}