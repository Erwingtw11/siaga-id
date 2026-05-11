import Container from "@/components/layout/container";
import SectionWrapper from "@/components/layout/section-wrapper";
import BaseCard from "@/components/cards/base-card";
import FadeIn from "@/components/animations/fade-in";

const statistics = [
  {
    value: "1,248+",
    label: "Bencana Terdeteksi",
  },
  {
    value: "38",
    label: "Wilayah Dipantau",
  },
  {
    value: "24/7",
    label: "Realtime Monitoring",
  },
  {
    value: "112",
    label: "Alert Aktif Hari Ini",
  },
];

export default function StatisticsSection() {
  return (
    <SectionWrapper>
      <Container>
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Monitoring Statistics
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Data Monitoring Bencana Indonesia
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            SIAGA.ID memantau aktivitas bencana secara realtime untuk membantu
            masyarakat mendapatkan informasi lebih cepat.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item, index) => (
            <FadeIn key={index}>
              <BaseCard>
                <h3 className="text-4xl font-bold text-white">{item.value}</h3>

                <p className="mt-3 text-white/60">{item.label}</p>
              </BaseCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
