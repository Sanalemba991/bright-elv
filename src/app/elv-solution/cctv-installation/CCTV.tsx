"use client";
import Image from "next/image";
import React from "react";
import Navbar from "@/app/component/Navbar";
import { motion } from "framer-motion";
import { Code, Target, Zap, Headphones, Users, Award } from "lucide-react";

import { TrendingUp, Shield, Clock } from "lucide-react";

export default function CCTV() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Drive Consistent Revenue Growth",
      description:
        "Boost sales by converting visitors into paying customers with a compact site designed for impact.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Establish Credibility",
      description:
        "Gain partner confidence with a professional, focused web presence.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Time",
      description:
        "Launch a proven, optimized website quickly and efficiently.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Scale with Funnels",
      description:
        "Use established strategies that keep your sales pipeline active.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Outperform Competitors",
      description: "Fast-loading, SEO-friendly pages that engage visitors.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Risk-Managed",
      description:
        "Measurable improvements in conversion rates within 90 days.",
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
                Secure Your Premises with Brightelv Advanced CCTV Installation
                Services in Dubai
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
                In today's world, security is paramount. BrightELV offers
                top-notch CCTV installation services in Dubai, safeguarding your
                properties around the clock with state-of-the-art surveillance
                systems. Our reliable systems provide real-time monitoring and
                recording, ensuring peace of mind against theft, vandalism, and
                unauthorized access.
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
            Why choose
            <span className="text-blue-900"> Brightelv</span> for CCTV
            installation
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
                  Expert Technicians
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
                  At Brightelv, our certified and experienced technicians are
                  dedicated to providing high-quality CCTV installation
                  services. Their expertise ensures that your system is
                  installed correctly and operates efficiently.
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
                  We leverage the latest advancements in CCTV technology,
                  offering features such as high-definition video, infrared
                  night vision, motion detection, and remote access. This
                  ensures comprehensive security for your property.
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
                  Why choose Brightelv for CCTV installation
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
                  As a leading CCTV supplier in Dubai, Brightelv caters to
                  diverse security needs for homes, offices, retail stores, and
                  industrial facilities. Our advanced CCTV solutions offer
                  comprehensive coverage and unmatched reliability.
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
                      Competitive Pricing
                    </h4>
                    <p className="text-gray-700 text-[12px] leading-snug">
                      Cost-effective solutions without compromising on quality.
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
                      Focus on Quality
                    </h4>
                    <p className="text-gray-700 text-[12px] leading-snug">
                      Highest standard systems for unparalleled security.
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
                      Latest Technology
                    </h4>
                    <p className="text-gray-700 text-[12px] leading-snug">
                      HD video, night vision, motion detection, remote access.
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
                      Regular maintenance and system upgrades for optimal
                      performance.
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
        <motion.section
          initial="initial"
          whileInView="whileInView"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-50 text-black py-12"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold mb-4 text-black"
            >
              LAUNCH A WEBSITE THAT POWERS YOUR STARTUP'S GROWTH
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-sm mb-8"
            >
              Unlock a high-converting, revenue-generating website that becomes
              your startup's most valuable asset.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariant}
                  className="p-4 rounded-md bg-white border border-gray-200 shadow-sm"
                >
                  <div className="text-orange-500 mb-2">{feature.icon}</div>
                  <h4 className="text-sm font-semibold mb-1 text-black">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-xs">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="mt-8 flex items-center justify-center"
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
                  Protect What Matters Most
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
                  Contact Us Today
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
                  Ready to enhance your security with Brightelv's advanced CCTV
                  installation services? Contact our expert team today to
                  discuss your security needs and get a customized solution
                  tailored to your requirements.
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
