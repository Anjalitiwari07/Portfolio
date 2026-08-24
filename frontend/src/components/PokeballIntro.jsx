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
        className="relative h-1/2 w-full bg-[#FF3B30] border-b-[8px] border-[#0A0A0A]"
        animate={opening ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
      >
        <span className="absolute top-8 left-8 text-white text-xs uppercase tracking-[0.3em] font-mono">
          Alex Carter
        </span>
        <span className="absolute top-8 right-8 text-white/70 text-xs uppercase tracking-[0.3em] font-mono">
          Est. 2026
        </span>
      </motion.div>

      {/* bottom half */}
      <motion.div
        className="relative h-1/2 w-full bg-white border-t-[8px] border-[#0A0A0A]"
        animate={opening ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
      >
        <span className="absolute bottom-8 right-8 text-[#0A0A0A] text-xs uppercase tracking-[0.3em] font-mono">
          Portfolio — V.1
        </span>
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

      {/* hint */}
      <motion.p
        className="absolute left-1/2 top-[calc(50%+6rem)] -translate-x-1/2 z-[101] text-[#0A0A0A] text-xs uppercase tracking-[0.35em] font-mono whitespace-nowrap"
        animate={opening ? { opacity: 0 } : { opacity: [0.4, 1, 0.4] }}
        transition={opening ? { duration: 0.2 } : { duration: 2, repeat: Infinity }}
      >
        Click to open
      </motion.p>
    </motion.div>
  );
}
