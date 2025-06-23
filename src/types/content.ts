export interface AboutSection {
    title: string;
    body: string[];
}

export interface ContactSection {
    title: string;
    subtitle: string;
    body: string[];
}

export interface ExperienceItem {
    employer: string;
    jobtitle: string;
    period: string;
    current: boolean;
    body: string[];
}

export interface ExperienceSection {
    title: string;
    body: string[];
    items: ExperienceItem[];
}

export interface ProjectItem {
    name: string;
    link: string;
    short: string;
    tech: string[];
}

export interface ProjectSection {
    title: string;
    body: string[];
    items: ProjectItem[];
}

export interface PortfolioContent {
    about: AboutSection;
    experience: ExperienceSection;
    contact: ContactSection;
    projects: ProjectSection;
}
