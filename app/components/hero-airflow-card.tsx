"use client";

import { motion } from "framer-motion";

export default function HeroAirflowCard() {
  const particles = [
    { top: "20%", left: "12%", delay: 0 },
    { top: "34%", left: "84%", delay: 0.35 },
    { top: "68%", left: "14%", delay: 0.7 },
    { top: "74%", left: "76%", delay: 1.1 },
    { top: "45%", left: "7%", delay: 1.45 },
    { top: "18%", left: "70%", delay: 1.8 },
  ];
  const techMarks = [
    { top: "12%", left: "34%" },
    { top: "22%", left: "64%" },
    { top: "50%", left: "90%" },
    { top: "70%", left: "60%" },
    { top: "82%", left: "26%" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{ scale: 1.02, rotateX: 4, rotateY: -4 }}
      className="relative mx-auto w-full max-w-[470px] [transform-style:preserve-3d] [perspective:1200px] sm:max-w-[530px] lg:ml-auto lg:translate-x-24"
    >
      <motion.svg
        viewBox="0 0 540 390"
        className="pointer-events-none absolute -left-[55%] top-[8%] z-[1] h-[84%] w-[120%] opacity-60"
        aria-hidden="true"
      >
        <motion.path
          d="M20 200 C120 160 190 186 275 175 C340 168 395 140 520 132"
          fill="none"
          stroke="rgba(122,181,255,0.45)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="7 8"
          animate={{ strokeDashoffset: [0, -60] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0 236 C95 212 178 232 254 224 C340 216 410 186 530 188"
          fill="none"
          stroke="rgba(164,208,255,0.35)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="5 9"
          animate={{ strokeDashoffset: [0, -80] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-blue-200/80 shadow-[0_0_12px_rgba(120,180,255,0.8)]"
          style={{ top: particle.top, left: particle.left }}
          animate={{ y: [0, -8, 0], opacity: [0.35, 1, 0.35], scale: [0.9, 1.1, 0.9] }}
          transition={{
            duration: 2.6,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative mx-auto flex h-[350px] w-full items-center justify-center sm:h-[390px]">
        {techMarks.map((mark) => (
          <div
            key={`${mark.top}-${mark.left}`}
            className="pointer-events-none absolute text-[10px] text-blue-100/35"
            style={{ top: mark.top, left: mark.left }}
          >
            +
          </div>
        ))}
        <motion.div
          className="absolute h-[295px] w-[295px] rounded-full border border-blue-200/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-[235px] w-[235px] rounded-full border border-blue-300/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-[178px] w-[178px] rounded-full border border-blue-100/35"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute h-[324px] w-[324px] rounded-full border border-blue-200/15"
          animate={{ rotate: -360, scale: [1, 1.02, 1] }}
          transition={{ rotate: { duration: 32, repeat: Infinity, ease: "linear" }, scale: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
        />
        <motion.div
          className="absolute h-[360px] w-[360px] rounded-full border border-blue-100/10"
          animate={{ rotate: 360, opacity: [0.15, 0.35, 0.15] }}
          transition={{ rotate: { duration: 46, repeat: Infinity, ease: "linear" }, opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        />
        <motion.div
          className="absolute h-[108px] w-[108px] rounded-full border border-blue-200/30"
          animate={{ scale: [1, 1.16, 1], opacity: [0.28, 0.6, 0.28] }}
          transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(130,190,255,0.2),rgba(130,190,255,0.04),transparent_74%)] blur-[2px]" />
        <div className="pointer-events-none absolute h-[230px] w-[230px] rounded-full bg-[radial-gradient(circle,rgba(188,220,255,0.17),transparent_68%)]" />

        <motion.svg
          viewBox="0 0 220 220"
          className="relative z-10 h-[255px] w-[255px] drop-shadow-[0_0_38px_rgba(120,180,255,0.7)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="turbineCore" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#7ab5ff" stopOpacity="0.25" />
            </radialGradient>
          </defs>
          <circle cx="110" cy="110" r="92" fill="none" stroke="#8dc0ff" strokeOpacity="0.34" strokeWidth="2" />
          <g fill="#eaf3ff" fillOpacity="0.9">
            <path d="M110 110 L98 28 Q108 12 124 26 L142 78 Q132 96 110 110 Z" />
            <path d="M110 110 L192 98 Q208 108 194 124 L142 142 Q124 132 110 110 Z" />
            <path d="M110 110 L122 192 Q112 208 96 194 L78 142 Q88 124 110 110 Z" />
            <path d="M110 110 L28 122 Q12 112 26 96 L78 78 Q96 88 110 110 Z" />
          </g>
          <circle cx="110" cy="110" r="26" fill="url(#turbineCore)" />
          <circle cx="110" cy="110" r="10" fill="#ffffff" fillOpacity="0.95" />
        </motion.svg>
      </div>
    </motion.div>
  );
}
