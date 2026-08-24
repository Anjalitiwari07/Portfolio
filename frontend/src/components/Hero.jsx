import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const EASE = [0.76, 0, 0.24, 1];

function MaskedLine({ text, delay, start, className }) {
  return (
    <div className="overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "115%" }}
        animate={start ? { y: "0%" } : {}}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {text}
      </motion.span>
    </div>
  );
}

export default function Hero({ start }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-10 pt-16"
    >
      {/* ambient red glow */}
      <div className="absolute -top-40 -right-40 w-[60vw] h-[60vw] rounded-full bg-[#FF3B30]/10 blur-[140px] pointer-events-none" />

      {/* faint vertical grid backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="max-w-[1600px] mx-auto h-full grid grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border-l border-white/5 last:border-r" />
          ))}
        </div>
      </div>

      <motion.div style={{ y: yText, opacity: fade }} className="relative z-10 max-w-[1600px] mx-auto w-full">
        <div className="overflow-hidden mb-8">
          <motion.div
            initial={{ y: "120%" }}
            animate={start ? { y: "0%" } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-neutral-500"
          >
            <span>Portfolio — 2026</span>
            <span className="flex items-center gap-2 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse" />
              Available for work
            </span>
            <span className="hidden lg:inline text-[#FF3B30]">
              Data Engineer → Product Manager
            </span>
          </motion.div>
        </div>

        <h1 className="font-display font-black uppercase leading-[0.85] tracking-tighter text-[clamp(3.5rem,13vw,12rem)]">
          <MaskedLine text="Product" delay={0.25} start={start} className="text-white" />
          <MaskedLine
            text="Manager"
            delay={0.38}
            start={start}
            className="text-outline"
          />
        </h1>

        <div className="overflow-hidden mt-10 max-w-md">
          <motion.p
            initial={{ y: "120%" }}
            animate={start ? { y: "0%" } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
            className="text-sm md:text-base leading-relaxed text-neutral-400"
          >
            I&apos;m Anjali Tiwari — Enterprise Data Transformation Lead at AB
            InBev, moving into product management. I&apos;m leading our
            Celonis-to-Databricks migration and driving UI/UX standardization
            across a 90+ member team.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            data-testid="hero-cta-projects"
            className="bg-[#FF3B30] text-white text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-white hover:text-[#0A0A0A] transition-colors duration-300 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            data-testid="hero-cta-contact"
            className="border border-white/25 text-white text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:border-white hover:bg-white/5 transition-colors duration-300 active:scale-95"
          >
            Get in Touch
          </a>
          <a
            href="/Anjali_Tiwari_Resume.pdf"
            download
            data-testid="hero-cta-resume"
            className="flex items-center gap-2 border border-white/25 text-white text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:border-[#FF3B30] hover:text-[#FF3B30] transition-colors duration-300 active:scale-95"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-6 md:left-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-neutral-500"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
        Scroll
      </motion.div>
    </section>
  );
}
