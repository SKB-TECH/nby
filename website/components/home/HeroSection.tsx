import { Play } from 'lucide-react'
import React from 'react'
import { HeroLeftCircuit, CircuitBackdrop, HeroPhoto } from './visuals'

export default function HeroSection() {
  return (
     <section className="relative overflow-hidden bg-white">
      <HeroLeftCircuit className="pointer-events-none absolute left-0 top-28 hidden w-[220px] opacity-80 lg:block" />

      <div className="pointer-events-none absolute right-0 top-10 hidden h-[520px] w-[66vw] max-w-[980px] lg:block">
        <CircuitBackdrop className="h-full w-full object-contain object-right opacity-80" />
      </div>

      <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
        <div className="relative z-10 max-w-xl">
          <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.34em] text-blue-600">
            Iteck Agency
          </p>

          <h1 className="text-[44px] font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-[56px] lg:text-[64px]">
            Technology & IT{" "}
            <span className="block font-light text-slate-800">Solutions</span>
          </h1>

          <p className="mt-8 max-w-[430px] text-[15px] leading-8 text-slate-500">
            We transform businesses across major sectors with powerful,
            scalable and adaptable digital solutions built for today&apos;s
            needs.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#services"
              className="inline-flex h-14 items-center justify-center rounded bg-slate-950 px-9 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Our Services
            </a>

            <a
              href="#portfolio"
              className="group inline-flex items-center gap-4 text-sm font-bold text-blue-600"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 ring-8 ring-blue-50/60 transition group-hover:bg-blue-600 group-hover:text-white">
                <Play className="h-4 w-4 fill-current" />
              </span>

              <span className="leading-5">
                Iteck&apos;s
                <br />
                Showreels
              </span>
            </a>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <HeroPhoto />
        </div>
      </div>
    </section>
  )
}
