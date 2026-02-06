import JobCard, { type Job } from './JobCard';

const jobs: Job[] = [
  {
    period: 'Oct 2025 - Present',
    location: 'Montpellier',
    title: 'Fullstack Engineer',
    company: 'Teads — Demand Platform',
    description:
      'Contributing to core frontend migration from Angular legacy to modern React. Improving Developer Experience through tooling and AI dev tools.',
    tags: ['React', 'Angular', 'TypeScript', 'DX'],
    icon: 'apartment',
    isCurrent: true,
  },
  {
    period: 'Jul 2021 - Sep 2025',
    location: 'Montpellier',
    title: 'Fullstack Engineer',
    company: 'Teads — Publishers & Operations',
    description:
      'Automated ad campaign reports and built the Teads Publisher Interface for revenue and inventory data.',
    tags: ['Node.js', 'Scala', 'React', 'Next.js'],
    icon: 'code',
    isCurrent: false,
  },
  {
    period: 'Mar 2020 - Jul 2021',
    location: 'Paris',
    title: 'Frontend Engineer',
    company: 'Frog (Molotov.tv)',
    description:
      'Developed connected TV apps for Xbox One/Series X and Panasonic (HbbTV). Implemented Design System and conducted technical audits.',
    tags: ['Vue.js', 'Video Streaming', 'HbbTV'],
    icon: 'devices_other',
    isCurrent: false,
  },
  {
    period: 'Sep 2019 - Feb 2020',
    location: 'Paris',
    title: 'iOS Lead Developer',
    company: 'Frog (for Capgemini)',
    description:
      "Led iOS app development for Capgemini's sales force with Swift and RxSwift.",
    tags: ['Swift', 'RxSwift', 'iOS'],
    icon: 'rocket_launch',
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section className="flex flex-col gap-10" id="history">
      <div className="flex items-end justify-between border-b border-slate-200 dark:border-white/10 pb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            Career History
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            A timeline of my professional journey.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-slate-500">
            <span className="material-symbols-outlined">drag_handle</span>
            <span className="text-xs uppercase font-bold self-center">
              Scroll
            </span>
          </div>
        </div>
      </div>

      <div className="-mx-4 px-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
        <div className="relative min-w-[1200px] px-1 pb-4">
          <div className="absolute top-[28px] left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 via-slate-200 to-slate-100 dark:via-slate-700 dark:to-slate-800 z-0"></div>
          <div className="flex gap-6 relative z-10">
            {jobs.map((job) => (
              <JobCard key={job.period} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
