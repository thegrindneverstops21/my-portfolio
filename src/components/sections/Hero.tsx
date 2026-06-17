import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  IconCode,
  IconBrandGithub,
  IconArrowDown,
} from '@tabler/icons-react';

const TYPED_WORDS = [
  'Full Stack Developer.',
  'React Developer.',
  'Problem Solver.',
  'Always Learning.',
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      setText((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return text;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const typedText = useTypewriter(TYPED_WORDS);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent2/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">

        {/* Available badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="
            inline-flex items-center gap-2 text-xs font-semibold
            bg-accent/10 border border-accent/25 text-purple-300
            px-4 py-2 rounded-full mb-8 tracking-wide
          ">
            <span className="w-2 h-2 bg-accent2 rounded-full animate-pulse" />
            Available for junior roles · Remote &amp; on-site
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display font-bold leading-[1.08] tracking-tight mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-2">
            Hi, I'm Pfuxani.
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-accent2 min-h-[1.2em]">
            {typedText}
            <span className="animate-pulse text-accent">|</span>
          </span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          A junior full stack developer studying at{' '}
          <span className="text-white font-medium">
            Tshwane University of Technology
          </span>
          , building with React, TypeScript, and SQL. I care about clean
          code, real UX, and shipping things that actually work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 mb-16"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          
           <a href="#projects"
            className="
              inline-flex items-center gap-2
              bg-accent hover:bg-accent/85 text-white
              font-semibold px-6 py-3.5 rounded-xl
              transition-all duration-200 hover:-translate-y-0.5
              shadow-lg shadow-accent/20
            "
          >
            <IconCode size={18} />
            See my work
          </a>
          
            <a href="https://github.com/thegrindneverstops21"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              border border-white/15 hover:border-accent/50
              text-white hover:text-accent
              font-semibold px-6 py-3.5 rounded-xl
              transition-all duration-200
            "
          >
            <IconBrandGithub size={18} />
            GitHub
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="
            flex flex-wrap gap-8 pt-8
            border-t border-white/5
          "
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          {[
            { num: '4+', label: 'Technologies' },
            { num: '1+', label: 'Live project' },
            { num: '100%', label: 'Ready to ship' },
            { num: 'TUT', label: 'Currently studying' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-white">
                {stat.num}
              </p>
              <p className="text-xs text-muted mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-6 hidden md:flex flex-col items-center gap-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <span className="text-[10px] text-muted tracking-[0.2em] uppercase rotate-90 origin-center mb-4">
            Scroll
          </span>
          <IconArrowDown
            size={16}
            className="text-muted animate-bounce"
            aria-hidden="true"
          />
        </motion.div>

      </div>
    </section>
  );
}