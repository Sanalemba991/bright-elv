import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Variants } from 'framer-motion';
const ScrollSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-1 h-[600px]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Top Left - Title and Text */}
          <motion.div
            className="flex flex-col justify-center p-6 bg-white"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Gallery
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sample text. Click to select the text box. Click again or double click to start editing the text.
            </p>
          </motion.div>

          {/* Top Middle - White Architecture Image */}
          <motion.div
            className="relative overflow-hidden"
            variants={imageVariants}
          >
            <Image
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
              alt="Modern white architecture"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Column - Portrait (spans 2 rows) */}
          <motion.div
            className="relative overflow-hidden row-span-2"
            variants={imageVariants}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Portrait photography"
              fill
              className="object-cover grayscale"
            />
          </motion.div>

          {/* Bottom Left - Striped Building (spans 2 columns) */}
          <motion.div
            className="relative overflow-hidden col-span-2"
            variants={imageVariants}
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
              alt="Modern architecture building with lines"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollSection;