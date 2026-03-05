import Navbar from "./layout/Navbar";

function App() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-darker">
      <img
        src="/hero-bg.svg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      <div className="relative flex flex-col min-h-screen ">
        <Navbar />
      </div>
    </section>
  );
}

export default App;
