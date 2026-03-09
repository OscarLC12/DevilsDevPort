import Container from "../components/Container";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-dd-teal mb-4">
              Let’s Work Together
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-dd-text mb-5 leading-tight">
              Ready to build something
              <span className="text-dd-teal"> amazing?</span>
            </h2>

            <p className="max-w-2xl mx-auto text-dd-muted text-base md:text-lg leading-relaxed">
              We help brands, startups, and businesses create modern digital
              experiences. Reach out and let’s talk about your next project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Call */}
            <a
              href="tel:+14692100353"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-dd-teal/40 hover:bg-white/10 hover:shadow-glow"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-dd-teal/15 text-dd-teal text-2xl">
                📞
              </div>

              <h3 className="text-2xl font-bold text-dd-text mb-2">
                Call Us
              </h3>

              <p className="text-dd-muted mb-5 leading-relaxed">
                Speak with us directly about your website, app, or custom
                software project.
              </p>

              <div className="text-lg font-semibold text-dd-teal group-hover:text-dd-text transition">
                (469) 210-0353
              </div>
            </a>

            {/* SMS */}
            <a
              href="sms:+14692100353"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-dd-teal/40 hover:bg-white/10 hover:shadow-glow"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-dd-teal/15 text-dd-teal text-2xl">
                💬
              </div>

              <h3 className="text-2xl font-bold text-dd-text mb-2">
                Send a Text
              </h3>

              <p className="text-dd-muted mb-5 leading-relaxed">
                Prefer texting? Send us a quick message and we’ll reply as soon
                as possible.
              </p>

              <div className="text-lg font-semibold text-dd-teal group-hover:text-dd-text transition">
                Message us now
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:jorgedev@devsdevils.com"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-dd-teal/40 hover:bg-white/10 hover:shadow-glow"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-dd-teal/15 text-dd-teal text-2xl">
                ✉️
              </div>

              <h3 className="text-2xl font-bold text-dd-text mb-2">
                Email Us
              </h3>

              <p className="text-dd-muted mb-5 leading-relaxed">
                Send us your ideas, requirements, or business goals and we’ll
                get back to you shortly.
              </p>

              <div className="text-lg font-semibold text-dd-teal break-all group-hover:text-dd-text transition">
                jorgedev@devsdevils.com
              </div>
            </a>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-black text-dd-text mb-4">
              Let’s bring your vision to life
            </h3>

            <p className="max-w-2xl mx-auto text-dd-muted mb-6 leading-relaxed">
              Whether you need a landing page, business website, mobile app, or
              custom software, Devils Dev is here to help you create something
              modern, functional, and powerful.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+14692100353"
                className="rounded-2xl bg-dd-teal px-6 py-3 font-semibold text-dd-bg transition hover:bg-dd-tealDark shadow-glow"
              >
                Call Now
              </a>

              <a
                href="mailto:jorgedev@devsdevils.com"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-dd-text transition hover:bg-white/10"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}