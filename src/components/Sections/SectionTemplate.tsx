import React from "react";

export function SectionTemplate({ children, title, id }: { children: React.ReactNode; title: string; id: string }) {
    return (
        <section className="pt-20 md:pt-0 space-y-6 text-center md:text-start">
            <h1 className="text-4xl font-bold text-gray-800 underline decoration-primary" id={id}>
                {title}
            </h1>
            {children}
        </section>
    );
}
