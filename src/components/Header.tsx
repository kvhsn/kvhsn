import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between bg-white/80 dark:bg-[#161e2c]/80 backdrop-blur-md border border-slate-200 dark:border-white/5 mt-4 rounded-xl px-6 transition-all shadow-sm">
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
            <a
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              href="#work"
            >
              Work
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              href="#history"
            >
              History
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              href="#stack"
            >
              Stack
            </a>
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
            <button className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
