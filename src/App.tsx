import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Header />
          <About />
          <Blog />
          <Services />
          <Contact />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;