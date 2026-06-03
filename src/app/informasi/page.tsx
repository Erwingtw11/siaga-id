"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
    Search,
    Calendar,
    User,
    ArrowRight,
    Flame,
    ShieldAlert,
    CloudLightning,
    Newspaper,
    Mail,
    PhoneCall
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";

// ── Data ──────────────────────────────────────────────────────────────────────

const categories = ["Semua", "Berita Utama", "Edukasi Mitigasi", "Siaran Pers", "Cuaca Ekstrem"] as const;

const articles = [
    {
        id: 1,
        category: "Berita Utama",
        title: "Aktivitas Tektonik Meningkat, BMKG Imbau Warga Pesisir Selatan Tetap Tanggap",
        excerpt: "BMKG mencatat adanya peningkatan aktivitas kegempaan minor di zona subduksi. Masyarakat diminta tidak termakan hoaks tsunami.",
        date: "03 Juni 2026",
        author: "Tim Infokom",
        image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=600",
        icon: ShieldAlert,
        badgeColor: "text-red-400 bg-red-500/5 border-red-500/10",
    },
    {
        id: 2,
        category: "Edukasi Mitigasi",
        title: "Panduan Membuat 'Tas Siaga Bencana' (Emergency Prep Kit) Rumah Tangga",
        excerpt: "Apa saja yang wajib masuk ke dalam tas ransel darurat Anda? Simak daftar dokumen penting, logistik, dan obat-obatan esensial berikut.",
        date: "01 Juni 2026",
        author: "Riset NusaAlert",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600",
        icon: Flame,
        badgeColor: "text-amber-400 bg-amber-500/5 border-amber-500/10",
    },
    {
        id: 3,
        category: "Cuaca Ekstrem",
        title: "Potensi Siklon Tropis Sepekan ke Depan: Wilayah Ini Wajib Waspada Banjir Rob",
        excerpt: "Analisis dinamika atmosfer menunjukkan adanya pusaran angin yang memicu hujan lebat dan kenaikan gelombang laut di beberapa titik.",
        date: "28 Mei 2026",
        author: "BMKG Data",
        image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&q=80&w=600",
        icon: CloudLightning,
        badgeColor: "text-cyan-400 bg-cyan-500/5 border-cyan-500/10",
    },
    {
        id: 4,
        category: "Edukasi Mitigasi",
        title: "Mengenal Struktur Rumah Tahan Gempa: Investasi Aman untuk Masa Depan",
        excerpt: "Belajar dari arsitektur lokal, bangunan dengan struktur ikat silang terbukti lebih lentur menahan guncangan gempa berkekuatan besar.",
        date: "25 Mei 2026",
        author: "Arsitek Siaga",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
        icon: Flame,
        badgeColor: "text-amber-400 bg-amber-500/5 border-amber-500/10",
    },
    {
        id: 5,
        category: "Siaran Pers",
        title: "Nusa Alert Integrasikan Fitur WhatsApp Bot untuk Alert Darurat Real-time",
        excerpt: "Kolaborasi teknologi ini mempercepat transmisi data gempa di atas M 5.0 langsung ke ponsel genggam warga dalam waktu kurang dari 60 detik.",
        date: "20 Mei 2026",
        author: "Humas Nusa",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
        icon: Newspaper,
        badgeColor: "text-emerald-400 bg-emerald-500/5 border-emerald-500/10",
    },
];

// ── Animations (Fixed TypeScript Error with Variants) ─────────────────────

const fadeUp: Variants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

// ── Component ───────────────────────────────────────────────────────────────

