"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Compass,
  ShieldAlert,
  Sparkles,
  Award,
  Terminal,
  Heart,
  BookOpen,
  Radio,
  Globe,
} from "lucide-react";

const LinkedInIcon = ({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = ({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

const teamMembers = [
  {
    name: "Erwin Gutawa",
    role: "Chief Executive Officer",
    desc: "Visi teknologi mitigasi untuk keselamatan jutaan warga Indonesia.",
    avatarIcon: Compass,
    theme: "red",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Alfito",
    role: "Chief Technology Officer",
    desc: "Arsitek sistem IoT & radar pendeteksi dini berbasis kecerdasan buatan.",
    avatarIcon: Terminal,
    theme: "cyan",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Muhamad Afwan",
    role: "Head of Disaster Education",
    desc: "Pakar vulkanologi, mendedikasikan ilmu untuk sosialisasi & literasi bencana.",
    avatarIcon: BookOpen,
    theme: "amber",
    socials: { linkedin: "#", github: "#" },
  },
];

const stats = [
  { value: "100K+", label: "Pengguna Aktif", desc: "Warga terproteksi real-time", color: "text-red-400" },
  { value: "15+", label: "Proyek Mitigasi", desc: "Integrasi sistem lokal", color: "text-cyan-400" },
  { value: "50+", label: "Wilayah Terpantau", desc: "Sensor radar aktif", color: "text-emerald-400" },
  { value: "24/7", label: "Sistem Aktif", desc: "Monitoring tiada henti", color: "text-amber-400" },
];

const themeMap = {
  red: {
    badge: "border-red-500/20 bg-red-500/10 text-red-400",
    avatar: "bg-red-500/10 border-red-500/20 text-red-400",
    glow: "bg-red-500/5",
    hover: "hover:border-red-500/30 hover:shadow-[0_20px_50px_-15px_rgba(239,68,68,0.15)]",
    social: "hover:text-red-400",
  },
  cyan: {
    badge: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
    avatar: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    glow: "bg-cyan-500/5",
    hover: "hover:border-cyan-500/30 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.15)]",
    social: "hover:text-cyan-400",
  },
  amber: {
    badge: "border-amber-500/20 bg-amber-500/10 text-amber-400",
    avatar: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    glow: "bg-amber-500/5",
    hover: "hover:border-amber-500/30 hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.15)]",
    social: "hover:text-amber-400",
  },
};

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#071120] text-white overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[140px]" />
        <div className="absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/4 blur-[120px]" />
      </div>

      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-24 border-b border-white/5">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-red-400 text-xs font-semibold tracking-wider uppercase mb-6">
                <Sparkles size={13} />
                Platform Mitigasi Bencana Indonesia
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
            >
              Menjaga Nusantara,{" "}
              <span className="bg-gradient-to-r from-red-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
                Melindungi Setiap Jiwa
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl mx-auto"
            >
              Sistem peringatan dini berbasis AI yang membantu masyarakat Indonesia menghadapi
              gempa bumi, tsunami, banjir, dan erupsi gunung api secara cepat dan akurat.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-8">
              <button className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition-colors font-semibold text-sm">
                Jelajahi Peta Bencana
              </button>
              <button className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/25 transition-colors text-sm text-slate-300">
                Pelajari Lebih Lanjut
              </button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-16 border-b border-white/5">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.04]"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#071120] px-8 py-10 text-center group hover:bg-[#0c1829] transition-colors duration-300"
              >
                <p className={`text-4xl font-black tracking-tight ${stat.color}`}>{stat.value}</p>
                <p className="mt-2 text-sm font-bold text-white">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Story Section ── */}
      <section className="py-24 border-b border-white/5">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl border border-white/[0.07] bg-[#0c192c]/80 backdrop-blur-xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Radio size={20} className="animate-pulse" />
                  </div>
                  <span className="text-[0.65rem] font-bold tracking-widest text-slate-500 uppercase bg-white/5 px-2.5 py-1 rounded-md">
                    ESTABLISHED 2026
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Nusa Alert Network</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Sistem kami terhubung langsung dengan sensor seismik regional, radar
                  meteorologi, dan sistem satelit laut untuk mengolah jutaan data per detik.
                </p>
                <div className="mt-6 flex gap-4 text-xs font-semibold uppercase tracking-wider text-slate-500 border-t border-white/5 pt-5">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                    Live Feed
                  </span>
                  <span>• Smart Detection</span>
                  <span>• AI Powered</span>
                </div>
              </div>
            </motion.div>

            {/* Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Cerita Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Menyatukan Inovasi Teknologi dan Literasi Kebencanaan
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Indonesia dikelilingi oleh cincin api pasifik. Kami percaya bahwa kesiapan
                menghadapi bencana bukan sekadar opsi, melainkan kebutuhan dasar. Nusa Alert
                lahir untuk memecahkan hambatan informasi dengan menyajikan peringatan dini
                yang sangat cepat, presisi, dan mudah dipahami oleh siapa saja.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Melalui riset berkelanjutan bersama para ahli geofisika, meteorologi, dan pakar
                edukasi, kami terus mengembangkan modul panduan mandiri interaktif, peta risiko
                bahaya, serta integrasi notifikasi cepat darurat terdesentralisasi.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-24 border-b border-white/5 bg-[#060d1a]/60">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-amber-500/15 bg-amber-500/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
              Arah & Tujuan
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Visi &amp; Misi Kami
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-slate-400 text-sm leading-relaxed">
              Panduan nilai yang mendasari setiap baris kode dan keputusan strategis kami.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-white/[0.06] bg-gradient-to-br from-[#0F172A]/80 to-[#060d1a]/90 p-8 hover:border-cyan-500/20 transition-colors duration-300"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
                <Target size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Visi</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Menjadi pusat integrasi data kebencanaan dan edukasi keselamatan publik
                terdepan di Indonesia, menciptakan masyarakat yang tangguh, tanggap, dan
                minim risiko fatalitas.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-3xl border border-white/[0.06] bg-gradient-to-br from-[#0F172A]/80 to-[#060d1a]/90 p-8 hover:border-red-500/20 transition-colors duration-300"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Misi</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                {[
                  "Mengembangkan teknologi sensor dan algoritma pengolahan data deteksi dini bencana yang presisi dan cepat.",
                  "Menyediakan edukasi kesiapsiagaan interaktif yang mudah dipahami bagi semua kalangan masyarakat.",
                  "Membangun jaringan kolaboratif dengan pembuat kebijakan, institusi akademis, dan komunitas relawan lokal.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 border border-red-500/15 text-red-400 text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Team Section ── */}
      <section className="py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Tim Kami
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Tokoh di Balik Layar
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-slate-400 text-sm leading-relaxed">
              Tim profesional multi-disiplin berkomitmen menyebarkan rasa aman di seluruh penjuru negeri.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => {
              const AvatarIcon = member.avatarIcon;
              const theme = themeMap[member.theme as keyof typeof themeMap];
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative rounded-3xl border border-white/[0.05] bg-gradient-to-b from-[#0F172A]/70 to-[#060d1a]/90 p-8 transition-all duration-400 ${theme.hover}`}
                >
                  {/* Glow blob */}
                  <div className={`absolute -top-6 -right-6 h-28 w-28 rounded-full ${theme.glow} blur-3xl pointer-events-none`} />

                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-3xl bg-white/5 blur-md group-hover:scale-110 transition-transform duration-500" />
                      <div className={`relative flex h-20 w-20 items-center justify-center rounded-3xl border transition-all duration-500 group-hover:rotate-6 ${theme.avatar}`}>
                        <AvatarIcon size={36} className="stroke-[1.5]" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white">{member.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                      {member.role}
                    </p>
                    <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-[200px]">
                      {member.desc}
                    </p>

                    {/* Social Links */}
                    <div className="mt-6 flex gap-4 border-t border-white/[0.06] pt-5 w-full justify-center">
                      <a href={member.socials.linkedin} className={`text-slate-500 transition-colors duration-300 ${theme.social}`}>
                        <LinkedInIcon size={15} />
                      </a>
                      <a href={member.socials.github} className={`text-slate-500 transition-colors duration-300 ${theme.social}`}>
                        <GitHubIcon size={15} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
