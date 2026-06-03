"use client";

import React from "react";

interface SummaryCardProps {
  title: string;
  value: string;
  description: string;
}

export default function SummaryCard({ title, value, description }: SummaryCardProps) {
  const isOnline = value.toLowerCase() === "online";

  return (
    // SEMUA BORDER & BACKGROUND KOTAK DIHAPUS TOTAL DI SINI
    <div className="w-full py-2 px-1 transition-all duration-200 hover:translate-y-[-2px]">
      <div className="flex flex-col space-y-1">

        {/* Judul Kecil Atas */}
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
          {title}
        </p>

        {/* Angka / Status Utama */}
        <h3
          className={`text-2xl sm:text-3xl font-black tracking-tight leading-none ${isOnline ? "text-emerald-400" : "text-white"
            }`}
        >
          {value}
        </h3>

        {/* Deskripsi Bawah */}
        <p className="text-xs text-slate-400 leading-normal font-normal">
          {description}
        </p>

      </div>
    </div>
  );
}