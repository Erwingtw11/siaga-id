import Link from "next/link";

import Container from "@/components/layout/container";

export default function CTASection() {
  return (
    <section className="py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0B1324]/90 px-8 py-20 lg:px-20">
          {/* Glow */}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Stay Prepared
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Tetap Siaga Sebelum Bencana Terjadi
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              SIAGA.ID membantu masyarakat Indonesia mendapatkan informasi
              bencana lebih cepat agar dapat mengambil tindakan yang tepat
              sebelum situasi menjadi darurat.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="rounded-full bg-red-500 px-7 py-3.5 text-base font-medium text-white transition duration-300 hover:bg-red-400"
              >
                Pantau Sekarang
              </Link>

              <Link
                href="#features"
                className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-base font-medium text-white transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/10"
              >
                Pelajari Kesiapsiagaan
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
