import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, ShoppingCart, CheckCircle, Zap, HeadphonesIcon, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user experiences',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Powerful online stores that convert',
    },
  ];

  const benefits = [
    { icon: Zap, text: 'Fast Delivery' },
    { icon: HeadphonesIcon, text: '24/7 Support' },
    { icon: TrendingUp, text: 'Scalable Code' },
    { icon: CheckCircle, text: 'Quality Assured' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6"
              >
                Transforming Ideas into{' '}
                <span className="text-primary-600">Digital Reality</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-cream-300 mb-8 leading-relaxed"
              >
                We create innovative digital solutions that help businesses grow
                and succeed in the modern world.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-cream border-2 border-cream rounded-lg hover:bg-dark-700 transition-colors font-semibold text-lg"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </div>

            {/* Right Side - 3D Spline Object */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[400px] lg:h-[600px] overflow-hidden"
            >
              <iframe
                src="https://my.spline.design/genkubgreetingrobot-4fY0shl01VAZJNK7iXln9I4o/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="w-full h-full bg-transparent"
                title="3D Robot Animation"
              />
              {/* Overlay to hide Spline watermark */}
              <div className="absolute bottom-0 right-0 w-48 h-16 bg-dark-900 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-cream-300">
              Expert solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="relative group p-8 rounded-xl backdrop-blur-lg bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 hover:border-primary-600/50 hover:shadow-2xl hover:shadow-primary-600/20 transition-all duration-500 overflow-hidden"
              >
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600/30 to-primary-600/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-primary-600/20">
                    <service.icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-cream mb-3">
                    {service.title}
                  </h3>
                  <p className="text-cream-300">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-cream-300 mb-8">
                We combine technical expertise with creative innovation to
                deliver exceptional digital solutions that drive real results.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <span className="text-lg font-medium text-cream">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-lg bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-2xl p-8 text-cream shadow-2xl shadow-primary-600/10">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="mb-6 text-cream-200">
                  Let's discuss how we can help transform your business with
                  cutting-edge digital solutions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-cream-400" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-cream-400" />
                    <span>Tailored solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-cream-400" />
                    <span>Ongoing support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}