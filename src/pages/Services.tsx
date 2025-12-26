import { Link } from 'react-router-dom';
import { Code, Palette, ShoppingCart, Wrench, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Custom Website Design',
      description:
        'Transform your brand vision into stunning digital experiences with our custom website design services.',
      benefits: [
        'Tailored visuals that match your brand identity',
        'User-centric design approach',
        'Responsive across all devices',
        'Modern, conversion-focused layouts',
      ],
    },
    {
      icon: Code,
      title: 'Responsive Web Development',
      description:
        'Build robust, scalable web applications that deliver seamless performance on any device or platform.',
      benefits: [
        'Mobile-first development approach',
        'Cross-browser compatibility',
        'Fast loading speeds',
        'SEO-optimized code structure',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description:
        'Launch powerful online stores with secure payment integration and inventory management.',
      benefits: [
        'Secure payment gateway integration',
        'Inventory & order management',
        'Customer account features',
        'Analytics & reporting tools',
      ],
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description:
        'Keep your website running smoothly with our comprehensive maintenance and support services.',
      benefits: [
        'Regular security updates',
        'Performance optimization',
        '24/7 technical support',
        'Backup & disaster recovery',
      ],
    },
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-cream mb-6"
            >
              Our <span className="text-primary-600">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cream-300"
            >
              Comprehensive digital solutions designed to elevate your business
              and drive sustainable growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="relative group backdrop-blur-lg bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 rounded-xl p-8 hover:shadow-2xl hover:shadow-primary-600/20 transition-all duration-500 hover:border-primary-600/50 overflow-hidden"
              >
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary-600/30 to-primary-600/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary-600/20">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>

                {/* Title & Description */}
                <div className="relative z-10">
                <h3 className="text-2xl font-bold text-cream mb-4">
                  {service.title}
                </h3>
                <p className="text-cream-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-cream mb-3">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-cream-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className="inline-block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  Request Service
                </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-cream mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-cream-300 mb-8">
            Every business is unique. Let's discuss how we can create a
            tailored solution for your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}