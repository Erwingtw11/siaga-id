"use client";

import React from "react";
import { Radio, MapPin, Activity } from "lucide-react";

export default function MapPreview() {
  return (
    <div className="w-full space-y-6">

      {/* ── HEADER & LIVE ALERT ROW ───────────────────────────────────── */}
      {/* Menggunakan flexbox agar judul peta dan info alert berjejer rapi di atas */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
            Disaster Monitoring Map
          </p>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Peta Monitoring Indonesia
          </h2>
        </div>

        {/* Info Alert Ringkas (Dipindah ke atas agar peta bersih total) */}
        <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-1 bg-slate-950/60 border border-slate-900 rounded-xl px-4 py-2.5 backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-black text-white uppercase tracking-tight">Gempa M 5.6</span>
          </div>
          <div className="hidden sm:block h-3 w-[1px] bg-slate-800" />
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <MapPin size={12} className="text-slate-500" /> Sukabumi
          </span>
          <div className="hidden sm:block h-3 w-[1px] bg-slate-800" />
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Activity size={12} className="text-slate-500" /> 10 KM • <span className="text-amber-500 font-bold">Siaga</span>
          </span>
        </div>
      </div>

      {/* ── CONTAINER GOOGLE MAPS PURE ─────────────────────────────────── */}
      {/* Dibuat polos, fokus, tanpa ada teks kustom melayang yang merusak UI */}
      <div className="relative w-full h-[520px] rounded-2xl overflow-hidden border border-slate-900 bg-[#030712] shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15847.213233633887!2d106.9266!3d-6.9214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1717431521000!5m2!1sid!2sid"
          className="w-full h-full absolute inset-0 opacity-85"
          style={{
            border: 0,
            filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)"
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
}