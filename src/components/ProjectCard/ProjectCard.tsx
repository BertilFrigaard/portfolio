import { ProjectItem } from "@/types/content";
import Link from "next/link";

export default function ProjectCard({ project }: { project: ProjectItem }) {
    if (!project) {
        return;
    }
    return (
        <Link
            href={project.link}
            className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white hover:shadow-lg cursor-pointer transition-shadow group"
        >
            <div className="md:flex justify-between md:mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>
                <h3 className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm text-primary font-medium">
                    Click to view
                </h3>
            </div>

            <p className="text-gray-700 mb-4">{project.short}</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {project.tech.map((tech, key) => (
                    <span key={key} className="text-sm px-2 py-1 rounded-lg bg-primary text-white">
                        {tech}
                    </span>
                ))}
            </div>
        </Link>
    );
}
