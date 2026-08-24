import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

const CHAPTERS = [
  {
    n: "01",
    title: "Who I Am",
    text: "Enterprise Data Transformation Lead at AB InBev, working toward product management. I lead the migration of Celonis process intelligence to Databricks and drive UI/UX standardization across a 90+ member, multi-project team.",
  },
  {
    n: "02",
    title: "What I Do",
    text: "I own FORT reconciliation and global data KPIs — consistency, accuracy, governance — while aligning data, engineering, product, and business teams on one delivery. Before this: 50+ hours saved monthly through automation and a 98% cut in downtime.",
  },
  {
    n: "03",
    title: "Where I'm Headed",
    text: "Product management. I already balance migration, reconciliation, KPI standardization, and UX transformation across workstreams — and I build reusable standards that make every next project faster. That's product thinking, applied daily.",
  },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="relative px-6 md:px-10 py-32 md:py-44 border-t border-white/10"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10">
        {/* avatar in clipped frame */}
        <div className="lg:col-span-4">
          <motion.div
            style={{ y: yImg }}
            className="relative w-64 md:w-72"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#FF3B30]" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#FF3B30]" />
            <div className="aspect-[3/4] overflow-hidden bg-[#121212]">
              <img
                src="https://images.pexels.com/photos/19923619/pexels-photo-19923619.jpeg"
                alt="Portrait of Alex Carter"
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-700"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Anjali Tiwari — Data → Product
            </p>
          </motion.div>
        </div>

        {/* manifesto chapters */}
        <div className="lg:col-span-8">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
            About Me
          </p>
          <h2 className="font-display font-bold uppercase tracking-tight leading-none text-3xl sm:text-4xl lg:text-5xl mb-16">
            From data to <span className="text-[#FF3B30]">decisions.</span>
          </h2>
          <div className="space-y-0">
            {CHAPTERS.map((c, i) => (
              <motion.div
                key={c.n}
                data-testid={`about-chapter-${c.n}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
                className="grid grid-cols-[auto_1fr] gap-6 md:gap-12 py-10 border-t border-white/10 group"
              >
                <span className="font-display font-black text-4xl md:text-6xl text-outline leading-none group-hover:text-[#FF3B30] group-hover:[-webkit-text-stroke:0px] transition-all duration-500">
                  {c.n}
                </span>
                <div>
                  <h3 className="font-display font-bold tracking-tight text-xl sm:text-2xl uppercase mb-3 text-white group-hover:text-[#FF3B30] transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-neutral-400 max-w-xl">
                    {c.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
