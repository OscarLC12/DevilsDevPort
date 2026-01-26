import Container from "./Container";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-dd-bg/80 backdrop-blur border-b border-white/10">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Name (click -> top) */}
          <a
            href="#top"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-dd-teal/60 rounded-xl px-2 py-1 -ml-2"
            aria-label="Go to top"
          >
            <img
              src={logo}
              alt="Devils Dev logo"
              className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-[1.05]"
            />

            <span className="text-lg font-extrabold tracking-wide bg-gradient-to-r from-dd-teal via-dd-text to-dd-teal bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:bg-[position:100%_0]">
              Devils Dev
            </span>
          </a>

          {/* Links */}
          <nav className="hidden md:flex gap-6 text-sm text-dd-muted">
            <a href="#services" className="hover:text-dd-text transition">
              Services
            </a>
            <a href="#projects" className="hover:text-dd-text transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-dd-text transition">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-xl bg-dd-teal px-4 py-2 text-sm font-semibold text-dd-bg hover:bg-dd-tealDark transition shadow-glow"
          >
            Get a quote
          </a>
        </div>
      </Container>
    </header>
  );
}
