import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const EASE = [0.76, 0, 0.24, 1];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anjali-tiwari-722b9a200" },
  { label: "GitHub", href: "https://github.com/Anjalitiwari07" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:anjalitiwariwork@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email app — your message is pre-filled.");
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-black border-t border-white/10 pt-32 md:pt-44 pb-10 px-6 md:px-10 overflow-hidden"
    >
      <div className="glow-drift absolute -bottom-40 -left-40 w-[50vw] h-[50vw] rounded-full bg-[#FF3B30]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8">
          Contact — Get In Touch
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
          className="font-display font-black uppercase tracking-tighter leading-[0.85] text-[clamp(3rem,10vw,9rem)] mb-20"
        >
          Let&apos;s <span className="text-[#FF3B30]">Talk</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="text-sm md:text-base leading-relaxed text-neutral-400 max-w-md mb-10">
              I&apos;m exploring product management and senior data roles. If
              you&apos;re building something data-driven — or hiring someone who
              turns insight into impact — I&apos;d genuinely love to hear from
              you.
            </p>
            <a
              href="mailto:anjalitiwariwork@gmail.com"
              data-testid="contact-email-link"
              className="font-display font-bold text-lg md:text-2xl text-white hover:text-[#FF3B30] transition-colors duration-300 inline-flex items-center gap-2 mb-2 break-all"
            >
              anjalitiwariwork@gmail.com
              <ArrowUpRight className="w-5 h-5 shrink-0" />
            </a>
            <p className="text-sm text-neutral-500 mb-12">
              +91 93544 96271 — Delhi, India
            </p>
            <div className="space-y-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`social-link-${s.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                  className="flex items-center justify-between border-b border-white/10 pb-4 text-xs uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors duration-300 group"
                >
                  {s.label}
                  <ArrowUpRight className="w-4 h-4 group-hover:text-[#FF3B30] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            data-testid="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="contact-name" className="block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-2">
                Name
              </label>
              <input
                id="contact-name"
                data-testid="contact-name-input"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 px-5 py-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#FF3B30] transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-2">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                data-testid="contact-email-input"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="you@company.com"
                className="w-full bg-white/5 border border-white/10 px-5 py-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#FF3B30] transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                data-testid="contact-message-input"
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about the role or project..."
                className="w-full bg-white/5 border border-white/10 px-5 py-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#FF3B30] transition-colors duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              data-testid="contact-submit-button"
              className="w-full bg-[#FF3B30] text-white text-xs uppercase tracking-[0.25em] py-5 rounded-full hover:bg-white hover:text-[#0A0A0A] transition-colors duration-300 active:scale-95 flex items-center justify-center gap-2"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-neutral-600">
          <span>© 2026 Anjali Tiwari</span>
          <span>Designed &amp; built with obsession</span>
          <a
            href="#top"
            data-testid="back-to-top-link"
            className="hover:text-[#FF3B30] transition-colors duration-300"
          >
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}
