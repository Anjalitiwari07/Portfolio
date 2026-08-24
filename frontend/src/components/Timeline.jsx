import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

const ROLES = [
  {
    dates: "Jul 2024 — Present",
    role: "Enterprise Data Transformation Lead",
    company: "AB InBev",
    text: "Leading the Celonis-to-Databricks migration, owning FORT reconciliation and global data KPIs, and driving UI/UX standardization across a 90+ member, multi-project team.",
  },
  {
    dates: "Jan 2024 — Jul 2024",
    role: "Data Analyst Intern",
    company: "AB InBev",
    text: "Built Power BI dashboards for BU Central and automated manual reporting — saving 12+ hours monthly and cutting downtime by 98%.",
  },
  {
    dates: "May 2023 — Jul 2023",
    role: "SDE Intern",
    company: "American Express",
    text: "Gathered requirements with Global Risk & Compliance stakeholders and shipped automation features that lifted team efficiency by 40%.",
  },
  {
    dates: "2020 — 2024",
    role: "Bachelor of Technology",
    company: "Indira Gandhi Delhi Technical University for Women",
    text: "Management head of the T&P cell, mentor in the technical community, and captain of the university Kabaddi team.",
  },
];

export default function Timeline() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative px-6 md:px-10 py-32 md:py-44 border-t border-white/10"
    >
      <div className="max-w-[1600px] mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
          Experience
        </p>
        <h2 className="font-display font-bold uppercase tracking-tight leading-none text-3xl sm:text-4xl lg:text-5xl mb-20">
          The road <span className="text-[#FF3B30]">so far.</span>
        </h2>

        <div className="relative ml-2 md:ml-4 border-l border-white/15">
          {ROLES.map((r, i) => (
            <motion.div
              key={r.role}
              data-testid={`timeline-item-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              className="relative pl-10 md:pl-16 pb-16 last:pb-0 group"
            >
              <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FF3B30] border-4 border-[#0A0A0A] group-hover:scale-125 transition-transform duration-300" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#FF3B30] mb-2">
                {r.dates}
              </p>
              <h3 className="font-display font-bold tracking-tight text-xl sm:text-2xl uppercase text-white">
                {r.role}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mt-1 mb-4">
                {r.company}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-neutral-400 max-w-2xl">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
