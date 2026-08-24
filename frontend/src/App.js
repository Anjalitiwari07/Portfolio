import { useEffect, useRef, useState } from "react";
import "@/App.css";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import PokeballIntro from "@/components/PokeballIntro";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

function App() {
  const [opened, setOpened] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, anchors: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;
    if (opened) {
      lenisRef.current.start();
      document.body.style.overflow = "";
    } else {
      lenisRef.current.stop();
      document.body.style.overflow = "hidden";
    }
  }, [opened]);

  return (
    <div className="grain bg-[#0A0A0A] text-white min-h-screen font-mono antialiased selection:bg-[#FF3B30] selection:text-white">
      <AnimatePresence>
        {!opened && <PokeballIntro key="intro" onOpen={() => setOpened(true)} />}
      </AnimatePresence>
      <Header visible={opened} />
      <main>
        <Hero start={opened} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
