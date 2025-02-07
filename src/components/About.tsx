import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Innovate. Create. <span className="text-purple-400">Elevate.</span></h2>
          <p className="text-gray-400 mb-6">
            PIXEL/FLOW is a cutting-edge digital marketing agency that combines creativity with data-driven strategies to deliver exceptional results. We specialize in transforming brands into digital powerhouses.
          </p>
          <p className="text-gray-400 mb-8">
            Our team of experts brings together years of experience in digital marketing, design, and technology to create campaigns that not only look stunning but also drive real business growth.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300 uppercase tracking-wider text-sm"
          >
            Learn More
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Digital Marketing Team"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 blur-lg opacity-20 -z-10 transform rotate-3"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;