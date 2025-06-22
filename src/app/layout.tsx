import type { Metadata } from "next";
import "./globals.css";

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
            <body className={`antialiased font-poppins`}>{children}</body>
        </html>
    );
}
