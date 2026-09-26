import { Check } from 'lucide-react';
import { content } from '@/content';
import { useReveal } from '@/hooks/useReveal';

export default function Benefits() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} mb-14 lg:mb-20`}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-steel-400" />
            <span className="text-sm font-medium uppercase tracking-widest text-steel-600">
              Ценность для клиента
            </span>
          </div>
          <h2 className="text-balance text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
            {content.benefits.title}
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
          {content.benefits.items.map((item, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${(index % 3) + 1} ${isVisible ? 'is-visible' : ''} group flex items-start gap-4 bg-white p-7 transition-colors hover:bg-steel-50 lg:p-8`}
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-white transition-colors group-hover:bg-navy-700">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-navy-900 lg:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
