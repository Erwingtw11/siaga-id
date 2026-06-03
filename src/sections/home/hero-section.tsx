"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BellRing,
  Clock3,
  MapPin,
  ShieldAlert,
  Siren,
  Waves,
} from "lucide-react";

const quickStats: Array<{
  label: string;
  value: string;
  icon: LucideIcon;
}> = [
  {
    label: "Wilayah Dipantau",
    value: "38+",
    icon: MapPin,
  },
  {
    label: "Monitoring Aktif",
    value: "24/7",
    icon: Activity,
  },
  {
    label: "Integrasi Data",
    value: "BMKG",
    icon: ShieldAlert,
  },
];

const alertMetrics: Array<{
  label: string;
  value: string;
  icon: LucideIcon;
  accentClass?: string;
}> = [
  {
    label: "Kedalaman",
    value: "10 Km",
    icon: Waves,
  },
  {
    label: "Update",
    value: "2 Menit",
    icon: Clock3,
  },
  {
    label: "Status",
    value: "Siaga",
    icon: BellRing,
    accentClass: "text-[#FF4D4D]",
  },
];

const recentSignals = [
  {
    location: "Sukabumi, Jawa Barat",
    detail: "105 km barat daya",
    time: "14:32 WIB",
    level: "Waspada",
  },
  {
    location: "Selat Sunda",
    detail: "gelombang terpantau normal",
    time: "14:18 WIB",
    level: "Normal",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#071120]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,209,255,0.18),transparent_34%),radial-gradient(circle_at_80%_12%,rgba(255,77,77,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.92),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent" />
      <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute right-[-7rem] top-24 h-72 w-72 rounded-full bg-red-500/12 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl" />

      <motion.div
        className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-start md:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="min-w-0">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-cyan-400/15 bg-white/[0.04] px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-cyan-100/90 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D1FF]/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00D1FF]" />
            </span>
            Realtime Monitoring Center
          </div>

          <h1 className="mt-6 max-w-[11ch] text-[2.9rem] font-semibold leading-[0.94] tracking-[-0.05em] text-white text-pretty sm:max-w-[12ch] sm:text-[4rem] md:text-[4.5rem] lg:text-[4.85rem] xl:text-[5.15rem]">
            <span className="block">Pantau</span>
            <span className="block">ancaman</span>
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-[#00D1FF] bg-clip-text text-transparent">
              bencana Indonesia
            </span>
            <span className="block">secara realtime.</span>
          </h1>

          <p className="mt-6 max-w-[32rem] text-[0.98rem] leading-7 text-slate-300 sm:text-lg sm:leading-8">
            NUSA ALERT membantu masyarakat merespons lebih cepat lewat
            monitoring BMKG yang terasa modern, jelas, dan siap dipantau kapan
            pun dibutuhkan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/dashboard"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#FF4D4D] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(255,77,77,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff6262] hover:shadow-[0_18px_40px_rgba(255,77,77,0.34)] sm:w-auto sm:px-7"
            >
              Pantau Sekarang
              <ArrowRight
                size={16}
                className="transition duration-300 group-hover:translate-x-0.5"
              />
            </Link>

            <button
              type="button"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 py-3 text-sm font-medium text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35 hover:bg-white/[0.08] hover:text-white sm:w-auto sm:px-7"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {quickStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_12px_32px_rgba(2,6,23,0.24)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3 text-cyan-300">
                    <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/10 p-2.5">
                      <Icon size={18} />
                    </div>

                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      {stat.label}
                    </p>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[1.75rem]">
                    {stat.value}
                  </h3>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative mx-auto min-w-0 w-full max-w-[560px] md:max-w-full lg:ml-auto"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 6.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.05] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02)_26%,rgba(7,17,32,0)_56%)]" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
            <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-cyan-400/18 blur-3xl" />
            <div className="absolute bottom-4 right-0 h-28 w-28 rounded-full bg-red-500/18 blur-3xl" />

            <div className="relative rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,0.9),rgba(7,17,32,0.96))] p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.26em] text-cyan-300">
                    Live Emergency Feed
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-[2.2rem]">
                    Gempa M 5.6
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Pusat notifikasi memantau status kejadian, waktu update,
                    dan respon cepat dari satu panel.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/12 px-3 py-2 text-xs font-semibold text-red-200">
                  <span className="h-2 w-2 rounded-full bg-[#FF4D4D]" />
                  Waspada
                </div>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,77,77,0.16),rgba(0,209,255,0.06))] p-4 sm:p-5">
                <div className="absolute right-[-1.5rem] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full border border-red-300/15" />
                <div className="absolute right-0 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-red-300/15" />
                <div className="absolute right-4 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border border-red-300/20" />
                <div className="absolute right-12 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#FF4D4D] shadow-[0_0_30px_rgba(255,77,77,0.85)]" />

                <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-300">
                      <Siren size={14} className="text-red-300" />
                      Emergency Alert
                    </div>

                    <h4 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[1.85rem]">
                      Sukabumi, Jawa Barat
                    </h4>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
                      105 km barat daya, terdeteksi oleh jaringan sensor BMKG
                      dan dipantau dalam mode siaga.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-left sm:min-w-[140px] sm:text-right">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      Update
                    </p>

                    <p className="mt-2 text-lg font-semibold text-white">
                      14:32 WIB
                    </p>

                    <p className="mt-1 text-sm text-cyan-300">2 menit lalu</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {alertMetrics.map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <div
                      key={metric.label}
                      className="rounded-[20px] border border-white/10 bg-white/[0.05] p-4"
                    >
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Icon size={16} />
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                          {metric.label}
                        </p>
                      </div>

                      <h4
                        className={`mt-3 text-xl font-semibold tracking-[-0.03em] text-white ${
                          metric.accentClass ?? ""
                        }`}
                      >
                        {metric.value}
                      </h4>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-[22px] border border-white/10 bg-black/15 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                      Sinyal Terkini
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Prioritas pantauan dalam 15 menit terakhir
                    </p>
                  </div>

                  <div className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200">
                    Sistem Aktif
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {recentSignals.map((signal) => (
                    <div
                      key={`${signal.location}-${signal.time}`}
                      className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-white">
                          {signal.location}
                        </p>
                        <p className="mt-1 text-sm text-slate-400">
                          {signal.detail}
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-sm font-medium text-white">
                          {signal.time}
                        </p>
                        <p
                          className={`mt-1 text-xs font-semibold ${
                            signal.level === "Waspada"
                              ? "text-red-300"
                              : "text-cyan-300"
                          }`}
                        >
                          {signal.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
