import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import s from "../App.module.css";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () =>
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className={s.toggle}
      data-dark={dark}
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
    >
      <motion.span layout transition={{ type: "spring", stiffness: 500, damping: 30 }} className={s.knob}>
        {dark ? "🌙" : "☀️"}
      </motion.span>
    </button>
  );
}