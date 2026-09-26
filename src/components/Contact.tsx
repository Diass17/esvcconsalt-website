import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { content } from '@/content';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, isVisible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Email service connection point: send form data to director@esvcconsalt.kz
    // via API endpoint or email service when configured.
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Mail, label: 'E-mail', value: content.email, href: `mailto:${content.email}` },
    { icon: Phone, label: 'Телефон', value: content.phone },
    { icon: MapPin, label: 'Адрес', value: content.address },
    { icon: Clock, label: 'Рабочие часы', value: content.workHours },
    { icon: MessageCircle, label: 'WhatsApp', value: content.whatsapp },
  ];

  return (
    <section id="contact" className="bg-navy-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} grid gap-12 lg:grid-cols-2 lg:gap-16`}
        >
          {/* Left: CTA + contact info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-steel-500" />
              <span className="text-sm font-medium uppercase tracking-widest text-steel-300">
                Контакты
              </span>
            </div>

            <h2 className="mb-6 text-balance text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {content.contact.title}
            </h2>

            <p className="mb-10 max-w-xl text-base leading-relaxed text-navy-100 lg:text-lg">
              {content.contact.description}
            </p>

            <div className="space-y-5">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-steel-700 bg-navy-800 text-steel-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-medium uppercase tracking-widest text-steel-400">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-white transition-colors hover:text-steel-200 lg:text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-white lg:text-base">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-lg border border-steel-700 bg-navy-800 p-6 lg:p-10">
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="mb-6 h-16 w-16 text-steel-300" />
                <h3 className="mb-3 text-xl font-semibold text-white lg:text-2xl">
                  {content.contact.form.successTitle}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-navy-100 lg:text-base">
                  {content.contact.form.successMessage}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', company: '', phone: '', email: '', message: '' });
                  }}
                  className="mt-8 rounded border border-steel-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-steel-800"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label={content.contact.form.name}
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <FormField
                    label={content.contact.form.company}
                    value={form.company}
                    onChange={(v) => setForm({ ...form, company: v })}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label={content.contact.form.phone}
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    required
                  />
                  <FormField
                    label={content.contact.form.email}
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-steel-200">
                    {content.contact.form.message}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full rounded border border-steel-600 bg-navy-900 px-4 py-3 text-sm text-white placeholder-steel-500 transition-colors focus:border-steel-400 focus:outline-none focus:ring-1 focus:ring-steel-400"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded bg-white px-6 py-4 text-sm font-semibold text-navy-900 transition-all hover:bg-steel-100 lg:text-base"
                >
                  {content.contact.form.submit}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-steel-200">
        {label}
        {required && <span className="ml-1 text-steel-400">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded border border-steel-600 bg-navy-900 px-4 py-3 text-sm text-white placeholder-steel-500 transition-colors focus:border-steel-400 focus:outline-none focus:ring-1 focus:ring-steel-400"
      />
    </div>
  );
}
