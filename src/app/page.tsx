import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

import AboutSection from "@/components/Sections/AboutSection";
import ContactSection from "@/components/Sections/ContactSection";
import ExperienceSection from "@/components/Sections/ExperienceSection";
import ProjectSection from "@/components/Sections/ProjectSection";

export default function Home() {
    return (
        <>
            <main className="px-10 py-5 md:p-20 lg:px-40">
                <section className="grid md:grid-cols-2 items-center justify-items-center min-h-[50vh]">
                    <div className="space-y-4 max-w-xl text-center md:text-start">
                        <p className="text-lg">Hi, my name is</p>
                        <h1 className="text-6xl font-extrabold text-gray-800">Bertil Frigaard</h1>
                        <h2 className="text-xl">
                            and I do <br className="sm:hidden" />
                            <mark className="bg-primary text-white px-1 rounded">Software Development</mark>
                        </h2>
                    </div>
                    <div className="relative w-64 h-80 lg:w-80 lg:h-100">
                        <Image
                            src="/portrait.png"
                            alt="Portrait of Bertil Frigaard"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </section>

                <section className="hidden md:flex flex-col items-center justify-center mt-10 text-gray-600 text-lg py-20">
                    <p>Scroll down to see more</p>
                    <FaArrowDown className="mt-2 animate-bounce text-2xl" />
                </section>

                <div className="space-y-20">
                    <AboutSection />

                    <ProjectSection />

                    <ExperienceSection />

                    <ContactSection />
                </div>
            </main>
        </>
    );
}
