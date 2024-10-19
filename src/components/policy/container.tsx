"use client";

import React from "react";
import { motion } from "framer-motion";

type Section = {
  sections: { title: string; content: string }[];
};

const PrivacyPolicy: React.FC<Section> = ({ sections }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      </motion.div>
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <p className="whitespace-pre-wrap">{section.content}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
