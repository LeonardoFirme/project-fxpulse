import React from "react";
import Link from "next/link";
import { ArrowLeftRight, Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-zinc-200 dark:border-zinc-800 pb-8 md:flex-row md:items-center">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white">
                <ArrowLeftRight className="h-4 w-4" />
              </span>
              <span className="text-base font-bold text-zinc-900 dark:text-white">
                FXPulse<span className="text-orange-500">.</span>
              </span>
            </Link>
            <p className="mt-2 max-w-md text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Conversor de moedas e visualização de velas de 5 segundos
              construído com Next.js, TypeScript e Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className="text-zinc-600 dark:text-zinc-300 hover:text-orange-500"
            >
              Inicial
            </Link>
            <Link
              href="/sobre"
              className="text-zinc-600 dark:text-zinc-300 hover:text-orange-500"
            >
              Sobre
            </Link>
            <Link
              href="/apoie"
              className="inline-flex items-center gap-1.5 text-orange-500 hover:text-[#097f29]"
            >
              <Coffee className="h-4 w-4" />
              <span>Apoie (Café)</span>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400 sm:flex-row">
          <span>© 2026 FXPulse. Todos os direitos reservados.</span>
          <span>Cotações demonstrativas para visualização em tempo real.</span>
        </div>
      </div>
    </footer>
  );
}