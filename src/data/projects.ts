import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'portfolio',
        title: 'Developer Portfolio',
        description: 'A fully custom portfolio built with Reacr + TypeScript to demonstrate frontend engineering skills. Built without template, architected like a real app.',
        problem: 'Junior devs with no job history need a way to prove they can build, not just understand theory. A generic template does not demonstrate that.',
        solution: 'Build the portfolio itself as the primary project. Use typed components, data-driven content, accessible markup, and a CI/CD deploy pipeline to show real engineering judgement.',
        challenge: 'Designing without a design background. Solved by studying real developer porfolios, iterating on scannability, and keeping every UI decision intentional.',
        learning: 'TypeScript interfaces are worth the setup time. Component composition and data-driven rendering made the entire site easier to maintain and update.',
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'Vercel'],
        liveUrl: 'https://pfuxani.dev',
        githubUrl: 'https://github.com/thegrindneverstops21/my-portfolio',
        featured: true,
        status: 'live',
    }
];