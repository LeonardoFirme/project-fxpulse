"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Coffee, Copy, HeartHandshake } from "lucide-react";

const COFFEE_TIERS = [
  { id: "espresso", label: "Um Espresso", amount: 10 },
  { id: "cappuccino", label: "Um Cappuccino", amount: 25 },
  { id: "french-press", label: "Prensa Francesa", amount: 50 },
  { id: "roast-pack", label: "Pacote de Grãos", amount: 100 },
];

const PIX_KEY_SAMPLE = "apoio.fxpulse.exemplo@pix.local";

export default function ApoiePage() {
  const [selectedAmount, setSelectedAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const finalAmount =
    customAmount.trim() !== ""
      ? Math.max(1, Number(customAmount) || 0)
      : selectedAmount;

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY_SAMPLE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-[#097f29]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para Inicial</span>
        </Link>

        <div className="mt-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold text-orange-500 dark:text-[#22c55e]">
            <Coffee className="h-3.5 w-3.5" />
            <span>Me pague um café</span>
          </div>

          <h1 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Apoie o desenvolvimento do FXPulse
          </h1>

          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Escolha um valor simbólico de café para ajudar na manutenção,
            testes e novas funcionalidades do conversor.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {COFFEE_TIERS.map((tier) => {
              const active =
                customAmount.trim() === "" && selectedAmount === tier.amount;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => {
                    setCustomAmount("");
                    setSelectedAmount(tier.amount);
                  }}
                  className={`rounded-xl border p-3.5 text-left transition-colors ${
                    active
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white hover:border-orange-500"
                  }`}
                >
                  <span className="block text-xs opacity-85">{tier.label}</span>
                  <span className="mt-1 block text-lg font-extrabold tabular-nums">
                    R$ {tier.amount}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-5">
            <label
              htmlFor="custom-coffee"
              className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
            >
              Ou digite outro valor (BRL)
            </label>
            <input
              id="custom-coffee"
              type="number"
              min="1"
              step="1"
              placeholder="Ex: 15"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 px-4 py-2.5 text-base font-bold tabular-nums text-zinc-900 dark:text-white outline-none focus:border-orange-500"
            />
          </div>

          <div className="mt-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Chave de apoio selecionada
              </span>
              <span className="text-sm font-extrabold tabular-nums text-orange-500 dark:text-[#22c55e]">
                R$ {finalAmount.toFixed(2).replace(".", ",")}
              </span>
            </div>

            <div className="mt-2.5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <code className="truncate rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-xs text-zinc-800 dark:text-zinc-200">
                {PIX_KEY_SAMPLE}
              </code>

              <button
                type="button"
                onClick={handleCopyPix}
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-[#097f29]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copiar chave</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <HeartHandshake className="h-4 w-4 text-orange-500" />
            <span>
              Obrigado por acompanhar e testar a aplicação.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}