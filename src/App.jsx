import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}



