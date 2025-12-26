import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

type FilterType = 'All' | 'Web Design' | 'Mobile Apps' | 'Branding';

interface Project {
  id: number;
  title: string;
  category: FilterType;
  description: string;
  image: string;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Design',
      description: 'Modern online store with seamless checkout experience',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Fitness Mobile App',
      category: 'Mobile Apps',
      description: 'Workout tracking app with social features',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Corporate Branding',
      category: 'Branding',
      description: 'Complete brand identity for tech startup',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'Web Design',
      description: 'Beautiful menu showcase with online ordering',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Banking Mobile App',
      category: 'Mobile Apps',
      description: 'Secure financial management application',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Fashion Brand Identity',
      category: 'Branding',
      description: 'Luxury fashion brand visual identity',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
    },
  ];

  const filters: FilterType[] = ['All', 'Web Design', 'Mobile Apps', 'Branding'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
              Our <span className="text-primary-600">Portfolio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cream-300"
            >
              Explore our latest projects and success stories across various
              industries and platforms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/50'
                    : 'backdrop-blur-lg bg-white/5 border border-white/10 text-cream hover:bg-white/10 hover:border-primary-600/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="group relative backdrop-blur-lg bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary-600/20 transition-all duration-500 hover:border-primary-600/50"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4">
                      {project.description}
                    </p>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-semibold w-fit">
                      View Case Study
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Project Info (Visible by Default) */}
                <div className="p-6 backdrop-blur-sm bg-dark-900/50">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary-600/30 to-primary-600/10 backdrop-blur-sm text-primary-600 text-sm font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-cream">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-cream-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-cream mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-cream-300 mb-8">
            Let's create something amazing together. Contact us to discuss your
            project requirements.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg shadow-lg"
          >
            Start a Project
          </a>
        </div>
      </section>
    </main>
  );
}