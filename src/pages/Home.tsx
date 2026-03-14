import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <div className="relative flex flex-col min-h-screen">
      <Hero />

      <main className="bg-brand-darker min-h-screen text-brand-text flex flex-col gap-1">
        <Services />
        <Pricing />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
