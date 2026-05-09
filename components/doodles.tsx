"use client";

import { motion } from "framer-motion";

const doodles = [
  {
    id: 1,
    text: "★",
    color: "#0047ff",
    size: "text-4xl",
    top: "10%",
    left: "8%",
    rotate: "-12deg",
  },
  {
    id: 2,
    text: "✦",
    color: "#ff3131",
    size: "text-5xl",
    top: "20%",
    right: "12%",
    rotate: "20deg",
  },
  {
    id: 3,
    text: "➰",
    color: "#00c853",
    size: "text-5xl",
    top: "35%",
    left: "5%",
    rotate: "10deg",
  },
  {
    id: 4,
    text: "❤",
    color: "#ff3131",
    size: "text-4xl",
    bottom: "20%",
    left: "15%",
    rotate: "-15deg",
  },
  {
    id: 5,
    text: "⚽",
    color: "#0047ff",
    size: "text-5xl",
    top: "50%",
    right: "8%",
    rotate: "15deg",
  },
  {
    id: 6,
    text: "☻",
    color: "#00c853",
    size: "text-6xl",
    bottom: "12%",
    right: "10%",
    rotate: "-8deg",
  },
  {
    id: 7,
    text: "✺",
    color: "#ffd600",
    size: "text-5xl",
    top: "70%",
    left: "8%",
    rotate: "12deg",
  },
  {
    id: 8,
    text: "~",
    color: "#0047ff",
    size: "text-7xl",
    top: "15%",
    left: "45%",
    rotate: "-10deg",
  },
  {
    id: 9,
    text: "↗",
    color: "#ff3131",
    size: "text-5xl",
    bottom: "15%",
    right: "30%",
    rotate: "25deg",
  },
  {
    id: 10,
    text: "☺",
    color: "#00c853",
    size: "text-5xl",
    top: "80%",
    left: "50%",
    rotate: "-5deg",
  },
];

export default function Doodles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {doodles.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
            rotate: [
              item.rotate,
              `${parseInt(item.rotate) + 6}deg`,
              item.rotate,
            ],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute font-black select-none ${item.size}`}
          style={{
            color: item.color,
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            transform: `rotate(${item.rotate})`,
          }}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  );
}