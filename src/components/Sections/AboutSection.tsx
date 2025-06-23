import { SectionTemplate } from "./SectionTemplate";
import { PortfolioContent } from "@/types/content";
import rawContent from "@/data/content_en.json";

const aboutContent = (rawContent as PortfolioContent).about;

export default function AboutSection() {
    return (
        <div className="pt-20 md:pt-0">
            <SectionTemplate title={aboutContent.title} id="about">
                {aboutContent.body.map((value, key) => (
                    <p key={key} className="text-lg text-gray-700">
                        {value}
                    </p>
                ))}
            </SectionTemplate>
        </div>
    );
}
