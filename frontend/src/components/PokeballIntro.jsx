import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

export default function PokeballIntro({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 1500);
  };

  return (
    <motion.div
      data-testid="pokeball-intro"
      className="fixed inset-0 z-[100] flex flex-col"
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      {/* light burst on open */}
      {opening && (
        <motion.div
          className="fixed inset-0 z-[99] bg-white pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.85, 0] }}
          transition={{ duration: 1.1, times: [0, 0.35, 1], ease: "easeOut" }}
        />
      )}

      {/* top half */}
      <motion.div
        className="relative h-1/2 w-full bg-[#FF3B30] border-b-[8px] border-[#0A0A0A] overflow-hidden"
        animate={opening ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute left-0 right-0 bottom-[-0.22em] text-center font-display font-black uppercase leading-none text-[24vw] md:text-[19vw] text-white/25 pointer-events-none whitespace-nowrap"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          Anjali
        </motion.span>
        <span className="absolute top-8 left-8 text-white text-xs uppercase tracking-[0.3em] font-mono z-10">
          Anjali Tiwari
        </span>
        <span className="absolute top-8 right-8 text-white/70 text-xs uppercase tracking-[0.3em] font-mono z-10">
          Est. 2026
        </span>
        <span aria-hidden="true" className="absolute top-1/4 left-[12%] text-white/60 text-xl font-mono">+</span>
        <span aria-hidden="true" className="absolute top-[15%] right-[18%] text-white/60 text-xl font-mono">+</span>
      </motion.div>

      {/* bottom half */}
      <motion.div
        className="relative h-1/2 w-full bg-white border-t-[8px] border-[#0A0A0A] overflow-hidden"
        animate={opening ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[-0.22em] text-center font-display font-black uppercase leading-none text-[24vw] md:text-[19vw] text-[#0A0A0A]/10 pointer-events-none whitespace-nowrap"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          Tiwari
        </motion.span>
        <motion.div
          className="absolute bottom-8 left-8 text-[#0A0A0A] text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono leading-relaxed z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Nº 001 — Opening Night
          <br />
          <span className="text-[#0A0A0A]/50">Mixed media on screen, 2026</span>
        </motion.div>
        <span className="absolute bottom-8 right-8 text-[#0A0A0A] text-xs uppercase tracking-[0.3em] font-mono z-10">
          Portfolio — V.1
        </span>
        <span aria-hidden="true" className="absolute bottom-1/4 right-[14%] text-[#0A0A0A]/40 text-xl font-mono">+</span>
      </motion.div>

      {/* center button */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101]">
        {!opening && (
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-[#0A0A0A]"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <motion.button
          data-testid="pokeball-intro-button"
          onClick={handleOpen}
          aria-label="Open portfolio"
          className="relative w-24 h-24 md:w-28 md:h-28 bg-white rounded-full border-[10px] border-[#0A0A0A] flex items-center justify-center shadow-2xl cursor-pointer"
          animate={opening ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          whileHover={opening ? {} : { scale: 1.1, rotate: -8 }}
          whileTap={opening ? {} : { scale: 0.92 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="w-10 h-10 md:w-11 md:h-11 border-4 border-[#0A0A0A] rounded-full transition-colors duration-300 hover:bg-[#FF3B30]" />
        </motion.button>
      </div>

      {/* rotating ring text */}
      {!opening && (
        <motion.svg
          viewBox="0 0 200 200"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 w-64 h-64 md:w-80 md:h-80 z-[100] pointer-events-none"
          initial={{ opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, x: "-50%", y: "-50%", rotate: 360 }}
          transition={{
            opacity: { delay: 0.6, duration: 0.8 },
            rotate: { duration: 26, repeat: Infinity, ease: "linear" },
          }}
        >
          <defs>
            <path
              id="introRingPath"
              d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              fill="none"
            />
          </defs>
          <text
            fill="#0A0A0A"
            fontSize="11.5"
            letterSpacing="3"
            style={{ fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}
          >
            <textPath href="#introRingPath">
              Click to open · Anjali Tiwari · Portfolio 2026 ·
            </textPath>
          </text>
        </motion.svg>
      )}
    </motion.div>
  );
}
