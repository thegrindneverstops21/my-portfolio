export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0c]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm tracking-wide text-white">
          Sam Junior Ndlovu
        </a>
        <div className="flex items-center gap-6 text-sm text-white/60">
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          
          <a href="mailto:ndlovusamjunior21@gmail.com"
            className="rounded-full border border-white/15 px-4 py-1.5 text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Say hi
          </a>
        </div>
      </nav>
    </header>
  );
}