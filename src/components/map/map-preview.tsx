"use client";
import dynamic from "next/dynamic";

const RealtimeMap = dynamic(() => import("./realtime-map"), {
  ssr: false,
});

const alerts = [
  {
    location: "Aceh",
    status: "Awas",
  },
  {
    location: "Lampung Selatan",
    status: "Siaga",
  },
  {
    location: "Bandung",
    status: "Waspada",
  },
];

export default function MapPreview() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.5fr_0.7fr]">
      {/* Map Area */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A]/80 p-6">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-red-500/10 blur-3xl"></div>

        <div className="relative z-10 flex h-[400px] items-center justify-center rounded-2xl border border-dashed border-white/10">
          <RealtimeMap />
        </div>
      </div>

      {/* Alert Side */}
      <div className="rounded-3xl border border-white/10 bg-[#0F172A]/80 p-6">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Live Alerts
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            Aktivitas Terbaru
          </h3>
        </div>

        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div key={index} className="rounded-2xl border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50">Lokasi</p>

                  <h4 className="mt-1 font-semibold text-white">
                    {alert.location}
                  </h4>
                </div>

                <div
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    alert.status === "Awas"
                      ? "bg-red-500/20 text-red-400"
                      : alert.status === "Siaga"
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-yellow-500/20 text-yellow-300"
                  }`}
                >
                  {alert.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
