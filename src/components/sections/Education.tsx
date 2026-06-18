import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Education"
          title="Learning Journey"
          lead="Formal education combined with continuous self-learning and practical development."
        />

        <div className="relative border-l border-white/10 pl-6 space-y-10">
          {education.map((item, index) => (
            <div key={index} className="relative">

              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-accent2 border-4 border-dark" />

              <div className="bg-surface p-6 rounded-xl border border-white/5">
                
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h3 className="text-white font-semibold text-lg">
                    {item.institution}
                  </h3>

                  <Tag
                    label={item.status === 'completed' ? 'Completed' : 'In Progress'}
                    variant={item.status === 'completed' ? 'green' : 'amber'}
                  />
                </div>

                <p className="text-accent2 font-medium mb-1">
                  {item.qualification}
                </p>

                <p className="text-muted text-sm mb-4">
                  {item.period}
                </p>

                <ul className="space-y-2">
                  {item.details.map((d, i) => (
                    <li key={i} className="text-sm text-muted flex gap-2">
                      <span className="text-accent2">•</span>
                      {d}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type EducationItem = {
  institution: string;
  qualification: string;
  period: string;
  status: 'completed' | 'in-progress';
  details: string[];
};

const education: EducationItem[] = [
  {
    institution: 'Tshwane University of Technology',
    qualification: 'Diploma in Information Technology',
    period: '2022 - Present',
    status: 'in-progress',
    details: [
      'Software Development fundamentals',
      'Database systems (SQL)',
      'Web development (HTML, CSS, JavaScript)',
    ],
  },
  {
    institution: 'WeThinkCode_',
    qualification: 'GenAi Course for Software Engineers',
    period: '2026',
    status: 'completed',
    details: [
      'Generative AI Tools',
      'Comprehending existing codebase with AI',
      'Generating and Improving Documentation with AI',
      'Debugging with AI assistance',
      'API using AI tools',
      'Git & GitHub workflow',
    ],
  },
  {
    institution: 'Netcad Learning Academy',
    qualification: 'Introduction to Cybersecurity',
    period: 'Ongoing',
    status: 'in-progress',
    details: [
      'Cybersecurity',
      'Privacy And Data Confidentiality',
      'Cyber Best Practices',
      'Network Vulnerabilities',
      'Threat Detection'
    ],
  },
];
