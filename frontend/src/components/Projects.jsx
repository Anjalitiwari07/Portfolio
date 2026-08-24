import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.76, 0, 0.24, 1];

const STATS = [
  { value: "50+", label: "Hours saved every month through automation" },
  { value: "98%", label: "Reduction in reporting downtime" },
  { value: "90+", label: "Team members on one UX standard" },
  { value: "40%", label: "Efficiency lift delivered at Amex" },
];

const PROJECTS = [
  {
    n: "01",
    title: "Celonis → Databricks Migration",
    desc: "Leading the enterprise migration of process intelligence and analytics to a scalable, centralized Databricks architecture.",
    impact: "One centralized architecture for enterprise process intelligence",
    tags: ["Databricks", "Celonis", "Data Architecture"],
    img: "https://images.pexels.com/photos/7505924/pexels-photo-7505924.jpeg",
    span: "md:col-span-7",
    height: "h-[420px] md:h-[520px]",
  },
  {
    n: "02",
    title: "Enterprise UX Standardization",
    desc: "Design principles and reusable UI patterns driving consistent experiences across a 90+ member, multi-project team.",
    impact: "90+ member team shipping on one design language",
    tags: ["UI/UX Strategy", "Design Systems", "Leadership"],
    img: "https://images.pexels.com/photos/36013333/pexels-photo-36013333.png",
    span: "md:col-span-5",
    height: "h-[420px] md:h-[520px]",
  },
  {
    n: "03",
    title: "Global KPI Governance",
    desc: "Owning FORT reconciliation and global data KPIs — accuracy, consistency, and reporting the business trusts.",
    impact: "Trusted KPI reporting across multiple business processes",
    tags: ["SQL", "Power BI", "Governance"],
    img: "https://images.pexels.com/photos/15315573/pexels-photo-15315573.jpeg",
    span: "md:col-span-5",
    height: "h-[420px] md:h-[520px]",
  },
  {
    n: "04",
    title: "Risk Automation — Amex",
    desc: "Automation features for American Express Global Risk & Compliance, lifting team efficiency 40%.",
    impact: "+40% team efficiency at American Express",
    tags: ["Python", "Hadoop", "Hive"],
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

        <div
          data-testid="impact-stats"
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-16"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="bg-[#0A0A0A] p-6 md:p-8"
            >
              <div className="font-display font-black text-4xl md:text-5xl text-[#FF3B30] leading-none mb-3">
                {s.value}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                {s.label}
              </p>
            </motion.div>
          ))}
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
              <motion.img
                src={p.img}
                alt={p.title}
                loading="lazy"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
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
                <p className="text-sm font-semibold text-[#FF3B30] mb-3">
                  {p.impact}
                </p>
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
