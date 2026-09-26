import { Building2 } from 'lucide-react';
import { content } from '@/content';

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded border border-steel-700 bg-navy-900">
                <Building2 className="h-5 w-5 text-steel-300" />
              </div>
              <span className="text-base font-semibold text-white">
                E.S.Victory-Consalt
              </span>
            </div>
            <p className="text-sm leading-relaxed text-steel-400">
              {content.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-steel-500">
              Навигация
            </h3>
            <ul className="space-y-3">
              {content.nav.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-steel-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Directions */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-steel-500">
              Направления
            </h3>
            <ul className="space-y-3">
              {content.footer.directions.map((dir, i) => (
                <li key={i} className="text-sm text-steel-300">
                  {dir}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-steel-500">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${content.email}`}
                  className="text-sm text-steel-300 transition-colors hover:text-white"
                >
                  {content.email}
                </a>
              </li>
              <li className="text-sm text-steel-300">{content.phone}</li>
              <li className="text-sm text-steel-300">{content.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-steel-800 pt-8 sm:flex-row">
          <p className="text-xs text-steel-500">{content.footer.copyright}</p>
          <button
            onClick={() => scrollTo('#hero')}
            className="text-xs text-steel-500 transition-colors hover:text-steel-300"
          >
            {content.footer.privacyPolicy}
          </button>
        </div>
      </div>
    </footer>
  );
}
