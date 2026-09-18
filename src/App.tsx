import React from 'react';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-slate-800 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <main className="max-w-5xl mx-auto">
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;