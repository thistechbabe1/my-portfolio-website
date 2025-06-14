import React from 'react';
import { motion } from 'framer-motion';
import { technologiesCategories } from '../lib/data';

const Technologies = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-accent-green mb-10">
        Technologies & Tools
      </h2>
      {technologiesCategories.map((categoryData, catIndex) => (
        <div key={catIndex} className="mb-12 last:mb-0">
          <h3 className="text-3xl font-semibold text-text-light mb-8 text-center sm:text-left">
            {categoryData.category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            {categoryData.items.map((tech, itemIndex) => (
              <motion.div
                key={itemIndex}
                className="flex flex-col items-center p-5 bg-dark-tertiary rounded-lg shadow-md
                           border border-dark-secondary // Base border
                           hover:border-accent-green hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] // Hover effects
                           transition-all duration-300 cursor-pointer" // Smooth transition and pointer cursor
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: itemIndex * 0.05 }} // Staggered animation
              >
                <div className="text-5xl text-accent-green mb-3">
                  {tech.icon}
                </div>
                <p className="text-lg font-medium text-text-light">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
