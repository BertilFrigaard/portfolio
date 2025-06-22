import Link from "next/link";
import Image from "next/image";

import { IoMenu } from "react-icons/io5";

export default function Home() {
    return (
        <>
            <header>
                <nav className="m-10 flex justify-between items-center">
                    <h1 className="hidden md:block text-3xl font-bold text-gray-800">Bertil Frigaard</h1>
                    <h1 className="block md:hidden text-3xl font-bold text-gray-800">Bertil F.</h1>
                    <div className="hidden md:flex gap-10 items-center text-lg">
                        <Link href="/about" className="hover:underline">
                            About
                        </Link>
                        <Link href="/projects" className="hover:underline">
                            Projects
                        </Link>
                        <Link href="/experience" className="hover:underline">
                            Experience
                        </Link>
                    </div>
                    <div className="md:hidden text-4xl">
                        <IoMenu />
                    </div>
                </nav>
            </header>

            <main className="px-10 py-5 md:p-20 lg:px-40">
                <section className="grid md:grid-cols-2 items-center justify-items-center">
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
            </main>

            <footer></footer>
        </>
    );
}
