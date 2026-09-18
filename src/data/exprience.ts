export interface Exprience {
    role: string;
    period: string;
    org: string;
    orgLink?: string;
    location: string;
    tags: string[];
    description: string;
}

export const exprience: Exprience[] = [
    {
        role: "Software Engineer",
        period: "2026 - Present",
        org: "Codetribe @ mlab",
        orgLink: "https://mlab.co.za/",
        location: "Polokwane, South Africa",
        tags: ["React", "Typescript", "Vite", "PostgreSQL", "Node.js", "React Native"],
        description: "Working across full-stack, Android, and web development as part of a structured WIL programme. Shipping production apps end to end — from scoping through deployment — while completing a final-year Diploma in Computer Science at TUT."
    },
];