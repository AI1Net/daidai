"use client";

import { motion } from "framer-motion";
import {
  Flag,
  Users,
  Goal,
  Trophy,
  Globe2,
} from "lucide-react";

const roadmapData = [
  {
    id: "01",
    title: "KICK OFF",
    description:
      "Launch website, socials, community opening, and meme activation.",
    icon: Flag,
    color: "text-redMain",
    bg: "bg-redMain/10",
  },
  {
    id: "02",
    title: "TEAM BUILDING",
    description:
      "Expand partnerships, grow community, and viral meme campaigns.",
    icon: Users,
    color: "text-greenMain",
    bg: "bg-greenMain/10",
  },
  {
    id: "03",
    title: "GAME ON",
    description:
      "DEX launch, staking utilities, and ecosystem integrations.",
    icon: Goal,
    color: "text-blueMain",
    bg: "bg-blueMain/10",
  },
  {
    id: "04",
    title: "WORLD CUP",
    description:
      "Mass adoption, influencer campaigns, and CEX expansion.",
    icon: Trophy,
    color: "text-yellowMain",
    bg: "bg-yellowMain/10",
  },
  {
    id: "05",
    title: "LEGACY",
    description:
      "Build a permanent global football meme ecosystem.",
    icon: Globe2,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function TRoadmap() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-white section-padding"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-blueMain text-6xl">
          ✦
        </div>

        <div className="absolute bottom-20 right-20 text-redMain text-5xl">
          ★
        </div>

        <div className="absolute top-1/2 left-1/2 text-greenMain text-4xl">
          ✸
        </div>
      </div>

      <div className="container-custom px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-7xl mb-6">
            ROADMAP
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-black/70">
            The evolution of DAI DAI from internet meme energy
            into a worldwide football-powered crypto movement.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-1 bg-black/10" />

          <div className="grid lg:grid-cols-5 gap-10 relative">
            {roadmapData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border-4 border-white z-20" />

                  {/* Card */}
                  <div className="mt-10 border border-black/10 rounded-[32px] p-8 bg-white hover:-translate-y-3 transition-all duration-300 shadow-sm hover:shadow-2xl">
                    {/* Icon */}
                    <div
                      className={`w-20 h-20 rounded-3xl ${item.bg} flex items-center justify-center mb-6`}
                    >
                      <Icon
                        className={item.color}
                        size={38}
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* Phase */}
                    <div className="text-black/40 font-bold mb-2">
                      PHASE {item.id}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl leading-none mb-4">
                      {item.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-black/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}