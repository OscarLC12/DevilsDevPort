import Container from "../components/Container";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <h2 className="text-4xl font-black text-dd-text mb-6">
          Contact Us
        </h2>

        <p className="max-w-xl text-dd-muted mb-10">
          Tell us about your project and we’ll get back to you shortly.
        </p>

        <form className="grid gap-6 max-w-xl">
          <input
            type="text"
            placeholder="Your name"
            className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-dd-text"
          />
          <input
            type="email"
            placeholder="Email address"
            className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-dd-text"
          />
          <textarea
            rows="4"
            placeholder="Project details"
            className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-dd-text"
          />

          <button
            type="submit"
            className="rounded-2xl bg-dd-teal px-6 py-3 font-semibold text-dd-bg hover:bg-dd-tealDark transition shadow-glow"
          >
            Send message
          </button>
        </form>
      </Container>
    </section>
  );
}
