import { Phone } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'rr-pressure-washing');

  return (
    <footer className="bg-brand-dark border-t border-brand-blue/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Logo */}
          <img
            src="/assets/generated/logo.dim_500x500.png"
            alt="R&R Pressure Washing & Landscaping"
            className="w-16 h-16 rounded-full object-cover border-2 border-brand-green/50"
          />

          {/* Fleur-de-lis */}
          <div className="text-brand-green text-2xl">⚜</div>

          {/* Business Name */}
          <div>
            <h3 className="font-heading text-xl font-bold text-brand-white uppercase tracking-widest">
              R&amp;R Pressure Washing &amp; Landscaping
            </h3>
            <p className="font-heading text-brand-green text-sm uppercase tracking-widest mt-1">
              ★ Covington, Louisiana ★
            </p>
            {/* Phone Number */}
            <a
              href="tel:9854157267"
              className="inline-flex items-center gap-1.5 mt-2 font-heading text-sm font-semibold text-brand-white hover:text-brand-green transition-colors tracking-wide"
            >
              <Phone size={14} className="text-brand-green flex-shrink-0" />
              (985) 415-7267
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['#pressure-washing', '#gutter-cleaning', '#lawn-landscaping', '#contact'].map((href) => {
              const labels: Record<string, string> = {
                '#pressure-washing': 'Pressure Washing',
                '#gutter-cleaning': 'Gutter Cleaning',
                '#lawn-landscaping': 'Lawn & Landscaping',
                '#contact': 'Contact',
              };
              return (
                <button
                  key={href}
                  onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-heading text-xs text-muted-foreground hover:text-brand-green transition-colors uppercase tracking-wide"
                >
                  {labels[href]}
                </button>
              );
            })}
          </nav>

          {/* Copyright & Attribution */}
          <div className="text-xs text-muted-foreground space-y-1">
            <p>© {year} R&amp;R Pressure Washing &amp; Landscaping. All rights reserved.</p>
            <p>
              Built with{' '}
              <span className="text-brand-green">♥</span>{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-brand-green transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
