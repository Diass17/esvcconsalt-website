import { Check } from 'lucide-react';
import { content } from '@/content';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="bg-navy-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div
            ref={ref}
            className={`reveal ${isVisible ? 'is-visible' : ''}`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-steel-500" />
              <span className="text-sm font-medium uppercase tracking-widest text-steel-300">
                О компании
              </span>
            </div>

            <h2 className="mb-6 text-balance text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {content.about.title}
            </h2>

            {content.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mb-4 text-base leading-relaxed text-navy-100 lg:text-lg"
              >
                {p}
              </p>
            ))}

            <ul className="mt-8 space-y-4">
              {content.about.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border border-steel-500 bg-steel-800">
                    <Check className="h-3 w-3 text-steel-200" />
                  </span>
                  <span className="text-sm text-navy-100 lg:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div
            className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} relative overflow-hidden rounded-lg`}
          >
            <img
              src="https://images.pexels.com/photos/6034676/pexels-photo-6034676.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Современный промышленный комплекс с производственными зданиями"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
