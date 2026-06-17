export interface Project{
    id: string;
    title: string;
    description: string;
    problem: string;
    solution: string;
    challenge: string;
    learning: string;
    tech: string[];
    liveUrl?: string;
    githubUrl: string;
    featured: boolean;
    status: 'live' | 'in-progress' | 'completed';
}

export interface Skill{
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'tools' | 'learning';
    level: number;
}

export interface SocialLink{
    label: string;
    url: string;
    icon: string;
}