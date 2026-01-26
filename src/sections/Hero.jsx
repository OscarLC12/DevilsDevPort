import { motion } from "framer-motion";
import Container from "../components/Container";
import { fadeUp, fadeIn, stagger } from "../lib/motion";

const services = [
  { title: "Web Development", desc: "High-performance React websites, dashboards and platforms." },
  { title: "Mobile Apps", desc: "Flutter apps for Android & iOS with clean UX and scalability." },
  { title: ".NET Backend", desc: "Secure APIs, authentication, databases and integrations." },
  { title: "Servers & DevOps", desc: "Cloud, SSL, monitoring, backups and scalable infrastructure." },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-36 pb-24 overflow-hidden">
      {/* Animated glows */}
      <motion.div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-dd-teal/20 blur-[120px]"
        animate={{ x: [0, 18, 0], y: [0, -14, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-10 -right-44 h-[540px] w-[540px] rounded-full bg-dd-red/20 blur-[120px]"
        animate={{ x: [0, -18, 0], y: [0, 16, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <Container>
        {/* Layout */}
        <div className="relative grid gap-10 lg:gap-12 lg:grid-cols-12 items-start">
          {/* HERO TEXT */}
          <div className="lg:col-span-7 max-w-3xl">
            <motion.p
              variants={fadeIn(0)}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-dd-muted"
            >
              React · Flutter · .NET · Servers
              <span className="h-1 w-1 rounded-full bg-dd-teal" />
              Production-ready builds
            </motion.p>

            <motion.h1
              variants={fadeUp(0.05)}
              initial="hidden"
              animate="show"
              className="mt-6 text-5xl md:text-6xl font-black leading-tight text-dd-text"
            >
              We build{" "}
              <span className="bg-gradient-to-r from-dd-red via-dd-teal to-dd-teal bg-clip-text text-transparent">
                high-impact software
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.12)}
              initial="hidden"
              animate="show"
              className="mt-6 text-lg text-dd-muted"
            >
              React web platforms, Flutter mobile apps, .NET backends and secure infrastructure — built for real businesses.
            </motion.p>

            <motion.div
              variants={fadeUp(0.18)}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-2xl bg-dd-teal px-6 py-3 font-semibold text-dd-bg shadow-glow hover:bg-dd-tealDark transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-dd-text hover:bg-white/10 transition"
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* SERVICES PREVIEW (solo aquí) */}
          <div
  id="services"
  className="lg:col-span-5 lg:mt-2 scroll-mt-24 md:scroll-mt-28"
>
            <motion.div
              variants={fadeUp(0.08)}
              initial="hidden"
              animate="show"
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-dd-panel/40 backdrop-blur p-6"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 -right-24 h-56 w-56 rounded-full bg-dd-teal/15 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-dd-red/10 blur-3xl" />
              </div>

              <div className="relative">
                <p className="text-sm text-dd-muted">Services</p>
                <h2 className="mt-2 text-xl font-extrabold text-dd-text">
                  Full-cycle development
                </h2>

                <motion.div
                  variants={stagger(0.06, 0.06)}
                  initial="hidden"
                  animate="show"
                  className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
                >
                  {services.map((s, i) => (
                    <motion.div
                      key={s.title}
                      variants={fadeUp(i * 0.03)}
                      className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-dd-teal/10 to-dd-red/10" />
                      <div className="relative">
                        <h3 className="text-sm font-semibold text-dd-text">{s.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-dd-muted">{s.desc}</p>
                        <p className="mt-3 text-[11px] text-dd-muted">
                          Clean · Secure · Scalable
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
