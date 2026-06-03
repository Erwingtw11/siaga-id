"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#071120] py-16 lg:py-20">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,209,255,0.18),transparent_36%),radial-gradient(circle_at_80%_12%,rgba(255,77,77,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.92),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent" />
      <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute right-[-7rem] top-24 h-72 w-72 rounded-full bg-red-500/12 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl" />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

       <motion.div
         className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-4 sm:px-5 md:px-6 lg:px-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
       >
         {/* Left Column */}
         <motion.div variants={itemVariants} className="min-w-0">
            <div className="max-w-[420px]">
             {/* Badge */}
             <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cyan-400 shadow-[0_0_15px_rgba(0,209,255,0.06)] backdrop-blur-xl">
               <span className="relative flex h-2 w-2">
                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D1FF]/60" />
                 <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D1FF]" />
               </span>
               Realtime Monitoring Center
             </div>

              {/* Heading */}
              <h1 className="mt-4 text-[1.875rem] min-[375px]:text-[2.125rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3rem] font-bold leading-[1.08] tracking-tight text-white">
                Peringatan Dini, <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#FF4D4D] via-[#ff6868] to-[#ff4d4d] bg-clip-text text-transparent">
                  Selamatkan Negeri
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-lg text-[0.875rem] leading-relaxed text-slate-300 sm:text-sm sm:leading-6">
                Pantau informasi bencana secara real-time dan tingkatkan kesiapsiagaan Anda
              </p>

             {/* Buttons */}
             <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/dashboard"
                  className="group inline-flex min-h-10 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF4D4D] to-[#f43f5e] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,77,77,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(255,77,77,0.28)] sm:px-6"
                >
                  Lihat Peta Bencana
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>

                <button
                  type="button"
                  className="inline-flex min-h-10 w-full sm:w-auto items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] px-6 py-2.5 text-sm font-semibold text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35 hover:bg-white/[0.08] hover:text-white sm:px-6"
                >
                  Pelajari Lebih Lanjut
                </button>
             </div>
           </div>

          {/* Supported Partners Section */}
          <div className="mt-12 border-t border-white/5 pt-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-500">
              Didukung oleh
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-2 hover:bg-white/[0.04] transition duration-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                <span className="text-[0.68rem] font-extrabold text-slate-300 tracking-wider uppercase">BMKG</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-2 hover:bg-white/[0.04] transition duration-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                <span className="text-[0.68rem] font-extrabold text-slate-300 tracking-wider uppercase">InaRISK</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-2 hover:bg-white/[0.04] transition duration-300">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]" />
                <span className="text-[0.68rem] font-extrabold text-slate-300 tracking-wider uppercase">BNPB</span>
              </div>
            </div>
          </div>
        </motion.div>

         {/* Right Column (Alert Card) */}
         <motion.div
           variants={itemVariants}
           className="relative mx-auto min-w-0 w-full max-w-[500px] md:max-w-full lg:ml-auto"
           animate={{ y: [0, -4, 0] }}
           transition={{
             duration: 5.5,
             repeat: Number.POSITIVE_INFINITY,
             ease: "easeInOut",
           }}
         >
           <div className="relative overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.05] p-4 shadow-[0_25px_75px_rgba(0,0,0,0.4)] backdrop-blur-xl">
             <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_28%,rgba(7,17,32,0)_56%)] pointer-events-none" />
             <div className="absolute -left-8 top-6 h-20 w-20 rounded-full bg-cyan-400/15 blur-2xl pointer-events-none" />
             <div className="absolute bottom-3 right-0 h-24 w-24 rounded-full bg-red-500/15 blur-2xl pointer-events-none" />

             <div className="relative rounded-[20px] border border-white/10 bg-gradient-to-br from-[#0B1324]/90 to-[#070b14]/98 p-4 md:p-6">
               {/* Card Grid Background Overlay */}
               <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

               {/* Tag Header */}
               <div className="relative z-10 flex items-center justify-between">
                 <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-red-500">
                   Peringatan Terkini
                 </span>
                 <span className="rounded-full bg-red-500/10 border border-red-400/20 px-3 py-0.5 text-xs font-semibold text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.15)]">
                   Waspada
                 </span>
               </div>

               {/* Primary Content (Title & Magnitude) */}
               <div className="relative z-10 mt-6 flex items-center gap-3">
                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 text-red-500 shadow-[0_0_16px_rgba(239,68,68,0.2)] animate-pulse">
                   <AlertTriangle size={20} className="fill-red-500/10" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl leading-none">
                     Gempa Mag: 5.6
                   </h3>
                   <p className="mt-2 text-xs font-medium text-slate-400 leading-snug">
                     105 km BaratDaya KAB-SUKABUMI-JABAR
                   </p>
                 </div>
               </div>

               {/* Detail Info Grid */}
               <div className="relative z-10 mt-6 grid gap-3 border-t border-white/[0.08] pt-4 grid-cols-1 sm:grid-cols-3">
                 <div>
                   <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-slate-500">
                     Waktu
                   </p>
                   <p className="mt-1.5 text-xs font-medium text-slate-300 leading-relaxed">
                     10 Mei 2024, 14:32:21 WIB
                   </p>
                 </div>
                 <div>
                   <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-slate-500">
                     Kedalaman
                   </p>
                   <p className="mt-1.5 text-xs font-semibold text-slate-300 leading-relaxed">
                     10 Km
                   </p>
                 </div>
                 <div>
                   <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-slate-500">
                     Lokasi
                   </p>
                   <p className="mt-1.5 text-xs font-medium text-slate-300 leading-relaxed">
                     Sukabumi, Jawa Barat
                   </p>
                 </div>
               </div>

               {/* Bottom Link */}
               <div className="relative z-10 mt-6 border-t border-white/[0.08] pt-4">
                 <Link
                   href="/dashboard"
                   className="group/btn inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400 hover:text-cyan-300 transition duration-300"
                 >
                   Lihat Detail
                   <ArrowRight
                     size={12}
                     className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                   />
                 </Link>
               </div>
             </div>
           </div>
         </motion.div>
      </motion.div>
    </section>
  );
}
