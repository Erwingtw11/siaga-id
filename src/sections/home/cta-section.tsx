import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

import Container from "@/components/layout/container";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient glow behind the section */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <Container>
        <div className="group relative overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/[0.08] bg-gradient-to-br from-[#0b1220]/95 via-[#070b14]/98 to-[#0b1220]/95 px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          {/* Tech Grid Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

          {/* Layered Glowing Blobs */}
          <div className="absolute -left-12 -top-12 h-80 w-80 rounded-full bg-red-500/10 blur-[90px] transition-all duration-700 ease-out group-hover:bg-red-500/15" />
          <div className="absolute -bottom-12 -right-12 h-80 w-80 rounded-full bg-cyan-500/10 blur-[90px] transition-all duration-700 ease-out group-hover:bg-cyan-500/15" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/15 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </span>
              Stay Prepared
            </div>

            {/* Heading with Highlighted Accent */}
            <h2 className="mt-6 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-[#FF4D4D] via-[#ff6868] to-[#ff4d4d] bg-clip-text text-transparent">
                Tetap Siaga
              </span>{" "}
              Sebelum Bencana Terjadi
            </h2>

            {/* Sub-text Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
              SIAGA.ID membantu masyarakat Indonesia mendapatkan informasi
              bencana lebih cepat agar dapat mengambil tindakan yang tepat
              sebelum situasi menjadi darurat.
            </p>

            {/* Responsive Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="group/btn inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF4D4D] to-[#f43f5e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(239,68,68,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(239,68,68,0.4)] sm:px-8"
              >
                Pantau Sekarang
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                />
              </Link>

              <Link
                href="#features"
                className="group/btn2 inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35 hover:bg-cyan-400/5 hover:text-white sm:px-8"
              >
                <Compass
                  size={16}
                  className="text-slate-400 transition-colors duration-300 group-hover/btn2:text-cyan-400"
                />
                Pelajari Kesiapsiagaan
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

