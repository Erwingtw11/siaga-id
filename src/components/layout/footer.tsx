import Link from "next/link";
import { Globe, Star, Video, AlertTriangle } from "lucide-react";

import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070b14]/90 py-20 text-slate-400">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Info (Col 5) */}
          <div className="space-y-6 lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/12 border border-red-500/25 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.25)]">
                <AlertTriangle size={20} className="fill-red-500/25" />
              </div>
              <h2 className="text-xl font-bold tracking-wider text-white sm:text-2xl uppercase">
                NUSA<span className="text-red-500">ALERT</span>
              </h2>
            </Link>

            <p className="max-w-md text-base leading-relaxed text-slate-400">
              Platform peringatan dini bencana berbasis data real-time dari BMKG
              untuk melindungi masyarakat Indonesia.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                <Star size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                <Video size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                <AlertTriangle size={16} />
              </a>
            </div>
          </div>

          {/* Grouped Nav 1 (Col 2) */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm list-none p-0">
              <li>
                <Link
                  href="/"
                  className="hover:text-white no-underline transition"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-white no-underline transition"
                >
                  Peta Bencana
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white no-underline transition"
                >
                  Informasi
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white no-underline transition"
                >
                  Panduan
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white no-underline transition"
                >
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Grouped Nav 2 (Col 2) */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Layanan
            </h3>
            <ul className="space-y-2.5 text-sm list-none p-0">
              <li>
                <Link
                  href="#"
                  className="hover:text-white no-underline transition"
                >
                  Peringatan Saya
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white no-underline transition"
                >
                  Riwayat Bencana
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white no-underline transition"
                >
                  Panduan Darurat
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white no-underline transition"
                >
                  Statistik
                </Link>
              </li>
            </ul>
          </div>

          {/* Grouped Nav 3 (Col 3) */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Download Aplikasi
            </h3>
            <p className="text-xs text-slate-500 max-w-[240px] leading-relaxed">
              Dapatkan pengalaman terbaik di mobile dengan aplikasi kami
            </p>

            <div className="space-y-3 pt-1.5 max-w-[170px]">
              {/* Google Play Store Badge */}
              <a
                href="#"
                className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 hover:bg-black/90 hover:border-white/20 transition duration-300 no-underline"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-white fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 118.1 26.8zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                </svg>
                <div className="min-w-0 text-left">
                  <p className="text-[0.62rem] font-bold uppercase tracking-wider text-slate-500 leading-none">
                    GET IT ON
                  </p>
                  <p className="mt-1 text-[0.82rem] font-extrabold text-white leading-none tracking-tight">
                    Google Play
                  </p>
                </div>
              </a>

              {/* App Store Badge */}
              <a
                href="#"
                className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 hover:bg-black/90 hover:border-white/20 transition duration-300 no-underline"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-white fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M186.1 7c0 0-1.8 11.6-1.8 25.7 0 35.2 30.7 65.5 66.8 65.5 0 0 2.3-12.7 1.8-25.7-.5-34.7-32.1-65.5-66.8-65.5zm195.9 313.2c-5.1-43.1-41-61.1-41.5-61.4-1.8-1-35.3-24.1-80.1-24.1-24.6 0-59.5 14.1-73.4 14.1-13.8 0-42.6-12.8-62.6-12.8-51.3 0-101.5 45.1-101.5 131.8 0 71.3 48.7 186.1 97.9 186.1 24.6 0 45.1-15.4 67.2-15.4 22.1 0 41 15.4 67.2 15.4 51.3 0 94.4-106.7 94.4-107.2-.5-.5-68-26.2-68-106.5z" />
                </svg>
                <div className="min-w-0 text-left">
                  <p className="text-[0.62rem] font-bold uppercase tracking-wider text-slate-500 leading-none">
                    Download on the
                  </p>
                  <p className="mt-1 text-[0.82rem] font-extrabold text-white leading-none tracking-tight">
                    App Store
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-slate-600">
          <p>© 2026 NUSA ALERT. Semua hak dilindungi.</p>
        </div>
      </Container>
    </footer>
  );
}
