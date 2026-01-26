import Container from "./Container";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-dd-bg">
      {/* glow sutil */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-t from-transparent to-dd-teal/10 blur-3xl" />

      <Container>
        <div className="relative py-16 grid gap-12 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Devils Dev"
                className="h-12 w-12 object-contain"
              />
              <span className="text-lg font-extrabold tracking-wide bg-gradient-to-r from-dd-teal via-dd-text to-dd-teal bg-clip-text text-transparent">
                Devils Dev
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm text-dd-muted">
              We build high-impact software: web platforms, mobile apps,
              secure backends and production-ready infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-dd-text tracking-wide">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-dd-muted">
              <li>
                <a href="#top" className="hover:text-dd-text transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-dd-text transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-dd-text transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-dd-text transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CTA / Contact */}
          <div>
            <h4 className="text-sm font-semibold text-dd-text tracking-wide">
              Let’s work together
            </h4>
            <p className="mt-4 text-sm text-dd-muted">
              Have an idea or need a system built the right way?
            </p>

            <a
              href="#contact"
              className="inline-flex mt-6 rounded-xl bg-dd-teal px-5 py-3 text-sm font-semibold text-dd-bg shadow-glow hover:bg-dd-tealDark transition"
            >
              Get a quote
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center text-xs text-dd-muted">
          © {new Date().getFullYear()} Devils Dev. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
