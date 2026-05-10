"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "TOKENOMICS", href: "#tokenomics" },
    { name: "ROADMAP", href: "#roadmap" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="container-custom py-5">

        {/* ================= NAVBAR ================= */}
        <div className="glass rounded-full border border-white/30 px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <div className="flex items-center gap-3 relative z-50">
            <Image
              src="/logos/daidai.png"
              alt="DAI DAI Logo"
              width={90}
              height={90}
              className="object-contain w-[70px] md:w-[90px] h-auto"
            />
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-8 font-semibold text-sm tracking-wide">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-green-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-50 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl"
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-4 glass border border-white/20 rounded-3xl p-6 backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-5 text-center font-semibold">

                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base tracking-wide hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}