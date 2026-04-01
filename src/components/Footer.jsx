import { Zap, ArrowRight } from 'lucide-react';

// Inline SVG icons for social platforms (not available in this lucide-react version)
const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const footerLinks = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Templates', 'Integrations'],
  },
  {
    heading: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'Help Center', 'Community', 'Contact'],
  },
];

const socialLinks = [
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: XIcon, label: 'X (Twitter)', href: '#' },
];

const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-600 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-violet-200 text-base sm:text-lg mb-8">
            Join thousands of professionals who are already using DigiTools to work smarter.
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-700 font-semibold rounded-xl hover:bg-violet-50 transition-all duration-200 shadow-md hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Explore Products <ArrowRight size={16} />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              View Pricing
            </a>
          </div>
          <p className="text-violet-300 text-xs mt-6">
            14-day free trial &nbsp;•&nbsp; No credit card required &nbsp;•&nbsp; Cancel anytime
          </p>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* Brand Column */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <span className="text-xl font-extrabold text-white tracking-tight">DigiTools</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 bg-gray-800 hover:bg-violet-600 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 group text-gray-400 hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-violet-400 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              © 2026 DigiTools. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-gray-600">
              <a href="#" className="hover:text-violet-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-violet-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-violet-400 transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
