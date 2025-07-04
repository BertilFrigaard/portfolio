import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Sections/Header";
import Footer from "@/components/Sections/Footer";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export const metadata: Metadata = {
    title: "Bertil Frigaard – Software Developer",
    description: "Creative software developer focused on learning and user-first experiences.",
    keywords: ["Bertil Frigaard", "full-stack developer", "portfolio", "web developer", "software engineer"],
    metadataBase: new URL("https://bertilfrigaard.dk"), // your site domain
    openGraph: {
        title: "Bertil Frigaard – Software Developer",
        description: "Creative software developer focused on learning and user-first experiences.",
        url: "https://bertilfrigaard.dk",
        siteName: "Bertil Frigaard Portfolio",
        images: [
            {
                url: "/preview.png", // your Open Graph preview image
                width: 2137,
                height: 1125,
                alt: "Preview of Bertil Frigaard's portfolio",
            },
        ],
        locale: "en_DK",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Bertil Frigaard – Portfolio",
        description: "Creative software developer focused on learning and user-first experiences.",
        images: ["/preview.png"],
    },
    icons: {
        icon: "/favicon.ico",
    },
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
