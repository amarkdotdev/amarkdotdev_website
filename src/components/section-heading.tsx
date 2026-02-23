const eyebrowAccentClass: Record<string, string> = {
  cyan: "text-cyan-300",
  violet: "text-violet-300",
  amber: "text-amber-300",
  teal: "text-teal-300",
};

const titleGradientClass: Record<string, string> = {
  cyan: "bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent",
  violet: "bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent",
  amber: "bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent",
  teal: "bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent",
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Accent for eyebrow and title gradient: cyan (default), violet, amber, teal */
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
      <p className={`text-xs font-medium uppercase tracking-[0.24em] ${eyebrowAccentClass[accent] ?? eyebrowAccentClass.cyan}`}>
        {eyebrow}
      </p>
      <h2 className={`text-balance text-[clamp(1.25rem,4vw+1rem,1.875rem)] font-semibold leading-tight tracking-tight sm:text-3xl md:text-5xl ${titleGradientClass[accent] ?? titleGradientClass.cyan}`}>
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
