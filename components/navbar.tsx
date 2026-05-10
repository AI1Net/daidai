"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="container-custom px-6 py-5">
        <div className="glass rounded-full border border-white/30 px-8 py-4 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <div className="flex items-center gap-3">
            <Image
              src="/logos/daidai.png"
              alt="DAI DAI Logo"
              width={100}
              height={100}
              className="object-contain"
            />

          </div>

          {/* ================= MENU ================= */}
          <div className="hidden lg:flex items-center gap-8 font-semibold">
            <Link href="#">HOME</Link>
            <Link href="#about">ABOUT</Link>
            <Link href="#tokenomics">TOKENOMICS</Link>
            <Link href="#roadmap">ROADMAP</Link>
            <Link href="#faq">FAQ</Link>
          </div>


        </div>
      </div>
    </motion.nav>
  );
}