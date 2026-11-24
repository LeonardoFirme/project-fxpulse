import React from "react";
import { Clock, Layers, Moon, RefreshCw, ShieldCheck, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "Atualização a cada 5s",
    description:
      "Ciclo contínuo de atualização para acompanhar pequenas oscilações de preço e novos candles sem recarregar a página.",
  },
  {
    icon: RefreshCw,
    title: "Câmbio cruzado imediato",
    description:
      "Troca direta entre moedas de origem e destino com inversão em um clique e cálculo numérico preciso.",
  },
  {
    icon: Moon,
    title: "Dark Mode nativo",
    description:
      "Contraste calibrado para leitura prolongada em ambientes escuros ou claros com persistência local.",
  },
  {
    icon: Layers,
    title: "Leitura OHLC clara",
    description:
      "Visualização de abertura, máxima, mínima e fechamento de cada período diretamente no painel.",
  },
  {
    icon: Zap,
    title: "Responsividade completa",
    description:
      "Layout adaptado para desktop, tablet e mobile com menu lateral acessível em telas menores.",
  },
  {
    icon: ShieldCheck,
    title: "Arquitetura modular",
    description:
      "Componentes isolados em Next.js App Router e TypeScript para facilitar manutenção e futuras integrações.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
            Features
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Recursos essenciais para análise e conversão rápida
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Foco em velocidade de leitura, clareza visual e operação simples no
            dia a dia.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 dark:bg-emerald-500/15 text-orange-500 dark:text-[#22c55e]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}