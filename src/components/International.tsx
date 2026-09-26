import { MapPin, ArrowLeftRight } from 'lucide-react';
import { content } from '@/content';
import { useReveal } from '@/hooks/useReveal';

export default function International() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      {/* Background grid pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} mb-14 lg:mb-20`}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-steel-500" />
            <span className="text-sm font-medium uppercase tracking-widest text-steel-300">
              Международное сотрудничество
            </span>
          </div>
          <h2 className="mb-6 max-w-3xl text-balance text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {content.international.title}
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-navy-100 lg:text-lg">
            {content.international.description}
          </p>
        </div>

        {/* Region cards */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {content.international.regions.map((region, index) => (
            <div
              key={region.name}
              className={`reveal reveal-delay-${index + 1} ${isVisible ? 'is-visible' : ''} group relative overflow-hidden rounded-lg border border-steel-700 bg-navy-800 p-8 transition-all hover:border-steel-500 lg:p-10`}
            >
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-steel-300" />
                <span className="text-xs font-medium uppercase tracking-widest text-steel-400">
                  Регион {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">
                {region.name}
              </h3>

              <p className="text-sm leading-relaxed text-navy-100 lg:text-base">
                {region.role}
              </p>

              {/* Bottom accent */}
              <div className="mt-8 h-px w-0 bg-steel-400 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bridge visual */}
        <div
          className={`reveal reveal-delay-4 ${isVisible ? 'is-visible' : ''} mt-12 flex items-center justify-center gap-4 text-steel-400`}
        >
          <span className="text-sm font-medium uppercase tracking-widest">
            Инвесторы
          </span>
          <ArrowLeftRight className="h-5 w-5 text-steel-300" />
          <span className="text-sm font-medium uppercase tracking-widest">
            Промышленные проекты
          </span>
          <ArrowLeftRight className="h-5 w-5 text-steel-300" />
          <span className="text-sm font-medium uppercase tracking-widest">
            Казахстан
          </span>
        </div>
      </div>
    </section>
  );
}
