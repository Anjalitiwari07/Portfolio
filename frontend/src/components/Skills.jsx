import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Code2, Server, Sparkles } from "lucide-react";

const EASE = [0.76, 0, 0.24, 1];

const MARQUEE_ITEMS = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "Three.js",
  "PostgreSQL",
];

const COLUMNS = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL / Three.js"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "FastAPI / Python", "PostgreSQL", "MongoDB", "REST & WebSockets"],
  },
  {
    icon: Sparkles,
    title: "Craft",
    items: ["Design Systems", "Motion Design", "Accessibility", "Performance", "CI / CD"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-32 md:py-44 border-t border-white/10 overflow-hidden"
    >
      <div className="px-6 md:px-10 max-w-[1600px] mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
          Skills — The Party
        </p>
        <h2 className="font-display font-bold uppercase tracking-tight leading-none text-3xl sm:text-4xl lg:text-5xl">
          The full <span className="text-[#FF3B30]">loadout.</span>
        </h2>
      </div>

      {/* slow editorial marquee */}
      <div data-testid="skills-marquee" className="py-6 border-y border-white/10">
        <Marquee speed={28} gradient={false} autoFill>
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={item} className="flex items-center">
              <span
                className={`font-display font-black uppercase tracking-tighter text-6xl md:text-8xl px-6 md:px-10 ${
                  i % 3 === 1 ? "text-[#FF3B30]" : "text-outline"
                }`}
              >
                {item}
              </span>
              <span className="w-3 h-3 rounded-full bg-[#FF3B30]" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="px-6 md:px-10 max-w-[1600px] mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {COLUMNS.map((col, i) => (
          <motion.div
            key={col.title}
            data-testid={`skills-column-${col.title.toLowerCase()}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
            className="bg-[#0A0A0A] p-8 md:p-10 group hover:bg-[#121212] transition-colors duration-500"
          >
            <col.icon className="w-6 h-6 text-[#FF3B30] mb-6" />
            <h3 className="font-display font-bold uppercase tracking-tight text-xl mb-6 text-white">
              {col.title}
            </h3>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-neutral-400 flex items-center gap-3 group-hover:text-neutral-200 transition-colors duration-500"
                >
                  <span className="w-1.5 h-1.5 bg-[#FF3B30]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
