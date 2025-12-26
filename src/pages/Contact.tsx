import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@digitalsolutions.com',
      link: 'mailto:hello@digitalsolutions.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Business St, Tech City, TC 12345',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', link: '#' },
    { icon: Twitter, label: 'Twitter', link: '#' },
    { icon: Linkedin, label: 'LinkedIn', link: '#' },
    { icon: Instagram, label: 'Instagram', link: '#' },
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
              Get in <span className="text-primary-600">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cream-300"
            >
              Have a project in mind? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-cream mb-6">
                  Contact Information
                </h2>
                <p className="text-cream-300 mb-8">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.link}
                      className="flex items-start gap-4 group p-4 rounded-lg backdrop-blur-sm bg-white/[0.02] hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600/30 to-primary-600/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-600/20 transition-all duration-300">
                        <info.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-cream mb-1">
                          {info.label}
                        </p>
                        <p className="text-cream-300 group-hover:text-primary-600 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 className="font-semibold text-cream mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.link}
                        aria-label={social.label}
                        className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-cream hover:bg-primary-600 hover:text-white transition-all duration-300"
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-lg bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 rounded-xl p-8 shadow-2xl shadow-primary-600/10">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-cream mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 text-cream rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all placeholder-cream-500"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-cream mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 text-cream rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all placeholder-cream-500"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Service Interest Dropdown */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-cream mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 text-cream rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Custom Website Design</option>
                    <option value="web-development">
                      Responsive Web Development
                    </option>
                    <option value="ecommerce">E-commerce Solutions</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-cream mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 text-cream rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all resize-none placeholder-cream-500"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-700 h-96 rounded-xl overflow-hidden">
            {/* Placeholder for map - you can integrate Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-cream-400">Map Integration Area</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
