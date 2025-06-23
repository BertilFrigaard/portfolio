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

export interface PortfolioContent {
    about: AboutSection;
    experience: ExperienceSection;
    contact: ContactSection;
}
