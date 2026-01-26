import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/Container";
import { projects } from "../data/projects";
import { fadeUp, stagger } from "../lib/motion";

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-dd-muted">
      {children}
    </span>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useMemo(() => {
    if (!activeProject) return [];
    if (activeProject.gallery?.length) return activeProject.gallery;
    if (activeProject.cover) return [activeProject.cover];
    return [];
  }, [activeProject]);

  const openModal = (p) => {
    setActiveProject(p);
    setActiveIndex(0);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveProject(null);
    setActiveIndex(0);
  };

  useEffect(() => {
    function onKey(e) {
      if (!open) return;

      if (e.key === "Escape") closeModal();

      if (images.length > 1) {
        if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % images.length);
        if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + images.length) % images.length);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="projects" className="py-24">
      <Container>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-sm text-dd-muted">Selected work</p>
            <h2 className="mt-2 text-4xl font-black text-dd-text">
              Projects & case studies
            </h2>
            <p className="mt-4 max-w-2xl text-dd-muted">
              A snapshot of what we build: web platforms, mobile apps, backend APIs,
              automation, and production infrastructure.
            </p>
          </div>

          <a
            href="#contact"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-dd-text hover:bg-white/10 transition"
          >
            Request a Quote
          </a>
        </div>

        {/* GRID */}
        <motion.div
          variants={stagger(0.08, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, idx) => (
            <motion.article
              key={p.id || p.title}
              variants={fadeUp(idx * 0.03)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-dd-panel/70 p-6 backdrop-blur transition hover:scale-[1.02]"
            >
              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-dd-teal/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-dd-red/15 blur-3xl" />
              </div>

              <div className="relative">
                <p className="text-xs text-dd-muted">{p.subtitle}</p>
                <h3 className="mt-2 text-lg font-semibold text-dd-text">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-dd-muted">{p.desc}</p>

                {/* PREVIEW IMAGE */}
                {p.cover && (
                  <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <img
                      src={p.cover}
                      alt={`${p.title} preview`}
                      className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-dd-muted">
                    Click to open preview
                  </span>

                  {/* BOTÓN QUE ABRE MODAL */}
                  <button
                    type="button"
                    onClick={() => openModal(p)}
                    className="text-sm font-semibold text-dd-teal hover:text-dd-tealDark transition"
                  >
                    View →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {open && activeProject && (
            <motion.div
              className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) closeModal();
              }}
            >
              <motion.div
                className="mx-auto mt-16 w-[min(1100px,92vw)]"
                initial={{ y: 16, scale: 0.98, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 10, scale: 0.98, opacity: 0 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
              >
                <div className="rounded-3xl border border-white/10 bg-dd-panel/90 shadow-[0_30px_120px_rgba(0,0,0,.65)] overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                    <div>
                      <div className="text-xs text-dd-muted">{activeProject.subtitle}</div>
                      <div className="text-lg font-extrabold text-dd-text">{activeProject.title}</div>
                    </div>

                    <button
                      onClick={closeModal}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-dd-text hover:bg-white/10 transition"
                    >
                      Close
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    {images.length > 0 ? (
                      <>
                        {/* Main Image */}
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                          <img
                            src={images[activeIndex]}
                            alt={`preview ${activeIndex + 1}`}
                            className="w-full max-h-[60vh] object-contain"
                          />
                        </div>

                        {/* Thumbs */}
                        {images.length > 1 && (
                          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                            {images.map((src, i) => (
                              <button
                                key={src + i}
                                onClick={() => setActiveIndex(i)}
                                className={`shrink-0 overflow-hidden rounded-xl border transition
                                  ${
                                    i === activeIndex
                                      ? "border-dd-teal"
                                      : "border-white/10 hover:border-white/25"
                                  }`}
                                title={`Image ${i + 1}`}
                              >
                                <img
                                  src={src}
                                  alt={`thumb ${i + 1}`}
                                  className="h-16 w-28 object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-dd-muted">
                        No images yet for this project.
                      </div>
                    )}

                    <p className="mt-5 text-sm text-dd-muted leading-relaxed">
                      {activeProject.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.tags?.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-center text-xs text-dd-muted/70">
                  Tip: ESC to close · click outside to close · ← → to change image
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
