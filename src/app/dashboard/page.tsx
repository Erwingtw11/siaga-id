import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

import MapPreview from "@/components/map/map-preview";

import SummaryCard from "@/components/dashboard/summary-card";
import ActivityPanel from "@/components/dashboard/activity-panel";

const summaries = [
  {
    title: "Alert Aktif",
    value: "12",
    description: "Peringatan bencana aktif di berbagai wilayah Indonesia.",
  },
  {
    title: "Gempa Hari Ini",
    value: "48",
    description: "Aktivitas gempa terdeteksi dalam 24 jam terakhir.",
  },
  {
    title: "Wilayah Dipantau",
    value: "38",
    description: "Monitoring realtime di seluruh Indonesia.",
  },
  {
    title: "Status Sistem",
    value: "Online",
    description: "Seluruh sistem monitoring berjalan normal.",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-20">
        <Container>
          {/* HERO */}
          <div className="grid items-center gap-16 xl:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                Realtime Monitoring Center
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
                Pantau Aktivitas Bencana Secara Realtime
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                SIAGA.ID membantu masyarakat mendapatkan informasi kebencanaan
                secara cepat, akurat, dan realtime berbasis data monitoring
                BMKG.
              </p>

              {/* QUICK STATS */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">24/7</h3>

                  <p className="mt-2 text-sm text-white/50">
                    Monitoring Realtime
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">38+</h3>

                  <p className="mt-2 text-sm text-white/50">Wilayah Dipantau</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">BMKG</h3>

                  <p className="mt-2 text-sm text-white/50">
                    Data Terintegrasi
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT ALERT PANEL */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0B1324]/90 p-8">
              {/* GLOW */}
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                      Live Emergency
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-white">
                      Gempa M 5.6
                    </h2>
                  </div>

                  <div className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
                    Waspada
                  </div>
                </div>

                {/* ALERT CARD */}
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50">Lokasi</p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        Sukabumi, Jawa Barat
                      </h3>
                    </div>

                    <div className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                      Siaga
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-sm text-white/50">Kedalaman</p>

                      <h4 className="mt-2 text-3xl font-bold text-white">
                        10 KM
                      </h4>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-sm text-white/50">Status</p>

                      <h4 className="mt-2 text-3xl font-bold text-green-400">
                        Aktif
                      </h4>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <p className="text-sm text-white/50">
                      Update terakhir 5 menit lalu
                    </p>

                    <button className="rounded-full bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-400">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {summaries.map((item, index) => (
              <SummaryCard
                key={index}
                title={item.title}
                value={item.value}
                description={item.description}
              />
            ))}
          </div>

          {/* MAIN */}
          <div className="mt-24 grid gap-8 xl:grid-cols-[1.5fr_0.9fr]">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0B1324]/80">
              <MapPreview />
            </div>

            <ActivityPanel />
          </div>

          {/* EARTHQUAKE INFO */}
          <div className="mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-[#0B1324]/80 p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                  Latest Earthquake
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">M 4.8</h2>
              </div>

              <div className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
                Realtime
              </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              <div>
                <p className="text-sm text-white/50">Wilayah</p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Pusat gempa berada di laut 60 km barat laut Toli-Toli
                </h3>
              </div>

              <div>
                <p className="text-sm text-white/50">Waktu</p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  10 Mei 2026 • 19:24:33 WIB
                </h3>
              </div>

              <div>
                <p className="text-sm text-white/50">Potensi</p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  Gempa dirasakan dan diteruskan kepada masyarakat
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
