"use client";

import { Wind, Map, Leaf, BarChart3, CloudSun } from "lucide-react";
import Container from "@/components/layout/container";

const technologies = [
  {
    name: "Next.js",
    category: "React Framework",
    icon: () => (
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 font-bold text-white text-lg tracking-tighter">
        N
      </div>
    ),
    color: "group-hover:border-white/30 group-hover:shadow-[0_15px_30px_rgba(255,255,255,0.08)]",
  },
  {
    name: "Tailwind CSS",
    category: "Styling Framework",
    icon: () => (
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
        <Wind size={22} />
      </div>
    ),
    color: "group-hover:border-cyan-500/30 group-hover:shadow-[0_15px_30px_rgba(6,182,212,0.08)]",
  },
  {
    name: "TypeScript",
    category: "Typed JavaScript",
    icon: () => (
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 font-bold text-blue-400 text-sm tracking-wide">
        Ts
      </div>
    ),
    color: "group-hover:border-blue-500/30 group-hover:shadow-[0_15px_30px_rgba(59,130,246,0.08)]",
  },
  {
    name: "Leaflet.js",
    category: "Interactive Maps",
    icon: () => (
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
        <Leaf size={20} />
      </div>
    ),
    color: "group-hover:border-emerald-500/30 group-hover:shadow-[0_15px_30px_rgba(16,185,129,0.08)]",
  },
  {
    name: "Recharts",
    category: "Data Visualization",
    icon: () => (
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
        <BarChart3 size={20} />
      </div>
    ),
    color: "group-hover:border-indigo-500/30 group-hover:shadow-[0_15px_30px_rgba(99,102,241,0.08)]",
  },
  {
    name: "BMKG API",
    category: "Data Resmi BMKG",
    icon: () => (
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
        <CloudSun size={20} />
      </div>
    ),
    color: "group-hover:border-amber-500/30 group-hover:shadow-[0_15px_30px_rgba(245,158,11,0.08)]",
  },
];

export default function TechSection() {
  return (
    <section className="relative py-20 md:py-24 bg-[#071120] overflow-hidden border-b border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/3 blur-[120px] pointer-events-none" />

       <Container>
         <div className="text-center space-y-4">
           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
             TEKNOLOGI YANG DIGUNAKAN
           </div>

           <h2 className="mx-auto max-w-3xl text-[2.2rem] font-bold leading-tight text-white sm:text-3xl lg:text-[2.4rem]">
             Dibangun dengan Teknologi Modern & Handal
           </h2>
         </div>

         {/* Tech Cards Grid */}
         <div className="mt-16 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
           {technologies.map((tech) => {
             const Icon = tech.icon;

             return (
               <div
                 key={tech.name}
                 className={`group relative overflow-hidden rounded-[18px] border border-white/[0.06] bg-gradient-to-b from-[#0F172A]/50 to-[#070b14]/60 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 ${tech.color}`}
               >
                 {/* Tech icon/emblem */}
                 <div className="flex justify-center mb-3">
                   <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${tech.color.split(' ')[0]}`}>
                     <Icon size={16} />
                   </div>
                 </div>

                 {/* Tech naming */}
                 <div className="text-center min-w-0">
                   <h4 className="text-sm font-bold text-white tracking-tight">
                     {tech.name}
                   </h4>
                   <p className="mt-1.5 text-[0.68rem] font-medium text-slate-400 uppercase tracking-wider">
                     {tech.category}
                   </p>
                 </div>
               </div>
             );
           })}
         </div>
      </Container>
    </section>
  );
}
