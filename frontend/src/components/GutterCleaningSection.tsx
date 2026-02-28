import { CloudRain } from 'lucide-react';

const services = [
  {
    name: 'Debris Removal',
    description: 'Complete removal of leaves, twigs, dirt, and all debris clogging your gutters to restore proper water flow.',
  },
  {
    name: 'Downspout Flushing',
    description: 'Thorough flushing of downspouts to clear blockages and ensure water drains away from your foundation.',
  },
];

export default function GutterCleaningSection() {
  return (
    <section id="gutter-cleaning" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <img
              src="/assets/generated/icon-gutter.dim_128x128.png"
              alt="Gutter Cleaning"
              className="w-16 h-16 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-white uppercase tracking-wide mb-3">
            Gutter Cleaning
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-16 bg-brand-green" />
            <CloudRain className="text-brand-green" size={20} />
            <div className="h-0.5 w-16 bg-brand-green" />
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Protect your home from water damage with our professional gutter cleaning services.
          </p>
        </div>

        {/* Service Cards + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Service Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-card border border-brand-green/30 rounded-lg p-6 hover:border-brand-green/70 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-8 bg-brand-green rounded-full flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-brand-white uppercase tracking-wide group-hover:text-brand-green transition-colors">
                    {service.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-5">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Why It Matters */}
          <div className="bg-brand-green/10 border border-brand-green/30 rounded-lg p-6">
            <CloudRain className="text-brand-green mb-3" size={28} />
            <h3 className="font-heading text-lg font-bold text-brand-white uppercase tracking-wide mb-3">
              Why It Matters
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-brand-green mt-0.5">✓</span>
                Prevents foundation damage from overflow
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-green mt-0.5">✓</span>
                Protects fascia boards and soffits
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-green mt-0.5">✓</span>
                Reduces risk of basement flooding
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-green mt-0.5">✓</span>
                Extends the life of your gutters
              </li>
            </ul>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-5 w-full font-heading text-sm font-bold bg-brand-green text-brand-white px-4 py-2 rounded hover:bg-brand-green/80 transition-colors uppercase tracking-wide"
            >
              Book Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
