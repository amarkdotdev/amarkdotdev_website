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
    <div className="max-w-3xl space-y-4">
      <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/85">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-7 text-zinc-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
