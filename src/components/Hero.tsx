import { ArrowRight, ChevronDown } from 'lucide-react';
import { content } from '@/content';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/11958396/pexels-photo-11958396.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Современный промышленный комплекс — завод в Казахстане"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 blueprint-grid opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-8 lg:pt-36">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-steel-400" />
            <span className="text-sm font-medium uppercase tracking-widest text-steel-200">
              Промышленный консалтинг · Казахстан
            </span>
          </div>

          <h1 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem]">
            {content.hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-navy-100 sm:text-lg lg:text-xl">
            {content.hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo('#contact')}
              className="group inline-flex items-center justify-center gap-2 rounded bg-white px-7 py-4 text-sm font-semibold text-navy-900 transition-all hover:bg-steel-100 sm:text-base"
            >
              {content.hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('#pillars')}
              className="inline-flex items-center justify-center gap-2 rounded border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:text-base"
            >
              {content.hero.secondaryCta}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#pillars')}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
}
