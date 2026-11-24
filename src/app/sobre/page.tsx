import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Compass,
  HandHelping,
  Sparkles,
} from "lucide-react";

const WHY_BUILT = [
  "Reunir conversão rápida de moedas e leitura visual de variação no mesmo lugar, sem obrigar o usuário a saltar entre calculadora simples e tela de trading.",
  "Oferecer um espaço direto e sem ruído para acompanhar pares como USD/BRL e outras moedas internacionais quando você precisa tomar decisão rápida.",
  "Evitar interfaces carregadas de banners, pop-ups e menus confusos que atrasam uma consulta simples do dia a dia.",
];

const HOW_IT_HELPS = [
  "Facilita simulações rápidas de valor entre moedas com separação clara de milhar e decimais, reduzindo erro de leitura em quantias maiores.",
  "Permite enxergar o ritmo recente do par em ciclos de 5 segundos junto ao valor convertido, ajudando a perceber oscilação antes de fechar uma conta ou transferência.",
  "Funciona bem em desktop e mobile, com tema claro e escuro, para consultar de qualquer tela sem perder foco.",
];

const WHAT_STANDS_OUT = [
  "Enquanto muitos conversores mostram apenas um número estático e muitos gráficos exigem navegação pesada, o FXPulse junta conversão imediata com velas de 5 segundos na mesma visão.",
  "A busca direta no seletor de moedas e os pares rápidos tornam a troca entre dezenas de moedas mais ágil do que percorrer listas extensas.",
  "O foco é utilidade prática e clareza visual: menos distração visual e mais velocidade para comparar valores e tendências curtas.",
];

export default function SobrePage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-[#097f29]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para Inicial</span>
        </Link>

        <div className="mt-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-500">
              <Compass className="h-4 w-4" />
              <span>Sobre o FXPulse</span>
            </div>

            <h1 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Por que o FXPulse existe e como ele ajuda no dia a dia
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              O FXPulse nasceu para resolver um incômodo comum: quando você quer
              converter um valor e, ao mesmo tempo, entender como o par está se
              movimentando agora, a maioria dos sites separa essas duas coisas ou
              esconde o dado útil atrás de excesso de informação.
            </p>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <div className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <Compass className="h-4 w-4 text-orange-500" />
              <h2>Por que foi construído</h2>
            </div>

            <ul className="mt-4 space-y-3">
              {WHY_BUILT.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <div className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <HandHelping className="h-4 w-4 text-orange-500" />
              <h2>Como ajuda na prática</h2>
            </div>

            <ul className="mt-4 space-y-3">
              {HOW_IT_HELPS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <div className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <h2>O que destaca frente a outros sites</h2>
            </div>

            <ul className="mt-4 space-y-3">
              {WHAT_STANDS_OUT.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}