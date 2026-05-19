"use client";

import Link from "next/link";

import Container from "@/components/layout/container";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"></div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <div className="relative z-10">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Real-Time Disaster Monitoring
            </p>

            <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Pantau Potensi Bencana Secara Real-Time
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              SIAGA.ID membantu masyarakat Indonesia mendapatkan informasi
              bencana lebih cepat melalui sistem monitoring dan peringatan dini
              berbasis data realtime.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="rounded-full bg-red-500 px-7 py-3.5 text-base font-medium text-white transition duration-300 hover:bg-red-400"
              >
                Pantau Sekarang
              </Link>

              <Link
                href="#features"
                className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-base font-medium text-white transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-white">38+</h3>

                <p className="mt-2 text-sm text-white/50">Wilayah Dipantau</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">24/7</h3>

                <p className="mt-2 text-sm text-white/50">
                  Monitoring Realtime
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">BMKG</h3>

                <p className="mt-2 text-sm text-white/50">Data Terintegrasi</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A]/80 shadow-2xl lg:h-[520px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-red-500/10"></div>

              <div className="relative flex h-full items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
                </div>

                <div className="relative z-10 w-[88%] rounded-3xl border border-white/10 bg-[#071120]/90 p-6 shadow-[0_0_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                        Live Alert
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        Aktivitas Gempa
                      </h3>
                    </div>

                    <div className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-400">
                      Realtime
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/50">Lokasi</p>

                        <h4 className="mt-1 text-lg font-semibold text-white">
                          Aceh
                        </h4>
                      </div>

                      <div className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-400">
                        Siaga
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/5 p-4">
                        <p className="text-sm text-white/50">Magnitude</p>

                        <h4 className="mt-2 text-2xl font-bold text-white">
                          5.2
                        </h4>
                      </div>

                      <div className="rounded-2xl bg-white/5 p-4">
                        <p className="text-sm text-white/50">Kedalaman</p>

                        <h4 className="mt-2 text-2xl font-bold text-white">
                          12km
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                    <div>
                      <p className="text-sm text-white/50">Status Sistem</p>

                      <h4 className="mt-1 font-semibold text-white">
                        Monitoring Aktif
                      </h4>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-green-400"></span>

                      <p className="text-sm text-green-400">Online</p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-16 top-16 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)]"></div>

                <div className="absolute bottom-16 right-16 h-4 w-4 rounded-full bg-red-400 shadow-[0_0_25px_rgba(248,113,113,0.8)]"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
