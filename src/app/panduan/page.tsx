"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  UserCheck,
  BellRing,
  MapPinned,
  BookOpen,
  Share2,
  ChevronDown,
  Mail,
  PhoneCall,
  Sparkles,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

// Steps data
const steps = [
  {
    number: "01",
    title: "Akses Nusa Alert",
    desc: "Buka situs web Nusa Alert melalui browser Anda atau unduh aplikasi mobile untuk mendapatkan akses langsung ke platform.",
    icon: Smartphone,
    glow: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/30",
    iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
  },
  {
    number: "02",
    title: "Registrasi Akun",
    desc: "Daftarkan diri Anda menggunakan nama dan nomor telepon aktif. Akun ini digunakan untuk mempersonalisasi wilayah siaga bencana Anda.",
    icon: UserCheck,
    glow: "bg-amber-500/10",
    border: "group-hover:border-amber-500/30",
    iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
  },
  {
    number: "03",
    title: "Aktifkan Peringatan",
    desc: "Berikan izin notifikasi browser atau verifikasi nomor WhatsApp Anda untuk menerima broadcast peringatan dini instan secara otomatis.",
    icon: BellRing,
    glow: "bg-red-500/10",
    border: "group-hover:border-red-500/30",
    iconColor: "text-red-400 bg-red-500/10 border-red-500/20"
  },
  {
    number: "04",
    title: "Pantau Peta Bencana",
    desc: "Gunakan peta interaktif 3D untuk memantau radar kebencanaan real-time, gempa bumi terkini, dan jarak aman posisi Anda dari pusat bahaya.",
    icon: MapPinned,
    glow: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/30",
    iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
  },
  {
    number: "05",
    title: "Pelajari Panduan Darurat",
    desc: "Akses menu panduan keselamatan untuk membaca e‑book evakuasi mandiri gempa bumi, tsunami, banjir, dan bencana alam lainnya.",
    icon: BookOpen,
    glow: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/30",
    iconColor: "text-emerald-400 bg-emerald-5 0/10 border-emerald-500/20"
  },
  {
    number: "06",
    title: "Bagikan Status Keamanan",
    desc: "Jika berada di area terdampak, gunakan fitur lapor mandiri untuk mengabarkan status keselamatan Anda ke keluarga terdekat dengan cepat.",
    icon: Share2,
    glow: "bg-amber-500/10",
    border: "group-hover:border-amber-500/30",
    iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
  }
];

const faqs = [
  {
    q: "Apakah Nusa Alert berbayar?", a: "Tidak, Nusa Alert sepenuhnya gratis untuk seluruh masyarakat Indonesia. Kami mendedikasikan platform ini sebagai inisiatif sosial untuk meningkatkan kesiapsiagaan bencana nasional."
  },
  {
    q: "Dari mana Nusa Alert mendapatkan data kebencanaan?", a: "Kami mengintegrasikan sistem kami secara real‑time dengan API resmi BMKG serta jaringan sensor kebencanaan regional untuk akurasi tinggi."
  },
  {
    q: "Bagaimana cara mengaktifkan notifikasi WhatsApp?", a: "Daftarkan nomor WhatsApp aktif melalui tombol ‘Aktifkan Notifikasi’ di navbar, lakukan verifikasi OTP, dan nomor Anda akan masuk ke sistem siaran."
  },
  {
    q: "Apakah aplikasi Nusa Alert tersedia untuk iOS dan Android?", a: "Ya, aplikasi mobile Nusa Alert tersedia dalam versi Beta dan dapat diunduh melalui tautan di footer."
  },
  {
    q: "Apa yang harus saya lakukan saat menerima peringatan gempa?", a: "Cari tempat berlindung di bawah meja kokoh, jauhi jendela, dan ikuti rute evakuasi di menu Panduan Darurat setelah getaran mereda."
  }
];

