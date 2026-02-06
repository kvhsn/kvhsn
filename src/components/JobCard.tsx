import TimelineDot from './TimelineDot';

export interface Job {
  period: string;
  location: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  icon: string;
  isCurrent: boolean;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="flex-1 min-w-[280px] flex flex-col ">
      <TimelineDot job={job} />

      <div
        className={`p-8 rounded-xl border transition-all hover:-translate-y-1 flex-1 ${
          job.isCurrent
            ? 'bg-white dark:bg-primary/5 border-primary/30 shadow-lg shadow-primary/10 ring-1 ring-primary/10'
            : 'bg-white dark:bg-[#161e2c]/60 border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none'
        } group-hover:border-primary/30 group-hover:shadow-xl`}
      >
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
          {job.title}
        </h3>
        <p
          className={`text-sm font-medium mb-4 ${job.isCurrent ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
        >
          {job.company}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {job.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 rounded text-[10px] font-bold uppercase border ${
                job.isCurrent
                  ? 'bg-primary/10 text-primary border-primary/20'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border-transparent'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
