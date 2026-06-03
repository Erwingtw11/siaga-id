import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import HeroSection from "@/sections/home/hero-section";
import LiveAlertSection from "@/sections/home/live-alert-section";
import FeaturesSection from "@/sections/home/features-section";
import StatisticsSection from "@/sections/home/statistics-section";
import CTASection from "@/sections/home/cta-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050b14] text-white overflow-hidden flex flex-col items-center">

      {/* 1. NAVBAR */}
      <div className="w-full border-b border-white/5 bg-[#050b14]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-[1440px] px-8 md:px-16">
          <Navbar />
        </div>
      </div>

      {/* 2. KONTEN UTAMA */}
      <div className="w-full max-w-[1440px] px-8 md:px-16 space-y-24 pt-20 pb-24">

        <HeroSection />

        <LiveAlertSection />

        {/* Pastikan di sekitar sini bersih, HANYA ADA TAG KOMPONEN INI SAJA */}
        <FeaturesSection />

        <StatisticsSection />

        <CTASection />

      </div>

      {/* 3. FOOTER */}
      <div className="w-full border-t border-white/5 bg-[#050b14]">
        <div className="mx-auto max-w-[1440px] px-8 md:px-16 py-12">
          <Footer />
        </div>
      </div>

    </main>
  );
}