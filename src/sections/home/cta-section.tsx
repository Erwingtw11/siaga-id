"use client";

import { Bell } from "lucide-react";

export default function CtaSection() {
  return (
    // Mengurangi padding luar atas-bawah agar jarak antar-seksi lebih padat dan pas
    <div className="w-full bg-[#04080f]" style={{ paddingTop: '60px', paddingBottom: '60px' }}>

      {/* 1. MENGUBAH LEBAR KOTAK UTAMA AGAR SEJAJAR DENGAN LAYOUT ATAS & BAWAHNYA */}
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">

        {/* ── SPANDUK CTA ── */}
        <div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-slate-950 via-red-950/15 to-slate-950 shadow-2xl"
          style={{
            paddingTop: '32px',    // Padding vertikal dibuat ringkas & slim
            paddingBottom: '32px',
            paddingLeft: '40px',   // Menjaga teks tetap aman di dalam grid luar
            paddingRight: '40px'
          }}
        >

          {/* Background Pulse Effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.2),transparent_70%)] flex items-center justify-center">
            <svg width="100%" height="100" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-red-500 stroke-2">
              <path d="M0 50H400L415 20L430 80L445 40L460 60L475 50H1000" />
            </svg>
          </div>

          {/* Konten Utama */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between" style={{ gap: '32px' }}>

            {/* Sisi Kiri: Ikon & Teks Info */}
            {/* 2. max-w Diperluas ke 4xl agar teks deskripsi memanjang mengisi ruang kosong */}
            <div className="flex flex-col sm:flex-row items-start max-w-4xl w-full" style={{ gap: '20px' }}>

              {/* Box Ikon Bel */}
              <div className="h-11 w-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500 shadow-lg shadow-red-500/5">
                <Bell size={18} />
              </div>

              {/* Jarak teks judul dan deskripsi */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight" style={{ lineHeight: '1.2' }}>
                  Aktifkan Notifikasi Sekarang
                </h3>
                <p className="text-sm text-slate-400" style={{ lineHeight: '1.5' }}>
                  Jangan lewatkan informasi penting untuk keselamatan Anda dan keluarga. Dapatkan alert langsung ke perangkat Anda secara realtime.
                </p>
              </div>
            </div>

            {/* Sisi Kanan: Tombol Putih Proporsional */}
            <button
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-white text-xs font-bold text-slate-950 shadow-md hover:bg-slate-100 transition-all shrink-0 self-start lg:self-center"
              style={{ paddingLeft: '24px', paddingRight: '24px' }}
            >
              Aktifkan Sekarang <span className="text-sm">&rarr;</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}