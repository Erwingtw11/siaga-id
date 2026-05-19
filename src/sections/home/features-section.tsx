import { BellRing, MapPinned, ShieldAlert } from "lucide-react";

import Container from "@/components/layout/container";

const features = [
  {
    title: "Realtime Monitoring",
    description:
      "Pantau aktivitas bencana secara langsung dengan data terbaru dari berbagai wilayah Indonesia.",
    icon: MapPinned,
  },
  {
    title: "Smart Alert System",
    description:
      "Sistem notifikasi cerdas untuk memberikan peringatan dini berdasarkan tingkat bahaya.",
    icon: BellRing,
  },
  {
    title: "Emergency Preparedness",
    description:
      "Panduan kesiapsiagaan dan informasi darurat untuk membantu masyarakat menghadapi bencana.",
    icon: ShieldAlert,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Main Features
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Teknologi Siaga Untuk Masyarakat Indonesia
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            SIAGA.ID dirancang untuk membantu masyarakat mendapatkan informasi
            bencana secara cepat, akurat, dan mudah dipahami.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group min-h-[320px] rounded-3xl border border-white/10 bg-[#0B1324]/80 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Icon size={32} className="text-cyan-400" />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-white/60">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
