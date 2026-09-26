import { useEffect, useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { content } from '@/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/20'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-3 text-white"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded border border-white/20 bg-white/5">
              <Building2 className="h-5 w-5" />
            </div>
            <span className="text-base font-semibold tracking-tight lg:text-lg">
              E.S.Victory-Consalt
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {content.nav.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-navy-100 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden rounded border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-navy-900 lg:block"
          >
            Получить консультацию
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-label="Меню"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-navy-900 lg:hidden ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        } transition-all duration-300`}
      >
        <nav className="flex flex-col gap-1 px-5 py-6">
          {content.nav.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="py-3 text-left text-base font-medium text-navy-100 transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-4 rounded border border-white/25 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white transition-all hover:bg-white hover:text-navy-900"
          >
            Получить консультацию
          </button>
        </nav>
      </div>
    </header>
  );
}
