import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowUpRight,
  BellRing,
  MapPinned,
  ShieldAlert,
} from "lucide-react";

import Container from "@/components/layout/container";

const features: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  highlights: [string, string];
  cardClassName: string;
  iconClassName: string;
  theme: "cyan" | "red" | "emerald";
}> = [
  {
    title: "Realtime Monitoring",
    description:
      "Pantau aktivitas bencana secara langsung dengan fokus pada wilayah prioritas, kecepatan update, dan pembacaan risiko yang lebih mudah.",
    icon: MapPinned,
    badge: "Core Monitoring",
    highlights: ["Sensor lintas wilayah", "Sinkron data BMKG"],
    cardClassName:
      "xl:col-span-5 bg-gradient-to-br from-[#091526]/95 to-[#030914]/98 border-white/[0.08] hover:border-cyan-500/35 hover:shadow-[0_25px_60px_-15px_rgba(6,182,212,0.2)]",
    iconClassName: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]",
    theme: "cyan",
  },
  {
    title: "Smart Alert System",
    description:
      "Notifikasi cerdas membantu prioritas respon dengan badge level risiko, pembaruan cepat, dan alur monitoring yang konsisten di berbagai perangkat.",
    icon: BellRing,
    badge: "Priority Response",
    highlights: ["Badge siaga adaptif", "Trigger update cepat"],
    cardClassName:
      "xl:col-span-4 bg-gradient-to-br from-[#1c0d0f]/95 to-[#0b0304]/98 border-white/[0.08] hover:border-red-500/35 hover:shadow-[0_25px_60px_-15px_rgba(239,68,68,0.2)]",
    iconClassName: "border-red-500/20 bg-red-500/10 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.15)]",
    theme: "red",
  },
  {
    title: "Emergency Preparedness",
    description:
      "Kartu monitoring dan panduan darurat tetap ringkas, mudah dipahami, dan nyaman diakses masyarakat saat kondisi mendesak.",
    icon: ShieldAlert,
    badge: "Public Guidance",
    highlights: ["Konten mobile friendly", "Aksi darurat ringkas"],
    cardClassName:
      "md:col-span-2 xl:col-span-3 bg-gradient-to-br from-[#081611]/95 to-[#020a07]/98 border-white/[0.08] hover:border-emerald-500/35 hover:shadow-[0_25px_60px_-15px_rgba(16,185,129,0.2)]",
    iconClassName: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    theme: "emerald",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-x-0 top-10 h-72 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_65%)] pointer-events-none" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D1FF]/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D1FF]" />
              </span>
              Monitoring Modules
            </div>

            <h2 className="text-[2.2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem]">
              Monitoring cards yang lebih premium & konsisten.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8 lg:justify-self-end lg:pb-1">
            Setiap kartu dirapikan agar visualnya selaras dengan dashboard
            realtime: hierarki konten lebih kuat, spacing lebih bersih, dan
            interaksi hover tetap halus di semua perangkat.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-12">
          {features.map((feature) => {
            const Icon = feature.icon;

            const themeColors = {
              cyan: {
                glow: "bg-cyan-500/5 group-hover:bg-cyan-500/12",
                numberBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/15",
                link: "text-slate-400 group-hover:text-cyan-400",
                activityIcon: "text-cyan-400",
              },
              red: {
                glow: "bg-red-500/5 group-hover:bg-red-500/12",
                numberBg: "bg-red-500/10 text-red-300 border-red-500/15",
                link: "text-slate-400 group-hover:text-red-400",
                activityIcon: "text-red-400",
              },
              emerald: {
                glow: "bg-emerald-500/5 group-hover:bg-emerald-500/12",
                numberBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/15",
                link: "text-slate-400 group-hover:text-emerald-400",
                activityIcon: "text-emerald-400",
              },
            }[feature.theme];

            return (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-[32px] border p-6 md:p-8 lg:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-2 backdrop-blur-md ${feature.cardClassName}`}
              >
                {/* Glow Overlay */}
                <div className={`absolute right-0 top-0 h-40 w-40 rounded-full blur-3xl transition-all duration-700 ease-out ${themeColors.glow}`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_32%)] pointer-events-none" />

                <div className="relative flex h-full min-h-[320px] flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110 ${feature.iconClassName}`}
                      >
                        <Icon size={26} />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-300 backdrop-blur-md">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl leading-snug">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base sm:leading-7">
                      {feature.description}
                    </p>

                    <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-1">
                      {feature.highlights.map((highlight, index) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-3 rounded-2xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 hover:border-white/[0.08] hover:bg-white/[0.04] transition-all duration-300"
                        >
                          <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold ${themeColors.numberBg}`}>
                            0{index + 1}
                          </div>

                          <p className="text-sm font-medium text-slate-300 truncate">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col items-start gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Activity size={15} className={`${themeColors.activityIcon} shrink-0`} />
                      Selalu sinkron dengan panel monitoring
                    </div>

                    <div className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 ${themeColors.link}`}>
                      Eksplor modul
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
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

