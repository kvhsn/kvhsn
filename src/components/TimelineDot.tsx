import { type Job } from './JobCard';

export default function TimelineDot({ job }: { job: Job }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div
        className={`h-14 w-14 shrink-0 rounded-full bg-white dark:bg-background-dark border-4 ${job.isCurrent ? 'border-primary shadow-lg shadow-primary/25' : 'border-slate-200 dark:border-surface-highlight'} flex items-center justify-center relative z-10 group-hover:border-primary transition-colors duration-300 shadow-md`}
      >
        <span
          className={`material-symbols-outlined ${job.isCurrent ? 'text-primary' : 'text-slate-500 dark:text-slate-400'} group-hover:text-primary group-hover:scale-110 transition-all`}
        >
          {job.icon}
        </span>
      </div>
      <div className="pt-2">
        <span
          className={`text-xs font-bold uppercase tracking-wider block mb-1 ${job.isCurrent ? 'text-primary' : 'text-slate-500'}`}
        >
          {job.period}
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
          {job.location}
        </span>
      </div>
    </div>
  );
}
