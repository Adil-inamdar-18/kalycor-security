import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-steel-400 transition-colors hover:text-bone-50"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-accent' : 'text-steel-400'}>{item.label}</span>
            )}
            {!isLast && (
              <span className="text-steel-600" aria-hidden="true">
                /
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
