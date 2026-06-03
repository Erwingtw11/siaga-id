"use client";

import React from "react";
import { Radio, AlertTriangle, Info, BellRing, BarChart3 } from "lucide-react";

const activities = [
  {
    text: "Gempa terdeteksi di Lampung Selatan",
    time: "5 menit lalu",
    status: "Siaga",
    color: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    icon: AlertTriangle
  },
  {
    text: "Aktivitas gempa meningkat di Aceh",
    time: "12 menit lalu",
    status: "Awas",
    color: "bg-red-500/10 border-red-500/20 text-red-400",
    icon: BellRing
  },
  {
    text: "Pemantauan tsunami berjalan normal",
    time: "20 menit lalu",
    status: "Normal",
    color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    icon: Info
  },
  {
    text: "Update data BMKG berhasil disinkronkan",
    time: "35 menit lalu",
    status: "Realtime",
    color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    icon: Info
  },
];

const weeklyTrend = [
  { day: "Sen", count: 12, height: "45%" },
  { day: "Sel", count: 19, height: "70%" },
  { day: "Rab", count: 8, height: "30%" },
  { day: "Kam", count: 15, height: "55%" },
  { day: "Jum", count: 24, height: "95%" },
  { day: "Sab", count: 14, height: "50%" },
  { day: "Min", count: 18, height: "65%" },
];

export default function ActivityPanel() {
  return (
    <div className="w-full flex flex-col gap-4">

      {/* ── BAGIAN ATAS: LIVE ALERTS ────────────────────────────────── */}
      <div className="flex flex-col space-y-2.5 shrink-0">
        <div className="space-y-0.5">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-1.5">
            <Radio size={11} className="animate-pulse" /> LIVE ALERTS
          </p>
          <h2 className="text-lg font-black text-white tracking-tight">
            Aktivitas Terbaru
          </h2>
        </div>

        <div className="space-y-2">
          {activities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group flex items-start justify-between gap-4 p-2.5 rounded-xl border border-white/5 bg-slate-950/20 hover:bg-slate-950/40 hover:border-white/10 transition-all duration-200"
              >
                <div className="flex items-start gap-2.5">
                  <div className={`p-1.5 rounded-lg ${item.color.split(' ')[0]} border ${item.color.split(' ')[1]} mt-0.5`}>
                    <IconComponent size={13} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors leading-tight">
                      {item.text}
                    </p>
                    <p className="text-[10px] font-medium text-slate-500 mt-0.5">
                      {item.time}
                    </p>
                  </div>
                </div>
                <span className={`inline-flex items-center rounded-md border px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${item.color}`}>
                  {item.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── BAGIAN BAWAH: PANEL GRAFIK PANJANG KE BAWAH ── */}
      {/* h-[360px] memaksa boks abu-abu ini memanjang ke bawah menyentuh batas bawah peta */}
      <div className="w-full h-[360px] flex flex-col justify-between rounded-xl border border-white/5 bg-slate-950/20 p-4 shrink-0">

        {/* Header Grafik */}
        <div className="flex items-center justify-between pb-3 border-b border-white/5 shrink-0">
          <div className="flex items-center gap-1.5">
            <BarChart3 size={13} className="text-slate-500" />
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Tren Frekuensi Gempa (7 Hari Terakhir)
            </h3>
          </div>
          <span className="text-[10px] font-bold text-cyan-400">Total: 109</span>
        </div>

        {/* AREA UTAMA GRAFIK: h-[260px] menjamin tiang grafik berdiri tinggi dan megah */}
        <div className="w-full flex items-end justify-between gap-2.5 h-[260px] pt-8 px-0.5">
          {weeklyTrend.map((data, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 group gap-2 h-full justify-end">

              {/* Tiang Latar Belakang Abu-abu */}
              <div className="w-full bg-slate-900/20 border border-white/[0.02] rounded-t-md relative flex flex-col justify-end flex-1 h-full">

                {/* Batang Isi Gradasi Cyan Glow */}
                <div
                  className="w-full bg-gradient-to-t from-cyan-500/40 to-cyan-400 rounded-t-md relative group-hover:from-cyan-400/50 group-hover:to-cyan-300 transition-all duration-300 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                  style={{ height: data.height }}
                >
                  {/* Tooltip Angka Popup */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-slate-950 border border-slate-800 text-[9px] font-bold text-white px-1.5 py-0.5 rounded transition-all duration-150 z-20 pointer-events-none whitespace-nowrap shadow-xl">
                    {data.count} Gempa
                  </div>
                </div>

              </div>

              {/* Label Hari */}
              <span className="text-[9px] font-bold text-slate-500 group-hover:text-slate-300 transition-colors block shrink-0">
                {data.day}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}