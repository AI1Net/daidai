"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,71,255,0.18),transparent_60%)] pointer-events-none" />

      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-red-500 via-blue-500 to-green-500" />

      {/* Glow Effects */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-500/10 blur-3xl" />

      <div className="container-custom relative z-10 px-6 pt-24 pb-10">

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-16 border-b border-white/10 pb-16 md:grid-cols-2 xl:grid-cols-3">

          {/* ================= BRAND ================= */}
          <div>
            <div className="flex items-center gap-4 mb-6">

              <div className="relative w-16 h-16 shrink-0">
                <Image
                  src="/logos/ball.png"
                  alt="DAIDAI"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-3xl font-black leading-none">
                  DAI DAI
                </h2>

                <p className="text-sm text-white/50 tracking-[0.2em] mt-1">
                  One World One Song
                </p>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed max-w-sm mb-8">
              The World meme ecosystem powered by internet culture,
              community energy, and global football vibes.
            </p>

            {/* Socials */}
            <div className="flex gap-4">

              <a
                href="https://t.me/DaiDai_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#229ED9] transition-all duration-300 flex items-center justify-center text-lg"
              >
                <FaTelegramPlane />
              </a>

              <a
                href="https://x.com/DaiDai_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-lg"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://tiktok.com/@daidai_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-pink-500 transition-all duration-300 flex items-center justify-center text-lg"
              >
                <FaTiktok />
              </a>

            </div>
          </div>

          {/* ================= EXPLORE ================= */}
          <div>
            <h3 className="text-2xl font-black mb-6">
              EXPLORE
            </h3>

            <ul className="space-y-4 text-white/60">

              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-all"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#tokenomics"
                  className="hover:text-white transition-all"
                >
                  Tokenomics
                </Link>
              </li>

              <li>
                <Link
                  href="#roadmap"
                  className="hover:text-white transition-all"
                >
                  Roadmap
                </Link>
              </li>

              <li>
                <Link
                  href="#community"
                  className="hover:text-white transition-all"
                >
                  Community
                </Link>
              </li>

              <li>
              <Link
                href="/DAIDAI-Whitepaper.pdf"
                target="_blank"
                className="hover:text-white transition-all"
              >
                Whitepaper
              </Link>
              </li>

            </ul>
          </div>

          {/* ================= CTA + MASCOT ================= */}
          <div className="relative">

            <h3 className="text-2xl font-black mb-6">
              JOIN THE MOVEMENT
            </h3>

            <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
              Enter the stadium of memes, football culture,
              and community-powered chaos.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">

              <a
                href="https://t.me/DaiDai_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-all"
              >
                JOIN TELEGRAM
              </a>

              <a
                href="https://x.com/DaiDai_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all"
              >
                FOLLOW X
              </a>

            </div>

            {/* Mascot */}
            <div className="relative w-[180px] h-[180px] mx-auto lg:mx-0 animate-float">

              <Image
                src="/mascot/ball.png"
                alt="DAIDAI mascot"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              />

            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-5 text-sm text-white/40">

          <p className="text-center lg:text-left">
            © 2026 DAI DAI. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">

            <Link
              href="#"
              className="hover:text-white transition-all"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-white transition-all"
            >
              Terms of Service
            </Link>

            <Link
              href="#"
              className="hover:text-white transition-all"
            >
              Disclaimer
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}