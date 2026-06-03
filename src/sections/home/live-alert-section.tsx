import Container from "@/components/layout/container";
import SectionWrapper from "@/components/layout/section-wrapper";
import BaseCard from "@/components/cards/base-card";

const alerts = [
  {
    location: "Lampung Selatan",
    magnitude: "5.8",
    status: "Siaga",
    time: "10 menit lalu",
  },
  {
    location: "Bandung",
    magnitude: "4.9",
    status: "Waspada",
    time: "25 menit lalu",
  },
  {
    location: "Aceh",
    magnitude: "6.2",
    status: "Awas",
    time: "40 menit lalu",
  },
];

export default function LiveAlertSection() {
  return (
    <SectionWrapper>
      <Container>
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Live Disaster Alerts
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Pemantauan Bencana Secara Real-Time
          </h2>

          <p className="mt-4 max-w-2xl text-white/70">
            Informasi terbaru mengenai aktivitas bencana di berbagai wilayah
            Indonesia berdasarkan data real-time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {alerts.map((alert, index) => (
            <BaseCard key={index}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white/50">Lokasi</p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {alert.location}
                  </h3>
                </div>

                <div
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    alert.status === "Awas"
                      ? "bg-red-500/20 text-red-400"
                      : alert.status === "Siaga"
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-yellow-500/20 text-yellow-300"
                  }`}
                >
                  {alert.status}
                </div>
              </div>

              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="text-sm text-white/50">Magnitude</p>

                  <h2 className="mt-2 text-4xl font-bold text-white">
                    {alert.magnitude}
                  </h2>
                </div>

                <p className="text-sm text-white/50">{alert.time}</p>
              </div>
            </BaseCard>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
