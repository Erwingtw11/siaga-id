import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Siren, MapPinned, BookOpen, LineChart, Activity, ArrowUpRight } from "lucide-react";

import Container from "@/components/layout/container";

const features: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  highlights: [string, string];
  cardClassName: string;
  iconClassName: string;
  theme: "red" | "cyan" | "emerald" | "amber";
}> = [
  {
    title: "Peringatan Real-time",
    description:
      "Dapatkan notifikasi instan sebelum bencana terjadi untuk mengamankan keluarga Anda.",
    icon: Siren,
    badge: "Instant Alert",
    highlights: ["Sistem deteksi cepat", "Notifikasi SMS & WA"],
    cardClassName: "bg-gradient-to-br from-[#1c0d0f]/95 to-[#0b0304]/98 border-white/[0.08] hover:border-red-500/35 hover:shadow-[0_25px_60px_-15px_rgba(239,68,68,0.2)]",
    iconClassName: "border-red-500/20 bg-red-500/10 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.15)]",
    theme: "red",
  },
  {
    title: "Peta Interaktif",
    description:
      "Pantau situasi bencana secara langsung di wilayah terdekat Anda dengan tingkat akurasi tinggi.",
    icon: MapPinned,
    badge: "Interactive Map",
    highlights: ["Sinyal radar live", "Radius bahaya 3D"],
    cardClassName: "bg-gradient-to-br from-[#091526]/95 to-[#030914]/98 border-white/[0.08] hover:border-cyan-500/35 hover:shadow-[0_25px_60px_-15px_rgba(6,182,212,0.2)]",
    iconClassName: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]",
    theme: "cyan",
  },
  {
    title: "Panduan Darurat",
    description:
      "Panduan lengkap untuk kesiapsiagaan menghadapi berbagai jenis bencana alam di Indonesia.",
    icon: BookOpen,
    badge: "Safety Manual",
    highlights: ["E-book rute evakuasi", "Langkah darurat ringkas"],
    cardClassName: "bg-gradient-to-br from-[#081611]/95 to-[#020a07]/98 border-white/[0.08] hover:border-emerald-500/35 hover:shadow-[0_25px_60px_-15px_rgba(16,185,129,0.2)]",
    iconClassName: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    theme: "emerald",
  },
  {
    title: "Statistik & Riwayat",
    description:
      "Analisis data bencana terintegrasi dalam bentuk grafik interaktif dan riwayat komprehensif.",
    icon: LineChart,
    badge: "Data History",
    highlights: ["Grafik tren gempa", "Rekap bulanan ekspor"],
    cardClassName: "bg-gradient-to-br from-[#1b150c]/95 to-[#0b0804]/98 border-white/[0.08] hover:border-amber-500/35 hover:shadow-[0_25px_60px_-15px_rgba(245,158,11,0.2)]",
    iconClassName: "border-amber-500/20 bg-amber-500/10 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)]",
    theme: "amber",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 md:py-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-x-0 top-10 h-72 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06),transparent_65%)] pointer-events-none" />

      <Container>
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            FITUR UTAMA
          </div>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Semua yang Anda Butuhkan dalam Satu Platform
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Informasi lengkap dan akurat untuk kesiapsiagaan bencana yang lebih baik
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            const themeColors = {
              cyan: {
                glow: "bg-cyan-500/5 group-hover:bg-cyan-500/12",
                numberBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/15",
                link: "text-cyan-400/90 group-hover:text-cyan-300",
                activityIcon: "text-cyan-400",
              },
              red: {
                glow: "bg-red-500/5 group-hover:bg-red-500/12",
                numberBg: "bg-red-500/10 text-red-300 border-red-500/15",
                link: "text-red-400/90 group-hover:text-red-300",
                activityIcon: "text-red-400",
              },
              emerald: {
                glow: "bg-emerald-500/5 group-hover:bg-emerald-500/12",
                numberBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/15",
                link: "text-emerald-400/90 group-hover:text-emerald-300",
                activityIcon: "text-emerald-400",
              },
              amber: {
                glow: "bg-amber-500/5 group-hover:bg-amber-500/12",
                numberBg: "bg-amber-500/10 text-amber-300 border-amber-500/15",
                link: "text-amber-400/90 group-hover:text-amber-300",
                activityIcon: "text-amber-400",
              },
            }[feature.theme];

            return (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-[24px] border p-6 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out hover:-translate-y-1.5 backdrop-blur-md ${feature.cardClassName}`}
              >
                {/* Glow Overlay */}
                <div className={`absolute right-0 top-0 h-32 w-32 rounded-full blur-2xl transition-all duration-700 ease-out ${themeColors.glow}`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0)_32%)] pointer-events-none" />

                <div className="relative flex h-full min-h-[340px] flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500 group-hover:scale-110 ${feature.iconClassName}`}
                      >
                        <Icon size={22} />
                      </div>

                      <span className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-slate-400">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-tight text-white leading-snug">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {feature.description}
                    </p>

                    <div className="mt-6 grid gap-2.5 grid-cols-1">
                      {feature.highlights.map((highlight, index) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-3 rounded-xl border border-white/[0.03] bg-white/[0.01] px-3.5 py-2.5 hover:border-white/[0.06] hover:bg-white/[0.02] transition-all duration-300"
                        >
                          <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[0.65rem] font-bold ${themeColors.numberBg}`}>
                            0{index + 1}
                          </div>

                          <p className="text-xs font-medium text-slate-300 truncate">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5">
                    <div className="flex items-center gap-1.5 text-[0.7rem] text-slate-500">
                      <Activity size={12} className={`${themeColors.activityIcon} shrink-0`} />
                      Live Sync
                    </div>

                    <Link href="/dashboard" className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${themeColors.link}`}>
                      Lihat Detail
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

