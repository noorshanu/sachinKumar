export default function HeroStats({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-brand-text/10 pt-5 sm:grid-cols-4 sm:gap-0 sm:pt-5">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={i > 0 ? 'sm:border-l sm:border-brand-text/10 sm:pl-4 xl:pl-5' : ''}
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-xl font-extrabold tracking-tight text-brand-orange md:text-2xl">
              {stat.value}
            </span>
            <span className="whitespace-pre-line text-[10px] font-medium leading-snug text-brand-text-secondary">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
