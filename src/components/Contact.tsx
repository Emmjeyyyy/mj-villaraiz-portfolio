"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowUpRight, HiOutlineClipboard, HiCheck, HiOutlineEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TbMailOff } from "react-icons/tb";
import LiquidMetalBorder from "./LiquidMetalBorder";
import Button3D from "./Button3D";
import { config } from "../config";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("emjeywan@gmail.com");
    showToast("Email copied to clipboard");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate Limiting: Prevent multiple submissions within 1 hour
    const lastSubmission = localStorage.getItem("lastContactSubmit");
    if (lastSubmission) {
      const timeSince = Date.now() - parseInt(lastSubmission, 10);
      const oneHour = 60 * 60 * 1000;
      if (timeSince < oneHour) {
        showToast("You've already sent a message recently. Please try again later.");
        return;
      }
    }

    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Formspree - You can replace the ID after 'f/' with your own from formspree.io
      const response = await fetch("https://formspree.io/f/xdajvygo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToast("Message sent. Talk soon.");
        setFormData({ name: "", email: "", message: "", _gotcha: "" });
        localStorage.setItem("lastContactSubmit", Date.now().toString());
      } else {
        showToast("Error sending message. Try again.");
      }
    } catch (error) {
      showToast("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sfPro = '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif';

  return (
    <section id="contact" className="relative py-17 px-10 overflow-hidden bg-black selection:bg-white selection:text-black border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/2 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-start">

          {/* Left Side: Branding & Links */}
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-bold leading-none mb-2">
                <span className="text-[55px] md:text-[80px] -ml-1 md:-ml-1.5 block" style={{ fontFamily: sfPro }}>LET'S</span>
                <span className="text-[65px] md:text-[110px] -ml-1 md:-ml-1.5 block" style={{ fontFamily: sfPro, WebkitTextStroke: '1.5px white', color: 'transparent' }}>CONNECT</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col border-t border-white/5"
            >
              <ChannelLink
                leftIcon={<HiOutlineEnvelope />}
                type="EMAIL"
                name="emjeywan@gmail.com"
                href="mailto:emjeywan@gmail.com"
                onClick={handleCopyEmail}
                icon={<HiOutlineClipboard className="text-xl" />}
              />
              <ChannelLink
                leftIcon={<FaGithub />}
                type="GITHUB"
                name="@Emmjeyyyy"
                href="https://github.com/Emmjeyyyy"
                icon={<HiOutlineArrowUpRight className="text-xl" />}
              />
              <ChannelLink
                leftIcon={<FaLinkedin />}
                type="LINKEDIN"
                name="MJ Vinz Carlos Villaraiz"
                href="https://www.linkedin.com/in/mj-vinz-carlos-villaraiz-01bb60322/"
                icon={<HiOutlineArrowUpRight className="text-xl" />}
              />
              <ChannelLink
                leftIcon={<FaInstagram />}
                type="INSTAGRAM"
                name="@emmmmjeyyyyy"
                href="https://www.instagram.com/emmmmjeyyyyy/"
                icon={<HiOutlineArrowUpRight className="text-xl" />}
              />
            </motion.div>

          </div>

          {/* Right Side: Message Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative">
              {/* Bottom Pedestal */}
              <div
                className="absolute inset-0 bg-[#0e0e0eff] translate-y-3"
                style={{ borderRadius: '24px' }}
              />

              {/* Top Face */}
              <div
                className="relative p-[2px] overflow-hidden"
                style={{
                  borderRadius: '24px',
                  background: 'linear-gradient(to bottom, #FFFFFF 0%, #cbd5e1 40%, #FFFFFF 50%, #94a3b8 60%, #475569 100%)'
                }}
              >
                <div
                  className="w-full h-full p-10 md:p-12 relative overflow-hidden"
                  style={{
                    borderRadius: '22px',
                    background: 'linear-gradient(180deg, #181818 0%, #080808 100%)'
                  }}
                >
                  {/* Glossy Overlay */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/3 to-transparent pointer-events-none" />

                  {config.acceptingMessages === 1 ? (
                    <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                      {/* Honeypot field to trick bots */}
                      <input
                        type="text"
                        name="_gotcha"
                        style={{ display: "none" }}
                        value={formData._gotcha}
                        onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="group relative">
                        <span className="block font-mono text-[9px] text-white/60 tracking-[0.3em] uppercase mb-1">Name</span>
                        <input
                          type="text"
                          placeholder="YOUR NAME"
                          className="w-full bg-transparent py-2 text-sm text-white focus:outline-none transition-colors placeholder:text-white/10 tracking-widest font-mono"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />
                        <div className="absolute bottom-0 left-0 h-px bg-white w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>

                      <div className="group relative">
                        <span className="block font-mono text-[9px] text-white/60 tracking-[0.3em] uppercase mb-1">Email</span>
                        <input
                          type="email"
                          placeholder="YOUR EMAIL"
                          className="w-full bg-transparent py-2 text-sm text-white focus:outline-none transition-colors placeholder:text-white/10 tracking-widest font-mono"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />
                        <div className="absolute bottom-0 left-0 h-px bg-white w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>

                      <div className="group relative">
                        <span className="block font-mono text-[9px] text-white/60 tracking-[0.3em] uppercase mb-1">Message</span>
                        <textarea
                          placeholder="YOUR MESSAGE"
                          className="w-full bg-transparent py-2 text-sm text-white focus:outline-none transition-colors placeholder:text-white/10 tracking-widest font-mono resize-none h-32"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />
                        <div className="absolute bottom-0 left-0 h-px bg-white w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>

                      <div className="pt-4">
                        <Button3D
                          label={isSubmitting ? "Sending..." : "Send Message"}
                          type="submit"
                          size="lg"
                          className="w-full"
                          elevation={2}
                          pressInset={5.5}
                          radius={14}
                          motion={160}
                          surfaceColor="#181818"
                          sideColor="#161616ff"
                          textColor="#e5e7eb"
                          borderWidth={3}
                          glareOpacity={0.075}
                          disabled={isSubmitting}
                        />
                      </div>
                    </form>
                  ) : (
                    <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[400px] space-y-6">
                      <svg width="0" height="0" className="absolute">
                        <linearGradient id="metallic-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" />
                          <stop offset="40%" stopColor="#cbd5e1" />
                          <stop offset="50%" stopColor="#FFFFFF" />
                          <stop offset="60%" stopColor="#94a3b8" />
                          <stop offset="100%" stopColor="#475569" />
                        </linearGradient>
                      </svg>

                      <TbMailOff
                        className="text-5xl drop-shadow-md"
                        style={{ stroke: "url(#metallic-grad)" }}
                      />

                      <p
                        className="font-mono text-sm tracking-widest text-center uppercase font-bold drop-shadow-md"
                        style={{
                          background: 'linear-gradient(to bottom, #FFFFFF 0%, #cbd5e1 40%, #FFFFFF 50%, #94a3b8 60%, #475569 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        Currently not accepting messages...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ y: 50, x: 20, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            exit={{ y: 20, x: 20, opacity: 0 }}
            className="fixed bottom-12 right-12 z-1000 bg-white text-black px-8 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-4 shadow-[0_0_50px_rgba(255,255,255,0.1)] rounded-lg"
          >
            <HiCheck className="text-base" />
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ChannelLink({ leftIcon, type, name, href, onClick, icon }: {
  leftIcon: React.ReactNode;
  type: string;
  name: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={onClick ? undefined : "_blank"}
      rel={onClick ? undefined : "noopener noreferrer"}
      className="group relative flex items-center justify-between py-8 px-4 border-b border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-white/2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

      <div className="relative z-10 flex items-center gap-6 md:gap-12">
        <div className="text-white text-3xl w-12 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-300">
          {leftIcon}
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-mono text-[9px] text-white/40 tracking-[0.3em] uppercase">
            {type}
          </span>
          <span className="text-lg md:text-xl font-medium text-white/70 group-hover:text-white transition-colors duration-300">
            {name}
          </span>
        </div>
      </div>

      <div className="relative z-10 text-white/10 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
    </a>
  );
}
