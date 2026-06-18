import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconHeart,
} from '@tabler/icons-react';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/thegrindneverstops21',
    icon: <IconBrandGithub size={18} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sam-junior-10a13b319',
    icon: <IconBrandLinkedin size={18} />,
  },
  {
    label: 'Email',
    href: 'mailto:ndlovusamjunior21@gmail.com',
    icon: <IconMail size={18} />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-dark">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

          {/* Logo */}
          <a
            href="#"
            className="font-display text-lg font-bold text-white hover:text-accent transition-colors"
          >
            pfuxani<span className="text-accent">.</span>dev
          </a>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="
                  w-9 h-9 rounded-lg border border-white/10
                  flex items-center justify-center
                  text-muted hover:text-white hover:border-accent
                  transition-all duration-200
                "
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {year} Pfuxani Sam Junior Ndlovu. All rights reserved.
          </p>
          <p className="text-sm text-muted flex items-center gap-1.5">
            Built with React + TypeScript
            <IconHeart size={14} className="text-accent" />
            Deployed on Vercel
          </p>
        </div>

      </div>
    </footer>
  );
}