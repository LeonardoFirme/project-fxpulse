"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeftRight, TrendingUp } from "lucide-react";
import { CandlePoint, ComparePeriod, CurrencyCode } from "@/types/currency";
import {
    CURRENCIES,
    CURRENCY_LIST,
    createDeterministicCandles,
    formatGroupedInput,
    formatMoney,
    generateNextCandle,
    getCrossRate,
} from "@/lib/rates";
import { Dropdown, DropdownOption } from "@/components/Dropdown";
import { TradingChart } from "@/components/TradingChart";

const QUICK_PAIRS: Array<{ from: CurrencyCode; to: CurrencyCode }> = [
    { from: "USD", to: "BRL" },
    { from: "EUR", to: "BRL" },
    { from: "USD", to: "EUR" },
    { from: "GBP", to: "BRL" },
];

const CURRENCY_DROPDOWN_OPTIONS: DropdownOption<CurrencyCode>[] =
    CURRENCY_LIST.map((currency) => ({
        value: currency.code,
        label: `${currency.flag} ${currency.code}`,
        description: currency.name,
    }));

export function HeroSection() {
    const [fromCurrency, setFromCurrency] = useState<CurrencyCode>("USD");
    const [toCurrency, setToCurrency] = useState<CurrencyCode>("BRL");
    const [period, setPeriod] = useState<ComparePeriod>("1D");
    const [amountDisplay, setAmountDisplay] = useState<string>("1,00");
    const [numericAmount, setNumericAmount] = useState<number>(1);
    const [candles, setCandles] = useState<CandlePoint[]>(() =>
        createDeterministicCandles("USD", "BRL", "1D", 24)
    );
    const [secondsUntilNextTick, setSecondsUntilNextTick] = useState<number>(5);

    useEffect(() => {
        setCandles(createDeterministicCandles(fromCurrency, toCurrency, period, 24));
        setSecondsUntilNextTick(5);
    }, [fromCurrency, toCurrency, period]);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setSecondsUntilNextTick((prev) => {
                if (prev <= 1) {
                    setCandles((current) => {
                        const last = current[current.length - 1];
                        const baseLast =
                            last ??
                            createDeterministicCandles(fromCurrency, toCurrency, period, 1)[0];
                        const nextCandle = generateNextCandle(baseLast, new Date(), period);
                        return [...current.slice(-23), nextCandle];
                    });
                    return 5;
                }
                return prev - 1;
            });
        }, 1000);

        return () => window.clearInterval(interval);
    }, [fromCurrency, toCurrency, period]);

    const latestCandle = candles[candles.length - 1];
    const liveRate =
        latestCandle?.close ?? getCrossRate(fromCurrency, toCurrency, 1);
    const convertedValue = numericAmount * liveRate;

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const parsed = formatGroupedInput(e.target.value);
        setAmountDisplay(parsed.display);
        setNumericAmount(parsed.numeric);
    };

    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <section className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-10 sm:py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 dark:border-emerald-500/30 bg-orange-500/10 dark:bg-emerald-500/15 px-3.5 py-1 text-xs font-semibold text-orange-500 dark:text-[#22c55e]">
                        <TrendingUp className="h-3.5 w-3.5" />
                        <span>Cotações &amp; Candlestick em Tempo Real (5s)</span>
                    </div>

                    <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                        Conversão de moedas ao vivo com{" "}
                        <span className="text-orange-500">gráfico de trading</span>
                    </h1>

                    <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                        Calcule câmbio instantaneamente entre 30 moedas globais enquanto
                        acompanha a variação de cada vela a cada 5 segundos.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <div className="rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl shadow-orange-500/20 dark:shadow-orange-500/10 p-1 sm:p-1 lg:col-span-5">
                        <div className="h-full rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 shadow-inner p-5 sm:p-6 lg:col-span-5">
                            <div className="flex items-center justify-between">
                                <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                                    Conversor de Moedas
                                </h2>
                                <span className="text-xs font-medium tabular-nums text-zinc-500 dark:text-zinc-400">
                                    1 {fromCurrency} ={" "}
                                    {formatMoney(liveRate, {
                                        minimumFractionDigits: 4,
                                        maximumFractionDigits: 4,
                                    })}{" "}
                                    {toCurrency}
                                </span>
                            </div>

                            <div className="mt-5 space-y-4">
                                <div>
                                    <label
                                        htmlFor="amount-input"
                                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                                    >
                                        Valor para converter
                                    </label>
                                    <div className="mt-1.5 flex items-center rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 px-3.5 py-2.5 focus-within:border-orange-500">
                                        <span className="mr-2 text-sm font-bold text-zinc-500 dark:text-zinc-400">
                                            {CURRENCIES[fromCurrency].symbol}
                                        </span>
                                        <input
                                            id="amount-input"
                                            type="text"
                                            inputMode="decimal"
                                            value={amountDisplay}
                                            onChange={handleAmountChange}
                                            placeholder="0,00"
                                            className="w-full bg-transparent text-lg font-bold tabular-nums text-zinc-900 dark:text-white outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2">
                                    <Dropdown
                                        id="from-currency"
                                        label="Origem"
                                        value={fromCurrency}
                                        options={CURRENCY_DROPDOWN_OPTIONS}
                                        onChange={setFromCurrency}
                                    />

                                    <button
                                        type="button"
                                        onClick={handleSwapCurrencies}
                                        aria-label="Inverter moedas"
                                        className="mb-0.5 inline-flex h-[42px] w-10 items-center justify-center rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-orange-500 hover:text-white transition-colors"
                                    >
                                        <ArrowLeftRight className="h-4 w-4" />
                                    </button>

                                    <Dropdown
                                        id="to-currency"
                                        label="Destino"
                                        value={toCurrency}
                                        options={CURRENCY_DROPDOWN_OPTIONS}
                                        onChange={setToCurrency}
                                    />
                                </div>

                                <div className="rounded-xl border border-orange-500/30 dark:border-emerald-500/50 bg-orange-500/10 dark:bg-emerald-500/15 p-4">
                                    <span className="block text-xs font-semibold text-orange-500 dark:text-[#22c55e]">
                                        Resultado Convertido ({CURRENCIES[toCurrency].name})
                                    </span>
                                    <div className="mt-1 flex items-baseline justify-between gap-2">
                                        <span className="text-2xl sm:text-3xl font-extrabold tabular-nums text-zinc-900 dark:text-white">
                                            {CURRENCIES[toCurrency].symbol} {formatMoney(convertedValue)}
                                        </span>
                                        <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300">
                                            {toCurrency}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <span className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                                        Pares rápidos
                                    </span>
                                    <div className="mt-2 grid grid-cols-2 gap-2">
                                        {QUICK_PAIRS.map((pair) => {
                                            const active =
                                                pair.from === fromCurrency && pair.to === toCurrency;
                                            return (
                                                <button
                                                    key={`${pair.from}-${pair.to}`}
                                                    type="button"
                                                    onClick={() => {
                                                        setFromCurrency(pair.from);
                                                        setToCurrency(pair.to);
                                                    }}
                                                    className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-colors ${active
                                                        ? "border-orange-500 bg-orange-500 text-white"
                                                        : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 hover:border-orange-500"
                                                        }`}
                                                >
                                                    {pair.from} &gt; {pair.to}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <TradingChart
                            from={fromCurrency}
                            to={toCurrency}
                            period={period}
                            onPeriodChange={setPeriod}
                            candles={candles}
                            secondsUntilNextTick={secondsUntilNextTick}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}