import { SectionTemplate } from "@/components/Sections/SectionTemplate";
import Image from "next/image";
import Link from "next/link";

export default function SnudgetPage() {
    return (
        <main className="px-6 md:py-6 md:px-20 lg:px-40 bg-white">
            <SectionTemplate title="Super Tic-Tac-Toe" id="tic-tac-toe">
                <div className="flex gap-2 justify-center md:justify-start">
                    <Link
                        href={"https://github.com/BertilFrigaard/super-tic-tac-toe"}
                        className="bg-primary text-white px-1 rounded"
                        target="_blank"
                    >
                        View on GitHub
                    </Link>
                    <Link
                        href={"https://tic-tac-toe.bertilfrigaard.dk"}
                        target="_blank"
                        className="bg-primary text-white px-1 rounded"
                    >
                        View Live
                    </Link>
                </div>
                {/* First Section */}
                <div className="flex flex-col-reverse md:flex-row gap-14 mt-15">
                    <div className="md:w-1/2 w-full text-center md:text-left space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">About Super Tic-Tac-Toe</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Super Tic-Tac-Toe is a strategic twist on the classic game. It features a 9x9 grid of
                            standard boards, allowing for a nuanced and mind-bending player experience.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            You can choose to play locally in your own browser with yourself or whomever you’re with.
                            Otherwise, you have the option to create an online game. This way, you can have your friends
                            join from anywhere else in the world and still have a great experience.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Are you tired of your friends cheating when you play? Don’t worry—all the game logic is
                            handled securely, ensuring a fair and fun game experience.
                        </p>
                        <p className="text-gray-600 leading-relaxed">Sounds fun? Try it out today!</p>
                    </div>
                    <div className="md:w-1/2 w-full flex justify-center gap-2">
                        <div className="overflow-hidden rounded-2xl shadow-md transition-transform">
                            <Image
                                src="/tic-tac-toe_home.png"
                                alt="Super Tic-Tac-Toe landing page"
                                width={800}
                                height={800}
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
                                src="/tic-tac-toe_game.png"
                                alt="Super Tic-Tac-Toe Game page"
                                width={800}
                                height={800}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full text-center md:text-left space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">The Technical</h2>
                        <p className="text-gray-600 leading-relaxed">
                            This web app runs on a Node.js backend with Express. This backend serves up a React app at
                            “/”. The React app uses react-router-dom to navigate between pages. This way, I navigate
                            between the homepage, the offline game page, and the online game page.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            In offline game mode, all game logic is handled in the client’s browser, but in online game
                            mode, I have extracted this logic to the backend. This prevents the client from tampering
                            with the game logic.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The backend has to keep track of multiple WebSocket connections, ensuring that moves are
                            made on the correct board and that only the correct player is allowed to make moves.
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
