import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-darker">
      <div className="relative flex flex-col min-h-screen">
        <Navbar />

        <Hero />

        <main className="bg-brand-darker min-h-screen text-brand-text flex justify-center">
          <Services />
        </main>
      </div>
    </section>
  );
}

export default App;
