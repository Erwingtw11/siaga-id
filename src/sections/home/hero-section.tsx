import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,194,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,0,92,0.12),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium text-cyan-300">
            ● Realtime Monitoring Center
          </div>

          <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
            Pantau Aktivitas
            <span className="block text-cyan-400">Bencana Secara</span>
            Realtime
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
            SIAGA.ID membantu masyarakat mendapatkan informasi kebencanaan
            secara cepat, akurat, dan realtime berbasis data monitoring BMKG.
          </p>

          {/* BUTTON */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/dashboard"
              className="rounded-2xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
            >
              Pantau Sekarang
            </Link>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Pelajari Lebih Lanjut
            </button>
          </div>

          {/* QUICK STATS */}
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <h3 className="text-4xl font-black text-white">38+</h3>
              <p className="mt-1 text-sm text-white/50">Wilayah Dipantau</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">24/7</h3>
              <p className="mt-1 text-sm text-white/50">Monitoring Realtime</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">BMKG</h3>
              <p className="mt-1 text-sm text-white/50">Data Terintegrasi</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(10,18,40,0.95),rgba(18,24,58,0.95))] p-6 shadow-2xl">
            {/* GLOW */}
            <div className="absolute left-16 top-16 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-red-500/20 blur-3xl" />

            {/* GRID */}
            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="relative">
              {/* HEADER */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                    Live Emergency
                  </p>

                  <h3 className="mt-3 text-4xl font-black text-white">
                    Gempa M 5.6
                  </h3>
                </div>

                <div className="rounded-full bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-400">
                  Waspada
                </div>
              </div>

              {/* CONTENT */}
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm text-white/50">Lokasi</p>

                    <h4 className="mt-2 text-3xl font-bold text-white">
                      Sukabumi, Jawa Barat
                    </h4>
                  </div>

                  <div className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                    Siaga
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/[0.05] p-4">
                    <p className="text-sm text-white/50">Kedalaman</p>

                    <h4 className="mt-2 text-3xl font-black text-white">
                      10 KM
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-white/[0.05] p-4">
                    <p className="text-sm text-white/50">Status Sistem</p>

                    <h4 className="mt-2 text-3xl font-black text-green-400">
                      Aktif
                    </h4>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <p className="text-sm text-white/50">
                    Update terakhir 5 menit lalu
                  </p>

                  <button className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-400">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
