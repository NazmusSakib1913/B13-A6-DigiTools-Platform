import { UserPlus, Package, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    number: '01',
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    id: 2,
    number: '02',
    icon: Package,
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    id: 3,
    number: '03',
    icon: Rocket,
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
  },
];

const StepsSection = () => {
  return (
    <section id="steps" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Get Started In{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              3 Steps
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-violet-200 via-indigo-300 to-violet-200 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center group z-10"
              >
                {/* Step number badge */}
                <div className="absolute top-5 right-5 w-9 h-9 bg-violet-600 text-white text-xs font-extrabold rounded-full flex items-center justify-center shadow-md shadow-violet-200">
                  {step.number}
                </div>

                {/* Icon circle */}
                <div className="w-20 h-20 bg-violet-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-violet-100 transition-colors duration-300 ring-4 ring-violet-100 group-hover:ring-violet-200">
                  <Icon
                    size={32}
                    className="text-violet-600 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>

                {/* Bottom indicator dot */}
                <div className="mt-6 w-2 h-2 bg-violet-400 rounded-full group-hover:bg-violet-600 transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-600 transition-all duration-200 shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 text-sm"
          >
            Get Started Free →
          </a>
          <p className="text-xs text-gray-400 mt-3">No credit card required · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
