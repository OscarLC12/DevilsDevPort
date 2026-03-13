import Container from "../components/Container";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-dd-teal">
              Let’s Work Together
            </span>

            <h2 className="mb-5 text-4xl font-black leading-tight text-dd-text md:text-5xl">
              Ready to build something
              <span className="text-dd-teal"> amazing?</span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-dd-muted md:text-lg">
              We help brands, startups, and businesses create modern digital
              experiences. Reach out and let’s talk about your next project.
            </p>
          </div>

          {/* Main Contact Cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left large card */}
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm shadow-glow md:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-dd-teal/15 text-3xl text-dd-teal">
                🚀
              </div>

              <h3 className="mb-4 text-3xl font-black text-dd-text">
                Start your next project with Devils Dev
              </h3>

              <p className="mb-8 max-w-xl leading-relaxed text-dd-muted">
                Whether you need a landing page, a business website, a mobile
                app, or custom software, we’re ready to help you turn your ideas
                into something modern, functional, and powerful.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <a
                  href="tel:+526751052925"
                  className="rounded-2xl bg-dd-teal px-5 py-3 text-center font-semibold text-dd-bg transition hover:bg-dd-tealDark shadow-glow"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/526751052925"
                  className="rounded-2xl border border-dd-teal/30 bg-dd-teal/10 px-5 py-3 text-center font-semibold text-dd-teal transition hover:bg-dd-teal/20"
                >
                  WhatsApp
                </a>

                <a
                  href="mailto:jorgedev@devsdevils.com"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center font-semibold text-dd-text transition hover:bg-white/10"
                >
                  Send Email
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-dd-teal">
                  Quick response
                </p>
                <p className="mt-2 text-dd-muted leading-relaxed">
                  Contact us by phone, WhatsApp, or email and we’ll guide you
                  through the best solution for your business.
                </p>
              </div>
            </div>

            {/* Right column cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Call */}
              <a
                href="tel:+526751052925"
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-dd-teal/40 hover:bg-white/10 hover:shadow-glow"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-dd-teal/15 text-2xl text-dd-teal">
                  📞
                </div>

                <h3 className="mb-2 text-2xl font-bold text-dd-text">
                  Call Us
                </h3>

                <p className="mb-5 leading-relaxed text-dd-muted">
                  Speak with us directly about your website, app, or custom
                  software project.
                </p>

                <div className="text-lg font-semibold text-dd-teal transition group-hover:text-dd-text">
                  +52 1 675 105 2925
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/526751052925"
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-dd-teal/40 hover:bg-white/10 hover:shadow-glow"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-dd-teal/15 text-2xl text-dd-teal">
                  💬
                </div>

                <h3 className="mb-2 text-2xl font-bold text-dd-text">
                  WhatsApp
                </h3>

                <p className="mb-5 leading-relaxed text-dd-muted">
                  Send us a quick message on WhatsApp and we’ll reply as soon as
                  possible.
                </p>

                <div className="text-lg font-semibold text-dd-teal transition group-hover:text-dd-text">
                  Chat with us
                </div>
              </a>

              {/* Email Jorge */}
              <a
                href="mailto:jorgedev@devsdevils.com"
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-dd-teal/40 hover:bg-white/10 hover:shadow-glow"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-dd-teal/15 text-2xl text-dd-teal">
                  ✉️
                </div>

                <h3 className="mb-2 text-2xl font-bold text-dd-text">
                  Email Jorge
                </h3>

                <p className="mb-5 leading-relaxed text-dd-muted">
                  Send us your ideas, requirements, or business goals and we’ll
                  get back to you shortly.
                </p>

                <div className="break-all text-lg font-semibold text-dd-teal transition group-hover:text-dd-text">
                  jorgedev@devsdevils.com
                </div>
              </a>

              {/* Email Oscar */}
              <a
                href="mailto:oscardev@devsdevils.com"
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-dd-teal/40 hover:bg-white/10 hover:shadow-glow"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-dd-teal/15 text-2xl text-dd-teal">
                  ✉️
                </div>

                <h3 className="mb-2 text-2xl font-bold text-dd-text">
                  Email Oscar
                </h3>

                <p className="mb-5 leading-relaxed text-dd-muted">
                  Contact us directly for project inquiries, quotes, and business
                  collaborations.
                </p>

                <div className="break-all text-lg font-semibold text-dd-teal transition group-hover:text-dd-text">
                  oscardev@devsdevils.com
                </div>
              </a>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-8 text-center md:p-10">
            <h3 className="mb-4 text-2xl font-black text-dd-text md:text-3xl">
              Let’s bring your vision to life
            </h3>

            <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-dd-muted">
              From landing pages and websites to mobile apps and custom
              platforms, Devils Dev helps businesses build digital products that
              look modern, perform well, and grow with their goals.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+526751052925"
                className="rounded-2xl bg-dd-teal px-6 py-3 font-semibold text-dd-bg transition hover:bg-dd-tealDark shadow-glow"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/526751052925"
                className="rounded-2xl border border-dd-teal/30 bg-dd-teal/10 px-6 py-3 font-semibold text-dd-teal transition hover:bg-dd-teal/20"
              >
                Chat on WhatsApp
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