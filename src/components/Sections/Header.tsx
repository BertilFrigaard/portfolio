"use client";
import Link from "next/link";
import BouncingLink from "../BouncingLink/BouncingLink";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <header>
            <nav className="m-6 md:mx-12 mt-6   flex justify-between items-center">
                <Link href="/" className="hidden md:block text-3xl font-bold text-gray-800 cursor-pointer">
                    Bertil Frigaard
                </Link>
                <Link href="/" className="block md:hidden text-2xl font-bold text-gray-800 cursor-pointer">
                    Bertil F.
                </Link>
                <div className="hidden md:flex gap-10 items-center text-lg">
                    <BouncingLink href="/#about" className="hover:underline">
                        About
                    </BouncingLink>
                    <BouncingLink href="/#projects" className="hover:underline">
                        Projects
                    </BouncingLink>
                    <BouncingLink href="/#experience" className="hover:underline">
                        Experience
                    </BouncingLink>
                    <BouncingLink href="/#contact" className="hover:underline">
                        Contact
                    </BouncingLink>
                </div>
                <div className="md:hidden">
                    <div className="relative inline-block">
                        <IoMenu className="text-4xl cursor-pointer" onClick={() => setMenuActive(!menuActive)} />

                        {menuActive && (
                            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg p-4 space-y-2 text-lg z-50 pl-5 pr-10">
                                <BouncingLink href="/#about" className="hover:underline">
                                    About
                                </BouncingLink>
                                <BouncingLink href="/#projects" className="hover:underline">
                                    Projects
                                </BouncingLink>
                                <BouncingLink href="/#experience" className="hover:underline">
                                    Experience
                                </BouncingLink>
                                <BouncingLink href="/#contact" className="hover:underline">
                                    Contact
                                </BouncingLink>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
