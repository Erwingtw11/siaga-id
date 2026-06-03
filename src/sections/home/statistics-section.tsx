import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BellRing,
  Radar,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/container";

const statistics: Array<{
  value: string;
  label: string;
  note: string;
  icon: LucideIcon;
}> = [
  {
    value: "1,248+",
    label: "Bencana Terdeteksi",
    note: "Terakumulasi dari monitoring multi wilayah sepanjang hari.",
    icon: Radar,
  },
  {
    value: "38",
    label: "Wilayah Dipantau",
    note: "Titik rawan prioritas yang dipantau secara aktif dan konsisten.",
    icon: Activity,
  },
  {
    value: "24/7",
    label: "Realtime Monitoring",
    note: "Pusat monitoring terus aktif tanpa jeda untuk pembaruan cepat.",
    icon: ShieldCheck,
  },
  {
    value: "112",
    label: "Alert Aktif Hari Ini",
    note: "Notifikasi prioritas yang diklasifikasikan berdasarkan level risiko.",
    icon: BellRing,
  },
];

export default function StatisticsSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-12 h-48 bg-[radial-gradient(circle_at_center,rgba(0,209,255,0.12),transparent_65%)]" />

      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Monitoring Statistics
            </p>

            <h2 className="mt-4 max-w-[13ch] text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:max-w-3xl sm:text-4xl lg:text-[3rem]">
              Snapshot statistik yang lebih rapi untuk membaca intensitas
              monitoring secara cepat.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 xl:justify-self-end">
            NUSA ALERT menampilkan ringkasan angka penting dalam layout yang
            lebih konsisten, mudah dipindai, dan nyaman dipakai dari mobile
            sampai desktop.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(8,15,30,0.96))] p-5 shadow-[0_18px_46px_rgba(2,6,23,0.32)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/20 hover:shadow-[0_24px_60px_rgba(2,6,23,0.4)] sm:p-6"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition duration-300 group-hover:bg-cyan-400/16" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0)_26%)]" />

                <div className="relative flex min-h-[220px] flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300">
                      <Icon size={24} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-slate-400">
                      Live Sync
                    </span>
                  </div>

                  <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                    {item.label}
                  </p>

                  <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-[3.25rem]">
                    {item.value}
                  </h3>

                  <p className="mt-auto pt-8 text-sm leading-6 text-slate-300">
                    {item.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
