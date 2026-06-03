"use client";

import { Home, LayoutDashboard, MapPin, FileText, BookOpen, Bell } from "lucide-react";
import Container from "@/components/layout/container";

const steps = [
  {
    number: "01",
    title: "Landing Page",
    description: "Akses informasi utama dan update terkini",
    icon: Home,
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5 shadow-[0_0_15px_rgba(96,165,250,0.15)]",
  },
  {
    number: "02",
    title: "Dashboard",
    description: "Lihat ringkasan kondisi bencana terkini",
    icon: LayoutDashboard,
    color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5 shadow-[0_0_15px_rgba(129,140,248,0.15)]",
  },
  {
    number: "03",
    title: "Peta Bencana",
    description: "Pantau lokasi dan sebaran bencana secara real-time",
    icon: MapPin,
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_15px_rgba(52,211,153,0.15)]",
  },
  {
    number: "04",
    title: "Detail Bencana",
    description: "Informasi lengkap dan rekomendasi tindakan",
    icon: FileText,
    color: "text-amber-400 border-amber-500/20 bg-amber-500/5 shadow-[0_0_15px_rgba(251,191,36,0.15)]",
  },
  {
    number: "05",
    title: "Panduan Darurat",
    description: "Ikuti panduan untuk keselamatan Anda",
    icon: BookOpen,
    color: "text-fuchsia-400 border-fuchsia-500/20 bg-fuchsia-500/5 shadow-[0_0_15px_rgba(232,121,249,0.15)]",
  },
  {
    number: "06",
    title: "Aktifkan Notifikasi",
    description: "Terima peringatan instan secara real-time",
    icon: Bell,
    color: "text-red-400 border-red-500/20 bg-red-500/5 shadow-[0_0_15px_rgba(248,113,113,0.15)]",
  },
];

export default function UserFlowSection() {
  return (
    <section className="relative py-20 md:py-24 bg-[#071120] overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-indigo-500/3 blur-[120px] pointer-events-none" />

       <Container>
         <div className="text-center space-y-4">
           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
             CARA KERJA NUSA ALERT
           </div>

           <h2 className="mx-auto max-w-3xl text-[2.2rem] font-bold leading-tight text-white sm:text-3xl lg:text-[2.4rem]">
             Informasi Cepat, Respon Tepat, Selamatkan Nyawa
           </h2>
         </div>

           {/* Workflow Grid Wrapper */}
           <div className="relative mt-14">
             {/* Horizontal dotted connector line for desktop */}
             <div className="absolute top-[24px] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-blue-500/15 via-amber-500/15 to-red-500/15 [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px)] [background-size:16px_1px] pointer-events-none hidden lg:block" />
 
             {/* Vertical dotted connector line for mobile */}
             <div className="absolute left-[24px] top-6 bottom-6 w-[1.5px] [background-image:linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:1px_16px] opacity-10 pointer-events-none lg:hidden" />
 
             <div className="grid gap-6 lg:grid-cols-6 relative z-10">
               {steps.map((step) => {
                 const Icon = step.icon;
 
                 return (
                   <div
                     key={step.number}
                     className="flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center group"
                   >
                     {/* Glowing Node Circle */}
                     <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105 ${step.color}`}>
                       <Icon size={18} />
                     </div>
 
                     {/* Step Info Content */}
                     <div className="min-w-0 lg:mt-4">
                       {/* Number Badge */}
                       <span className="inline-block text-[0.6rem] font-black tracking-widest text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded uppercase border border-cyan-400/20">
                         {step.number}
                       </span>
 
                       <h4 className="mt-2 text-[0.94rem] font-bold text-white tracking-tight">
                         {step.title}
                       </h4>
 
                       <p className="mt-1.5 text-[0.78rem] leading-relaxed text-slate-400 max-w-[220px]">
                         {step.description}
                       </p>
                     </div>
                   </div>
                 );
               })}
             </div>
           </div>
      </Container>
    </section>
  );
}
