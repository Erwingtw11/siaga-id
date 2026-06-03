"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "./container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071120]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div>
            <h1 className="text-lg font-bold tracking-wide text-white sm:text-xl">
              SIAGA<span className="text-red-500">.</span>ID
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm text-white/70 no-underline transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="text-sm text-white/70 no-underline transition hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              href="#"
              className="text-sm text-white/70 no-underline transition hover:text-white"
            >
              Map
            </Link>

            <Link
              href="#"
              className="text-sm text-white/70 no-underline transition hover:text-white"
            >
              Preparedness
            </Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-red-400">
              Live Alert
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center text-white md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-white/10 py-5 md:hidden">
            <nav className="flex flex-col gap-5">
              <Link
                href="/"
                className="text-sm text-white/70 no-underline transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/dashboard"
                className="text-sm text-white/70 no-underline transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>

              <Link
                href="#"
                className="text-sm text-white/70 no-underline transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Map
              </Link>

              <Link
                href="#"
                className="text-sm text-white/70 no-underline transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Preparedness
              </Link>

              <button className="mt-2 rounded-full bg-red-500 px-4 py-3 text-sm font-medium text-white transition duration-300 hover:bg-red-400">
                Live Alert
              </button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
