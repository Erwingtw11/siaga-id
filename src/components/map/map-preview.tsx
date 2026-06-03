"use client";

import dynamic from "next/dynamic";

const RealtimeMap = dynamic(() => import("./realtime-map"), {
  ssr: false,
});

export default function MapPreview() {
  return (
    <div className="relative">
      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            Disaster Monitoring Map
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Peta Monitoring Indonesia
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
            38 Wilayah Aktif
          </div>

          <div className="rounded-full bg-green-500/10 px-3 py-2 text-xs font-medium text-green-400">
            System Online
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="relative h-[380px] overflow-hidden md:h-[520px]">
        <RealtimeMap />

        {/* OVERLAY */}
        <div className="absolute left-4 top-4 z-[999] max-w-xs rounded-3xl border border-white/10 bg-[#081120]/90 p-4 backdrop-blur-xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
            Live Alert
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">Gempa M 5.6</h3>

          <p className="mt-2 text-sm leading-6 text-white/60">
            Aktivitas gempa terdeteksi di Sukabumi dan sedang dipantau realtime.
          </p>

          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-white/50">Kedalaman</p>

              <h4 className="mt-1 text-lg font-bold text-white">10 KM</h4>
            </div>

            <div>
              <p className="text-xs text-white/50">Status</p>

              <h4 className="mt-1 text-lg font-bold text-orange-400">Siaga</h4>
            </div>
          </div>
        </div>

        {/* LEGEND */}
        <div className="absolute bottom-4 right-4 z-[999] rounded-2xl border border-white/10 bg-[#081120]/90 p-3 backdrop-blur-xl">
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-white/70">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
              Awas
            </div>

            <div className="flex items-center gap-2 text-white/70">
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              Waspada
            </div>

            <div className="flex items-center gap-2 text-white/70">
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              Normal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
