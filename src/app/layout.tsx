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
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={`antialiased font-poppins`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
