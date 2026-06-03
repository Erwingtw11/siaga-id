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
}> = [
  {
    title: "Realtime Monitoring",
    description:
      "Pantau aktivitas bencana secara langsung dengan fokus pada wilayah prioritas, kecepatan update, dan pembacaan risiko yang lebih mudah.",
    icon: MapPinned,
    badge: "Core Monitoring",
    highlights: ["Sensor lintas wilayah", "Sinkron data BMKG"],
    cardClassName:
      "xl:col-span-5 bg-[linear-gradient(160deg,rgba(11,19,36,0.96),rgba(7,17,32,0.98))]",
    iconClassName: "border-cyan-400/15 bg-cyan-400/10 text-cyan-300",
  },
  {
    title: "Smart Alert System",
    description:
      "Notifikasi cerdas membantu prioritas respon dengan badge level risiko, pembaruan cepat, dan alur monitoring yang konsisten di berbagai perangkat.",
    icon: BellRing,
    badge: "Priority Response",
    highlights: ["Badge siaga adaptif", "Trigger update cepat"],
    cardClassName:
      "xl:col-span-4 bg-[linear-gradient(160deg,rgba(15,23,42,0.96),rgba(10,19,35,0.98))]",
    iconClassName: "border-red-400/15 bg-red-500/10 text-red-300",
  },
  {
    title: "Emergency Preparedness",
    description:
      "Kartu monitoring dan panduan darurat tetap ringkas, mudah dipahami, dan nyaman diakses masyarakat saat kondisi mendesak.",
    icon: ShieldAlert,
    badge: "Public Guidance",
    highlights: ["Konten mobile friendly", "Aksi darurat ringkas"],
    cardClassName:
      "md:col-span-2 xl:col-span-3 bg-[linear-gradient(160deg,rgba(13,20,36,0.96),rgba(8,16,28,0.98))]",
    iconClassName: "border-white/12 bg-white/[0.05] text-cyan-200",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-10 h-44 bg-[radial-gradient(circle_at_center,rgba(255,77,77,0.1),transparent_62%)]" />

      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Monitoring Modules
            </p>

            <h2 className="mt-4 max-w-[14ch] text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:max-w-3xl sm:text-4xl lg:text-[3rem]">
              Monitoring cards yang lebih premium, jelas, dan konsisten lintas
              perangkat.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:justify-self-end">
            Setiap kartu dirapikan agar visualnya selaras dengan dashboard
            realtime: hierarki konten lebih kuat, spacing lebih bersih, dan
            interaksi hover tetap halus.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 p-6 shadow-[0_18px_46px_rgba(2,6,23,0.34)] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/20 hover:shadow-[0_26px_60px_rgba(2,6,23,0.42)] sm:p-7 ${feature.cardClassName}`}
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition duration-300 group-hover:bg-cyan-400/16" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_28%)]" />

                <div className="relative flex h-full min-h-[300px] flex-col">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${feature.iconClassName}`}
                    >
                      <Icon size={30} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-slate-300">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-[14ch] text-3xl font-semibold tracking-[-0.04em] text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-5 text-base leading-7 text-slate-300">
                    {feature.description}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {feature.highlights.map((highlight, index) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-sm font-semibold text-cyan-200">
                          0{index + 1}
                        </div>

                        <p className="text-sm font-medium text-slate-200">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col items-start gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Activity size={16} className="text-cyan-300" />
                      Selalu sinkron dengan panel monitoring
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition duration-300 group-hover:translate-x-0.5">
                      Eksplor modul
                      <ArrowUpRight size={16} />
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
