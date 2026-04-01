import { Users, Package, Star, TrendingUp, Award, Globe } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Users,
    value: '50,000+',
    label: 'Active Users',
    description: 'Creators & professionals trust DigiTools daily',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    id: 2,
    icon: Package,
    value: '120+',
    label: 'Digital Tools',
    description: 'Premium tools across every creative category',
    color: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    id: 3,
    icon: Star,
    value: '4.9 / 5',
    label: 'Average Rating',
    description: 'Based on 2,300+ verified customer reviews',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
  {
    id: 4,
    icon: TrendingUp,
    value: '3x',
    label: 'Productivity Boost',
    description: 'Users report 3x faster output using our tools',
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: 5,
    icon: Award,
    value: '35+',
    label: 'Industry Awards',
    description: 'Recognized by leading tech and design communities',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    iconColor: 'text-pink-500',
  },
  {
    id: 6,
    icon: Globe,
    value: '150+',
    label: 'Countries Reached',
    description: 'DigiTools is used across 6 continents worldwide',
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    iconColor: 'text-sky-500',
  },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
            Platform Metrics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Trusted by Thousands{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Real numbers that reflect the impact DigiTools has on creators, marketers, and businesses every day.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bg} rounded-xl mb-4`}>
                  <Icon size={22} className={stat.iconColor} />
                </div>

                {/* Value */}
                <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-base font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {stat.description}
                </p>

                {/* Subtle background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-14 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-violet-200">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
              Ready to join 50,000+ happy users?
            </h3>
            <p className="text-violet-200 text-sm">
              Start for free — no credit card required.
            </p>
          </div>
          <a
            href="#products"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-700 font-semibold rounded-xl hover:bg-violet-50 transition-colors duration-200 shadow-md"
          >
            Browse All Tools →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
