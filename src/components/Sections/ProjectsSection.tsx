import ProjectCard from "../ProjectCard/ProjectCard";
import { SectionTemplate } from "./SectionTemplate";

export default function ProjectsSection() {
    return (
        <SectionTemplate title="Projects" id="projects">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </SectionTemplate>
    );
}
