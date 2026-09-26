import { Lock, MessagesSquare, Eye, Globe, Layers, ShieldCheck } from 'lucide-react';
import { content } from '@/content';
import { useReveal } from '@/hooks/useReveal';

const icons = [Lock, MessagesSquare, Eye, Globe, Layers, ShieldCheck];

export default function Trust() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-steel-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} mb-14 lg:mb-20`}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-steel-400" />
            <span className="text-sm font-medium uppercase tracking-widest text-steel-600">
              Профессиональный подход
            </span>
          </div>
          <h2 className="text-balance text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
            {content.trust.title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {content.trust.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className={`reveal reveal-delay-${(index % 3) + 1} ${isVisible ? 'is-visible' : ''} border-l-2 border-steel-300 bg-white p-7 transition-colors hover:border-navy-700 lg:p-8`}
              >
                <Icon className="mb-5 h-7 w-7 text-navy-700" />
                <h3 className="mb-2 text-base font-semibold text-navy-900 lg:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-steel-700">
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
