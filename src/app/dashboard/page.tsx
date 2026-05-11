import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-white">
            Dashboard Monitoring
          </h1>

          <p className="mt-4 text-white/70">
            Pantau aktivitas bencana secara realtime di berbagai wilayah
            Indonesia.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
