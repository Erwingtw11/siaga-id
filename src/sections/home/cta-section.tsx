import { Bell, ArrowRight } from "lucide-react";

import Container from "@/components/layout/container";

export default function CTASection() {
  return (
     <section id="cta" className="relative py-16 lg:py-20 overflow-hidden bg-[#071120]">
       <Container>
         <div className="group relative overflow-hidden rounded-[20px] border border-red-500/18 bg-gradient-to-r from-[#1E1114]/95 via-[#0B0D14]/98 to-[#0F172A]/90 p-6 md:p-8 shadow-[0_16px_40px_rgba(239,68,68,0.06)]">
           {/* Glowing Blobs */}
           <div className="absolute left-8 top-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-red-500/8 blur-[64px] pointer-events-none" />
           <div className="absolute right-8 top-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-cyan-500/6 blur-[64px] pointer-events-none" />

           {/* Seismic Wave SVG Overlay */}
           <div className="absolute inset-y-0 right-[22%] left-[33%] opacity-15 pointer-events-none hidden md:block">
             <svg className="h-full w-full" viewBox="0 0 400 100" preserveAspectRatio="none">
               <path
                 d="M0,50 L80,50 L90,45 L100,55 L110,35 L120,65 L130,10 L140,90 L150,40 L160,60 L170,50 L250,50 L260,40 L270,60 L280,30 L290,70 L300,50 L400,50"
                 fill="none"
                 stroke="url(#seismic-grad)"
                 strokeWidth="1.5"
               />
               <defs>
                 <linearGradient id="seismic-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#ff4d4d" stopOpacity="0.35" />
                   <stop offset="50%" stopColor="#ff4d4d" stopOpacity="0.9" />
                   <stop offset="100%" stopColor="#00d1ff" stopOpacity="0.35" />
                 </linearGradient>
               </defs>
             </svg>
           </div>

           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
             {/* Left Column (Bell Icon & Text) */}
             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left max-w-lg">
               {/* Glowing Bell Icon Container */}
               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-red-500/8 border border-red-500/25 text-red-400 shadow-[0_0_16px_rgba(239,68,68,0.2)] animate-pulse">
                 <Bell size={22} className="fill-red-500/10" />
               </div>

               <div>
                 <h3 className="text-[1.8rem] font-bold tracking-tight text-white sm:text-[2.2rem] leading-snug">
                   Aktifkan Notifikasi Sekarang
                 </h3>
                 <p className="mt-2.5 text-[0.88rem] leading-relaxed text-slate-300">
                   Jangan lewatkan informasi penting untuk keselamatan Anda dan keluarga.
                 </p>
               </div>
             </div>

             {/* Right Column (White Button) */}
             <div className="shrink-0 w-full sm:w-auto">
               <button className="group/btn inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-1.5 rounded-[18px] bg-white px-6 py-3 text-[0.88rem] font-medium text-slate-900 shadow-[0_8px_20px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-[0_12px_28px_rgba(255,255,255,0.18)]">
                 Aktifkan Sekarang
                 <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
               </button>
             </div>
           </div>
         </div>
       </Container>
    </section>
  );
}

