import Container from "../components/Container";

const services = [
  {
    title: "Web Development",
    desc: "High-performance React websites, dashboards and platforms.",
  },
  {
    title: "Mobile Apps",
    desc: "Flutter apps for Android & iOS with clean UX and scalability.",
  },
  {
    title: ".NET Backend",
    desc: "Secure APIs, authentication, databases and integrations.",
  },
  {
    title: "Servers & DevOps",
    desc: "Cloud, SSL, monitoring, backups and scalable infrastructure.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <Container>
        <h2 className="text-4xl font-black text-dd-text mb-12">
          What we do
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-3xl border border-white/10 bg-dd-panel/70 p-6 backdrop-blur transition hover:scale-[1.03]"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-dd-teal/10 to-dd-red/10" />

              <div className="relative">
                <h3 className="text-lg font-semibold text-dd-text">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-dd-muted">
                  {s.desc}
                </p>

                <p className="mt-4 text-xs text-dd-muted">
                  Clean · Secure · Scalable
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
