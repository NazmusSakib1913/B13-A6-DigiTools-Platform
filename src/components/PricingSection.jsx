import { Check, Zap, Building2, Rocket } from 'lucide-react';

const plans = [
  {
    id: 1,
    icon: Zap,
    name: 'Starter',
    tagline: 'Perfect for getting started',
    price: 0,
    period: 'Month',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'border border-violet-300 text-violet-600 hover:bg-violet-50',
    popular: false,
  },
  {
    id: 2,
    icon: Rocket,
    name: 'Pro',
    tagline: 'Best for professionals',
    price: 29,
    period: 'Month',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    cta: 'Start Pro Trial',
    ctaStyle: 'bg-white text-violet-600 hover:bg-violet-50 font-bold',
    popular: true,
  },
  {
    id: 3,
    icon: Building2,
    name: 'Enterprise',
    tagline: 'For teams and businesses',
    price: 99,
    period: 'Month',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'border border-violet-300 text-violet-600 hover:bg-violet-50',
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Simple,{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              Transparent
            </span>{' '}
            Pricing
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-2xl shadow-violet-300 scale-105'
                    : 'bg-white border border-gray-150 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-amber-400 text-amber-900 text-xs font-bold rounded-full shadow-md">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                {/* Icon + Plan Name */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${plan.popular ? 'bg-white/20' : 'bg-violet-50'}`}>
                  <Icon size={22} className={plan.popular ? 'text-white' : 'text-violet-600'} />
                </div>

                <h3 className={`text-xl font-extrabold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-violet-200' : 'text-gray-500'}`}>
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="flex items-end gap-1 mb-6">
                  <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.popular ? 'text-violet-200' : 'text-gray-400'}`}>
                    /{plan.period}
                  </span>
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${plan.popular ? 'bg-white/20' : 'bg-gray-100'}`} />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-white/20' : 'bg-violet-50'}`}>
                        <Check size={12} className={plan.popular ? 'text-white' : 'text-violet-600'} />
                      </div>
                      <span className={plan.popular ? 'text-violet-100' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-10">
          All plans include a 14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
