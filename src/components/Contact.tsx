export default function Contact() {
  return (
    <section className="py-10" id="contact">
      <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-16 border border-slate-200 dark:border-white/5 overflow-hidden bg-white dark:bg-surface-dark shadow-xl dark:shadow-none flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center max-w-2xl">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-primary mb-8 shadow-sm">
            <span className="material-symbols-outlined text-3xl">mail</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Let's build something together.
          </h2>

          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            I'm currently open to freelance missions and new opportunities —
            whether it's a frontend-heavy project, a B2C challenge, or a team
            that cares about Developer Experience. Let's talk.
          </p>

          <a
            className="text-base sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors border-b-2 border-primary/20 hover:border-primary pb-1 mb-12 break-all sm:break-normal"
            href="mailto:kevinhassan.pro@gmail.com"
          >
            kevinhassan.pro@gmail.com
          </a>

          <div className="flex items-center gap-6">
            <a
              className="group flex flex-col items-center gap-2"
              href="https://www.linkedin.com/in/kevin-hassan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-300 shadow-md dark:shadow-none group-hover:-translate-y-1">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                LinkedIn
              </span>
            </a>
            <a
              className="group flex flex-col items-center gap-2"
              href="https://github.com/kvhsn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300 shadow-md dark:shadow-none group-hover:-translate-y-1">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
