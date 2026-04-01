import { ArrowRight, Play } from 'lucide-react';

const Banner = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-indigo-50 to-white py-16 md:py-24"
    >
      {/* Background decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-200 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              #1 Digital Tools Platform
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Power Up Your{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                Digital Workflow
              </span>{' '}
              Today
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Discover premium digital tools for writing, design, automation, and marketing — all in one platform. Save time, boost productivity, and grow your business faster.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-600 transition-all duration-200 shadow-lg hover:shadow-violet-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                Explore Products
                <ArrowRight size={18} />
              </a>

              <a
                href="#steps"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50 transition-all duration-200 shadow-sm hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <div className="w-7 h-7 bg-violet-100 rounded-full flex items-center justify-center">
                  <Play size={12} className="text-violet-600 ml-0.5" />
                </div>
                How It Works
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400 text-base">★★★★★</span>
                <span className="font-medium text-gray-600">4.9/5</span>
                <span>from 2,300+ reviews</span>
              </div>
              <span className="hidden sm:inline text-gray-300">|</span>
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-gray-600">50,000+</span>
                <span>happy users</span>
              </div>
            </div>
          </div>

          {/* Right: Banner Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg">
              {/* Floating card 1 */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-10 animate-bounce-slow border border-gray-100">
                <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center text-lg">✅</div>
                <div>
                  <div className="text-xs font-bold text-gray-800">New sale!</div>
                  <div className="text-xs text-gray-400">AI Writing Pro</div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-10 border border-gray-100">
                <div className="w-9 h-9 bg-violet-100 rounded-xl flex items-center justify-center text-lg">🚀</div>
                <div>
                  <div className="text-xs font-bold text-gray-800">50K+ Users</div>
                  <div className="text-xs text-gray-400">and growing</div>
                </div>
              </div>

              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/60 ring-1 ring-violet-100">
                <img
                  src="/assets/banner.png"
                  alt="DigiTools Platform Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
