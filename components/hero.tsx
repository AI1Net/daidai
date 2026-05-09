"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/bg/stadium.jpg"
            alt="stadium"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/90" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-blueMain/20 blur-[120px] rounded-full z-0" />

      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-redMain/20 blur-[120px] rounded-full z-0" />

      {/* Main Content */}
      <div className="w-full container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-32 pb-20">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-6 border border-white/30">
            <div className="w-2 h-2 bg-greenMain rounded-full animate-pulse" />

            <span className="text-sm font-semibold">
              WORLD CUP MEME ENERGY
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl leading-[0.95] mb-6">
            THE SONGS{" "}
            <span className="text-redMain">OF THE.</span>

            <br />

            WORLD'S{" "}
            <span className="text-blueMain">UNITED.</span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-black/70 max-w-xl mb-10 mx-auto lg:mx-0">
            DAI DAI is a football-powered meme movement combining
            crypto culture, internet virality, and global fan energy
            into one unstoppable community.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
            <button className="bg-blueMain text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
              BUY $DAIDAI
            </button>

            <button className="border-2 border-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all">
              JOIN COMMUNITY
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center lg:justify-start gap-5 text-2xl">
            <a
              href="#"
              className="hover:text-blueMain transition-all hover:scale-110"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="#"
              className="hover:text-indigo-500 transition-all hover:scale-110"
            >
              <FaDiscord />
            </a>

            <a
              href="#"
              className="hover:text-sky-500 transition-all hover:scale-110"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="hover:text-black transition-all hover:scale-110"
            >
              <FaTiktok />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Glow */}
          <div className="absolute w-[500px] h-[500px] bg-blueMain/20 blur-[120px] rounded-full" />

          {/* Floating Mascot */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px]"
          >
            <Image
              src="/logos/logo1.png"
              alt="DAI DAI mascot"
              fill
              priority
              className="object-contain drop-shadow-[0_0_40px_rgba(0,71,255,0.35)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}