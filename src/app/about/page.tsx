"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Compass,
  ShieldAlert,
  Globe,
  Sparkles,
  Award,
  Terminal,
  Heart,
  BookOpen,
  Radio
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
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Alfito",
    role: "Chief Technology Officer",
    desc: "Arsitek sistem IoT & radar pendeteksi dini berbasis kecerdasan buatan.",
    avatarIcon: Terminal,
    theme: "cyan",
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Muhamad Afwan",
    role: "Head of Disaster Education",
    desc: "Pakar vulkanologi, mendedikasikan ilmu untuk sosialisasi & literasi bencana.",
    avatarIcon: BookOpen,
    theme: "amber",
    socials: { linkedin: "#", github: "#", twitter: "#" }
  }
];

const stats = [
  { value: "100K+", label: "Pengguna Aktif", desc: "Warga terproteksi real-time", color: "text-red-500" },
  { value: "15+", label: "Proyek Mitigasi", desc: "Integrasi sistem lokal", color: "text-cyan-400" },
  { value: "50+", label: "Wilayah Terpantau", desc: "Sensor radar aktif", color: "text-emerald-400" },
  { value: "24/7", label: "Sistem Aktif", desc: "Monitoring tiada henti", color: "text-amber-400" }
];

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#071120] text-white overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-red-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5">
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-red-500/15 bg-red-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-red-400"
            >
              <Sparkles size={12} className="animate-pulse" /> TENTANG KAMI
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Menjaga Nusantara, <br />
              <span className="bg-gradient-to-r from-red-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
                Melindungi Setiap Jiwa
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Nusa Alert adalah platform teknologi dan edukasi kebencanaan terdepan di Indonesia.
              Kami menjembatani sains data real-time dengan aksi keselamatan publik.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Company Description & Narrative Section */}
      <section className="py-20 border-b border-white/5">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c192c]/90 p-8 shadow-2xl">
                <div className="flex justify-between items-start mb-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Radio size={24} className="animate-pulse" />
                  </div>
                  <span className="text-[0.65rem] font-bold tracking-widest text-slate-500 uppercase bg-white/5 px-2.5 py-1 rounded-md">
                    ESTABLISHED 2026
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight text-white">Nusa Alert Network</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Sistem kami terhubung langsung dengan sensor seismik regional, radar meteorologi,
                    dan sistem satelit laut untuk mengolah jutaan data per detik.
                  </p>
                  <div className="pt-4 flex gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                      Live Feed
                    </span>
                    <span>• Smart Detection</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Narrative Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                CERITA KAMI
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Menyatukan Inovasi Teknologi dan Literasi Kebencanaan
              </h2>
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
                Indonesia dikelilingi oleh cincin api pasifik (*ring of fire*). Kami percaya bahwa kesiapan menghadapi bencana bukan sekadar opsi, melainkan kebutuhan dasar.
                Nusa Alert lahir untuk memecahkan hambatan informasi dengan menyajikan peringatan dini yang sangat cepat, presisi, dan mudah dipahami oleh siapa saja.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Melalui riset berkelanjutan bersama para ahli geofisika, meteorologi, dan pakar edukasi, kami terus mengembangkan modul panduan mandiri interaktif, peta risiko bahaya 3D, serta integrasi notifikasi cepat darurat terdesentralisasi.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 border-b border-white/5 bg-[#070b14]/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/15 bg-amber-500/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
              ARAH DAN TUJUAN
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Visi & Misi Kami
            </h2>
            <p className="text-slate-400">
              Panduan nilai yang mendasari setiap baris kode dan keputusan strategis kami.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -6, border: "rgba(6, 182, 212, 0.3) 1px solid" }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-[#0F172A]/60 to-[#070b14]/90 p-8 shadow-xl"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Visi</h3>
              <p className="text-slate-400 leading-relaxed">
                Menjadi pusat integrasi data kebencanaan dan edukasi keselamatan publik terdepan di Indonesia,
                menciptakan masyarakat yang tangguh, tanggap, dan minim risiko fatalitas.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -6, border: "rgba(239, 68, 68, 0.3) 1px solid" }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-[#0F172A]/60 to-[#070b14]/90 p-8 shadow-xl"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/5 blur-3xl" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Misi</h3>
              <ul className="space-y-3.5 text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-xs font-bold mt-0.5 border border-red-500/15">
                    1
                  </span>
                  <span>Mengembangkan teknologi sensor dan algoritma pengolahan data deteksi dini bencana yang presisi dan cepat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-xs font-bold mt-0.5 border border-red-500/15">
                    2
                  </span>
                  <span>Menyediakan edukasi kesiapsiagaan interaktif yang mudah dipahami bagi semua kalangan masyarakat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-xs font-bold mt-0.5 border border-red-500/15">
                    3
                  </span>
                  <span>Membangun jaringan kolaboratif dengan pembuat kebijakan, institusi akademis, dan komunitas relawan lokal.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-16 border-b border-white/5 bg-[#071120]">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.04] bg-[#0c1626]/80 p-6 shadow-lg backdrop-blur-sm"
              >
                <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-white/[0.01] blur-md transition-all duration-300 group-hover:bg-white/[0.03]" />
                <h3 className={`text-4xl font-extrabold tracking-tight ${stat.color} mb-1.5`}>
                  {stat.value}
                </h3>
                <p className="text-sm font-bold text-white uppercase tracking-wider">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              STRUKTUR TIM
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tokoh di Balik Layar
            </h2>
            <p className="text-slate-400">
              Tim profesional multi-disiplin berkomitmen menyebarkan rasa aman di seluruh penjuru negeri.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => {
              const AvatarIcon = member.avatarIcon;
              const themeColorMap = {
                red: {
                  borderHover: "hover:border-red-500/30",
                  shadowHover: "hover:shadow-[0_20px_50px_-15px_rgba(239,68,68,0.2)]",
                  avatarContainer: "bg-red-500/10 border-red-500/20 text-red-400",
                  socialHover: "hover:text-red-400"
                },
                cyan: {
                  borderHover: "hover:border-cyan-500/30",
                  shadowHover: "hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.2)]",
                  avatarContainer: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
                  socialHover: "hover:text-cyan-400"
                },
                amber: {
                  borderHover: "hover:border-amber-500/30",
                  shadowHover: "hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.2)]",
                  avatarContainer: "bg-amber-500/10 border-amber-500/20 text-amber-400",
                  socialHover: "hover:text-amber-400"
                },
                emerald: {
                  borderHover: "hover:border-emerald-500/30",
                  shadowHover: "hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.2)]",
                  avatarContainer: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
                  socialHover: "hover:text-emerald-400"
                }
              }[member.theme as "red" | "cyan" | "amber" | "emerald"];

              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-gradient-to-b from-[#0F172A]/70 to-[#070b14]/90 p-6 transition-all duration-500 backdrop-blur-md ${themeColorMap.borderHover} ${themeColorMap.shadowHover}`}
                >
                  {/* Card overlay glow */}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0)_40%)] pointer-events-none" />

                  <div className="flex flex-col items-center text-center">
                    {/* Animated Avatar Box */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-3xl bg-white/5 blur-md group-hover:scale-110 transition-transform duration-500" />
                      <div className={`relative flex h-24 w-24 items-center justify-center rounded-3xl border transition-all duration-500 group-hover:rotate-6 ${themeColorMap.avatarContainer}`}>
                        <AvatarIcon size={44} className="stroke-[1.5]" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-white/90 transition duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                      {member.role}
                    </p>
                    <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-[200px]">
                      {member.desc}
                    </p>

                    {/* Social networks links */}
                    <div className="mt-6 flex gap-4 border-t border-white/[0.06] pt-5 w-full justify-center">
                      <a href={member.socials.linkedin} className={`text-slate-500 transition-colors duration-300 ${themeColorMap.socialHover}`}>
                        <LinkedInIcon size={16} />
                      </a>
                      <a href={member.socials.github} className={`text-slate-500 transition-colors duration-300 ${themeColorMap.socialHover}`}>
                        <GitHubIcon size={16} />
                      </a>
                      <a href={member.socials.twitter} className={`text-slate-500 transition-colors duration-300 ${themeColorMap.socialHover}`}>
                        <Globe size={16} />
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
