"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const tokenomics = [
  {
    title: "Liquidity",
    percent: 95,
    color: "#22c55e",
  },
  {
    title: "Team",
    percent: 2,
    color: "#3b82f6",
  },
  {
    title: "Marketing",
    percent: 3,
    color: "#ef4444",
  },
]

export default function Tokenomics() {
  const radius = 55

  return (
    <section
      id="tokenomics"
      className="relative overflow-hidden bg-white py-28 text-black"
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-white" />

      {/* decorations */}
      <div className="absolute top-10 left-10 text-4xl opacity-20">⚽</div>
      <div className="absolute bottom-10 right-10 text-4xl opacity-20">⭐</div>

      <div className="container-custom px-6 relative z-10">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-black">
            TOKENOMICS
          </h2>

          <p className="text-black/60 mt-4 max-w-2xl mx-auto">
            Built for culture, football energy, and meme domination.
          </p>
        </motion.div>

        {/* ================= PREMIUM TOKEN INFO ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-20 p-8 rounded-3xl bg-white border shadow-xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-blue-50 opacity-60" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

            {/* TEXT */}
            <div className="space-y-2">
              <h3 className="text-4xl font-black">DAIDAI</h3>

              <p>TICKER: <b>$DAI</b></p>
              <p>NETWORK: <b>ETH</b></p>
              <p>TOTAL SUPPLY: <b>26,000,000,000</b></p>

              <p>
                LIQUIDITY:{" "}
                <span className="text-green-600 font-bold">
                  🔥 BURNED COMPLETELY
                </span>
              </p>

              <p>TAX: <b>BUY 0% / SELL 0%</b></p>

              {/* tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Community Driven
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  Football Culture
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  Meme Engine
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative w-full h-[220px]"
            >
              <Image
                src="/logos/ball.png"
                alt="DAIDAI"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ================= CIRCULAR TOKENOMICS ================= */}
        <div className="grid lg:grid-cols-3 gap-12 justify-items-center">

          {tokenomics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              {/* CIRCLE */}
              <div className="relative w-[140px] h-[140px]">

                <svg className="w-full h-full -rotate-90">
                  {/* bg circle */}
                  <circle
                    cx="70"
                    cy="70"
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth="10"
                    fill="none"
                  />

                  {/* progress */}
                  <motion.circle
                    cx="70"
                    cy="70"
                    r={radius}
                    stroke={item.color}
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * radius}
                    initial={{
                      strokeDashoffset: 2 * Math.PI * radius,
                    }}
                    whileInView={{
                      strokeDashoffset:
                        2 * Math.PI * radius -
                        (item.percent / 100) *
                          2 *
                          Math.PI *
                          radius,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.2,
                    }}
                  />
                </svg>

                {/* center text */}
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-xl font-black">
                    {item.percent}%
                  </span>
                  <span className="text-xs text-black/60">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* ARROW DETAIL */}
              <div className="mt-4 flex items-center gap-2 text-sm text-black/60">
                <span>Allocation</span>
                <span className="text-black">→</span>
                <span className="font-bold text-black">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}

        </div>

        {/* ================= IMAGE SECTION ================= */}
        <div className="mt-20 flex justify-center">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative w-[320px] h-[320px]"
          >
            <Image
              src="/mascot/mascot2.png"
              alt="ball"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* ================= DISCLAIMER ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-5 rounded-2xl bg-yellow-50 border border-yellow-300 text-center"
        >
          ⚠️ THIS PROJECT IS NOT LAUNCHED YET — CHECK COMMUNITY OR SOCIAL MEDIA FOR UPDATES ⚠️
        </motion.div>

      </div>
    </section>
  )
}