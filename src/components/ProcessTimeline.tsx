import { content } from '@/content';
import { useReveal } from '@/hooks/useReveal';

export default function ProcessTimeline() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="process" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} mb-14 lg:mb-20`}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-steel-400" />
            <span className="text-sm font-medium uppercase tracking-widest text-steel-600">
              Этапы
            </span>
          </div>
          <h2 className="text-balance text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
            {content.process.title}
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-0 right-0 top-[3.5rem] h-px bg-steel-200" />
            <div
              className={`absolute left-0 top-[3.5rem] h-px bg-navy-700 transition-all duration-1000 ${
                isVisible ? 'w-full' : 'w-0'
              }`}
            />

            <div className="grid gap-8 md:grid-cols-3">
              {content.process.steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`reveal reveal-delay-${index + 1} ${isVisible ? 'is-visible' : ''} relative`}
                >
                  {/* Number circle */}
                  <div className="relative z-10 mb-8 flex h-28 w-28 items-center justify-center rounded-full border-2 border-steel-200 bg-white">
                    <span className="text-3xl font-bold text-navy-900">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-navy-900 lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-steel-700 lg:text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[1.5rem] top-0 bottom-0 w-px bg-steel-200" />

            {content.process.steps.map((step, index) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${index + 1} ${isVisible ? 'is-visible' : ''} relative pb-10 last:pb-0`}
              >
                {/* Number circle */}
                <div className="absolute -left-8 flex h-12 w-12 items-center justify-center rounded-full border-2 border-steel-200 bg-white">
                  <span className="text-sm font-bold text-navy-900">
                    {step.number}
                  </span>
                </div>

                <div className="ml-6">
                  <h3 className="mb-2 text-base font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-steel-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
