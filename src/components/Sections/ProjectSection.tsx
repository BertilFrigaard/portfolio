import { PortfolioContent } from "@/types/content";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";
import { SectionTemplate } from "./SectionTemplate";
import rawContent from "@/data/content_en.json";
const projectContent = (rawContent as PortfolioContent).projects;

export default function ProjectSection() {
    return (
        <SectionTemplate title={projectContent.title} id="projects">
            {projectContent.body.map((value, key) => (
                <p key={key} className="text-lg text-gray-700">
                    {value}
                </p>
            ))}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projectContent.items.map((project, key) => (
                    <ProjectCard project={project} key={key} />
                ))}
            </div>
        </SectionTemplate>
    );
}
