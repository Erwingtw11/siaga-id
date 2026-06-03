"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bell, AlertTriangle } from "lucide-react";

import Container from "./container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Peta Bencana", href: "/dashboard" },
    { name: "Informasi", href: "/informasi" },
    { name: "Panduan", href: "/panduan" },
    { name: "Tentang Kami", href: "/about" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030712]/85 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline cursor-pointer group">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.1)] group-hover:scale-105 transition-transform duration-200">
              <AlertTriangle size={15} className="fill-red-500/10 animate-pulse" />
            </div>
            <h1 className="text-sm font-black tracking-wider text-white uppercase m-0 flex items-center">
              NUSA<span className="text-red-500 ml-0.5 font-black">ALERT</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer no-underline pb-1 ${isActive
                    ? "text-red-400 font-extrabold"
                    : "text-slate-400 hover:text-white"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-22px] left-0 h-[2px] w-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3.5 md:flex">
            {/* Bell Icon Button */}
            <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-900 bg-slate-950/40 text-slate-400 hover:text-white hover:border-slate-800 transition duration-200 cursor-pointer">
              <Bell size={15} />
              <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
            </button>

            {/* BARU: RE-DESIGNED NOTIFICATION BUTTON (HIGH-END MINIMALIST) */}
            <button className="relative inline-flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-3.5 py-2 text-[11px] font-black uppercase tracking-wider text-red-400 transition-all duration-200 hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-300 active:scale-95 cursor-pointer">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
              </span>
              <span>Aktifkan Notifikasi</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-900 bg-slate-950/40 text-slate-400">
              <Bell size={15} />
              <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-900 bg-slate-950/40 text-white cursor-pointer"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-900/60 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xs font-bold uppercase tracking-wider no-underline transition py-1 ${isActive ? "text-red-400 font-extrabold" : "text-slate-400 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <button
                className="mt-2 text-center w-full inline-flex items-center justify-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 py-2.5 text-[11px] font-black uppercase tracking-wider text-red-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                Aktifkan Notifikasi
              </button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}