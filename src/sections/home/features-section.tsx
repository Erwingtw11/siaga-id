import Container from "@/components/layout/container";
import SectionWrapper from "@/components/layout/section-wrapper";
import BaseCard from "@/components/cards/base-card";
import FadeIn from "@/components/animations/fade-in";
import { BellRing, ShieldAlert, MapPinned } from "lucide-react";

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
    <SectionWrapper>
      <Container>
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Main Features
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Teknologi Siaga Untuk Masyarakat Indonesia
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            SIAGA.ID dirancang untuk membantu masyarakat mendapatkan informasi
            bencana secara cepat, akurat, dan mudah dipahami.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={index}>
                <BaseCard>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                    <Icon className="text-cyan-400" size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </BaseCard>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
