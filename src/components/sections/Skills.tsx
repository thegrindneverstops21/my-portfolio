import SectionHeader from '../ui/SectionHeader';
import { skills } from '../../data/skills';

export default function Skills() {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools',
    learning: 'Currently Learning',
  };

  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <SectionHeader
        eyebrow="Skills"
        title="Technologies I use"
        lead="Tools and technologies I've worked with during my studies and personal projects."
      />

      <div className="space-y-10">
        {Object.entries(categories).map(([key, title]) => {
          const categorySkills = skills.filter(
            skill => skill.category === key
          );

          if (!categorySkills.length) return null;

          return (
            <div key={key}>
              <h3 className="text-xl font-semibold text-white mb-4">
                {title}
              </h3>

              <div className="grid gap-4">
                {categorySkills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">
                        {skill.name}
                      </span>
                      <span className="text-muted text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-surface rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}