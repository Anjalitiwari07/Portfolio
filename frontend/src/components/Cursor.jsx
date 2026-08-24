import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      setHovering(!!e.target.closest("a, button, input, textarea"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        data-testid="custom-cursor-dot"
        aria-hidden="true"
        className="fixed top-0 left-0 z-[200] w-2 h-2 rounded-full bg-[#FF3B30] pointer-events-none"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
      />
      <motion.div
        data-testid="custom-cursor-ring"
        aria-hidden="true"
        className="fixed top-0 left-0 z-[200] w-10 h-10 rounded-full border border-[#FF3B30]/70 pointer-events-none mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 1.9 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
}
