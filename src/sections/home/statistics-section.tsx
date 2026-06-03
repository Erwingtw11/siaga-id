import type { LucideIcon } from "lucide-react";
import { AlertTriangle, Waves, CloudRain, ShieldCheck } from "lucide-react";

import Container from "@/components/layout/container";

const statistics: Array<{
  value: string;
  label: string;
  note: string;
  icon: LucideIcon;
  theme: "red" | "cyan" | "amber" | "emerald";
}> = [
  {
    value: "128",
    label: "Gempa Hari Ini",
    note: "+12 dari kemarin",
    icon: AlertTriangle,
    theme: "red",
  },
  {
    value: "3",
    label: "Tsunami",
    note: "Potensial Dalam 24 Jam",
    icon: Waves,
    theme: "cyan",
  },
  {
    value: "5",
    label: "Cuaca Ekstrem",
    note: "Wilayah Terdeteksi",
    icon: CloudRain,
    theme: "amber",
  },
  {
    value: "24/7",
    label: "Sistem Aktif",
    note: "Monitoring Real-time",
    icon: ShieldCheck,
    theme: "emerald",
  },
];

export default function StatisticsSection() {
  return (
    <section className="relative border-b border-white/5 bg-[#071120] py-10">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_center,rgba(0,209,255,0.04),transparent_65%)] pointer-events-none" />

      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => {
            const Icon = item.icon;

            const themeColors = {
              red: {
                icon: "text-red-400 border-red-500/20 bg-red-500/10 shadow-[0_0_15px_rgba(239,68,68,0.15)] animate-pulse",
                note: "text-red-400 font-bold",
                glow: "bg-red-500/5 group-hover:bg-red-500/10",
              },
              cyan: {
                icon: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
                note: "text-cyan-400 font-semibold",
                glow: "bg-cyan-500/5 group-hover:bg-cyan-500/10",
              },
              amber: {
                icon: "text-amber-400 border-amber-500/20 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
                note: "text-slate-400 font-medium",
                glow: "bg-amber-500/5 group-hover:bg-amber-500/10",
              },
              emerald: {
                icon: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
                note: "text-emerald-400 font-bold",
                glow: "bg-emerald-500/5 group-hover:bg-emerald-500/10",
              },
            }[item.theme];

             return (
               <div
                 key={item.label}
                 className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0F172A]/70 to-[#070b14]/90 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-[0_18px_40px_rgba(0,0,0,0.4)]"
               >
                 {/* Subtle themed glow blur in top right */}
                 <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl transition-all duration-500 ${themeColors.glow}`} />

                 <div className="relative flex items-center gap-3">
                   {/* Icon Container */}
                   <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${themeColors.icon}`}>
                     <Icon size={18} />
                   </div>

                   {/* Value and Label */}
                   <div className="min-w-0">
                     <div className="flex items-baseline gap-2">
                       <span className="text-2xl font-extrabold tracking-tight text-white leading-none">
                         {item.value}
                       </span>
                     </div>
                     <p className="mt-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                       {item.label}
                     </p>
                     <p className={`mt-1 text-xs ${themeColors.note}`}>
                       {item.note}
                     </p>
                   </div>
                 </div>
               </div>
             );
          })}
        </div>
      </Container>
    </section>
  );
}