export default function GuidePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setActiveFaq(activeFaq === i ? null : i);

  return (
    <main className="min-h-screen bg-[#071120] text-white overflow-x-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 border-b border-white/5">
        <Container>
          <div className="text-center max-w-4xl mx-auto px-4 space-y-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400"
            >
              <Sparkles size={12} className="animate-pulse" /> PANDUAN PENGGUNAAN
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Panduan Cepat &amp; Cara Kerja <br />
              <span className="bg-gradient-to-r from-red-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
                Platform Nusa Alert
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Pelajari langkah‑praktis untuk mempersiapkan diri, mengaktifkan peringatan dini otomatis, dan membaca peta risiko wilayah Anda.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 border-b border-white/5 bg-[#070b14]/20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4 px-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/15 bg-amber-500/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
                ALUR KERJA
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                6 Langkah Mudah Menggunakan Fitur
              </h2>
              <p className="text-sm sm:text-base text-slate-400">
                Ikuti alur konfigurasi di bawah ini untuk memaksimalkan proteksi kebencanaan secara instan.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -6 }}
                    className={`group relative overflow-hidden rounded-[24px] border border-white/[0.05] bg-gradient-to-b from-[#0F172A]/70 to-[#070b14]/90 p-6 sm:p-8 transition-all duration-500 backdrop-blur-md hover:shadow-2xl ${step.border}`}
                  >
                    <div className={`absolute right-0 top-0 h-24 w-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${step.glow}`} />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0)_40%] pointer-events-none" />
                    <div className="flex justify-between items-start mb-6">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 group-hover:scale-110 ${step.iconColor}`}>
                        <Icon size={20} className="stroke-[1.75]" />
                      </div>
                      <span className="text-2xl font-black text-white/10 tracking-widest group-hover:text-white/20 transition-colors duration-300">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-white/95 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-b border-white/5 bg-[#070b14]/40">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              {/* Intro */}
              <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/15 bg-red-500/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
                  TANYA JAWAB
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Pertanyaan yang Sering Diajukan (FAQ)
                </h2>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Kami rangkum pertanyaan penting tentang cara kerja, validitas data, dan akses peringatan dini.
                </p>
                <div className="pt-2 hidden lg:block">
                  <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] max-w-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <HelpCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Butuh bantuan lain?</p>
                      <p className="text-[0.7rem] text-slate-400 mt-0.5">Hubungi tim support via email atau WhatsApp di bawah.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Accordion */}
              <div className="lg:col-span-7 space-y-3">
                {faqs.map((faq, i) => {
                  const open = activeFaq === i;
                  return (
                    <div
                      key={i}
                      className={`overflow-hidden rounded-xl border border-white/[0.05] transition-all duration-300 ${open ? "bg-[#0b1627] border-cyan-500/20" : "bg-[#0c1322] hover:border-white/10"}`}
                    >
                      <button
                        onClick={() => toggleFaq(i)}
                        className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-semibold text-white transition-colors duration-300"
                      >
                        <span className="text-sm sm:text-base leading-snug pr-2">{faq.q}</span>
                        <motion.div
                          animate={{ rotate: open ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/5 text-slate-400"
                        >
                          <ChevronDown size={14} />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="border-t border-white/[0.05] p-4 sm:p-5 text-xs sm:text-sm text-slate-400 leading-relaxed bg-[#09101d]">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Support */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b172a] via-[#0f213a] to-[#0b172a] p-6 sm:p-10 md:p-12 shadow-2xl">
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
              <div className="grid gap-8 md:grid-cols-12 items-center">
                <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/5 px-3 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-cyan-400">
                    HUBUNGI KAMI
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                    Punya Pertanyaan Teknis atau Kerja Sama?
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-md">
                    Tim Nusa Alert siap membantu 24/7. Hubungi kami lewat email atau WhatsApp untuk respon cepat.
                  </p>
                </div>
                <div className="md:col-span-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-end w-full">
                  {/* Email */}
                  <a
                    href="mailto:support@nusaalert.id"
                    className="flex items-center justify-center sm:justify-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 no-underline w-full sm:w-auto"
                  >
                    <Mail size={18} className="text-cyan-400 shrink-0" />
                    <div className="text-left">
                      <p className="text-[0.62rem] text-slate-500 font-bold uppercase leading-none tracking-wider">KIRIM EMAIL</p>
                      <p className="mt-1 text-xs text-slate-200">support@nusaalert.id</p>
                    </div>
                    <ArrowRight size={14} className="ml-2 text-slate-500 shrink-0" />
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-3.5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-500/15 hover:border-emerald-500/35 hover:-translate-y-0.5 no-underline w-full sm:w-auto"
                  >
                    <PhoneCall size={18} className="text-emerald-400 animate-pulse shrink-0" />
                    <div className="text-left">
                      <p className="text-[0.62rem] text-emerald-500 font-bold uppercase leading-none tracking-wider">WHATSAPP SUPPORT</p>
                      <p className="mt-1 text-xs text-slate-200">+62 812-3456-7890</p>
                    </div>
                    <ArrowRight size={14} className="ml-2 text-emerald-500 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
