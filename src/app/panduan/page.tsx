"use client";

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
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

// ── Data ──────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Akses Nusa Alert",
    desc: "Buka situs web Nusa Alert melalui browser atau unduh aplikasi mobile untuk akses langsung ke platform.",
    icon: Smartphone,
    color: "cyan",
  },
  {
    number: "02",
    title: "Registrasi Akun",
    desc: "Daftarkan diri menggunakan nama dan nomor telepon aktif untuk mempersonalisasi wilayah siaga bencana Anda.",
    icon: UserCheck,
    color: "amber",
  },
  {
    number: "03",
    title: "Aktifkan Peringatan",
    desc: "Berikan izin notifikasi atau verifikasi nomor WhatsApp untuk menerima broadcast peringatan dini instan.",
    icon: BellRing,
    color: "red",
  },
  {
    number: "04",
    title: "Pantau Peta Bencana",
    desc: "Gunakan peta interaktif real-time untuk memantau radar kebencanaan, gempa terkini, dan jarak aman posisi Anda.",
    icon: MapPinned,
    color: "cyan",
  },
  {
    number: "05",
    title: "Pelajari Panduan Darurat",
    desc: "Akses panduan keselamatan untuk membaca e-book evakuasi mandiri gempa, tsunami, banjir, dan bencana lainnya.",
    icon: BookOpen,
    color: "emerald",
  },
  {
    number: "06",
    title: "Bagikan Status Keamanan",
    desc: "Gunakan fitur lapor mandiri untuk mengabarkan status keselamatan Anda ke keluarga terdekat dengan cepat.",
    icon: Share2,
    color: "amber",
  },
];

const faqs = [
  {
    q: "Apakah Nusa Alert berbayar?",
    a: "Tidak, Nusa Alert sepenuhnya gratis untuk seluruh masyarakat Indonesia. Kami mendedikasikan platform ini sebagai inisiatif sosial untuk meningkatkan kesiapsiagaan bencana nasional.",
  },
  {
    q: "Dari mana Nusa Alert mendapatkan data kebencanaan?",
    a: "Kami mengintegrasikan sistem kami secara real-time dengan API resmi BMKG serta jaringan sensor kebencanaan regional untuk akurasi tinggi.",
  },
  {
    q: "Bagaimana cara mengaktifkan notifikasi WhatsApp?",
    a: "Daftarkan nomor WhatsApp aktif melalui tombol 'Aktifkan Notifikasi' di navbar, lakukan verifikasi OTP, dan nomor Anda akan masuk ke sistem siaran.",
  },
  {
    q: "Apakah aplikasi Nusa Alert tersedia untuk iOS dan Android?",
    a: "Ya, aplikasi mobile Nusa Alert tersedia dalam versi Beta dan dapat diunduh melalui tautan di footer.",
  },
  {
    q: "Apa yang harus saya lakukan saat menerima peringatan gempa?",
    a: "Cari tempat berlindung di bawah meja kokoh, jauhi jendela, dan ikuti rute evakuasi di menu Panduan Darurat setelah getaran mereda.",
  },
];

// ── UTILS COLOR MAPPING ───────────────────────────────────────────────────────

const colorVariants: Record<string, { text: string; bg: string; border: string; glow: string; hover: string }> = {
  cyan: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/5",
    border: "border-cyan-500/10",
    glow: "bg-cyan-500/5",
    hover: "hover:border-cyan-500/30 hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.12)]",
  },
  amber: {
    text: "text-amber-400",
    bg: "bg-amber-500/5",
    border: "border-amber-500/10",
    glow: "bg-amber-500/5",
    hover: "hover:border-amber-500/30 hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.12)]",
  },
  red: {
    text: "text-red-400",
    bg: "bg-red-500/5",
    border: "border-red-500/10",
    glow: "bg-red-500/5",
    hover: "hover:border-red-500/30 hover:shadow-[0_0_50px_-12px_rgba(239,68,68,0.12)]",
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/10",
    glow: "bg-emerald-500/5",
    hover: "hover:border-emerald-500/30 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.12)]",
  },
};

// ── Animations ─────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const } // <-- Tambahkan 'as const' di sini
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  },
};
// ── Component ───────────────────────────────────────────────────────────────

