import SectionHeader from '../ui/SectionHeader';

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <SectionHeader
        eyebrow="About"
        title="Building skills through real projects."
        lead="I'm focused on becoming a strong full stack developer through consistent learning and practical experience."
      />

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-muted leading-relaxed mb-4">
            I'm Pfuxani Sam Junior Ndlovu, a junior developer currently
            studying Information Technology at Tshwane University of
            Technology.
          </p>

          <p className="text-muted leading-relaxed mb-4">
            My primary focus is full stack development with modern web and mobile technologies.
          </p>

          <p className="text-muted leading-relaxed">
            I'm actively building projects, improving my GitHub profile,
            and preparing for junior developer opportunities.
          </p>
        </div>

        <div className="bg-surface rounded-2xl border border-white/5 p-6">
          <h3 className="text-white font-semibold mb-4">
            Quick Facts
          </h3>

          <ul className="space-y-3 text-muted">
            <li>📍 South Africa</li>
            <li>🎓 Tshwane University of Technology</li>
            <li>💻 React, Java, Python, JavaScript & TypeScript</li>
            <li>🗄️ SQL & Databases</li>
            <li>🚀 Open to junior opportunities</li>
          </ul>
        </div>
      </div>
    </section>
  );
}