export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  techStack: string[];
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}

