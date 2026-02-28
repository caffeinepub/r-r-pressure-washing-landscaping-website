export default function Hero() {
  const handleQuoteClick = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServicesClick = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/generated/hero-bg.dim_1400x700.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-navy/80" />

      {/* Decorative gradient stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/generated/logo.dim_500x500.png"
            alt="R&R Pressure Washing & Landscaping"
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-brand-green shadow-glow"
          />
        </div>

        {/* Fleur-de-lis accent */}
        <div className="text-brand-green text-3xl mb-2 opacity-80">⚜</div>

        {/* Business Name */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-white text-shadow-lg leading-tight mb-2">
          <span className="text-brand-blue">R</span>
          <span className="text-brand-white">&amp;</span>
          <span className="text-brand-green">R</span>
        </h1>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand-white text-shadow-lg tracking-widest uppercase mb-1">
          Pressure Washing
        </h2>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand-white text-shadow-lg tracking-widest uppercase mb-4">
          &amp; Landscaping
        </h2>

        {/* Location */}
        <p className="font-heading text-brand-green text-lg sm:text-xl tracking-widest uppercase mb-2">
          ★ Covington, Louisiana ★
        </p>

        {/* Tagline */}
        <p className="text-brand-light/80 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Professional pressure washing, gutter cleaning, and lawn care services — transforming your property inside and out.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleQuoteClick}
            className="font-heading text-lg font-bold bg-brand-green text-brand-white px-8 py-4 rounded hover:bg-brand-green/90 transition-all duration-200 tracking-widest uppercase shadow-glow hover:shadow-lg hover:-translate-y-0.5"
          >
            Get a Free Quote
          </button>
          <button
            onClick={handleServicesClick}
            className="font-heading text-lg font-bold border-2 border-brand-blue text-brand-white px-8 py-4 rounded hover:bg-brand-blue/20 transition-all duration-200 tracking-widest uppercase"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
