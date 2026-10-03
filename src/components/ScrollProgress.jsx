import { motion, useScroll, useSpring } from "framer-motion";
import s from "../App.module.css";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll(); // 0 → 1 as the page scrolls
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div className={s.progress} style={{ scaleX }} />;
}