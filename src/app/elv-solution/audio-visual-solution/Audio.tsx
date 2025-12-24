"use client";
import Image from "next/image";
import React from "react";
import Navbar from "@/app/component/Navbar";
import { motion } from "framer-motion";
import { Code, Target, Zap, Headphones, Users, Award } from "lucide-react";

export default function Audio() {
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
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
    viewport: { once: true, margin: "-100px" },
  };

  const cardVariant = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
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
                Enhancing Collaboration with Advanced AV Solutions in Dubai
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
                Welcome to Brightelv, your trusted provider of comprehensive
                audio-visual solutions in Dubai. We bring the power of seamless
                connectivity and clear communication to businesses,
                organizations, and venues throughout the UAE. As a leading AV
                solutions provider, we're committed to delivering customized,
                cutting-edge technology that enhances your communication and
                collaboration experiences.
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
                    alt="Audio-visual installation"
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
                alt="Audio-visual installation"
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
            Why choose us for Audio visual
            <span className="text-blue-900"> solutions</span>
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
                className="relative aspect-[16/10] bg-gray-900 overflow-hidden rounded-lg shadow-2xl"
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
                  Design and Integration
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
                  Our expert team collaborates with you to design and integrate
                  custom audio-video systems tailored to your unique needs and
                  budget. At Brightelv, we deliver end-to-end AV solutions for
                  conference rooms, boardrooms, classrooms, and large
                  auditoriums — ensuring clear communication, seamless
                  presentations, and enhanced audience engagement.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.6,
                  }}
                  className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed"
                >
                  From system design and professional installation to
                  maintenance, support, and user training, we handle every stage
                  with precision. Equipped with high-quality AV products such as
                  displays, video walls, projectors, cables, racks, and mounting
                  solutions, we ensure reliable performance and long-lasting
                  results.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* AV SOLUTIONS & SERVICES SECTION */}
        <motion.section
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2, margin: "-100px" }}
          className="bg-white text-black py-8 md:py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                className="lg:order-1"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.3,
                  }}
                  className="text-lg md:text-xl lg:text-xl font-semibold text-gray-900 mt-2 mb-3 md:mb-4"
                >
                  Our AV Solutions & Services
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.4,
                  }}
                  className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed"
                >
                  Our solutions are built to scale, integrate with existing
                  infrastructures, and meet the security and reliability
                  requirements of modern businesses. We offer a comprehensive
                  range of AV solutions, including system design and
                  integration, installation services, maintenance and support,
                  equipment rentals, and training and consultation.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="grid gap-2 sm:grid-cols-2 lg:order-1"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 0.5,
                    }}
                    className="p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-all duration-300 group cursor-default"
                  >
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors text-sm md:text-sm">
                      System Design
                    </h4>
                    <p className="text-gray-700 text-[12px] leading-snug">
                      Consultation, CAD layouts, and custom system architecture.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 0.6,
                    }}
                    className="p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-all duration-300 group cursor-default"
                  >
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors text-sm md:text-sm">
                      Installation & Cabling
                    </h4>
                    <p className="text-gray-700 text-[12px] leading-snug">
                      Professional installation and precise device setup.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 0.7,
                    }}
                    className="p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-all duration-300 group cursor-default"
                  >
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors text-sm md:text-sm">
                      Control Systems
                    </h4>
                    <p className="text-gray-700 text-[12px] leading-snug">
                      Room automation and AV equipment training.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 0.8,
                    }}
                    className="p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-all duration-300 group cursor-default"
                  >
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors text-sm md:text-sm">
                      Maintenance & Support
                    </h4>
                    <p className="text-gray-700 text-[12px] leading-snug">
                      Service contracts, remote support, and regular check-ups.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.1, 0.25, 1],
                  opacity: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className="relative aspect-[16/11] bg-gray-900 overflow-hidden rounded-2xl shadow-2xl lg:order-2 min-h-[260px] md:min-h-[340px] lg:min-h-[400px]"
              >
                <Image
                  src="/images/audio/audio.jpg"
                  alt="Professional audio visual solutions"
                  fill
                  className="object-cover hover:scale-105 transition-all duration-700 ease-out"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* PORTFOLIO SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2,
                }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2"
              >
                Audio<span className="text-blue-900"> solutions</span>
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

            {/* Top row: 3 cards */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            >
              {/* Card 1 */}
              <motion.div
                variants={cardVariant}
                className="bg-white shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src="/images/portfolio/bag.jpg"
                  alt="The Ultimate Theme"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    The Ultimate Theme
                  </h3>
                  <span className="text-xs text-gray-400 tracking-widest mb-3 uppercase">
                    Featured Projects
                  </span>
                  <p className="text-gray-600 text-sm flex-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus quis nunc urna. Maecenas id dolor at libero
                    accumsan facilisis…
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={cardVariant}
                className="bg-white shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src="/images/portfolio/folder.jpg"
                  alt="New Collaboration"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    New Collaboration
                  </h3>
                  <span className="text-xs text-gray-400 tracking-widest mb-3 uppercase">
                    Featured Projects
                  </span>
                  <p className="text-gray-600 text-sm flex-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus quis nunc urna. Maecenas id dolor at libero
                    accumsan facilisis…
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={cardVariant}
                className="bg-white shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src="/images/portfolio/identity.jpg"
                  alt="Brand Identity"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Brand Identity
                  </h3>
                  <span className="text-xs text-gray-400 tracking-widest mb-3 uppercase">
                    Featured Projects
                  </span>
                  <p className="text-gray-600 text-sm flex-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus quis nunc urna. Maecenas id dolor at libero
                    accumsan facilisis…
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom row: 1 card centered */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex justify-center"
            >
              <div className="bg-white shadow-md overflow-hidden flex flex-col w-full md:w-1/3">
                <img
                  src="/images/portfolio/speaker.jpg"
                  alt="Speaker Innovation"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Speaker Innovation
                  </h3>
                  <span className="text-xs text-gray-400 tracking-widest mb-3 uppercase">
                    Featured Projects
                  </span>
                  <p className="text-gray-600 text-sm flex-1">
                    Pioneering the latest in speaker technology for immersive
                    audio experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* SPLIT CALLOUT SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="w-full flex flex-col md:flex-row min-h-screen">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full md:w-1/2 h-64 md:h-screen relative overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1518176258769-f227c798150e?w=800&h=1200&fit=crop&q=80"
                alt="Dramatic black and white landscape"
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full md:w-1/2 bg-blue-900 flex items-center justify-center p-8 md:p-16 md:h-screen"
            >
              <div className="max-w-md text-center space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="text-blue-200 text-sm tracking-wider uppercase font-medium"
                >
                  Integrate with Expert AV Solutions
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="text-white text-4xl md:text-5xl font-bold leading-tight"
                >
                  Let's Work Together
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="text-blue-100 text-lg leading-relaxed"
                >
                  Are you interested in implementing advanced audio-visual
                  technology solutions? Let's start the conversation and
                  transform the way you communicate and collaborate with
                  cutting-edge AV systems.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform shadow-lg"
                >
                  Connect With Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
