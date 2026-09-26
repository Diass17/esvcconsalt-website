import { Globe2, ShieldCheck, Landmark } from 'lucide-react';
import { content } from '@/content';
import { useReveal } from '@/hooks/useReveal';

const icons = [Globe2, ShieldCheck, Landmark];

export default function WhyUs() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="why-us" className="bg-steel-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} mb-14 lg:mb-20`}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-steel-400" />
            <span className="text-sm font-medium uppercase tracking-widest text-steel-600">
              Преимущества
            </span>
          </div>
          <h2 className="text-balance text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
            {content.whyUs.title}
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-steel-200 bg-steel-200 md:grid-cols-3">
          {content.whyUs.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className={`reveal reveal-delay-${index + 1} ${isVisible ? 'is-visible' : ''} group bg-white p-8 transition-colors hover:bg-steel-50 lg:p-10`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-steel-200 bg-steel-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-navy-900 lg:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-steel-700 lg:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
