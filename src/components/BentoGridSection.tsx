import React from "react";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Coffee, Globe2, Wallet } from "lucide-react";
import { CURRENCY_LIST, formatMoney } from "@/lib/rates";

export function BentoGridSection() {
  return (
    <section className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
            Grid Bento
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Panorama de moedas e atalhos do ecossistema
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-6">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:col-span-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-orange-500" />
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  Referência Base vs. USD
                </h3>
              </div>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {CURRENCY_LIST.length} moedas ativas
              </span>
            </div>

            <div className="mt-5 max-h-72 overflow-y-auto pr-1 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {CURRENCY_LIST.map((currency) => (
                <div
                  key={currency.code}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-3.5"
                >
                  <div className="flex items-center justify-between text-sm font-bold text-zinc-900 dark:text-white">
                    <span>
                      {currency.flag} {currency.code}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {currency.symbol}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-xs text-zinc-500 dark:text-zinc-400">
                    {currency.name}
                  </p>
                  <p className="mt-2 text-sm font-semibold tabular-nums text-orange-500 dark:text-[#22c55e]">
                    {formatMoney(currency.baseRateToUSD)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:col-span-2">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 dark:bg-emerald-500/15 text-orange-500 dark:text-[#22c55e]">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-white">
                Cadência de 5 Segundos
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Cada intervalo de 5 segundos consolida uma nova barra de preço
                com máxima, mínima e fechamento.
              </p>
            </div>
            <div className="mt-6 rounded-xl bg-zinc-50 dark:bg-zinc-950 p-3 text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
              Janela ativa: 24 velas (2 minutos)
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:col-span-3">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 dark:bg-emerald-500/15 text-orange-500 dark:text-[#22c55e]">
                <Wallet className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-white">
                Documentação e Metodologia
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Veja como a aplicação estrutura os pares, o ciclo de atualização
                e os próximos passos de evolução.
              </p>
            </div>
            <Link
              href="/sobre"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-[#097f29]"
            >
              <span>Ir para Sobre</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-orange-500/40 dark:border-amber-500/50 bg-orange-500/10 dark:bg-amber-500/15 p-6 md:col-span-3">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 dark:bg-amber-500 text-white">
                <Coffee className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-white">
                Me pague um café
              </h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Curtiu a interface e o gráfico em tempo real? Apoie o
                desenvolvimento contínuo do projeto.
              </p>
            </div>
            <Link
              href="/apoie"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-orange-500 dark:bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-[#097f29]"
            >
              <Coffee className="h-4 w-4" />
              <span>Apoiar projeto</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}