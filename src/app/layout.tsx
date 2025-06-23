import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Sections/Header";
import Footer from "@/components/Sections/Footer";

export const metadata: Metadata = {
    title: "Bertil Frigaard",
    description: "Software Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`antialiased font-poppins`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
