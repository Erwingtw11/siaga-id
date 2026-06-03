import { Bell, ArrowRight } from "lucide-react";

import Container from "@/components/layout/container";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-16 md:py-20 overflow-hidden bg-[#071120]">
      <Container>
        <div className="group relative overflow-hidden rounded-[24px] border border-red-500/20 bg-gradient-to-r from-[#1E1114]/95 via-[#0B0D14]/98 to-[#0F172A]/90 p-8 md:p-12 shadow-[0_20px_50px_rgba(239,68,68,0.08)]">
          {/* Glowing Blobs */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-red-500/10 blur-[80px] pointer-events-none" />
          <div className="absolute right-10 top-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-cyan-500/8 blur-[80px] pointer-events-none" />

          {/* Seismic Wave SVG Overlay */}
          <div className="absolute inset-y-0 right-[20%] left-[35%] opacity-20 pointer-events-none hidden md:block">
            <svg className="h-full w-full" viewBox="0 0 400 100" preserveAspectRatio="none">
              <path
                d="M0,50 L80,50 L90,45 L100,55 L110,35 L120,65 L130,10 L140,90 L150,40 L160,60 L170,50 L250,50 L260,40 L270,60 L280,30 L290,70 L300,50 L400,50"
                fill="none"
                stroke="url(#seismic-grad)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="seismic-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff4d4d" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#ff4d4d" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00d1ff" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Column (Bell Icon & Text) */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left max-w-2xl">
              {/* Glowing Bell Icon Container */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-red-500/10 border border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.25)] animate-pulse">
                <Bell size={26} className="fill-red-500/10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl leading-snug">
                  Aktifkan Notifikasi Sekarang
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  Jangan lewatkan informasi penting untuk keselamatan Anda dan keluarga.
                </p>
              </div>
            </div>

            {/* Right Column (White Button) */}
            <div className="shrink-0 w-full sm:w-auto">
              <button className="group/btn inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-white px-8 py-3.5 text-sm font-bold text-slate-950 shadow-[0_10px_25px_rgba(255,255,255,0.15)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-[0_15px_30px_rgba(255,255,255,0.25)]">
                Aktifkan Sekarang
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

