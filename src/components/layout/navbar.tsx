"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Bell, AlertTriangle } from "lucide-react";

import Container from "./container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

   return (
     <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071120]/80 backdrop-blur-md">
       <Container>
         <div className="flex h-16 items-center justify-between gap-3">
           {/* Logo with Red Emblem */}
           <Link href="/" className="flex items-center gap-2 no-underline">
             <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]">
               <AlertTriangle size={16} className="fill-red-500/20" />
             </div>
             <h1 className="text-base font-bold tracking-wider text-white sm:text-sm uppercase flex items-center">
               NUSA<span className="text-red-500 ml-0.5">ALERT</span>
             </h1>
           </Link>

           {/* Desktop Navigation */}
           <nav className="hidden items-center gap-6 md:flex">
             <Link
               href="/"
               className="relative text-[0.86rem] font-medium text-white no-underline transition hover:text-white/90 after:absolute after:bottom-[-18px] after:left-0 after:h-[1.5px] after:w-full after:bg-red-500 after:content-['']"
             >
               Beranda
             </Link>

             <Link
               href="/dashboard"
               className="text-[0.86rem] font-medium text-white/70 no-underline transition hover:text-white"
             >
               Peta Bencana
             </Link>

             <Link
               href="#"
               className="text-[0.86rem] font-medium text-white/70 no-underline transition hover:text-white"
             >
               Informasi
             </Link>

             <Link
               href="#"
               className="text-[0.86rem] font-medium text-white/70 no-underline transition hover:text-white"
             >
               Panduan
             </Link>

             <Link
               href="#"
               className="text-[0.86rem] font-medium text-white/70 no-underline transition hover:text-white"
             >
               Tentang Kami
             </Link>
           </nav>

           {/* Desktop Actions */}
           <div className="hidden items-center gap-4 md:flex">
             {/* Bell Icon with Active Status Dot */}
             <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-slate-300 hover:text-white transition duration-300">
               <Bell size={16} />
               <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.6)] animate-pulse" />
             </button>

             <Link
               href="#cta"
               className="rounded-full bg-red-500 px-4 py-2 text-[0.82rem] font-medium uppercase tracking-[0.04em] text-white shadow-[0_3px_10px_rgba(239,68,68,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-red-400 hover:shadow-[0_4px_12px_rgba(239,68,68,0.25)]"
             >
               Aktifkan Notifikasi
             </Link>
           </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300">
              <Bell size={16} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-white/10 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-semibold text-white no-underline transition"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>

              <Link
                href="/dashboard"
                className="text-sm font-semibold text-white/70 no-underline transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Peta Bencana
              </Link>

              <Link
                href="#"
                className="text-sm font-semibold text-white/70 no-underline transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Informasi
              </Link>

              <Link
                href="#"
                className="text-sm font-semibold text-white/70 no-underline transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Panduan
              </Link>

              <Link
                href="#"
                className="text-sm font-semibold text-white/70 no-underline transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>

              <Link
                href="#cta"
                className="mt-2 text-center rounded-full bg-red-500 px-4 py-3 text-xs font-bold uppercase tracking-[0.05em] text-white no-underline shadow-[0_4px_15px_rgba(239,68,68,0.25)] transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Aktifkan Notifikasi
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
