type ServiceCardProps = {
  href: string;
  title: string;
  description: string;
  eyebrow: string;
  image: string;
  alt: string;
  size?: 'large' | 'medium' | 'small';
};

export default function ServiceCard({
  href,
  title,
  description,
  eyebrow,
  image,
  alt,
  size = 'medium',
}: ServiceCardProps) {
  const heightClass =
    size === 'large' ? 'h-[480px] md:h-[580px]' : size === 'small' ? 'h-[300px] md:h-[340px]' : 'h-[380px] md:h-[440px]';

  return (
    <a
      href={href}
      className={`group relative block overflow-hidden bg-navy-900 ${heightClass}`}
    >
      {/* Image */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent transition-opacity duration-500 group-hover:from-navy-950/95" />

      {/* Accent line */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 ease-smooth group-hover:w-full" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition-transform duration-500 ease-smooth group-hover:-translate-y-1">
          {eyebrow}
        </div>
        <h3 className="text-xl font-semibold text-bone-50 transition-transform duration-500 ease-smooth group-hover:-translate-y-1 md:text-2xl">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-steel-400 opacity-0 transition-all duration-500 ease-smooth group-hover:opacity-100 md:text-base">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm text-bone-200 opacity-0 transition-all duration-500 ease-smooth group-hover:opacity-100">
          <span className="uppercase tracking-wider">Explore</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </a>
  );
}
