import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal';

interface Service {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: "Digital Strategy",
      description: "Comprehensive digital strategy development tailored to your business goals and target audience.",
      price: "250,000",
      icon: "🎯",
      features: [
        "Market Research & Analysis",
        "Competitor Benchmarking",
        "Channel Strategy",
        "KPI Definition",
        "ROI Forecasting"
      ]
    },
    {
      title: "Social Media Management",
      description: "Full-service social media management to boost your brand's online presence and engagement.",
      price: "180,000",
      icon: "📱",
      features: [
        "Content Creation & Curation",
        "Community Management",
        "Paid Social Campaigns",
        "Analytics & Reporting",
        "Influencer Partnerships"
      ]
    },
    {
      title: "SEO & Content Marketing",
      description: "Data-driven SEO and content strategies to improve your search rankings and organic traffic.",
      price: "200,000",
      icon: "📊",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Content Strategy",
        "Link Building",
        "Performance Tracking"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Elevate your brand with our comprehensive digital marketing solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-purple-500/50 transition duration-300"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <div className="mb-6">
                <span className="text-2xl font-bold text-white">¥{service.price}</span>
                <span className="text-gray-400 ml-2">/ month</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition duration-300 uppercase tracking-wider text-sm"
                onClick={() => setSelectedService(service)}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        {...(selectedService || {
          title: '',
          description: '',
          price: '',
          features: [],
          icon: ''
        })}
      />
    </section>
  );
};

export default Services;