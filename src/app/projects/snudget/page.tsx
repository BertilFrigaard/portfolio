import { SectionTemplate } from "@/components/Sections/SectionTemplate";
import Image from "next/image";
import Link from "next/link";

export default function SnudgetPage() {
    return (
        <main className="px-6 md:py-6 md:px-20 lg:px-40 bg-white">
            <SectionTemplate title="Snudget" id="snudget">
                <div className="flex gap-2 justify-center md:justify-start">
                    <Link
                        href={"https://github.com/BertilFrigaard/Snudget"}
                        className="bg-primary text-white px-1 rounded"
                        target="_blank"
                    >
                        View on GitHub
                    </Link>
                    <Link
                        href={"https://snudget.bertilfrigaard.dk"}
                        target="_blank"
                        className="bg-primary text-white px-1 rounded"
                    >
                        View Live
                    </Link>
                </div>
                {/* First Section */}
                <div className="flex flex-col-reverse md:flex-row gap-14 mt-15">
                    <div className="md:w-1/2 w-full text-center md:text-left space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">About Snudget</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Snudget is a competition app where you and your friends can challenge each other. Compete on
                            who exercises the most, saves the most money, or whatever your imagination comes up with.
                            Simply create a game and start tracking!
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Can’t limit yourself to one competition? Why not create another? With Snudget, you can
                            participate in multiple competitions at the same time. Compete with different people, across
                            different goals, all at once.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            With a clean design made for both mobile and desktop, Snudget keeps you connected and
                            motivated—anytime, anywhere. Track your progress on the go and stay ahead of the game.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full flex justify-center gap-2">
                        <div className="overflow-hidden rounded-2xl shadow-md transition-transform">
                            <Image
                                src="/snudget_mobile_landing.png"
                                alt="Snudget landing page"
                                width={800}
                                height={500}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl shadow-md transition-transform">
                            <Image
                                src="/snudget_mobile_home.png"
                                alt="Snudget landing page"
                                width={800}
                                height={500}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex flex-col md:flex-row mt-15 gap-14">
                    <div className="md:w-1/2 w-full justify-center space-y-4">
                        <div className="overflow-hidden rounded-2xl shadow-md transition-transform">
                            <Image
                                src="/snudget_home.png"
                                alt="Snudget home page"
                                width={800}
                                height={500}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl shadow-md transition-transform">
                            <Image
                                src="/snudget_competition.png"
                                alt="Snudget competition page"
                                width={800}
                                height={500}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full text-center md:text-left space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">The Technical</h2>
                        <p className="text-gray-600 leading-relaxed">
                            I have built Snudget using modern technologies that are relevant today. The frontend is
                            developed with Next.js and styled using Tailwind CSS. With Tailwind, I achieve a responsive
                            web experience across both desktop and mobile devices.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            I have built the backend in Node.js with Express for route handling and API logic.
                            PostgreSQL powers the database layer, ensuring the consistent use of modern technologies and
                            structured data storage for user accounts, competitions, and more.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Authentication is handled securely via email verification and hashed passwords or Google
                            sign-in, giving users flexible sign-up options.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The entire application is hosted on a VPS, with deployment and uptime managed via systemd
                            services and secure domain routing through Cloudflare tunnels.
                        </p>
                    </div>
                </div>
            </SectionTemplate>
        </main>
    );
}
