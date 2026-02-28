import { Droplets, CloudRain, Leaf } from 'lucide-react';

const services = [
  {
    icon: <Droplets size={32} />,
    title: 'Pressure Washing',
    description: 'Driveways, houses, sidewalks, patios, and fences — blasted clean.',
    href: '#pressure-washing',
    color: 'brand-blue',
    borderClass: 'border-brand-blue/40 hover:border-brand-blue',
    iconClass: 'text-brand-blue',
    bgClass: 'bg-brand-blue/10',
  },
  {
    icon: <CloudRain size={32} />,
    title: 'Gutter Cleaning',
    description: 'Debris removal and downspout flushing to protect your home.',
    href: '#gutter-cleaning',
    color: 'brand-green',
    borderClass: 'border-brand-green/40 hover:border-brand-green',
    iconClass: 'text-brand-green',
    bgClass: 'bg-brand-green/10',
  },
  {
    icon: <Leaf size={32} />,
    title: 'Lawn & Landscaping',
    description: 'Grass cutting, edging, mulch, shrub trimming, and property cleanups.',
    href: '#lawn-landscaping',
    color: 'brand-green',
    borderClass: 'border-brand-green/40 hover:border-brand-green',
    iconClass: 'text-brand-green',
    bgClass: 'bg-brand-green/10',
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-heading text-brand-green text-sm uppercase tracking-widest mb-2">⚜ What We Do ⚜</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-white uppercase tracking-wide mb-3">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-blue to-brand-green mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <button
              key={service.title}
              onClick={() => document.querySelector(service.href)?.scrollIntoView({ behavior: 'smooth' })}
              className={`${service.bgClass} border-2 ${service.borderClass} rounded-lg p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-card group`}
            >
              <div className={`${service.iconClass} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                {service.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-white uppercase tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              <div className={`mt-4 font-heading text-xs font-bold ${service.iconClass} uppercase tracking-widest flex items-center gap-1`}>
                Learn More →
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
