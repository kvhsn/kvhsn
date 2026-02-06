const frontendSkills = [
  { name: 'React', icon: 'html', color: 'text-sky-600 dark:text-sky-400' },
  {
    name: 'Next.js',
    icon: 'javascript',
    color: 'text-yellow-600 dark:text-white',
  },
  { name: 'Tailwind', icon: 'css', color: 'text-sky-500 dark:text-sky-300' },
  {
    name: 'TypeScript',
    icon: 'code',
    color: 'text-blue-600 dark:text-blue-500',
  },
  {
    name: 'Vue.js',
    icon: 'animation',
    color: 'text-purple-600 dark:text-emerald-400',
  },
];

const backendSkills = [
  {
    name: 'Node.js',
    icon: 'terminal',
    color: 'text-green-600 dark:text-green-500',
  },
  { name: 'Scala', icon: 'code', color: 'text-red-600 dark:text-red-500' },
  {
    name: 'Docker',
    icon: 'deployed_code',
    color: 'text-blue-700 dark:text-blue-600',
  },
  {
    name: 'CI/CD',
    icon: 'cloud',
    color: 'text-orange-600 dark:text-orange-400',
  },
  { name: 'Git', icon: 'storage', color: 'text-blue-600 dark:text-blue-400' },
];

const tools = [
  { name: 'Design Systems', icon: 'brush' },
  { name: 'Rust', icon: 'memory' },
  { name: 'Testing', icon: 'bug_report' },
  { name: 'DX Tooling', icon: 'speed' },
  { name: 'Claude Code', icon: 'smart_toy' },
];

export default function Skills() {
  return (
    <section className="flex flex-col gap-10" id="stack">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          Tech Stack
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          The tools and technologies I use to build robust applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 p-8 flex flex-col justify-between hover:border-primary/40 transition-colors shadow-sm dark:shadow-none">
          <div className="absolute top-0 right-0 p-32 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors"></div>
          <div className="relative z-10">
            <div className="h-12 w-12 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-slate-900 dark:text-white">
                devices
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Frontend Engineering
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              Building responsive, accessible, and high-performance user
              interfaces.
            </p>
          </div>
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
            {frontendSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-white/5"
              >
                <span
                  className={`material-symbols-outlined ${skill.color} text-sm`}
                >
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 p-8 flex flex-col hover:border-primary/40 transition-colors shadow-sm dark:shadow-none">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-slate-100 dark:from-background-dark to-transparent opacity-50 group-hover:from-primary/5 dark:group-hover:from-primary/10 transition-colors"></div>
          <div className="h-12 w-12 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-slate-900 dark:text-white">
              dns
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Backend &amp; Cloud
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
            Scalable server-side solutions.
          </p>
          <div className="flex flex-col gap-3 mt-auto relative z-10">
            {backendSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50 dark:bg-background-dark/50 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors"
              >
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
                <span
                  className={`material-symbols-outlined ${skill.color} text-sm`}
                >
                  {skill.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-surface-highlight transition-colors cursor-default shadow-sm dark:shadow-none"
          >
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">
              {tool.icon}
            </span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
