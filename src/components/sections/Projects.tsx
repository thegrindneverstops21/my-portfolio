import SectionHeader from '../ui/SectionHeader';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <SectionHeader
        eyebrow="Projects"
        title="Things I've built"
        lead="Projects that demonstrate my technical skills and problem-solving approach."
      />

      <div className="grid gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-surface border border-white/5 rounded-2xl p-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <span className="px-3 py-1 rounded-full text-xs bg-accent/10 text-accent">
                {project.status}
              </span>
            </div>

            <p className="text-muted mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-5 py-3 rounded-xl font-medium"
              >
                View Code
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 px-5 py-3 rounded-xl text-white"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}