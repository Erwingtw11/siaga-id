import Container from "@/components/layout/container";
import SectionWrapper from "@/components/layout/section-wrapper";
import Button from "@/components/ui/button";

export default function CTASection() {
  return (
    <SectionWrapper>
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-red-500/20 to-cyan-500/10 px-6 py-14 text-center md:px-12 md:py-20">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-red-500/20 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Stay Prepared
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              Tetap Siaga Sebelum Bencana Terjadi
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              SIAGA.ID membantu masyarakat Indonesia mendapatkan informasi
              bencana lebih cepat agar dapat mengambil tindakan yang tepat
              sebelum situasi menjadi darurat.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Button>Pantau Sekarang</Button>

              <button className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30">
                Pelajari Kesiapsiagaan
              </button>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
