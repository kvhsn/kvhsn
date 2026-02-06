export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
      <p>
        &copy; {new Date().getFullYear()} Kevin Hassan. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a
          className="hover:text-slate-900 dark:hover:text-white transition-colors"
          href="https://github.com/kvhsn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="hover:text-slate-900 dark:hover:text-white transition-colors"
          href="https://linkedin.com/in/kevinhassan"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
