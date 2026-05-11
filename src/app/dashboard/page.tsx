import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

import SummaryCard from "@/components/dashboard/summary-card";

const summaries = [
  {
    title: "Alert Aktif",
    value: "12",
    description: "Peringatan bencana aktif di berbagai wilayah.",
  },
  {
    title: "Gempa Hari Ini",
    value: "48",
    description: "Aktivitas gempa terdeteksi dalam 24 jam terakhir.",
  },
  {
    title: "Wilayah Dipantau",
    value: "38",
    description: "Monitoring realtime di seluruh Indonesia.",
  },
  {
    title: "Status Sistem",
    value: "Normal",
    description: "Sistem monitoring berjalan stabil.",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Realtime Monitoring Dashboard
            </p>

            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Dashboard Monitoring Bencana
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Pantau aktivitas bencana secara realtime untuk membantu masyarakat
              mendapatkan informasi lebih cepat dan akurat.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {summaries.map((item, index) => (
              <SummaryCard
                key={index}
                title={item.title}
                value={item.value}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
