import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-darker">
      <div className="relative flex flex-col min-h-screen">
        <Navbar />

        <Hero />

        <main className="bg-brand-darker min-h-screen text-brand-text flex flex-col gap-1">
          <Services />
          <Pricing />
          <Skills />
          <Contact />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </section>
  );
}

export default App;
