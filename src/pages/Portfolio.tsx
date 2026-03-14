import hero__bg from "../assets/hero-bg.svg";
import code__prewiew from "../assets/code-preview.png";

export default function Portfolio() {
  return (
    <main className="bg-brand-darker">
      <section className="relative min-h-[70vh] flex items-center px-6 overflow-hidden">
        <img
          src={hero__bg}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-linear-to-r from-brand-darker/90 via-brand-darker/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-brand-darker" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24">
          <div className="flex flex-col gap-6">
            <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase">
              Moje prace
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
              Port
              <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                folio
              </span>
            </h1>

            <div className="w-16 h-0.5 bg-linear-to-r from-brand-cyan to-brand-purple" />

            <p className="text-brand-muted text-base leading-relaxed max-w-md">
              Projekty które zrealizowałem — od stron wizytówek po sklepy
              internetowe i aplikacje webowe. Każdy projekt to nowe wyzwanie i
              dbałość o każdy detal.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-linear-to-r from-brand-cyan to-brand-purple text-[#060910] font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
              >
                Zobacz projekty
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-brand-surface text-brand-muted font-semibold text-sm tracking-wide hover:border-brand-cyan hover:text-brand-text transition-all duration-300"
              >
                Skontaktuj się
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-linear-to-br from-brand-cyan/20 to-brand-purple/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-2xl overflow-hidden border border-brand-surface shadow-2xl">
                <img
                  src={code__prewiew}
                  alt="Podgląd kodu"
                  className="w-full max-w-lg object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-brand-darker/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projekty */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-4">
            Realizacje
          </p>
          <h2 className="text-4xl font-bold text-brand-text mb-16">Projekty</h2>
          <p className="text-brand-muted">Projekty wkrótce...</p>
        </div>
      </section>
    </main>
  );
}
