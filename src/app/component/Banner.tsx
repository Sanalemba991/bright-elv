"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Banner() {
  const banner = {
    image: "/ban1.png",
    title: "Your Trusted ELV & Security Partner",
    subtitle: "Reliable Solutions Since 2023",
    description:
      "BrightElv delivers high-quality CCTV brackets, poles, and ELV accessories designed for durability, precision, and long-term performance across the Middle East.",
    cta: "Explore Products",
    ctaLink: "/products",
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const subtitleVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const descriptionVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const ctaVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="w-full relative">
      <div className="relative w-full h-screen min-h-[600px] bg-black overflow-hidden ">
        {/* Background Image with Fixed Positioning */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            className="h-full w-full "
            priority
            quality={100}
            sizes="100vw"
          />

          {/* Gradient overlays for better text visibility */}
        </motion.div>

        {/* Content Container */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-start justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="px-6 sm:px-10 md:px-16 lg:px-24 max-w-4xl">
            {/* Subtitle Badge */}
            <motion.div variants={subtitleVariants} className="mb-4">
              <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 text-xs uppercase tracking-wide font-medium">
                {banner.subtitle}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={titleVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-white leading-snug mb-6"
            >
              {banner.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={descriptionVariants}
              className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-10"
            >
              {banner.description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
