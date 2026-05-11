import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import HeroSection from "@/sections/home/hero-section";
import LiveAlertSection from "@/sections/home/live-alert-section";
import FeaturesSection from "@/sections/home/features-section";
import StatisticsSection from "@/sections/home/statistics-section";
import CTASection from "@/sections/home/cta-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection />
      <LiveAlertSection />
      <FeaturesSection />
      <StatisticsSection />
      <CTASection />

      <Footer />
    </main>
  );
}
