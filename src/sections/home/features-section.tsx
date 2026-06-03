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
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-x-0 top-10 h-72 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06),transparent_65%)] pointer-events-none" />

       <Container>
         <div className="text-center space-y-4">
           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
             FITUR UTAMA
           </div>

            <h2 className="mx-auto max-w-3xl text-[2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[2.25rem] lg:text-[2.5rem]">
              Semua yang Anda Butuhkan dalam Satu Platform
            </h2>

            <p className="mx-auto max-w-2xl text-[0.875rem] leading-relaxed text-slate-400 sm:text-sm">
              Informasi lengkap dan akurat untuk kesiapsiagaan bencana yang lebih baik
            </p>
         </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                  className={`group relative overflow-hidden rounded-[20px] border p-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-400 ease-out hover:-translate-y-1 backdrop-blur-md ${feature.cardClassName}`}
                >
                 {/* Glow Overlay */}
                 <div className={`absolute right-0 top-0 h-24 w-24 rounded-full blur-[18px] transition-all duration-600 ease-out ${themeColors.glow}`} />
                 <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),rgba(255,255,255,0)_28%)] pointer-events-none" />

                  <div className="relative flex h-full min-h-[260px] flex-col justify-between">
                   <div>
                     <div className="flex flex-wrap items-center justify-between gap-3">
                       <div
                         className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-400 group-hover:scale-105 ${feature.iconClassName}`}
                       >
                          <Icon size={16} />
                       </div>

                        <span className="rounded-full border border-white/4 bg-white/[0.02] px-2.5 py-0.5 text-[0.55rem] font-medium uppercase tracking-[0.12em] text-slate-400">
                          {feature.badge}
                        </span>
                     </div>

                      <h3 className="mt-4 text-[1.125rem] font-bold tracking-tight text-white leading-snug">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-[0.75rem] leading-relaxed text-slate-400">
                        {feature.description}
                      </p>

                     <div className="mt-4 grid gap-2 grid-cols-1">
                       {feature.highlights.map((highlight, index) => (
                         <div
                           key={highlight}
                           className="flex items-center gap-2.5 rounded-[16px] border border-white/[0.025] bg-white/[0.008] px-3 py-2 hover:border-white/[0.05] hover:bg-white/[0.015] transition-all duration-300"
                         >
                            <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-[8px] border text-[0.55rem] font-medium ${themeColors.numberBg}`}>
                              0{index + 1}
                            </div>

                            <p className="text-[0.7rem] font-medium text-slate-300 truncate">
                              {highlight}
                            </p>
                         </div>
                       ))}
                     </div>
                   </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.04] pt-2">
                      <div className="flex items-center gap-0.5 text-[0.68rem] text-slate-400">
                        <Activity size={8} className={`${themeColors.activityIcon} shrink-0`} />
                        Live Sync
                      </div>

                      <Link href="/dashboard" className={`inline-flex items-center gap-0.3 text-[0.68rem] font-medium uppercase tracking-wider transition-all duration-300 ${themeColors.link}`}>
                        Lihat Detail
                        <ArrowUpRight size={10} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

