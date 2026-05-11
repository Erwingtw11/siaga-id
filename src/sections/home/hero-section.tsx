import Container from "@/components/layout/container";
import SectionWrapper from "@/components/layout/section-wrapper";
import Button from "@/components/ui/button";

export default function HeroSection() {
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Real-Time Disaster Monitoring
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Pantau Potensi Bencana Secara Real-Time
            </h1>

            <p className="mt-6 text-lg text-white/70">
              SIAGA.ID membantu masyarakat Indonesia mendapatkan informasi
              bencana lebih cepat melalui sistem peringatan dini berbasis data
              real-time.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button>Pantau Sekarang</Button>

              <button className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>

          <div className="flex h-[350px] w-full items-center justify-center rounded-3xl border border-white/10 bg-[#0F172A]">
            <p className="text-white/50">Indonesia Map Preview</p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
