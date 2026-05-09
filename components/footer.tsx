"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaTelegramPlane,
  FaDiscord,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white pt-24 pb-10">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,71,255,0.25),transparent_60%)] pointer-events-none" />

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-redMain via-blueMain to-greenMain" />

      <div className="container-custom relative z-10 px-6">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-4 gap-14 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/logos/logo-icon.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-4xl leading-none">DAI DAI</h2>
                <p className="text-white/50 text-sm">CRYPTO MEME</p>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed max-w-sm mb-8">
              The football meme ecosystem powered by internet culture,
              community energy, and global stadium vibes.
            </p>

            {/* Socials */}
            <div className="flex gap-4 text-xl">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-blueMain transition-all flex items-center justify-center"
              >
                <FaTelegramPlane />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-black transition-all flex items-center justify-center"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-indigo-500 transition-all flex items-center justify-center"
              >
                <FaDiscord />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-pink-500 transition-all flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-500 transition-all flex items-center justify-center"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-2xl mb-6">EXPLORE</h3>

            <ul className="space-y-4 text-white/60 font-medium">
              <li>
                <Link href="#about" className="hover:text-white transition-all">
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
                <Link href="#" className="hover:text-white transition-all">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition-all">
                  Whitepaper
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-2xl mb-6">RESOURCES</h3>

            <ul className="space-y-4 text-white/60 font-medium">
              <li>
                <Link href="#" className="hover:text-white transition-all">
                  Brand Kit
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition-all">
                  Audit
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition-all">
                  Listings
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition-all">
                  Partnerships
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition-all">
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl mb-6">STAY UPDATED</h3>

            <p className="text-white/60 mb-6">
              Join the movement and receive updates, memes, and launch news.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  rounded-full
                  bg-white/10
                  border border-white/10
                  px-6
                  py-4
                  outline-none
                  focus:border-blueMain
                  transition-all
                "
              />

              <button
                className="
                  w-full
                  rounded-full
                  bg-blueMain
                  py-4
                  font-bold
                  hover:scale-105
                  hover:bg-blue-600
                  transition-all
                "
              >
                SUBSCRIBE
              </button>
            </div>

            {/* Mascot */}
            <div className="relative w-28 h-28 mt-10 ml-auto animate-float">
            <div className="relative w-[400px] h-[400px]">
            <Image
              src="/mascot/ball.png"
              alt="ball"
              fill
              className="object-contain"
            />
            </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© 2026 DAI DAI. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-all">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white transition-all">
              Terms of Service
            </Link>

            <Link href="#" className="hover:text-white transition-all">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}