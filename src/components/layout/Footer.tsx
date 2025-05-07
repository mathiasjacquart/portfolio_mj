"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800/40 py-8">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <p className="font-light tracking-wide">
          © {new Date().getFullYear()} Mathias Jacquart. Tous droits réservés.
        </p>
        <Link
          href="/mentions-legales"
          className="font-light tracking-wide hover:text-slate-200 transition-colors"
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
