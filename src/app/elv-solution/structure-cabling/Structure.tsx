"use client";
import Image from "next/image";
import React from "react";
import Navbar from "@/app/component/Navbar";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Variants, Transition } from "framer-motion";
import {
  Code,
  Target,
  Zap,
  Headphones,
  Users,
  Award,
  TrendingUp,
  Shield,
  DollarSign,
} from "lucide-react";

export default function Structure() {
  // Refs for scroll-triggered animations
  const section01Ref = useRef(null);
  const section02Ref = useRef(null);
  const section03Ref = useRef(null);
  const section04Ref = useRef(null);

  // Check if sections are in view
  const isSection01InView = useInView(section01Ref, {
    once: true,
    margin: "-100px",
  });
  const isSection02InView = useInView(section02Ref, {
    once: true,
    margin: "-100px",
  });
  const isSection03InView = useInView(section03Ref, {
    once: true,
    margin: "-100px",
  });
  const isSection04InView = useInView(section04Ref, {
    once: true,
    margin: "-100px",
  });

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expertise and Experience",
      description:
        "Our team of highly skilled professionals has extensive experience in designing and implementing structured cabling systems, ensuring optimal performance and reliability for your network infrastructure.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Customized Solutions",
      description:
        "We provide tailored structured cabling solutions that are specifically designed to meet the unique needs of your business, allowing for flexibility and scalability as your organization grows.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality and Compliance",
      description:
        "We use high-quality materials and adhere to industry standards and best practices, ensuring that your cabling infrastructure is both robust and compliant with safety regulations.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Comprehensive Support",
      description:
        "From initial consultation and design to installation and ongoing maintenance, Brightelv Dubai offers comprehensive support throughout the entire lifecycle of your structured cabling system, ensuring seamless connectivity and minimal downtime.",
    },
  ];

  const cards = [
    {
      icon: Code,
      title: "Sense Portfolio",
      description:
        "Supports industry-standard data formats, computational workflows, and collaborative objectives and tools.",
    },
    {
      icon: Target,
      title: "Evaluate Portfolio",
      description:
        "Identify high-value opportunities, assess risks, and prioritize investments with comprehensive analysis and decision support.",
    },
    {
      icon: Zap,
      title: "Effect Portfolio",
      description:
        "Transform concepts into tangible and measurable results with comprehensive execution and implementation strategies.",
    },
    {
      icon: Headphones,
      title: "Mission Support",
      description:
        "Enable operational excellence and organizational success with dedicated implementation assistance.",
    },
    {
      icon: Users,
      title: "Solution Support",
      description:
        "Provide comprehensive technical innovation with expert guidance and custom implementation design.",
    },
    {
      icon: Award,
      title: "Excellence Program",
      description:
        "Drive continuous improvement through systematic evaluation and strategic optimization frameworks.",
    },
  ];

  // Enhanced animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const transitionProps: Transition = {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
  };

  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <div className="bg-black font-sans">
        <section className="relative h-auto md:h-[550px] lg:h-[650px] xl:h-[780px] overflow-visible">
          <div className="absolute inset-0 flex">
            <div className="w-full md:w-[45%] bg-black"></div>
            <div className="hidden md:block w-[55%] bg-black-100"></div>
          </div>

          <div className="relative h-full max-w-7xl mx-auto flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full md:w-[64%] text-white p-6 md:p-6 lg:p-6 xl:p-8 z-10 py-12 md:py-0"
            >
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight max-w-2xl"
              >
                Structured Cabling Solutions by Brightelv Dubai
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="mt-4 md:mt-3 lg:mt-3 xl:mt-4 text-gray-400 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg max-w-lg leading-relaxed"
              >
                Reliable structured cabling solutions in Dubai, ensuring
                seamless connectivity and scalable network performance.{" "}
              </motion.p>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 md:mt-4 lg:mt-4 xl:mt-6 inline-block bg-yellow-400 text-black font-semibold text-sm md:text-xs lg:text-sm xl:text-base px-6 md:px-3 lg:px-4 xl:px-4 py-2.5 md:py-1.5 lg:py-2 xl:py-2 rounded-full shadow-lg hover:bg-yellow-300 transition-colors"
              >
                Contact Us
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="hidden mr-9 md:block absolute right-0 top-[65%] -translate-y-1/2 md:w-[30%] lg:w-[32%] xl:w-[36%] md:h-[90%] lg:h-[92%] xl:h-[96%]"
            >
              <div className="relative w-full h-full">
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/elv.jpg"
                    alt="Structured cabling"
                    fill
                    className="object-cover object-bottom"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden w-full px-4 sm:px-6 lg:px-8 pb-8 bg-black"
          >
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/elv.jpg"
                alt="Structured cabling"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </section>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="mt-12 md:mt-32 lg:mt-56 font-sans">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-6 md:mb-8 lg:mb-8 px-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2"
          >
            Why choose Bright<span className="text-blue-900">elv</span> for
            structured cabling
          </motion.h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 48, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.4,
            }}
            className="h-1 bg-blue-900 mx-auto"
          ></motion.div>
        </motion.header>

        {/* DESIGN & INTEGRATION SECTION */}
        <motion.section
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2, margin: "-100px" }}
          className="bg-white text-black py-8 md:py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.1, 0.25, 1],
                  opacity: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className="relative aspect-[16/10] bg-gray-900 overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/OurCompanies.png"
                  alt="Professional presenting solutions"
                  fill
                  className="object-cover hover:scale-105 transition-all duration-700 ease-out"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.4,
                  }}
                  className="text-lg md:text-xl lg:text-xl font-semibold text-gray-900 mt-2 mb-3 md:mb-4"
                >
                  Enhancing Connectivity
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.5,
                  }}
                  className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed"
                >
                  Brightelv Dubai provides professional structured cabling
                  solutions designed to support reliable and high-performance
                  network connectivity. Our expert team ensures proper design,
                  installation, and maintenance of cabling systems, helping
                  businesses achieve seamless communication, scalability, and
                  long-term network efficiency.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial="initial"
          whileInView="whileInView"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-50 text-black py-20 md:py-28"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2,
              }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2"
            >
              Why choose Bright<span className="text-blue-900">elv</span> for
              structured cabling
            </motion.h2>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 48, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.4,
              }}
              className="h-1 bg-blue-900 mx-auto"
            ></motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.2, margin: "-100px" }}
              className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, idx) => {
                const isEven = idx % 2 === 0;
                const cardAnim = isEven ? fadeInLeft : fadeInRight;
                return (
                  <motion.div
                    key={idx}
                    variants={cardAnim}
                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`p-6  bg-white border border-gray-200 ${
                      idx === features.length - 1 && features.length % 3 === 1
                        ? "lg:col-start-2"
                        : ""
                    }`}
                  >
                    <div className="text-blue-900 mb-3">
                      {React.isValidElement(feature.icon)
                        ? React.cloneElement(
                            feature.icon as React.ReactElement<any>,
                            {
                              className: "w-8 h-8",
                            }
                          )
                        : feature.icon}
                    </div>
                    <h4 className="text-base font-semibold mb-2 text-black">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* IMPROVED SECTIONS 01-04 */}
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section 01 & Image - with Full Overlap */}
          <div className="relative" ref={section01Ref}>
            <div className="grid mt-2 grid-cols-1 lg:grid-cols-2 gap-0 mb-0">
              {/* Section 01 - Left with Text */}
              <motion.div
                className="bg-white p-8 lg:p-12 flex flex-col justify-start relative"
                variants={fadeInLeft}
                initial="hidden"
                animate={isSection01InView ? "visible" : "hidden"}
                transition={{ ...transitionProps, delay: 0.1 }}
              >
                <motion.div variants={staggerContainer}>
                  <motion.h2
                    className="text-5xl lg:text-6xl font-bold mb-3"
                    variants={fadeInUp}
                  >
                    01.
                  </motion.h2>
                  <motion.h3
                    className="text-base lg:text-lg font-semibold mb-4 uppercase tracking-wide"
                    variants={fadeInUp}
                  >
                    Expert Installation
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 text-xs lg:text-sm leading-relaxed mt-2"
                    variants={fadeInUp}
                  >
                    Installed to industry standards for secure and efficient
                  </motion.p>

                  <motion.p
                    className="text-gray-700 text-xs lg:text-sm leading-relaxed mt-2"
                    variants={fadeInUp}
                  >
                    networking.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>

            {/* Image - Full Width Overlap */}
            <motion.div
              className="absolute top-0 right-0 w-full lg:w-2/3 h-80 lg:h-96 z-2"
              variants={scaleIn}
              initial="hidden"
              animate={isSection01InView ? "visible" : "hidden"}
              transition={{ ...transitionProps, delay: 0.2 }}
            >
              <img
                src="/maintenance/main1.jpg"
                alt="Expertise and Experience"
                className="w-full h-75 object-cover"
              />
            </motion.div>
          </div>

          {/* Section 02 & 03 - with 02 Overlapping Both Images */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 mt-20 lg:mt-0">
            <motion.div
              className="bg-blue-500 text-white p-4 lg:p-6 relative z-10 lg:-mt-2 lg:-mb-16"
              ref={section02Ref}
              variants={fadeInUp}
              initial="hidden"
              animate={isSection02InView ? "visible" : "hidden"}
              transition={{ ...transitionProps, delay: 0.1 }}
            >
              <motion.div variants={staggerContainer}>
                <motion.h2
                  className="text-5xl lg:text-6xl font-bold mb-3"
                  variants={fadeInUp}
                >
                  02.
                </motion.h2>
                <motion.h3
                  className="text-base lg:text-lg font-semibold mb-4 uppercase tracking-wide"
                  variants={fadeInUp}
                >
                  Customized & Scalable
                </motion.h3>
                <motion.p
                  className="text-xs lg:text-sm leading-relaxed"
                  variants={fadeInUp}
                >
                  Solutions tailored to your specific business requirements,
                  designed for flexibility and seamless scalability as your
                  organization grows and technology evolves.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-white text-black p-8 lg:p-12 flex flex-col items-end"
              ref={section03Ref}
              variants={fadeInUp}
              initial="hidden"
              animate={isSection03InView ? "visible" : "hidden"}
              transition={{ ...transitionProps, delay: 0.1 }}
            >
              <motion.div variants={staggerContainer}>
                <motion.h2
                  className="text-5xl lg:text-6xl font-bold mb-3 text-right"
                  variants={fadeInUp}
                >
                  03.
                </motion.h2>
                <motion.h3
                  className="text-base lg:text-lg font-semibold mb-4 uppercase tracking-wide text-right"
                  variants={fadeInUp}
                >
                  Quality & Compliance
                </motion.h3>
                <motion.p
                  className="text-xs lg:text-sm leading-relaxed text-right"
                  variants={fadeInUp}
                >
                  Premium materials installed to global industry standards.{" "}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* FIXED Section 04 */}
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 mt-6 lg:grid-cols-[35%_65%] gap-0"
            ref={section04Ref}
          >
            {/* Text - Narrower Left Side */}
            <motion.div
              className="bg-white text-black w-full h-[75%] p-6 lg:p-10 flex flex-col justify-center"
              style={{ color: "black" }}
              variants={fadeInRight}
              initial="hidden"
              animate={isSection04InView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div variants={staggerContainer}>
                <motion.h2
                  className="text-5xl mt-7 lg:text-6xl font-bold mb-3"
                  style={{ color: "black" }}
                  variants={fadeInUp}
                >
                  04.
                </motion.h2>
                <motion.h3
                  className="text-base lg:text-lg  font-semibold mb-6 uppercase tracking-wide"
                  style={{ color: "black" }}
                  variants={fadeInUp}
                >
                  Complete Support
                </motion.h3>
                <motion.p
                  className="text-sm lg:text-base leading-relaxed"
                  style={{ color: "black" }}
                  variants={fadeInUp}
                >
                  From design to maintenance, ensuring smooth and uninterrupted
                  connectivity.{" "}
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Image - Wider Right Side */}
            <motion.div
              className="h-80 lg:h-[430px] overflow-hidden"
              variants={fadeInLeft}
              initial="hidden"
              animate={isSection04InView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img
                src="/maintenance/mian2.png"
                alt="Comprehensive Support"
                className="w-full h-80.5 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
