// @ts-nocheck
import { useState, useEffect } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { navLinks } from '../../data/nav';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
        }
      `}
    >
      <nav
        className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        
          <a href="#"
          className="font-display text-lg font-bold text-white hover:text-accent transition-colors"
          aria-label="Pfuxani Sam Junior Ndlovu - Home"
        >
          pfuxani<span className="text-accent">.</span>dev
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="
                  text-muted hover:text-white text-sm font-medium
                  px-4 py-2 rounded-lg transition-all duration-200
                  hover:bg-white/5 cursor-pointer
                "
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        
         <a href="mailto:ndlovusamjunior21@gmail.com"
          className="
            hidden md:inline-flex items-center gap-2
            bg-accent hover:bg-accent/85 text-white
            text-sm font-semibold px-4 py-2 rounded-lg
            transition-all duration-200 hover:-translate-y-0.5
          "
        >
          Hire me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-muted hover:text-white transition-colors p-1"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/5">
          <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="
                    w-full text-left text-muted hover:text-white
                    text-sm font-medium px-4 py-3 rounded-lg
                    transition-all duration-200 hover:bg-white/5
                  "
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2 border-t border-white/5 mt-2">
              
                <a href="mailto:ndlovusamjunior21@gmail.com"
                className="
                  w-full inline-flex justify-center
                  bg-accent hover:bg-accent/85 text-white
                  text-sm font-semibold px-4 py-3 rounded-lg
                  transition-all duration-200
                "
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}