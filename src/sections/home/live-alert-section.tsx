import {
  AlertTriangle,
  ArrowUpRight,
  Clock3,
  MapPin,
  ShieldAlert,
  Waves,
} from "lucide-react";

import Container from "@/components/layout/container";
import SectionWrapper from "@/components/layout/section-wrapper";
import BaseCard from "@/components/cards/base-card";

const alerts = [
  {
    location: "Lampung Selatan",
    magnitude: "5.8",
    status: "Siaga",
    time: "10 menit lalu",
    depth: "14 Km",
    detail: "Aktivitas gempa pesisir terpantau dengan getaran sedang.",
    response: "12 sensor aktif",
  },
  {
    location: "Bandung",
    magnitude: "4.9",
    status: "Waspada",
    time: "25 menit lalu",
    depth: "8 Km",
    detail: "Getaran ringan terdeteksi, sistem notifikasi tetap siaga.",
    response: "Update monitoring",
  },
  {
    location: "Aceh",
    magnitude: "6.2",
    status: "Awas",
    time: "40 menit lalu",
    depth: "18 Km",
    detail: "Pusat monitoring menandai prioritas tinggi untuk evaluasi cepat.",
    response: "Respon darurat",
  },
];

function getStatusStyle(status: string) {
  if (status === "Awas") {
    return {
      badge:
        "border-red-400/20 bg-red-500/12 text-red-200 shadow-[0_0_25px_rgba(255,77,77,0.14)]",
      dot: "bg-[#FF4D4D]",
      glow: "bg-red-500/16",
      metric: "text-red-300",
      ring: "border-red-400/15",
    };
  }

  if (status === "Siaga") {
    return {
      badge:
        "border-orange-400/20 bg-orange-500/12 text-orange-200 shadow-[0_0_25px_rgba(251,146,60,0.12)]",
      dot: "bg-orange-400",
      glow: "bg-orange-500/14",
      metric: "text-orange-200",
      ring: "border-orange-400/15",
    };
  }

  return {
    badge:
      "border-yellow-400/20 bg-yellow-500/12 text-yellow-100 shadow-[0_0_25px_rgba(250,204,21,0.1)]",
    dot: "bg-yellow-300",
    glow: "bg-yellow-500/12",
    metric: "text-yellow-100",
    ring: "border-yellow-400/15",
  };
}

export default function LiveAlertSection() {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-white/[0.04] px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-cyan-100/90 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D1FF]/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00D1FF]" />
              </span>
              Live Disaster Alerts
            </div>

            <h2 className="mt-5 text-[2.2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem]">
              Realtime alert cards dengan hirarki prioritas yang lebih jelas.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Informasi kejadian terbaru dirangkum dalam kartu monitoring yang
              lebih cepat dipindai, nyaman di mobile, dan tetap konsisten
              dengan nuansa dashboard NUSA ALERT.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Sistem Aktif
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                24/7
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Prioritas Hari Ini
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                12 Alert
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Sinkronisasi
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-cyan-300">
                BMKG Live
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {alerts.map((alert, index) => {
            const statusStyle = getStatusStyle(alert.status);

            return (
              <BaseCard
                key={alert.location}
                className={index === 0 ? "md:col-span-2 xl:col-span-2" : ""}
              >
                <div
                  className={`absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl ${statusStyle.glow}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_22%)]" />

                <div className="relative flex h-full min-h-[280px] flex-col">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-white/[0.04] ${statusStyle.ring}`}
                      >
                        <AlertTriangle size={20} className={statusStyle.metric} />
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                          Live Alert
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                          {alert.time}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${statusStyle.badge}`}
                    >
                      <span className={`h-2 w-2 rounded-full ${statusStyle.dot}`} />
                      {alert.status}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="flex items-center gap-2 text-sm text-slate-400">
                        <MapPin size={15} className="text-cyan-300" />
                        Lokasi Prioritas
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                        {alert.location}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-[0.98rem]">
                        {alert.detail}
                      </p>
                    </div>

                    <div className="shrink-0 sm:text-right">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Magnitude
                      </p>
                      <p className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-[3.2rem]">
                        {alert.magnitude}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                      <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                        <Waves size={14} className="text-cyan-300" />
                        Kedalaman
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {alert.depth}
                      </p>
                    </div>

                    <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                      <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                        <Clock3 size={14} className="text-cyan-300" />
                        Update
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {alert.time}
                      </p>
                    </div>

                    <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                      <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                        <ShieldAlert size={14} className="text-cyan-300" />
                        Respon
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {alert.response}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col items-start gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xl text-sm text-slate-400">
                      Pemantauan otomatis tetap berjalan pada tingkat{" "}
                      <span className={`font-medium ${statusStyle.metric}`}>
                        {alert.status.toLowerCase()}
                      </span>
                      .
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition duration-300 group-hover:translate-x-0.5">
                      Lihat detail
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </BaseCard>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
