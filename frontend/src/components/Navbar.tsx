import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pressure Washing', href: '#pressure-washing' },
  { label: 'Gutter Cleaning', href: '#gutter-cleaning' },
  { label: 'Lawn & Landscaping', href: '#lawn-landscaping' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy border-b border-brand-blue/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img
              src="/assets/generated/logo.dim_500x500.png"
              alt="R&R Pressure Washing & Landscaping Logo"
              className="h-11 w-11 rounded-full object-cover border-2 border-brand-green"
            />
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-bold text-brand-white leading-tight block">
                R&amp;R
              </span>
              <span className="text-xs text-brand-light/70 leading-tight block tracking-wide">
                Pressure Washing &amp; Landscaping
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-heading text-sm font-medium text-brand-light/80 hover:text-brand-green px-3 py-2 rounded transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
            {/* Phone Number */}
            <a
              href="tel:9854157267"
              className="ml-2 flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-white hover:text-brand-green transition-colors duration-200 tracking-wide px-3 py-2"
            >
              <Phone size={15} className="text-brand-green flex-shrink-0" />
              (985) 415-7267
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-1 font-heading text-sm font-bold bg-brand-green text-brand-white px-4 py-2 rounded hover:bg-brand-green/90 transition-colors duration-200 tracking-wide uppercase shadow-glow"
            >
              Free Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-brand-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-brand-blue/30">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-heading text-sm font-medium text-brand-light/80 hover:text-brand-green py-2 text-left tracking-wide uppercase transition-colors"
              >
                {link.label}
              </button>
            ))}
            {/* Phone Number in mobile menu */}
            <a
              href="tel:9854157267"
              className="flex items-center gap-2 font-heading text-sm font-semibold text-brand-white hover:text-brand-green py-2 transition-colors tracking-wide"
            >
              <Phone size={15} className="text-brand-green flex-shrink-0" />
              (985) 415-7267
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 font-heading text-sm font-bold bg-brand-green text-brand-white px-4 py-2 rounded hover:bg-brand-green/90 transition-colors tracking-wide uppercase"
            >
              Free Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
