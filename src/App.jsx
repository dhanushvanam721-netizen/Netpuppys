import { motion, useScroll, useTransform } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import ThemeToggle from "./components/ThemeToggle";
import Reveal from "./components/Reveal";
import s from "./App.module.css";

// TODO: replace with the real copy from https://tis.edu.in/
const STATS = [
  ["25+", "Years of excellence"],
  ["2,000+", "Students"],
  ["100+", "Expert faculty"],
  ["98%", "Board results"],
];
const PROGRAMS = [
  ["🎨", "Early Years", "Play-based learning that builds curiosity and confidence."],
  ["📚", "Primary School", "Strong foundations in literacy, numeracy and creativity."],
  ["🔬", "Middle School", "Hands-on science, tech and critical thinking."],
  ["🎓", "Senior School", "Focused guidance for boards, careers and beyond."],
  ["⚽", "Sports & Arts", "Teams, studios and stages for every talent."],
  ["🌍", "Global Outlook", "Exchange programs and international exposure."],
];

export default function App() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]); // parallax on hero text

  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      <header className={s.nav}>
        <div className={`${s.container} ${s.navInner}`}>
          <a href="#top" className={s.logo}>TIS<span>.</span></a>
          <nav className={s.links}>
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#admissions">Admissions</a>
          </nav>
          <div className={s.navRight}>
            <ThemeToggle />
            <a href="#admissions" className={s.btn}>Apply</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className={s.hero}>
          <div className={`${s.blob} ${s.b1}`} />
          <div className={`${s.blob} ${s.b2}`} />
          <motion.div className={s.container} style={{ y: heroY }}>
            <motion.span className={s.eyebrow} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Tulas International School
            </motion.span>
            <motion.h1
              className={s.heroTitle}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Where curious minds become <em>confident leaders.</em>
            </motion.h1>
            <motion.p
              className={s.lead}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A nurturing, globally minded school that blends academics, character and creativity.
            </motion.p>
            <motion.div
              className={s.actions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#admissions" className={s.btn}>Book a campus visit</a>
              <a href="#programs" className={`${s.btn} ${s.btnGhost}`}>Explore programs</a>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className={s.section}>
          <div className={s.container}>
            <Reveal>
              <span className={s.eyebrow}>About us</span>
              <h2 className={s.h2}>A legacy of learning, built for tomorrow.</h2>
              <p className={s.lead}>Replace this paragraph with the school's real "About" copy.</p>
            </Reveal>
            <div className={s.stats} style={{ marginTop: 40 }}>
              {STATS.map(([n, l], i) => (
                <Reveal key={l} delay={i * 0.1} className={s.stat}>
                  <strong>{n}</strong>
                  <span>{l}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className={s.section}>
          <div className={s.container}>
            <Reveal>
              <span className={s.eyebrow}>Programs</span>
              <h2 className={s.h2}>Learning for every stage.</h2>
            </Reveal>
            <div className={s.grid}>
              {PROGRAMS.map(([icon, title, text], i) => (
                <Reveal key={title} delay={(i % 3) * 0.12}>
                  <motion.article
                    className={s.card}
                    data-hover
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={s.icon}>{icon}</div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="admissions" className={s.section}>
          <div className={s.container}>
            <Reveal className={s.cta}>
              <h2 className={s.h2}>Admissions are open.</h2>
              <p>Give your child the start they deserve.</p>
              <a href="https://tis.edu.in/" className={s.btn}>Enquire now</a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className={s.footer}>© {new Date().getFullYear()} Tulas International School</footer>
    </>
  );
}