type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  accent?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  accent = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`mb-5 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-accent" />
          <span className={accent ? 'eyebrow-accent' : 'eyebrow'}>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-section text-bone-50 text-balance">{title}</h2>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-steel-400 md:text-lg max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
