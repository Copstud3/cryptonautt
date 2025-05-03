import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";
import Connect from "./components/connect";
import Footer from "./components/footer";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Connect />
      <Footer />
    </main>
  );
}
