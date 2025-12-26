import { Users, Target, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// Import tech logos
import reactLogo from '../assets/react.png';
import typescriptLogo from '../assets/typescript.png';
import laravelLogo from '../assets/Laravel-Logo.png';
import phpLogo from '../assets/php.png';
import jsLogo from '../assets/js.png';
import tailwindLogo from '../assets/Tailwind CSS.png';
import htmlLogo from '../assets/html-5.png';
import cssLogo from '../assets/css-3.png';

// Import developer images
import anjulaImage from '../assets/anjula.jpeg';
import bashithaImage from '../assets/bashitha.jpeg';

export default function About() {
  const stats = [
    { label: 'Tech Stack', value: 'Full Stack' },
    { label: 'Founded', value: '2025' },
    { label: 'Commitment', value: '100%' },
    { label: 'Support', value: '24/7' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description:
        'We are committed to delivering innovative solutions that help businesses achieve their digital transformation goals.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description:
        'Your success is our priority. We work closely with you to understand your needs and exceed expectations.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We maintain the highest standards of quality in every project, ensuring exceptional results every time.',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description:
        'We love what we do and it shows in our work. Our team is dedicated to creating amazing digital experiences.',
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
              About <span className="text-primary-600">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cream-300"
            >
              Two passionate Computer Science undergraduates from the University of Jaffna,
              bringing fresh, modern technical expertise to transform your digital vision into reality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-cream-300 text-lg leading-relaxed">
                <p>
                  Born from the Computer Science department at the University of Jaffna,
                  DigitalSolutions brings fresh, modern technical knowledge that traditional agencies lack.
                  We combine academic excellence with real-world business solutions.
                </p>
                <p>
                  As CS undergraduates, we specialize in both cutting-edge React for modern,
                  lightning-fast frontends and robust PHP/Laravel for enterprise-grade backends.
                  We offer the best of both worlds—the innovation of modern web technologies
                  and the reliability of proven frameworks.
                </p>
                <p>
                  Our unique position as students turned entrepreneurs means we stay on the
                  bleeding edge of technology while delivering practical, scalable solutions
                  that grow with your business.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-lg bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-2xl p-8 text-cream shadow-2xl shadow-primary-600/10">
                <h3 className="text-2xl font-bold mb-8">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-4xl font-bold mb-2">{stat.value}</div>
                      <div className="text-cream-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="relative group backdrop-blur-lg bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 p-6 rounded-xl hover:shadow-2xl hover:shadow-primary-600/20 transition-all duration-500 hover:border-primary-600/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600/30 to-primary-600/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-primary-600/20">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-cream mb-3">
                  {value.title}
                </h3>
                <p className="text-cream-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
              Meet the Founders
            </h2>
            <p className="text-xl text-cream-300">
              CS Undergraduates from University of Jaffna
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Anjula Nadeeshan */}
            <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent rounded-xl overflow-hidden border border-white/10 hover:shadow-2xl hover:shadow-primary-600/20 hover:border-primary-600/50 transition-all duration-500 group">
              <div className="relative h-80 overflow-hidden bg-dark-800">
                <img
                  src={anjulaImage}
                  alt="Anjula Nadeeshan"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-cream mb-2">
                  Anjula Nadeeshan
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  Co-Founder & Full Stack Developer
                </p>
                <p className="text-cream-300 text-sm">
                  React, TypeScript, Laravel
                </p>
              </div>
            </div>

            {/* Bashitha */}
            <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent rounded-xl overflow-hidden border border-white/10 hover:shadow-2xl hover:shadow-primary-600/20 hover:border-primary-600/50 transition-all duration-500 group">
              <div className="relative h-80 overflow-hidden bg-dark-800">
                <img
                  src={bashithaImage}
                  alt="Bashitha"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-cream mb-2">
                  Bashitha
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  Co-Founder & Full Stack Developer
                </p>
                <p className="text-cream-300 text-sm">
                  PHP, JavaScript, Backend Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
              Our Tech Stack
            </h2>
            <p className="text-xl text-cream-300">
              Modern technologies we use to build powerful web applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'React', category: 'Frontend Framework', desc: 'Modern component-based UI library', logo: reactLogo },
              { name: 'TypeScript', category: 'Language', desc: 'Type-safe JavaScript superset', logo: typescriptLogo },
              { name: 'Laravel', category: 'Backend Framework', desc: 'Enterprise PHP framework', logo: laravelLogo },
              { name: 'PHP', category: 'Backend Language', desc: 'Robust server-side scripting', logo: phpLogo },
              { name: 'JavaScript', category: 'Language', desc: 'Core web programming language', logo: jsLogo },
              { name: 'Tailwind CSS', category: 'Styling', desc: 'Utility-first CSS framework', logo: tailwindLogo },
              { name: 'HTML5', category: 'Markup', desc: 'Modern semantic markup', logo: htmlLogo },
              { name: 'CSS3', category: 'Styling', desc: 'Advanced styling capabilities', logo: cssLogo },
            ].map((tech) => (
              <div
                key={tech.name}
                className="backdrop-blur-lg bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent rounded-xl border border-white/10 p-6 hover:shadow-2xl hover:shadow-primary-600/20 hover:border-primary-600/50 transition-all duration-500 group"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-cream mb-2 group-hover:text-primary-600 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-primary-600 font-medium text-sm mb-3">
                    {tech.category}
                  </p>
                  <p className="text-cream-300 text-sm">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-cream mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-xl text-cream-300 mb-8">
            We're always looking for exciting new projects and partnerships.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-cream text-dark rounded-lg hover:bg-cream-400 transition-colors font-semibold text-lg shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
