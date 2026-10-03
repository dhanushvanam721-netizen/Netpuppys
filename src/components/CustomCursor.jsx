import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import s from "../App.module.css";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // The ring lags behind the dot via a spring
  const rx = useSpring(x, { stiffness: 220, damping: 22 });
  const ry = useSpring(y, { stiffness: 220, damping: 22 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(!!e.target.closest("a, button, [data-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        className={s.ring}
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 1.8 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className={s.dot}
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}