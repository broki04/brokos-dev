import { SERVICES } from "../data/services";
import Pricing from "./Pricing";

export default function Services() {
  return (
    <section id="services" className="bg-brand-darker py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-4">
            Co oferuję
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-brand-text">
            Usługi &{" "}
            <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              Realizacje
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-24 mb-32">
          {SERVICES.map((service, i) => (
            <div
              key={service.tag}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                <span className="inline-block text-xs font-mono tracking-[3px] uppercase text-brand-cyan border border-brand-cyan/30 rounded px-3 py-1 mb-6">
                  {service.tag}
                </span>

                <h3 className="text-2xl lg:text-3xl font-bold text-brand-text mb-4">
                  {service.title}
                </h3>

                <p className="text-brand-muted leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-3">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-brand-muted text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-brand-cyan to-brand-purple shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={i % 2 !== 0 ? "lg:[direction-ltr]" : ""}>
                <div className="relative rounded-2xl overflow-hidden border border-brand-surface aspect-video bg-linear-to-br from-brand-dark to-brand-surface flex items-center justify-center">
                  <div className="absolute top-4 left-4 right-4 h-6 rounded bg-brand-surface flex items-center gap-2 px-3">
                    <div className="w-2 h-2 rounded-full bg-brand-subtle" />
                    <div className="w-2 h-2 rounded-full bg-brand-subtle" />
                    <div className="w-2 h-2 rounded-full bg-brand-subtle" />
                    <div className="flex-1 h-2 rounded bg-brand-subtle ml-2" />
                  </div>

                  <span className="text-brand-subtle text-sm font-mono tracking-widest">
                    {service.tag} / preview
                  </span>

                  <div className="absolute inset-0 bg-linear-to-br from-brand-cyan/5 to-brand-purple/5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pricing />
      </div>
    </section>
  );
}
