import { motion } from "framer-motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ visible }) {
  return (
    <motion.header
      data-testid="site-header"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0A0A0A]/70 border-b border-white/10"
      initial={{ y: -80, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="header-logo"
          className="font-display font-black uppercase tracking-tight text-lg text-white hover:text-[#FF3B30] transition-colors duration-300"
        >
          AT<span className="text-[#FF3B30]">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          data-testid="header-cta"
          className="text-xs uppercase tracking-[0.2em] border border-white/20 px-4 py-2 rounded-full text-white hover:bg-[#FF3B30] hover:border-[#FF3B30] hover:text-white transition-colors duration-300 active:scale-95"
        >
          Let&apos;s Talk
        </a>
      </div>
    </motion.header>
  );
}
