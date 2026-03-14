import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import MainLayout from "./pages/MainLayout";

function App() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-darker">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
