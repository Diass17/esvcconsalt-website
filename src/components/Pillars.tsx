import { Wrench, Scale, Truck } from 'lucide-react';
import { content } from '@/content';
import { useReveal } from '@/hooks/useReveal';

const icons = [Wrench, Scale, Truck];

export default function Pillars() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="pillars" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} mb-14 lg:mb-20`}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-steel-400" />
            <span className="text-sm font-medium uppercase tracking-widest text-steel-600">
              Направления
            </span>
          </div>
          <h2 className="max-w-3xl text-balance text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
            {content.pillars.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {content.pillars.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <PillarCard
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
                Icon={Icon}
                delayClass={`reveal-delay-${index + 1}`}
                isVisible={isVisible}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  number,
  title,
  description,
  Icon,
  delayClass,
  isVisible,
}: {
  number: string;
  title: string;
  description: string;
  Icon: typeof Wrench;
  delayClass: string;
  isVisible: boolean;
}) {
  return (
    <div
      className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} group relative flex flex-col overflow-hidden rounded-lg border border-steel-200 bg-steel-50 p-8 transition-all hover:border-steel-400 hover:shadow-xl hover:shadow-steel-200/40 lg:p-10`}
    >
      {/* Number watermark */}
      <span className="absolute right-6 top-4 text-6xl font-bold text-steel-200 transition-colors group-hover:text-steel-300 lg:text-7xl">
        {number}
      </span>

      <div className="relative">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded border border-steel-300 bg-white text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="mb-3 text-xl font-semibold text-navy-900 lg:text-2xl">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-steel-700 lg:text-base">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="mt-8 h-px w-0 bg-navy-700 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