export default function GuidePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setActiveFaq(activeFaq === i ? null : i);

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 antialiased overflow-x-hidden selection:bg-cyan-500/30">
      {/* Ambient premium subtle glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.03] blur-[140px]" />
        <div className="absolute top-1/3 -left-20 h-[500px] w-[500px] rounded-full bg-red-500/[0.02] blur-[140px]" />
        <div className="absolute -bottom-20 right-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/[0.02] blur-[120px]" />
      </div>

      <Navbar />

      {/* ── Hero Section Panduan ─────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-16 border-b border-white/10 z-10 w-full">
        <Container>
          {/* Pembungkus Utama: Memaksa konten berada tepat di tengah */}
          <div className="flex flex-col items-center justify-center w-full text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 w-full">

              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-400 backdrop-blur-sm mx-auto">
                  ✨ Panduan Penggunaan
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] max-w-3xl text-center mx-auto">
                Cara Kerja <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">Nusa Alert</span>
              </h1>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal text-center">
                Pelajari langkah praktis untuk mempersiapkan diri, mengaktifkan peringatan dini,
                dan membaca peta risiko wilayah Anda — cukup dalam beberapa menit.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section Alur Kerja (6 Langkah Mudah Memulai) ─────────────────────────── */}
      <section className="py-16 w-full">
        <Container>
          <div className="flex flex-col items-center justify-center w-full text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3 mx-auto">
              Alur Kerja
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white text-center mx-auto max-w-xl">
              6 Langkah Mudah Memulai
            </h2>
            <p className="text-slate-400 text-sm mt-2 text-center mx-auto max-w-md">
              Ikuti alur konfigurasi berikut untuk memaksimalkan proteksi kebencanaan Anda.
            </p>
          </div>

          {/* ... Sisa kode grid 6 langkah Anda di bawahnya tetap biarkan ... */}
        </Container>
      </section>

      {/* ── Steps Section ────────────────────────────────────────────────── */}
      <section className="py-24 border-b border-slate-900 z-10 relative">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-400"
            >
              Alur Kerja
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white"
            >
              6 Langkah Mudah Memulai
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed"
            >
              Ikuti alur konfigurasi berikut untuk memaksimalkan proteksi kebencanaan Anda.
            </motion.p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const theme = colorVariants[step.color] || colorVariants.cyan;

              return (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm p-8 transition-all duration-300 ${theme.hover}`}
                >
                  {/* Subtle Hover Glow */}
                  <div className={`absolute -top-12 -right-12 h-24 w-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${theme.glow}`} />

                  {/* Icon & Number Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105 ${theme.bg} ${theme.border} ${theme.text}`}>
                      <Icon size={20} className="stroke-[1.75]" />
                    </div>
                    <span className="text-3xl font-black text-slate-900 group-hover:text-slate-800/60 transition-colors duration-300 select-none font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2 tracking-tight group-hover:text-slate-100 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── FAQ Section ──────────────────────────────────────────────────── */}
      <section className="py-24 border-b border-slate-900 bg-slate-950/20 z-10 relative">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">

            {/* Left Column: Intro */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 lg:sticky lg:top-28 space-y-5"
            >
              <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-400">
                Tanya Jawab
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Kami rangkum pertanyaan penting tentang cara kerja, validitas data, dan akses peringatan dini.
              </p>

              {/* Minimal Help Box */}
              <div className="flex items-start gap-4 rounded-xl border border-slate-900 bg-slate-950/60 p-5 backdrop-blur-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-cyan-400">
                  <HelpCircle size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white tracking-tight">Butuh bantuan lain?</p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    Hubungi tim support via email atau WhatsApp di bagian bawah halaman ini.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-8 space-y-3">
              {faqs.map((faq, i) => {
                const open = activeFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ y: 12, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className={`overflow-hidden rounded-xl border transition-all duration-300 ${open
                      ? "border-cyan-500/20 bg-slate-900/30"
                      : "border-slate-900 bg-slate-950/20 hover:border-slate-800"
                      }`}
                  >
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                    >
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors leading-snug">
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${open ? "bg-cyan-500/10 text-cyan-400" : "bg-slate-900 text-slate-400 group-hover:text-slate-300"
                          }`}
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
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </Container>
      </section>

      {/* ── Support Section ──────────────────────────────────────────────── */}
      <section className="pt-24 pb-16 z-10 relative">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border border-slate-900 bg-gradient-to-b from-slate-950 to-[#030712] p-8 md:p-12"
          >
            {/* Background Accent Gradients */}
            <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-cyan-500/[0.02] blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-red-500/[0.02] blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">

              {/* Left Column: Text */}
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-400">
                  Hubungi Kami
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  Butuh Bantuan Lebih Lanjut?
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
                  Tim Nusa Alert siap membantu 24/7. Hubungi kami lewat email atau WhatsApp untuk respon cepat.
                </p>
              </div>

              {/* Right Column: Interactive Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Support Button */}
                <a
                  href="mailto:support@nusaalert.id"
                  className="group flex flex-col justify-between rounded-xl border border-slate-900 bg-slate-950/40 p-5 transition-all duration-300 hover:bg-slate-900/40 hover:border-slate-800 no-underline"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-105">
                    <Mail size={16} />
                  </div>
                  <div className="mt-8">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Email Support</p>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors truncate">support@nusaalert.id</p>
                      <ArrowRight size={14} className="text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  </div>
                </a>

                {/* WhatsApp Support Button */}
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] p-5 transition-all duration-300 hover:bg-emerald-500/[0.05] hover:border-emerald-500/20 no-underline"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 transition-transform duration-300 group-hover:scale-105">
                    <PhoneCall size={16} />
                  </div>
                  <div className="mt-8">
                    <p className="text-[10px] text-emerald-500/70 font-bold uppercase tracking-widest">WhatsApp Support</p>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">+62 812-3456-7890</p>
                      <ArrowRight size={14} className="text-emerald-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Wrapper Tambahan untuk Ruang Spasi Footer ───────────────────── */}
      {/* pt-16 memberikan jarak yang elegan dari box Support di atasnya */}
      {/* pb-24 memberikan ruang napas yang sangat lega di batas paling bawah layar browser */}
      <div className="pt-16 pb-24 bg-[#030712] relative z-10 border-t border-slate-950">
        <Footer />
      </div>
    </main>
  );
}