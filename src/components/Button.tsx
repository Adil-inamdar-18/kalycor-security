import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'default' | 'large';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
};

const base =
  'group inline-flex items-center justify-center gap-2.5 font-medium tracking-tight transition-all duration-300 ease-smooth disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary:
    'bg-accent text-navy-950 hover:bg-accent-light px-6 py-3 text-sm uppercase tracking-wider shadow-lg shadow-accent/10 hover:shadow-accent/20',
  secondary:
    'bg-bone-50 text-navy-950 hover:bg-white px-6 py-3 text-sm uppercase tracking-wider',
  outline:
    'border border-bone-200/30 text-bone-50 hover:border-accent hover:text-accent px-6 py-3 text-sm uppercase tracking-wider',
  ghost:
    'text-bone-50 hover:text-accent text-sm uppercase tracking-wider px-2 py-1',
};

const sizes = {
  default: '',
  large: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {(variant === 'primary' || variant === 'secondary' || variant === 'outline') && (
        <svg
          className="h-4 w-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
