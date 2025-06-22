import Image from "next/image";

import BouncingLink from "@/components/BouncingLink/BouncingLink";

import { IoMenu } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
import { PiDiamondBold, PiDiamondFill } from "react-icons/pi";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Home() {
    return (
        <>
            <header>
                <nav className="m-10 flex justify-between items-center">
                    <h1 className="hidden md:block text-3xl font-bold text-gray-800">Bertil Frigaard</h1>
                    <h1 className="block md:hidden text-3xl font-bold text-gray-800">Bertil F.</h1>
                    <div className="hidden md:flex gap-10 items-center text-lg">
                        <BouncingLink href="#about" className="hover:underline">
                            About
                        </BouncingLink>
                        <BouncingLink href="#projects" className="hover:underline">
                            Projects
                        </BouncingLink>
                        <BouncingLink href="#experience" className="hover:underline">
                            Experience
                        </BouncingLink>
                        <BouncingLink href="#contact" className="hover:underline">
                            Contact
                        </BouncingLink>
                    </div>
                    <div className="md:hidden text-4xl">
                        <IoMenu />
                    </div>
                </nav>
            </header>

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
                    <h2>Scroll down to see more</h2>
                    <FaArrowDown className="mt-2 animate-bounce text-2xl" />
                </section>

                <section className="pt-20 md:pt-0 space-y-6 text-center md:text-start">
                    <h1 className="text-4xl font-bold text-gray-800 underline decoration-primary" id="about">
                        About Me
                    </h1>
                    <p className="text-lg text-gray-700">
                        I’m a passionate software developer focused on building engaging digital experiences. Whether
                        it’s a sleek UI, a well-structured backend, or a creative side project, I love turning ideas
                        into code.
                    </p>
                    <p className="text-lg text-gray-700">
                        With a strong interest in full-stack development and a deep curiosity for learning new
                        technologies, I’m always pushing to improve both personally and professionally.
                    </p>
                    <p className="text-lg text-gray-700">
                        Outside of coding, I enjoy solving complex problems, contributing to open-source projects, and
                        exploring the intersection of creativity and technology.
                    </p>
                </section>

                <section className="pt-20 space-y-12 text-center md:text-start" id="projects">
                    <h1 className="text-4xl font-bold text-gray-800 underline decoration-primary">Projects</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </section>

                <section className="pt-20 space-y-12 text-center md:text-start">
                    <h1 className="text-4xl font-bold text-gray-800 underline decoration-primary" id="experience">
                        Experience
                    </h1>

                    <div className="relative ml-2 mt-10 space-y-16 pl-6 border-l-2 border-gray-300">
                        {/* Item 1 */}
                        <div className="relative flex items-start gap-4">
                            <div className="shrink-0 bg-white rounded-full p-0.5 mt-1.5">
                                <PiDiamondFill size={18} />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Lukkesleder</h2>
                                <p className="text-sm text-gray-500">May 2023 – Now</p>
                                <p className="mt-2 text-gray-600">[Short description here]</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="relative flex items-start gap-4">
                            <div className="shrink-0 bg-white rounded-full p-0.5 mt-1.5">
                                <PiDiamondBold size={20} />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Træner</h2>
                                <p className="text-sm text-gray-500">Jul 2022 – May 2023</p>
                                <p className="mt-2 text-gray-600">[Short description here]</p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="relative flex items-start gap-4">
                            <PiDiamondBold size={20} />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Omdeler</h2>
                                <p className="text-sm text-gray-500">Aug 2020 – Aug 2023</p>
                                <p className="mt-2 text-gray-600">[Short description here]</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-20 space-y-6 text-center md:text-start">
                    <h1 className="text-4xl font-bold text-gray-800 underline decoration-primary" id="contact">
                        Contact
                    </h1>

                    <p className="text-lg text-gray-700">
                        I&apos;m always open to new opportunities, collaborations, or just a friendly chat about tech,
                        design, or startups. Whether you have a project in mind or simply want to connect, don’t
                        hesitate to reach out.
                    </p>

                    <p className="text-lg text-gray-700">
                        You can contact me directly via email at{" "}
                        <a href="mailto:bertilfrigaard@gmail.com" className="text-primary underline">
                            bertilfrigaard@gmail.com
                        </a>
                        , or connect with me on{" "}
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/bertil-frigaard-9081782ba"
                            className="text-primary underline"
                        >
                            LinkedIn
                        </a>{" "}
                        for a more professional exchange.
                    </p>

                    <p className="text-lg text-gray-700">
                        I do my best to respond quickly and thoughtfully. Looking forward to hearing from you!
                    </p>
                </section>
            </main>

            <footer></footer>
        </>
    );
}
