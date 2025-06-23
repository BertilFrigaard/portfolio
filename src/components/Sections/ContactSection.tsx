import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionTemplate } from "./SectionTemplate";
import rawContent from "@/data/content_en.json";
import { PortfolioContent } from "@/types/content";

const contactContent = (rawContent as PortfolioContent).contact;

export default function ContactSection() {
    return (
        <SectionTemplate title={contactContent.title} id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Intro */}
                <div className="space-y-4">
                    {contactContent.body.map((value, key) => (
                        <p key={key} className="text-lg text-gray-700">
                            {value}
                        </p>
                    ))}
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{contactContent.subtitle}</h2>
                    <div className="flex flex-col gap-2 text-gray-700">
                        <div>
                            <span className="font-medium">Email:</span>{" "}
                            <a
                                href="mailto:bertilfrigaard@gmail.com"
                                className="text-black decoration-primary italic underline"
                            >
                                bertilfrigaard@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                        <a
                            href="https://github.com/BertilFrigaard"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 text-2xl transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bertil-frigaard-9081782ba"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 text-2xl transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </SectionTemplate>
    );
}
