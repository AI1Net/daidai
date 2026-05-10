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
            <div className="space-y-6">

              {/* TITLE */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold tracking-[0.2em]">
                  ⚽ MEME FOOTBALL TOKEN
                </div>

                <h3 className="text-5xl lg:text-6xl font-black mt-4 leading-none">
                  DAIDAI
                </h3>

                <p className="text-black/50 mt-2 text-lg">
                  The football meme engine built for global domination.
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4">

                {/* TICKER */}
                <div className="rounded-2xl border bg-gradient-to-br from-white to-green-50 p-4 shadow-sm">
                  <p className="text-xs text-black/50 mb-1 tracking-widest">
                    TICKER
                  </p>

                  <h4 className="text-2xl font-black text-green-600">
                    $DAIDAI
                  </h4>
                </div>

                {/* NETWORK */}
                <div className="rounded-2xl border bg-gradient-to-br from-white to-blue-50 p-4 shadow-sm">
                  <p className="text-xs text-black/50 mb-1 tracking-widest">
                    NETWORK
                  </p>

                  <h4 className="text-2xl font-black text-blue-600">
                    ETH
                  </h4>
                </div>

                {/* SUPPLY */}
                <div className="col-span-2 rounded-2xl border bg-gradient-to-r from-white to-neutral-50 p-5 shadow-sm">
                  <p className="text-xs text-black/50 mb-2 tracking-widest">
                    TOTAL SUPPLY
                  </p>

                  <div className="flex items-end gap-2 flex-wrap">
                    <span className="text-4xl font-black">
                      26B
                    </span>

                    <span className="text-black/50 pb-1">
                      tokens
                    </span>
                  </div>
                </div>

                {/* LIQUIDITY */}
                <div className="col-span-2 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-white p-5 shadow-sm relative overflow-hidden">

                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-400/10 rounded-full blur-3xl" />

                  <p className="text-xs text-green-700 mb-2 tracking-widest font-bold">
                    LIQUIDITY
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-3xl">
                      🔥
                    </span>

                    <div>
                      <h4 className="text-2xl font-black text-green-600">
                        BURNED
                      </h4>

                      <p className="text-sm text-black/60">
                        Completely locked forever
                      </p>
                    </div>
                  </div>
                </div>

                {/* TAX */}
                <div className="col-span-2 rounded-2xl border bg-gradient-to-r from-red-50 via-white to-blue-50 p-5 shadow-sm">

                  <p className="text-xs text-black/50 mb-3 tracking-widest">
                    TAX SYSTEM
                  </p>

                  <div className="flex gap-3">

                    <div className="flex-1 rounded-xl bg-green-100 p-4 text-center">
                      <p className="text-xs text-black/50 mb-1">
                        BUY TAX
                      </p>

                      <h4 className="text-3xl font-black text-green-600">
                        0%
                      </h4>
                    </div>

                    <div className="flex-1 rounded-xl bg-red-100 p-4 text-center">
                      <p className="text-xs text-black/50 mb-1">
                        SELL TAX
                      </p>

                      <h4 className="text-3xl font-black text-red-500">
                        0%
                      </h4>
                    </div>

                  </div>
                </div>

              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">

                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                  Community Driven
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                  Football Culture
                </span>

                <span className="px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold">
                  Meme Engine
                </span>

              </div>

            </div>

            {/* IMAGE */}
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative w-full h-[400px]"
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