import { Leaf } from 'lucide-react';

const services = [
  {
    name: 'Grass Cutting',
    description: 'Regular mowing to keep your lawn looking neat, healthy, and well-maintained all season long.',
  },
  {
    name: 'Edging',
    description: 'Crisp, clean edges along driveways, sidewalks, and garden beds for a polished, professional look.',
  },
  {
    name: 'Mulch Installation',
    description: 'Fresh mulch application to suppress weeds, retain moisture, and enhance your landscape\'s appearance.',
  },
  {
    name: 'Shrub Trimming',
    description: 'Expert shaping and trimming of bushes and shrubs to maintain healthy growth and curb appeal.',
  },
  {
    name: 'Property Cleanups',
    description: 'Seasonal and one-time cleanups to remove debris, leaves, and overgrowth from your entire property.',
  },
];

export default function LawnLandscapingSection() {
  return (
    <section id="lawn-landscaping" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <img
              src="/assets/generated/icon-lawn.dim_128x128.png"
              alt="Lawn & Landscaping"
              className="w-16 h-16 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-white uppercase tracking-wide mb-3">
            Lawn &amp; Landscaping
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-16 bg-brand-green" />
            <Leaf className="text-brand-green" size={20} />
            <div className="h-0.5 w-16 bg-brand-green" />
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Complete lawn care and landscaping services to keep your property looking its best year-round.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          {/* CTA Card */}
          <div className="bg-brand-green/10 border-2 border-brand-green/50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-brand-green/20 transition-all duration-300">
            <Leaf className="text-brand-green mb-3" size={32} />
            <p className="font-heading text-brand-white font-semibold uppercase tracking-wide mb-3">
              Transform your yard today
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-heading text-sm font-bold bg-brand-green text-brand-white px-5 py-2 rounded hover:bg-brand-green/80 transition-colors uppercase tracking-wide"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
