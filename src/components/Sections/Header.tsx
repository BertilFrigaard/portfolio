import Link from "next/link";
import BouncingLink from "../BouncingLink/BouncingLink";
import { IoMenu } from "react-icons/io5";

export default function Header() {
    return (
        <header>
            <nav className="m-6 md:m-10 flex justify-between items-center">
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
                <div className="md:hidden text-4xl">
                    <IoMenu />
                </div>
            </nav>
        </header>
    );
}
