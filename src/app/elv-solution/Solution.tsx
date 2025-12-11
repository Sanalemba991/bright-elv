"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { Variants } from "framer-motion";
export default function ELVSolutions() {
  // Refs for all sections
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });

  const solutionsRef = useRef(null);
  const solutionsInView = useInView(solutionsRef, { once: true, amount: 0.3 });

  // Animation variants for solutions section
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for team section
  const teamContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const teamItemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Main Content */}
      <main className="w-full py-16 px-4 md:px-8 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section ref={heroRef} className="w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Comprehensive <span className="text-blue-900">ELV</span> Solutions
            <br />
            for Modern Infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-3 text-sm"
          >
            Extra Low Voltage (ELV) systems form the backbone of modern buildings,
            providing essential services like security, communication, and data
            transmission. Our comprehensive ELV solutions ensure seamless integration
            and optimal performance.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-sm"
          >
            From CCTV systems to structured cabling, we deliver cutting-edge
            technology solutions tailored to residential, commercial, and
            industrial needs across the UAE and beyond.
          </motion.p>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="mt-20">
          <motion.div
            variants={teamContainerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Feature Card 1 */}
            <motion.div
              variants={teamItemVariants}
              className="bg-white p-6 shadow-lg transition-shadow duration-300"
            >
              <div className="mb-5">
                <span className="text-3xl font-bold text-blue-900">01</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Security Systems
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Advanced CCTV and access control solutions for comprehensive
                security management.
              </p>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              variants={teamItemVariants}
              className="bg-white p-6 shadow-lg transition-shadow duration-300"
            >
              <div className="mb-5">
                <span className="text-3xl font-bold text-blue-900">02</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Communication Networks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reliable PABX and structured cabling for seamless business
                communications.
              </p>
            </motion.div>

            {/* Feature Card 3 - Dark Background */}
            <motion.div
              variants={teamItemVariants}
              className="bg-blue-900 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-5">
                <span className="text-3xl font-bold text-white">03</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Audio Visual Integration
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professional AV systems for conferences, entertainment, and
                digital signage.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Solutions Section */}
        <section ref={solutionsRef} className="mt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={solutionsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {/* ROW 1: 2 IMAGES (Left-Top + Left-Bottom) + TEXT DATA (Right) */}

            {/* Left Column - Image 1 */}
            <motion.div
              variants={itemVariants}
              className="relative group overflow-hidden"
            >
              <div className="relative h-[180px] bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=250&fit=crop&auto=format"
                  alt="CCTV System"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Left Column - Image 2 */}
            <motion.div
              variants={itemVariants}
              className="relative group overflow-hidden"
            >
              <div className="relative h-[180px] bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=250&fit=crop&auto=format"
                  alt="Network Cabling"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right Column - Text Data */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-start bg-gray-50 p-6 rounded-sm"
            >
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-3">
                CCTV INSTALLATION
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Professional CCTV system installation for residential and
                commercial properties with high-definition cameras and
                advanced monitoring.
              </p>
              <NextLink
                href="/elv-solution/cctv-installation"
                className="inline-block text-gray-600 text-xs font-semibold uppercase tracking-wide hover:text-blue-600 transition-colors group"
              >
                View Solution{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </NextLink>
            </motion.div>

            {/* ROW 2: TEXT DATA (Left) + 2 IMAGES (Right-Top + Right-Bottom) */}

            {/* Left Column - Text Data */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-start bg-gray-50 p-6 rounded-sm"
            >
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-3">
                CCTV MAINTENANCE
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Regular maintenance and support services to keep your CCTV
                systems running at peak performance with timely inspections
                and repairs.
              </p>
              <NextLink
                href="/elv-solution/cctv-maintenance"
                className="inline-block text-gray-600 text-xs font-semibold uppercase tracking-wide hover:text-blue-600 transition-colors group"
              >
                View Solution{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </NextLink>
            </motion.div>

            {/* Right Column - Image 1 */}
            <motion.div
              variants={itemVariants}
              className="relative group overflow-hidden"
            >
              <div className="relative h-[180px] bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=250&fit=crop&auto=format"
                  alt="PABX System"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right Column - Image 2 */}
            <motion.div
              variants={itemVariants}
              className="relative group overflow-hidden"
            >
              <div className="relative h-[180px] bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&h=250&fit=crop&auto=format"
                  alt="Audio Visual Setup"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Center - Service Section */}
            <motion.div
              variants={itemVariants}
              className="relative group overflow-hidden"
            >
              <div className="relative h-[180px] bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=250&fit=crop&auto=format"
                  alt="Structured Cabling"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right Column - Text Data */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-start bg-gray-50 p-6 rounded-sm"
            >
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-3">
                STRUCTURE CABLING
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                High-quality structured cabling solutions for modern network
                infrastructure, including Cat6, Cat6A, and fiber optic
                installations.
              </p>
              <NextLink
                href="/elv-solution/structure-cabling"
                className="inline-block text-gray-600 text-xs font-semibold uppercase tracking-wide hover:text-blue-600 transition-colors group"
              >
                View Solution{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </NextLink>
            </motion.div>

            {/* Left Column - Image 2 */}
            <motion.div
              variants={itemVariants}
              className="relative group overflow-hidden"
            >
              <div className="relative h-[180px] bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=250&fit=crop&auto=format"
                  alt="ELV Equipment"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative group flex flex-col items-start justify-start bg-white p-6 rounded-sm"
            >
              {/* Large Heading */}
              <h1 className="text-5xl font-bold text-black mb-4">ELV</h1>

              {/* Links */}
              <div className="flex space-x-4">
                <NextLink
                  href="/customised-solution"
                  className="text-sm font-medium text-black hover:underline"
                >
                  • CUSTOMISED SOLUTIONS
                </NextLink>
                <NextLink
                  href="/contact"
                  className="text-sm font-medium text-black hover:underline"
                >
                  • CONTACT US
                </NextLink>
              </div>

              {/* Circular Element - Positioned in top-right */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-black rounded-full"></div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative group overflow-hidden"
            >
              <div className="relative h-[180px] bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=250&fit=crop&auto=format"
                  alt="Communication System"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-start bg-gray-50 p-6 rounded-sm"
            >
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-3">
                PABX SYSTEMS
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Professional Private Automatic Branch Exchange systems for
                efficient and scalable business communications with advanced
                features.
              </p>
              <NextLink
                href="/elv-solution/pabx"
                className="inline-block text-gray-600 text-xs font-semibold uppercase tracking-wide hover:text-blue-600 transition-colors group"
              >
                View Solution{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </NextLink>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}