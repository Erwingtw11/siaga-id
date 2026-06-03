"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

import MapPreview from "@/components/map/map-preview";
import SummaryCard from "@/components/dashboard/summary-card";
import ActivityPanel from "@/components/dashboard/activity-panel";
import { Radio, Clock, MapPin, ShieldAlert, ArrowUpRight } from "lucide-react";

const summaries = [
  { title: "Alert Aktif", value: "12", description: "Peringatan aktif saat ini." },
  { title: "Gempa Hari Ini", value: "48", description: "Terdeteksi 24 jam terakhir." },
  { title: "Wilayah Dipantau", value: "38", description: "Provinsi terpantau penuh." },
  { title: "Status Sistem", value: "Online", description: "Sistem berjalan normal." },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* ── MAIN CONTENT LAYER ─────────────────────────────────────────── */}
        <section className="pt-32 pb-12">
          <Container>

            {/* ── HERO HERO SECTION (TANPA KOTAK PEMBUNGKUS) ────────────────── */}
            {/* Menggunakan grid murni, h-auto, tanpa border/bg hitam yang bikin numpuk */}
            <div className="grid gap-8 lg:grid-cols-12 items-start h-auto w-full mb-12">

              {/* Kiri: Headline Utama (Polosan, Clean & Lapang) */}
              <div className="lg:col-span-7 h-auto space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/10 bg-cyan-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                  </span>
                  Realtime Monitoring Center
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Pantau Aktivitas Bencana Secara{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                    Realtime
                  </span>
                </h1>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                  NUSAALERT menyajikan data kebencanaan secara instan, akurat, dan terintegrasi langsung dari pusat pemantauan BMKG nasional.
                </p>

                {/* Tiga Status Kecil */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-900">
                  <div>
                    <p className="text-xl sm:text-2xl font-black text-white">24/7</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium mt-0.5">Monitoring</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-black text-white">38+</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium mt-0.5">Wilayah</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-black text-cyan-400">BMKG</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium mt-0.5">Data Sync</p>
                  </div>
                </div>
              </div>

              {/* Kanan: Widget Live Emergency (Hanya border merah tipis, minimalis) */}
              <div className="lg:col-span-5 h-auto rounded-2xl border border-red-500/10 bg-red-950/[0.02] p-6 backdrop-blur-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-red-400 flex items-center gap-1.5">
                      <Radio size={12} className="animate-pulse" /> Live Emergency
                    </p>
                    <span className="rounded bg-red-500/10 border border-red-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-400">
                      Waspada
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">Gempa M 5.6</h2>
                      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                        <MapPin size={12} className="text-slate-500" /> Sukabumi, Jawa Barat
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="rounded-xl bg-slate-950/40 border border-slate-900 p-3">
                        <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Kedalaman</p>
                        <p className="text-base font-bold text-slate-200 mt-0.5">10 KM</p>
                      </div>
                      <div className="rounded-xl bg-slate-950/40 border border-slate-900 p-3">
                        <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Status</p>
                        <p className="text-base font-bold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Aktif
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-3 border-t border-slate-900">
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Clock size={12} /> 5m yang lalu
                  </span>
                  <button className="inline-flex items-center gap-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition cursor-pointer">
                    Detail <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>

            </div>

            {/* ── SUMMARY STATS GRID (SEKARANG DIJAMIN AMAN & TERBACA) ──────── */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full mb-10 relative z-10">
              {summaries.map((item, index) => (
                <SummaryCard
                  key={index}
                  title={item.title}
                  value={item.value}
                  description={item.description}
                />
              ))}
            </div>

            {/* ── MAPS & SIDEBAR PANEL ──────────────────────────────────────── */}
            {/* Grid utama untuk peta dan panel aktivitas */}
            {/* GANTI BAGIAN INI DI PAGE.TSX ANDA */}
            <div className="grid gap-6 lg:grid-cols-12 w-full items-start relative z-10">
              <div className="lg:col-span-7 w-full">
                <MapPreview />
              </div>
              <div className="lg:col-span-5 w-full">
                <ActivityPanel />
              </div>
            </div>

          </Container>
        </section>
      </div>

      <Footer />
    </main>
  );
}