import React from 'react';
import { ArrowUpRight, FileText, Code2 as GithubIcon, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-4xl mx-auto px-6 py-20">
      {/* Availability Badge - Now with dynamic icon */}
      <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-6">
        <Target className="w-4 h-4 text-emerald-400 animate-pulse" />
        Available for new opportunities
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-100 mb-6 leading-tight">
        Hi, I'm <span className="text-white">Sam Junior</span>. <br />
        <span className="text-slate-400">I craft clean, scalable web applications.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed mb-10">
        Full-stack developer specializing in modern frontend systems with React, TypeScript, and Tailwind CSS. Focused on clean code and exceptional user experience.
      </p>

      {/* CTAs & Quick Links - Integrated with icons */}
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-slate-100 text-slate-900 font-medium text-sm hover:bg-white transition-colors"
        >
          <span>View Projects</span>
          <Target className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/thegrindneverstops21"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-slate-800 text-slate-300 font-medium text-sm hover:bg-slate-900 hover:border-slate-700 transition-all"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub Profile</span>
          <ArrowUpRight className="w-4 h-4 text-slate-500" />
        </a>
        <a
          href="/path/to/your/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-slate-800 text-slate-300 font-medium text-sm hover:bg-slate-900 hover:border-slate-700 transition-all"
        >
          <FileText className="w-4 h-4" />
          <span>Resume</span>
          <ArrowUpRight className="w-4 h-4 text-slate-500" />
        </a>
      </div>
    </section>
  );
};