import Container from "@/components/layout/container";

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
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Monitoring Statistics
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Data Monitoring Bencana Indonesia
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            SIAGA.ID memantau aktivitas bencana secara realtime untuk membantu
            masyarakat mendapatkan informasi lebih cepat.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[220px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0B1324]/80 p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-white">{item.value}</h3>

              <p className="mt-4 text-lg text-white/60">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
