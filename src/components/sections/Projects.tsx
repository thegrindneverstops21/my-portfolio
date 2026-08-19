import React from 'react';
import { ExternalLink, Folder, Code2 as GithubIcon } from 'lucide-react';


interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Developer Portfolio",
    category: "Frontend System",
    description:
      "A fast, minimalist developer portfolio engineered with component-based architecture, modern dark-mode aesthetic, and seamless responsiveness.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/thegrindneverstops21/my-portfolio",
    liveUrl: "https://my-portfolio-pfuxani.vercel.app",
  },
    {
    title: "Cloudy",
    category: "Frontend System",
    description:
      "Weather app using Open-Meteo + Nominatim APIs, saved locations, hourly forecasts, daily forecasts, unit conversion, light/dark theme",
    techStack: ["React", "TypeScript", "Plain CSS", "Vite"],
    githubUrl: "https://github.com/thegrindneverstops21/weather-app",
    liveUrl: "https://weather-app-pfuxani.vercel.app/",
  },
    {
    title: "Bookmarked!",
    category: "Frontend System",
    description:
      "Bookmark manager: CRUD, favorites, category grouping, dark/light theme",
    techStack: ["React", "TypeScript", "Plain CSS", "Vite"],
    githubUrl: "https://github.com/thegrindneverstops21/bookmarked",
    liveUrl: "https://bookmarked-alpha.vercel.app/",
  },
      {
    title: "WOC Honor",
    category: "Frontend System",
    description:
      "Appreciation site for a Christian ministry, built with Framer Motion",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Supabase"],
    githubUrl: "https://github.com/thegrindneverstops21/woc-honor",
    liveUrl: "https://woc-honor.vercel.app/",
  },
];

export const Projects: React.FC = () => {
return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/60">
      <div className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Featured Projects</h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400">
          A selection of software architecture, mobile development, and web systems I've built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1 group"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Folder className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-400 font-medium tracking-wider uppercase">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-100 group-hover:text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/40">
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs font-medium">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};