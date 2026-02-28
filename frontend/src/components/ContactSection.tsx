import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2, Phone } from 'lucide-react';
import { ServiceType } from '../backend';
import { useSubmitQuoteRequest } from '../hooks/useQueries';

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

const serviceOptions = [
  { label: 'Pressure Washing', value: ServiceType.pressureWashing },
  { label: 'Gutter Cleaning', value: ServiceType.gutterCleaning },
  { label: 'Lawn & Landscaping', value: ServiceType.lawnLandscaping },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const submitMutation = useSubmitQuoteRequest();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.service) return;

    try {
      await submitMutation.mutateAsync({
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service as ServiceType,
        message: form.message,
      });
      setSubmitted(true);
      setForm(initialForm);
    } catch {
      // error handled by mutation state
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <div className="text-brand-green text-4xl mb-3">⚜</div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-white uppercase tracking-wide mb-3">
              Get a Free Quote
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-16 bg-brand-green" />
              <span className="font-heading text-brand-green text-sm uppercase tracking-widest">
                Covington, Louisiana
              </span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Ready to transform your property? Fill out the form and we'll get back to you with a free, no-obligation quote. Serving Covington, Louisiana and surrounding areas.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-green text-sm">📍</span>
                </div>
                <div>
                  <p className="font-heading text-brand-white font-semibold uppercase text-sm tracking-wide">Location</p>
                  <p className="text-muted-foreground text-sm">Covington, Louisiana</p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={14} className="text-brand-green" />
                </div>
                <div>
                  <p className="font-heading text-brand-white font-semibold uppercase text-sm tracking-wide">Phone</p>
                  <a
                    href="tel:9854157267"
                    className="text-brand-green text-sm hover:text-brand-green/80 transition-colors font-semibold"
                  >
                    (985) 415-7267
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-blue text-sm">🌿</span>
                </div>
                <div>
                  <p className="font-heading text-brand-white font-semibold uppercase text-sm tracking-wide">Services</p>
                  <p className="text-muted-foreground text-sm">Pressure Washing · Gutter Cleaning · Lawn &amp; Landscaping</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card border border-brand-green/20 rounded-lg p-8 shadow-card">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="text-brand-green mx-auto mb-4" size={56} />
                <h3 className="font-heading text-2xl font-bold text-brand-white uppercase tracking-wide mb-2">
                  Quote Request Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you! We'll be in touch shortly with your free quote.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-heading text-sm font-bold border border-brand-green text-brand-green px-6 py-2 rounded hover:bg-brand-green/10 transition-colors uppercase tracking-wide"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {submitMutation.isError && (
                  <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded p-3 text-sm text-destructive">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block font-heading text-xs font-semibold text-brand-light/70 uppercase tracking-widest mb-1.5">
                    Full Name <span className="text-brand-green">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-muted border border-border rounded px-4 py-2.5 text-brand-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-heading text-xs font-semibold text-brand-light/70 uppercase tracking-widest mb-1.5">
                    Phone Number <span className="text-brand-green">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(985) 555-0100"
                    className="w-full bg-muted border border-border rounded px-4 py-2.5 text-brand-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-heading text-xs font-semibold text-brand-light/70 uppercase tracking-widest mb-1.5">
                    Email Address <span className="text-brand-green">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-muted border border-border rounded px-4 py-2.5 text-brand-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block font-heading text-xs font-semibold text-brand-light/70 uppercase tracking-widest mb-1.5">
                    Service Needed <span className="text-brand-green">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-muted border border-border rounded px-4 py-2.5 text-brand-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-brand-dark">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-brand-dark">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-heading text-xs font-semibold text-brand-light/70 uppercase tracking-widest mb-1.5">
                    Message <span className="text-brand-green">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-muted border border-border rounded px-4 py-2.5 text-brand-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full font-heading text-base font-bold bg-brand-green text-brand-white py-3 rounded hover:bg-brand-green/90 transition-all duration-200 uppercase tracking-widest shadow-glow disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Request Free Quote'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
