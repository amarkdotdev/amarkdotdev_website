const eyebrowAccentClass: Record<string, string> = {
  cyan: "text-cyan-200/90",
  violet: "text-site-violet/90",
  amber: "text-amber-200/90",
  teal: "text-site-teal/90",
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Accent for eyebrow: cyan (default), violet, amber, teal */
  accent?: keyof typeof eyebrowAccentClass;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent = "cyan",
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4 break-words">
      <p className={`text-xs uppercase tracking-[0.24em] ${eyebrowAccentClass[accent] ?? eyebrowAccentClass.cyan}`}>
        {eyebrow}
      </p>
      <h2 className="text-balance text-[clamp(1.25rem,4vw+1rem,1.875rem)] font-semibold leading-tight tracking-tight text-zinc-100 sm:text-3xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-sm leading-7 text-zinc-300 sm:text-base sm:leading-[1.65] md:text-lg md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
