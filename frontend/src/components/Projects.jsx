import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.76, 0, 0.24, 1];

const PROJECTS = [
  {
    n: "01",
    title: "Reporting Automation",
    desc: "Automated reporting workflows at AB InBev — 50+ work hours saved every single month.",
    tags: ["Python", "SQL", "Power Apps"],
    img: "https://images.pexels.com/photos/7505924/pexels-photo-7505924.jpeg",
    span: "md:col-span-7",
    height: "h-[420px] md:h-[520px]",
  },
  {
    n: "02",
    title: "Volumetric Flash BI",
    desc: "Power BI dashboards for BU Central turning global beer sales data into daily decisions.",
    tags: ["Power BI", "SAP", "Anaplan"],
    img: "https://images.pexels.com/photos/36013333/pexels-photo-36013333.png",
    span: "md:col-span-5",
    height: "h-[420px] md:h-[520px]",
  },
  {
    n: "03",
    title: "Risk Automation — Amex",
    desc: "Automation features for American Express Global Risk & Compliance, lifting team efficiency 40%.",
    tags: ["Python", "Hadoop", "Hive"],
    img: "https://images.pexels.com/photos/15315573/pexels-photo-15315573.jpeg",
    span: "md:col-span-5",
    height: "h-[420px] md:h-[520px]",
  },
  {
    n: "04",
    title: "Digital Lending Platform",
    desc: "Top 10 of 3500+ teams at the Amex Makeathon — fast loans for MSMEs, frontend led by me.",
    tags: ["Node.js", "ML", "Firebase"],
    img: "https://images.pexels.com/photos/1340377/pexels-photo-1340377.jpeg",
    span: "md:col-span-7",
    height: "h-[420px] md:h-[520px]",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative px-6 md:px-10 py-32 md:py-44 border-t border-white/10"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
              Selected Work
            </p>
            <h2 className="font-display font-bold uppercase tracking-tight leading-none text-3xl sm:text-4xl lg:text-5xl">
              Work that <span className="text-[#FF3B30]">delivered.</span>
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            04 Highlights — 2022 / Present
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.n}
              href="#contact"
              data-testid={`project-card-${p.n}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE, delay: (i % 2) * 0.12 }}
              className={`group relative overflow-hidden border border-white/10 ${p.span} ${p.height} block`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              <div className="absolute top-6 left-6 font-display font-black text-2xl text-white/60">
                {p.n}
              </div>
              <div className="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display font-bold tracking-tight text-xl sm:text-2xl uppercase text-white mb-2 group-hover:text-[#FF3B30] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mb-4 opacity-80">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.2em] text-neutral-300 border border-white/20 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
