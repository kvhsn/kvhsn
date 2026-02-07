import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'History', href: '#history' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        ref={headerRef}
        className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-20 items-center justify-between bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md border border-slate-200 dark:border-white/5 mt-4 rounded-xl px-6 transition-all shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-xl">
                terminal
              </span>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Kevin Hassan
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, -1).map((link) => (
              <a
                key={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-900 dark:text-white text-sm font-semibold transition-all border border-slate-200 dark:border-white/10"
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`material-symbols-outlined inline-block transition-transform duration-300 ${menuOpen ? 'rotate-90 scale-90' : 'rotate-0 scale-100'}`}
              >
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-2 rounded-xl bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md border border-slate-200 dark:border-white/5 p-4 flex flex-col gap-2 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
