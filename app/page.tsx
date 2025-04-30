import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";
import Connect from "./components/connect";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Connect />
      <Footer />
    </main>
  );
}
