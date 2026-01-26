export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay } },
});

export const stagger = (staggerChildren = 0.08, delayChildren = 0.06) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});
