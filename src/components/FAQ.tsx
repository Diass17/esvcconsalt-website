import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { content } from '@/content';
import { useReveal } from '@/hooks/useReveal';

export default function FAQ() {
  const { ref, isVisible } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} mb-14 lg:mb-16`}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-steel-400" />
            <span className="text-sm font-medium uppercase tracking-widest text-steel-600">
              FAQ
            </span>
          </div>
          <h2 className="text-balance text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
            {content.faq.title}
          </h2>
        </div>

        <div className="divide-y divide-steel-200 border-y border-steel-200">
          {content.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`reveal reveal-delay-${Math.min(index + 1, 5)} ${isVisible ? 'is-visible' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left lg:py-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-navy-900 lg:text-lg">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-steel-300 text-navy-700 transition-colors hover:bg-navy-900 hover:text-white">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-48 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm leading-relaxed text-steel-700 lg:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
