"use client";

import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] pointer-events-none rounded-full" />

      {/* KIRI: Teks Utama */}
      <div className="lg:col-span-7 space-y-5 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Realtime Monitoring Center
        </div>

        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black leading-[1.2] tracking-tight text-white">
          Peringatan Dini, <br />
          <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            Selamatkan Negeri
          </span>
        </h1>

        <p className="max-w-xl text-sm text-slate-400 leading-relaxed">
          Pantau informasi bencana secara real-time dan tingkatkan kesiapsiagaan Anda. Informasi kejadian terbaru dirangkum dalam kartu monitoring yang nyaman diakses.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link href="/dashboard" className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/20 hover:opacity-90 transition-all">
            Lihat Peta Bencana <ArrowRight size={14} />
          </Link>
          <button className="inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/[0.05] transition-all">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>

      {/* KANAN: Kartu Gempa Terkini (Hapus min-h kaku agar langsung padat) */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end w-full relative z-10">
        <div className="w-full max-w-[380px] rounded-xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md shadow-xl">
          <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Peringatan Terkini
            </span>
            <span className="bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded text-[9px] font-black uppercase text-red-400">Waspada</span>
          </div>

          <div className="mt-3 flex gap-3">
            <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
              <AlertTriangle size={14} />
            </div>
            <div>
              <h3 className="text-sm font-black text-white leading-tight">Gempa Mag: 5.6</h3>
              <p className="mt-0.5 text-xs text-slate-400">105 km BaratDaya KAB-SUKABUMI-JABAR</p>
            </div>
          </div>

          <div className="mt-3 space-y-1.5 border-t border-white/5 pt-2.5">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/[0.01] p-2 rounded-lg border border-white/5">
                <span className="text-[9px] text-slate-500 font-bold uppercase">Waktu</span>
                <span className="text-xs font-bold text-slate-300 block">14:32:21 WIB</span>
              </div>
              <div className="bg-white/[0.01] p-2 rounded-lg border border-white/5">
                <span className="text-[9px] text-slate-500 font-bold uppercase">Kedalaman</span>
                <span className="text-xs font-bold text-slate-300 block">10 Km</span>
              </div>
            </div>
            <div className="bg-white/[0.01] p-2 rounded-lg border border-white/5">
              <span className="text-[9px] text-slate-500 font-bold uppercase">Lokasi Spesifik</span>
              <span className="text-xs font-bold text-slate-300 block">Sukabumi, Jawa Barat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}