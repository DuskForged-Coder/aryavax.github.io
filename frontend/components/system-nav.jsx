"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "Philosophy" },
  { href: "#aryavax", label: "ARYAVAX" },
  { href: "#projects", label: "Projects" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#contact", label: "Contact" }
];

export default function SystemNav() {
  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-30 px-5 py-5 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(7,12,20,0.72)] px-4 py-3 backdrop-blur-xl lg:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan/30 bg-[radial-gradient(circle,rgba(91,247,255,0.18),rgba(58,183,255,0.08)_58%,rgba(0,0,0,0.12)_100%)] shadow-neon">
            <Image
              src="/logo.png"
              alt="ARYAVAX logo"
              width={34}
              height={34}
              className="h-8 w-8 object-contain brightness-110 contrast-125 drop-shadow-[0_0_18px_rgba(91,247,255,0.35)]"
            />
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.26em] text-white">
              ARYAVAX
            </p>
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/[0.45]">
              Aditya Narayan Rautaray
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-white/[0.65] sm:flex">
            <span className="status-ping" />
            Perimeter Live
          </div>
          <Link href="/access/login" className="system-button px-5 py-3 text-[0.78rem]">
            Enter
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
