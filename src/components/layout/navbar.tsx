"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <── Tambah ini untuk deteksi halaman aktif
import { Menu, X, Bell, AlertTriangle } from "lucide-react";

import Container from "./container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // <── Ambil rute url aktif saat ini

  // Data navigasi agar lebih rapi dan tidak duplikasi kode
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Peta Bencana", href: "/dashboard" },
    { name: "Informasi", href: "/informasi" }, // <── FIXED: Mengarah ke /informasi, bukan # lagi
    { name: "Panduan", href: "/panduan" },
    { name: "Tentang Kami", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071120]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline cursor-pointer">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]">
              <AlertTriangle size={16} className="fill-red-500/20" />
            </div>
            <h1 className="text-base font-bold tracking-wider text-white sm:text-sm uppercase flex items-center">
              NUSA<span className="text-red-500 ml-0.5">ALERT</span>
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
                  className={`relative text-[0.86rem] font-medium transition cursor-pointer no-underline ${isActive
                      ? "text-white after:absolute after:bottom-[-18px] after:left-0 after:h-[1.5px] after:w-full after:bg-red-500 after:content-['']"
                      : "text-white/70 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-slate-300 hover:text-white transition duration-300 cursor-pointer">
              <Bell size={16} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.6)] animate-pulse" />
            </button>

            <Link
              href="#cta"
              className="rounded-full bg-red-500 px-4 py-2 text-[0.82rem] font-medium uppercase tracking-[0.04em] text-white shadow-[0_3px_10px_rgba(239,68,68,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-red-400 hover:shadow-[0_4px_12px_rgba(239,68,68,0.25)] no-underline cursor-pointer"
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

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white cursor-pointer"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-white/10 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-semibold no-underline transition cursor-pointer ${isActive ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                href="#cta"
                className="mt-2 text-center rounded-full bg-red-500 px-4 py-3 text-xs font-bold uppercase tracking-[0.05em] text-white no-underline shadow-[0_4px_15px_rgba(239,68,68,0.25)] transition duration-300 cursor-pointer"
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