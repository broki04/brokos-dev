import Hero from "./layout/Hero";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-darker">
      <div className="relative flex flex-col min-h-screen">
        <Navbar />
        
        <Hero /> 
      </div>
    </section>
  );
}

export default App;
