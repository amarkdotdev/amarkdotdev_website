type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4 break-words">
      <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/85">
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
