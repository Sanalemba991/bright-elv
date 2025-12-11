"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!agreed) {
      alert("Please agree to the Terms and Privacy Policy");
      return;
    }
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Message sent successfully!");
  };

  const entrance = {
    initial: { opacity: 0, y: 16, scale: 0.995 },
    inView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number] }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={entrance.initial}
            whileInView={entrance.inView}
            transition={entrance.transition}
            viewport={{ once: true, amount: 0.18 }}
            className="bg-gray-100 p-6 lg:p-8 rounded-lg shadow-sm"
          >
            {/* Address Section */}
            <div className="mb-8">
              <h2 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-3">
                ADDRESS
              </h2>
              <div className="h-px w-10 bg-blue-900 mb-4"></div>
              <p className="text-gray-800 text-base mb-0">Quinta do Paral,</p>
              <p className="text-gray-800 text-base mb-3">Apartado 31 P, 7960-131</p>
            </div>

            {/* Contacts Section */}
            <div className="mb-8">
              <h2 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-3">
                CONTACTS
              </h2>
              <div className="h-px w-10 bg-blue-900 mb-4"></div>
              <div className="mb-3">
                <p className="text-gray-800 text-sm font-medium">+351 284 441 620</p>
                <p className="text-gray-600 text-xs">National fixed network call</p>
              </div>
              <div>
                <p className="text-gray-800 text-sm font-medium">+351 963 831 891</p>
                <p className="text-gray-600 text-xs">National mobile network call</p>
              </div>
            </div>

            {/* Email Section */}
            <div className="mb-8">
              <h2 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-3">
                EMAIL
              </h2>
              <div className="h-px w-10 bg-blue-900 mb-4"></div>
              <a
                href="mailto:loja@quintadoparal.com"
                className="text-gray-800 text-base hover:text-blue-900 transition-colors"
              >
                loja@quintadoparal.com
              </a>
            </div>

            {/* Follow Us Section */}
            <div>
              <h2 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-3">
                FOLLOW US
              </h2>
              <div className="h-px w-10 bg-blue-900 mb-4"></div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-600 hover:text-blue-900 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.2c0-2.2 1.3-3.4 3.2-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/351963831891?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.5 3.5A11 11 0 103.7 20.3L2 22l1.7-.5A11 11 0 0020.5 3.5zm-8.4 15.1c-1.8 0-3.5-.5-5-1.5l-.4-.3-3.1.8.8-3.1-.3-.4A7.9 7.9 0 0111.1 6.9c4.5 0 8.1 3.6 8.1 8.1 0 4.4-3.6 8-8.1 8zM17 14.4c-.2-.1-1.1-.6-1.2-.7-.2-.1-.3-.1-.5.1-.2.3-.7.7-.8.8-.2.1-.4.1-.7 0-1.1-.6-2-1.4-2.8-2.5-.2-.3 0-.5.1-.6.1-.2.2-.4.3-.5.1-.1.1-.3 0-.5-.1-.3-.7-1.6-1-2.1-.3-.5-.6-.4-.8-.4-.2 0-.5 0-.8 0-.3 0-.7.1-1 .1-.3 0-.6.2-.8.6-.2.4-.8 1.4-.8 3 0 1.6 1.6 3.2 1.8 3.4.2.2 3.1 4.6 7.8 4.6 4.7 0 4.8-3.1 4.8-3.4 0-.3-.2-.5-.4-.6z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-blue-900 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 9.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={entrance.initial}
            whileInView={entrance.inView}
            transition={{ ...entrance.transition, delay: 0.08 }}
            viewport={{ once: true, amount: 0.18 }}
            className="bg-white p-6 lg:p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2">
              CONTACT US
            </h2>
            <p className="text-gray-700 mb-6 text-sm">
              Thank you for your interest in Quinta do Paral. If you have any questions, please fill out the form below and we'll get back to you shortly.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm text-black placeholder-gray-500 placeholder-opacity-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm text-black placeholder-gray-500 placeholder-opacity-100"
                  placeholder="+351 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm text-black placeholder-gray-500 placeholder-opacity-100"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm text-black placeholder-gray-500 placeholder-opacity-100"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm text-black placeholder-gray-500 placeholder-opacity-100"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agree"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 text-blue-900 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor="agree" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                  I agree to the{" "}
                  <a href="/terms" className="text-blue-900 hover:text-blue-700 underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-blue-900 hover:text-blue-700 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-3 rounded text-sm font-semibold tracking-wider hover:bg-gray-800 active:bg-gray-950 transition-colors duration-200"
              >
                SUBMIT MESSAGE
              </button>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={entrance.initial}
          whileInView={entrance.inView}
          transition={{ ...entrance.transition, delay: 0.16 }}
          viewport={{ once: true, amount: 0.18 }}
          className="mt-12"
        >
          <div className="w-full h-96 overflow-hidden rounded-lg shadow-md bg-gray-200">
            <iframe
              title="Quinta do Paral — location"
              src="https://www.google.com/maps?q=Quinta%20do%20Paral%20Apartado%2031%20P%207960-131&z=15&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}