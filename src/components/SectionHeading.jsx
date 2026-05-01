import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children }) => {
  return (
    <div className="flex items-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
        {children}
      </h2>
      <div className="ml-6 h-[1px] w-full bg-slate-700 max-w-xs" />
    </div>
  );
};

export default SectionHeading;
