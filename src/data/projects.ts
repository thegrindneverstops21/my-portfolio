export interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        title: "Sizani",
        description: "A low-cost, web-accessible diagnostic PoC that helps cliinicians in under-resourced South African clinics detect knee osteoarthris — an alternative to expensive PACS-intergrated AI licences. Grades serverity on the Kellgren-Lawrence scale using a ResNet-50/EfficientNet CNN, with Grad-CAM heatmaps overlaid on the X-ray so clinicians can see what the model is reacting to.",
        tags: ["AI", "Healthcare","FastAPI" ,"Machine Learning", "Grad-CAM", "Python", "React", "CNN"],
        featured: true,
    },
    {
        title: "Elara",
        description: "An accessible civic-tech platform built for the Limpopo Co-Design/Create Challenge, where it placed 2nd. Focused on voice-first and accessible UI patterns so government services are usable by people who are excluded by standard web interfaces.",
        tags: ["Accessibility", "Civic Tech", "React"],
        featured: true,
    },
    {
        title: "Orbit Tech",
        description: "A ZAR marketplace for mobile repair software licences and rentals, built with a 5-person team. Led UI/UX(customer journeys, design systems, wireframes) and shipped the backend work across registration, product, and order/payment APIs.",
        tags: [ "React", "Three.js", "System Design", "UI/UX"],
        featured: true,
    },
    {
        title: "Bookmarked",
        description: "A full CRUD bookmark manager with favorites, auto-grouped categories, and a light/dark theme toggle.",
        tags: ["React", "Typescript", "Vite"],
        link: "https://bookmarked-alpha.vercel.app/",
        github: "https://github.com/thegrindneverstops21/bookmarked",
    },
    {
        title: "Cloudy",
        description: "A weather app built component-by-component through a full dev lifecycle: drag-to-scroll forecast, slide-out settings panel, zero API key required",
        tags: ["React", "Typescript", "Vite", "OpenMeteo API"],
        link: "https://weather-app-ten-xi-16.vercel.app/",
        github: "https://github.com/thegrindneverstops21/cloudy",
    },
    {
        title: "Shopping List",
        description: "A shopping list web app that allows you to create an account, build shopping lists, tick items off right from the home page, search and sort inside a list, pick a photo for an item straight from Unsplash, share a list with someone else, and manage your account (including dark mode) from a settings sidebar.",
        tags: ["React", "Typescript", "Vite", "Unsplash API", "Redux Toolkit"],
        link: "https://shopping-list-phi-six.vercel.app",
        github: "https://github.com/thegrindneverstops21/shopping-list"
    }
];