export default function InformationPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Filtering Logic
    const filteredArticles = articles.filter((article) => {
        const matchesCategory = selectedCategory === "Semua" || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="relative z-10 min-h-screen bg-[#030712] text-slate-100 antialiased overflow-x-hidden selection:bg-cyan-500/30">

            {/* ── Navbar Layering Fix (Memaksa Navbar Berada Paling Atas Layar) ── */}
            <div className="relative z-50">
                <Navbar />
            </div>

            {/* ── Ambient Premium Subtle Glows ── */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none">
                <div className="absolute -top-40 left-1/4 h-[700px] w-[700px] rounded-full bg-cyan-500/[0.02] blur-[160px]" />
                <div className="absolute top-1/2 right-0 h-[600px] w-[600px] rounded-full bg-red-500/[0.015] blur-[140px]" />
            </div>

            {/* ── Hero Section ─────────────────────────────────────────────────── */}
            <section className="relative pt-44 pb-16 border-b border-slate-900/50 z-10 w-full">
                <Container>
                    {/* Pembungkus Utama: Memaksa seluruh konten berada di tengah secara horizontal */}
                    <div className="flex flex-col items-center justify-center w-full min-h-[250px] text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                            className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 w-full"
                        >
                            <motion.div variants={fadeUp} className="flex justify-center">
                                <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-400 backdrop-blur-sm mx-auto">
                                    Pusat Informasi & Edukasi
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] max-w-3xl text-center mx-auto"
                            >
                                Kabar Kebencanaan &{" "}
                                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                                    Edukasi Mitigasi
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal text-center"
                            >
                                Akses artikel kesiapsiagaan, berita valid terintegrasi BMKG, serta panduan praktis
                                untuk menjaga keselamatan keluarga Anda.
                            </motion.p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ── Filter & Search Controls ─────────────────────────────────────── */}
            <section className="py-8 border-b border-slate-900 bg-slate-950/20 z-20 relative">
                <Container>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Category Pills */}
                        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-3 md:pb-0 no-scrollbar relative z-30">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all duration-200 shrink-0 cursor-pointer ${selectedCategory === cat
                                        ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                                        : "bg-slate-950/40 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Input Search Box */}
                        <div className="relative w-full md:w-80 z-30">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                                <Search size={15} />
                            </span>
                            <input
                                type="text"
                                placeholder="Cari berita atau edukasi..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-950/40 border border-slate-900 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/30 focus:ring-1 focus:ring-cyan-500/10 transition-all"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── Articles Grid Section ────────────────────────────────────────── */}
            <section className="py-20 z-10 relative">
                <Container>
                    <AnimatePresence mode="popLayout">
                        {filteredArticles.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {filteredArticles.map((article) => {
                                    const IconComponent = article.icon;
                                    return (
                                        <motion.article
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.3 }}
                                            key={article.id}
                                            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm transition-all duration-300 hover:border-slate-800 hover:shadow-[0_0_40px_-12px_rgba(6,182,212,0.08)]"
                                        >
                                            {/* Image Frame */}
                                            <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                                                {/* Category Floating Badge */}
                                                <span className={`absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[10px] font-semibold tracking-wide backdrop-blur-md ${article.badgeColor}`}>
                                                    <IconComponent size={11} />
                                                    {article.category}
                                                </span>
                                            </div>

                                            {/* Content Details */}
                                            <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                                                <div className="space-y-2">
                                                    {/* Metadata */}
                                                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-normal">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar size={11} />
                                                            {article.date}
                                                        </span>
                                                        <span className="h-1 w-1 rounded-full bg-slate-800" />
                                                        <span className="flex items-center gap-1">
                                                            <User size={11} />
                                                            {article.author}
                                                        </span>
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                                                        {article.title}
                                                    </h3>

                                                    {/* Excerpt */}
                                                    <p className="text-xs text-slate-400 leading-relaxed font-normal line-clamp-3">
                                                        {article.excerpt}
                                                    </p>
                                                </div>

                                                {/* Read More Link */}
                                                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors cursor-pointer">
                                                    <span>Baca Selengkapnya</span>
                                                    <ArrowRight size={13} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                                                </div>
                                            </div>
                                        </motion.article>
                                    );
                                })}
                            </motion.div>
                        ) : (
                            /* Empty State */
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20 max-w-sm mx-auto space-y-3"
                            >
                                <div className="text-slate-600 text-3xl font-mono">⚠️</div>
                                <h3 className="text-base font-semibold text-white">Artikel Tidak Ditemukan</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Tidak ada informasi atau artikel edukasi yang cocok dengan kata kunci pencarian Anda saat ini.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Container>
            </section>

            {/* ── Support Section ──────────────────────────────────────────────── */}
            <section className="pt-12 pb-16 z-10 relative">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="relative overflow-hidden rounded-2xl border border-slate-900 bg-gradient-to-b from-slate-950 to-[#030712] p-8 md:p-12"
                    >
                        <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-cyan-500/[0.02] blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-red-500/[0.02] blur-3xl pointer-events-none" />

                        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a
                                    href="mailto:support@nusaalert.id"
                                    className="group flex flex-col justify-between rounded-xl border border-slate-900 bg-slate-950/40 p-5 transition-all duration-300 hover:bg-slate-900/40 hover:border-slate-800 no-underline cursor-pointer"
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

                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col justify-between rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] p-5 transition-all duration-300 hover:bg-emerald-500/[0.05] hover:border-emerald-500/20 no-underline cursor-pointer"
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

            {/* ── Footer Spasi Section ── */}
            <div className="pt-16 pb-24 bg-[#030712] relative z-10 border-t border-slate-950">
                <Footer />
            </div>
        </main>
    );
}