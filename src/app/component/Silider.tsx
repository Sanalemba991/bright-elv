"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Define the type for our image data
interface ImageItem {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  imageUrl: string;
  link: string;
  large?: boolean;
}

// Single Image Card Component
const ImageCard = ({ item }: { item: ImageItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <div
          className="relative overflow-hidden bg-white transition-all duration-300 group h-[220px] md:h-[260px] lg:h-[300px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image */}
          <div className="relative w-full h-full">
            <motion.img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-6 text-white">
              <div className="mb-1">
                <span className="text-[10px] md:text-xs font-medium tracking-wider uppercase text-white/85">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1 leading-snug max-w-xl">
                {item.title}
              </h3>

              <p className="text-white/85 text-xs md:text-sm font-light max-w-md mb-2">
                {item.subtitle}
              </p>

              {/* Learn More */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-flex items-center gap-1.5 text-white font-medium text-xs md:text-sm">
                  Learn More
                  <motion.svg
                    className="w-3.5 h-3.5 md:w-4 md:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </span>
              </motion.div>
            </div>
          </div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </a>
    </motion.div>
  );
};

// Main Page Component
export default function Slider() {
  const imageData: ImageItem[] = [
    {
      id: 1,
      title: "HUAWEI nova 14 Pro",
      subtitle: "Pro Your Portrait",
      tag: "PRODUCT",
      imageUrl:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "https://consumer.huawei.com/en/phones/nova14-pro/",
      large: true,
    },
    {
      id: 2,
      title:
        "GAC Group: Enabling Intelligent, Autonomous Driving with an AI Data Lake",
      subtitle: "SUCCESS STORY",
      tag: "SUCCESS STORY",
      imageUrl:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "https://www.gac-group.com/innovation/ai-data-lake",
      large: false,
    },
    {
      id: 3,
      title: "Smart Home Ecosystem",
      subtitle: "Seamless Connectivity Across All Devices",
      tag: "INNOVATION",
      imageUrl:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "https://example.com/smart-home",
      large: false,
    },
    {
      id: 4,
      title: "Cloud Computing Solutions",
      subtitle: "Scalable Infrastructure for Modern Businesses",
      tag: "TECHNOLOGY",
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "https://example.com/cloud-solutions",
      large: true,
    },
  ];

  return (
    <main className="min-h-screen bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-6 lg:mb-8"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
            What's New
          </h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-blue-900 mx-auto"
          ></motion.div>
        </motion.header>

        {/* Image Grid - asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
          {imageData.map((item) => (
            <div
              key={item.id}
              className={item.large ? "lg:col-span-2" : "lg:col-span-1"}
            >
              <ImageCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}