import { useEffect, useState } from "react";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const images = project.gallery?.length ? project.gallery : project.cover ? [project.cover] : [];

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
      if (!open) return;
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  const openModal = () => {
    setActive(0);
    setOpen(true);
  };

  return (
    <>
      {/* Card */}
      <button
        type="button"
        onClick={openModal}
        className="group text-left rounded-3xl border border-white/10 bg-dd-panel/70 backdrop-blur
                   p-6 shadow-[0_10px_60px_rgba(0,0,0,.35)] transition
                   hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(0,0,0,.45)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs text-dd-muted">{project.subtitle}</div>
            <h3 className="mt-2 text-xl font-extrabold text-dd-text">{project.title}</h3>
            <p className="mt-2 text-sm text-dd-muted leading-relaxed">{project.description}</p>
          </div>

          <span className="text-dd-teal text-sm font-semibold group-hover:translate-x-1 transition">
            View →
          </span>
        </div>

        {/* Cover preview */}
        {project.cover && (
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={project.cover}
              alt={`${project.title} preview`}
              className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-dd-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Hint */}
        <div className="mt-4 text-xs text-dd-muted/80">
          Click to open full preview
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="mx-auto mt-16 w-[min(1050px,92vw)]">
            <div className="rounded-3xl border border-white/10 bg-dd-panel/90 shadow-[0_30px_120px_rgba(0,0,0,.65)] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <div className="text-xs text-dd-muted">{project.subtitle}</div>
                  <div className="text-lg font-extrabold text-dd-text">{project.title}</div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-dd-text hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Main image */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <img
                    src={images[active]}
                    alt={`preview ${active + 1}`}
                    className="w-full max-h-[60vh] object-contain"
                  />
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                    {images.map((src, idx) => (
                      <button
                        key={src + idx}
                        onClick={() => setActive(idx)}
                        className={`shrink-0 overflow-hidden rounded-xl border transition
                          ${idx === active ? "border-dd-teal" : "border-white/10 hover:border-white/25"}`}
                        title={`Image ${idx + 1}`}
                      >
                        <img src={src} alt={`thumb ${idx + 1}`} className="h-16 w-28 object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="mt-5 text-sm text-dd-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="mt-3 text-center text-xs text-dd-muted/70">
              Tip: ESC to close · ← → to change image
            </div>
          </div>
        </div>
      )}
    </>
  );
}
