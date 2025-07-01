import { SectionTemplate } from "./SectionTemplate";
import { PiDiamondBold, PiDiamondFill } from "react-icons/pi";
import rawContent from "@/data/content_en.json";
import { PortfolioContent } from "@/types/content";
import ExpandableText from "../ExpandableText/ExpandableText";

const experienceContent = (rawContent as PortfolioContent).experience;

export default function ExperienceSection() {
    return (
        <SectionTemplate title={experienceContent.title} id="experience">
            {experienceContent.body.map((value, key) => (
                <p key={key} className="text-lg text-gray-700">
                    {value}
                </p>
            ))}

            <div className="mt-10 gap-10">
                <div className="border-l-2 border-gray-300 pl-4 space-y-10">
                    {experienceContent.items.map((experience, key) => (
                        <div className="flex gap-4" key={key}>
                            {experience.current ? (
                                <PiDiamondFill size={18} className="mt-1 flex-shrink-0" />
                            ) : (
                                <PiDiamondBold size={18} className="mt-1 flex-shrink-0" />
                            )}
                            <div>
                                <h3 className="text-xl text-gray-800">
                                    <b className="font-semibold">{experience.employer}</b>, {experience.jobtitle}
                                </h3>
                                <p className="text-sm text-gray-500">{experience.period}</p>
                                <ExpandableText content={experience.body} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionTemplate>
    );
}
