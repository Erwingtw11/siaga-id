"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function LiveAlertSection() {
  const alerts = [
    { lokasi: "Lampung Selatan", mag: "5.8", waktu: "10 mnt lalu", dalam: "14 Km", status: "Siaga", bg: "bg-orange-500/10 border-orange-500/20 text-orange-400", dot: "bg-orange-500" },
    { lokasi: "Bandung", mag: "4.9", waktu: "25 mnt lalu", dalam: "8 Km", status: "Waspada", bg: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400", dot: "bg-yellow-500" },
    { lokasi: "Aceh", mag: "6.2", waktu: "40 mnt lalu", dalam: "22 Km", status: "Awas", bg: "bg-red-500/10 border-red-500/20 text-red-400", dot: "bg-red-500" },
  ];

  return (
    <div className="space-y-6 py-2 w-full">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 block">
            Live Disaster Alerts
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Hierarki Prioritas Jelas
          </h2>
        </div>

        {/* Panel Kanan Atas */}
        <div className="flex gap-4 bg-white/[0.01] border border-white/5 p-3 rounded-xl max-w-max">
          <div className="text-center px-1">
            <span className="text-[9px] text-slate-500 font-bold uppercase block">Sistem</span>
            <span className="text-xs font-black text-white block">24/7</span>
          </div>
          <div className="w-px bg-white/10 h-6 self-center" />
          <div className="text-center px-1">
            <span className="text-[9px] text-slate-500 font-bold uppercase block">Alerts</span>
            <span className="text-xs font-black text-white block">12 Live</span>
          </div>
        </div>
      </div>

      {/* Grid Kartu Tiga Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {alerts.map((item, idx) => (
          <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-xl p-5 flex flex-col justify-between h-auto shadow-lg backdrop-blur-sm hover:border-white/10 transition-all space-y-5">

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <AlertTriangle size={12} /> {item.waktu}
                </span>
                <span className={`text-[9px] font-black uppercase tracking-wider border px-2 py-0.5 rounded ${item.bg}`}>
                  <span className={`inline-block h-1 w-1 rounded-full mr-1 ${item.dot}`} />
                  {item.status}
                </span>
              </div>

              <div className="flex justify-between items-start gap-4">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest block">Lokasi Prioritas</span>
                  <h3 className="text-lg font-black text-white tracking-tight">{item.lokasi}</h3>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-bold text-slate-500 uppercase block">MAG</span>
                  <span className="text-xl font-black text-white block leading-none mt-0.5">{item.mag}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-3">
              <div className="grid grid-cols-3 gap-1.5 bg-white/[0.01] border border-white/5 p-2 rounded-lg text-center">
                <div>
                  <span className="text-[8px] text-slate-500 font-medium block uppercase">Kedalaman</span>
                  <span className="text-[11px] font-bold text-slate-300 block">{item.dalam}</span>
                </div>
                <div className="border-x border-white/5">
                  <span className="text-[8px] text-slate-500 font-medium block uppercase">Status</span>
                  <span className="text-[11px] font-bold text-slate-300 block">Live</span>
                </div>
                <div>
                  <span className="text-[8px] text-slate-500 font-medium block uppercase">Respon</span>
                  <span className="text-[11px] font-bold text-cyan-400 block">Aktif</span>
                </div>
              </div>

              <div className="flex justify-end text-[10px]">
                <Link href="/dashboard" className="font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors">
                  Detail &rarr;
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}