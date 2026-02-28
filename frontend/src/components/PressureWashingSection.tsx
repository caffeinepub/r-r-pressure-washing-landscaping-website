import { Droplets } from 'lucide-react';

const services = [
  {
    name: 'Driveways',
    description: 'Blast away oil stains, dirt, and grime from concrete and asphalt driveways for a like-new appearance.',
  },
  {
    name: 'Houses',
    description: 'Restore your home\'s exterior by removing mold, mildew, algae, and years of built-up dirt.',
  },
  {
    name: 'Sidewalks',
    description: 'Keep your walkways clean, safe, and slip-free with our high-pressure cleaning service.',
  },
  {
    name: 'Patios',
    description: 'Revitalize your outdoor living space — patios, decks, and pool surrounds cleaned to perfection.',
  },
  {
    name: 'Fences',
    description: 'Remove weathering, algae, and discoloration from wood, vinyl, and metal fences.',
  },
];

export default function PressureWashingSection() {
  return (
    <section id="pressure-washing" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <img
              src="/assets/generated/icon-pressure-wash.dim_128x128.png"
              alt="Pressure Washing"
              className="w-16 h-16 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-white uppercase tracking-wide mb-3">
            Pressure Washing
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-16 bg-brand-blue" />
            <Droplets className="text-brand-blue" size={20} />
            <div className="h-0.5 w-16 bg-brand-blue" />
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            High-powered cleaning solutions for every surface around your property.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-card border border-brand-blue/30 rounded-lg p-6 hover:border-brand-blue/70 hover:shadow-glow-blue transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-8 bg-brand-blue rounded-full flex-shrink-0" />
                <h3 className="font-heading text-xl font-semibold text-brand-white uppercase tracking-wide group-hover:text-brand-blue transition-colors">
                  {service.name}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-5">
                {service.description}
              </p>
            </div>
          ))}
          {/* CTA Card */}
          <div className="bg-brand-blue/10 border-2 border-brand-blue/50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-brand-blue/20 transition-all duration-300">
            <Droplets className="text-brand-blue mb-3" size={32} />
            <p className="font-heading text-brand-white font-semibold uppercase tracking-wide mb-3">
              Ready to get started?
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-heading text-sm font-bold bg-brand-blue text-brand-white px-5 py-2 rounded hover:bg-brand-blue/80 transition-colors uppercase tracking-wide"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
