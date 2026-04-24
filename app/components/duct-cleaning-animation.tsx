"use client";

import { motion } from "framer-motion";

export default function DuctCleaningAnimation() {
  const dirtParticles = [
    { top: "28%", size: 7, delay: 0 },
    { top: "40%", size: 5, delay: 0.2 },
    { top: "52%", size: 6, delay: 0.35 },
    { top: "64%", size: 4, delay: 0.5 },
    { top: "34%", size: 5, delay: 0.65 },
    { top: "58%", size: 6, delay: 0.85 },
  ];

  return (
    <div className="relative overflow-hidden rounded-[1.8rem] border border-blue-300/35 bg-[#060b14] p-5 sm:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(86,140,255,0.22),transparent_45%),radial-gradient(circle_at_85%_70%,rgba(70,130,255,0.18),transparent_48%)]" />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.15em] text-zinc-300">
          <span>Špinavý stav</span>
          <span>Čištění</span>
          <span>Čistý stav</span>
        </div>

        <motion.div
          className="relative h-36 [perspective:1200px] sm:h-44"
          animate={{ rotateX: [8, 12, 8], rotateY: [-6, 6, -6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 [transform-style:preserve-3d]">
            <motion.div
              className="absolute inset-0 overflow-hidden rounded-[1.2rem] border border-zinc-700 bg-zinc-950 shadow-[0_16px_40px_rgba(0,0,0,0.5)] [transform:translateZ(0px)]"
              animate={{ boxShadow: ["0 16px 40px rgba(0,0,0,0.5)", "0 20px 46px rgba(0,0,0,0.62)", "0 16px 40px rgba(0,0,0,0.5)"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-[#221711]" />
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#071324]"
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="absolute inset-x-0 top-0 h-[24%] bg-gradient-to-b from-white/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-black/45 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-7 bg-gradient-to-r from-white/12 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-7 bg-gradient-to-l from-white/10 to-transparent" />

              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.78, 0.82, 0.22, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background:
                    "radial-gradient(circle at 12% 50%, rgba(165,120,80,0.55), transparent 30%), radial-gradient(circle at 28% 30%, rgba(120,85,55,0.42), transparent 28%), radial-gradient(circle at 42% 68%, rgba(160,115,78,0.48), transparent 30%)",
                }}
              />

              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.08, 0.14, 0.54, 0.68] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background:
                    "radial-gradient(circle at 70% 45%, rgba(135,185,255,0.42), transparent 35%), radial-gradient(circle at 86% 60%, rgba(95,160,255,0.52), transparent 35%)",
                }}
              />

              {dirtParticles.map((particle, index) => (
                <motion.span
                  key={index}
                  className="absolute left-[34%] rounded-full bg-[#c08a64]"
                  style={{ top: particle.top, width: particle.size, height: particle.size }}
                  animate={{
                    x: [0, 16, 26],
                    y: [0, -3, 4],
                    opacity: [0, 0.8, 0],
                    scale: [0.7, 1.1, 0.6],
                  }}
                  transition={{
                    duration: 1.1,
                    delay: particle.delay,
                    repeat: Infinity,
                    repeatDelay: 1.3,
                    ease: "easeOut",
                  }}
                />
              ))}

              <motion.div
                className="absolute inset-y-3 w-[90px] rounded-2xl border border-blue-200/70 bg-gradient-to-b from-white/90 to-blue-100/80 shadow-[0_0_24px_rgba(140,190,255,0.8)] [transform:translateZ(24px)]"
                animate={{ left: ["-90px", "calc(100% - 90px)"] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/70 bg-blue-100/55"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.62, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <g fill="#f8fbff" fillOpacity="0.9">
                      <path d="M50 50 L45 16 Q50 8 56 16 L61 38 Q58 46 50 50 Z" />
                      <path d="M50 50 L84 45 Q92 50 84 56 L62 61 Q54 58 50 50 Z" />
                      <path d="M50 50 L55 84 Q50 92 44 84 L39 62 Q42 54 50 50 Z" />
                      <path d="M50 50 L16 55 Q8 50 16 44 L38 39 Q46 42 50 50 Z" />
                    </g>
                    <circle cx="50" cy="50" r="7" fill="#d8eaff" />
                  </svg>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-2 left-0 h-[3px] bg-blue-300/80 shadow-[0_0_12px_rgba(120,175,255,0.8)]"
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs sm:text-sm">
          <motion.div
            animate={{ color: ["#fca5a5", "#fca5a5", "#94a3b8"] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-zinc-700 bg-zinc-900 py-2 font-semibold"
          >
            Nánosy a mastnota
          </motion.div>
          <motion.div
            animate={{ color: ["#93c5fd", "#bfdbfe", "#93c5fd"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-blue-300/40 bg-blue-950/35 py-2 font-semibold"
          >
            Aktivní čištění
          </motion.div>
          <motion.div
            animate={{ color: ["#94a3b8", "#bfdbfe", "#dbeafe"] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-zinc-700 bg-zinc-900 py-2 font-semibold"
          >
            Čisté potrubí
          </motion.div>
        </div>
        <p className="mt-3 text-center text-xs text-blue-200/90 sm:text-sm">
          Čistící hlava projede celou trasu potrubí a postupně mění zónu z
          kontaminované na čistou.
        </p>
      </div>
    </div>
  );
}
