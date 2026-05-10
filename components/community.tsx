"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import {
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa"

import { FaXTwitter } from "react-icons/fa6"

export default function Community() {
  return (
    <section className="relative overflow-hidden py-24 bg-blueMain text-white">

      {/* ================= HAND DRAWN BACKGROUND ================= */}
      <div className="absolute inset-0 opacity-20">

        {/* sketch blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 border border-white/30 rounded-full blur-[2px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/20 rotate-12 blur-[1px]" />

        {/* doodle lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <path
            d="M0 100 Q300 50 600 120 T1200 100"
            stroke="white"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M100 300 Q500 200 900 350"
            stroke="white"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M200 500 Q600 400 1000 550"
            stroke="white"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* ================= TOP CURVE (FIXED) ================= */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-[120px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,80 C360,140 1080,0 1440,80 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* doodles */}
      <div className="absolute top-24 left-10 text-yellowMain text-6xl rotate-12">
        ✦
      </div>

      <div className="absolute bottom-16 right-10 text-redMain text-7xl -rotate-12">
        ★
      </div>

      <div className="absolute top-1/2 left-1/3 text-greenMain text-5xl">
        ✸
      </div>

      <div className="container-custom px-6 relative z-10 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="uppercase tracking-[6px] text-yellowMain font-bold mb-5">
            Join The Movement
          </p>

          <h2 className="text-5xl lg:text-7xl leading-none mb-6">
            JOIN THE
            <br />
            DAI DAI COMMUNITY
          </h2>

          <p className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            Football culture meets meme energy. Build the biggest internet movement together.
          </p>

        <div className="flex flex-wrap gap-4 mb-10">

          <a
            href="https://t.me/DaiDai_eth"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition inline-flex items-center justify-center"
          >
            JOIN TELEGRAM
          </a>

          <a
            href="https://x.com/DaiDai_eth"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition inline-flex items-center justify-center"
          >
            FOLLOW X
          </a>

        </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative flex justify-center"
        >
          {/* glow */}
          <div className="absolute w-[420px] h-[420px] bg-white/20 rounded-full blur-[120px]" />

          {/* floating ball */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 6, -6, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative w-[350px] h-[350px]"
          >
            <Image
              src="/mascot/ball.png"
              alt="ball"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* slogan */}
          <div className="absolute -bottom-6 right-0 text-right">
            <h3 className="text-4xl lg:text-6xl leading-none">
              ONE WORLD.<br />
              <span className="text-yellowMain">ONE SONG.</span><br />
              DAI DAI!
            </h3>
          </div>
        </motion.div>
      </div>

      {/* ================= BOTTOM CURVE (FIXED PROPERLY) ================= */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-[120px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            d="M0,40 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  )
}