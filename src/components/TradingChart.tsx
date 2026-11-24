"use client";

import React from "react";
import { Activity, Clock } from "lucide-react";
import { CandlePoint, ComparePeriod, CurrencyCode } from "@/types/currency";
import { COMPARE_PERIODS, CURRENCIES, formatMoney } from "@/lib/rates";

interface TradingChartProps {
  from: CurrencyCode;
  to: CurrencyCode;
  period: ComparePeriod;
  onPeriodChange: (period: ComparePeriod) => void;
  candles: CandlePoint[];
  secondsUntilNextTick: number;
}

export function TradingChart({
  from,
  to,
  period,
  onPeriodChange,
  candles,
  secondsUntilNextTick,
}: TradingChartProps) {
  const latest = candles[candles.length - 1];
  const first = candles[0];

  const minPrice = candles.reduce(
    (acc, c) => (c.low < acc ? c.low : acc),
    candles[0]?.low ?? 0
  );
  const maxPrice = candles.reduce(
    (acc, c) => (c.high > acc ? c.high : acc),
    candles[0]?.high ?? 1
  );

  const range = maxPrice - minPrice || 0.0001;
  const priceChangePercent =
    first && latest ? ((latest.close - first.open) / first.open) * 100 : 0;
  const isPositive = priceChangePercent >= 0;

  const svgWidth = 720;
  const svgHeight = 290;
  const padTop = 18;
  const padBottom = 28;
  const padLeft = 14;
  const padRight = 76;
  const plotWidth = svgWidth - padLeft - padRight;
  const plotHeight = svgHeight - padTop - padBottom;

  const scaleY = (value: number) => {
    const normalized = (value - minPrice) / range;
    return padTop + (1 - normalized) * plotHeight;
  };

  const slotWidth = plotWidth / Math.max(candles.length, 1);
  const bodyWidth = Math.max(4, Math.min(16, slotWidth * 0.58));

  return (
    <div className="h-full rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl shadow-orange-500/20 dark:shadow-orange-500/10 p-1">
      <div className="flex h-full flex-col justify-between rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 shadow-inner p-5">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-500/15 dark:bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-orange-500 dark:text-[#22c55e]">
                <Activity className="h-3.5 w-3.5" />
                TICK 5S LIVE
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {CURRENCIES[from].flag} {from}/{to} {CURRENCIES[to].flag}
              </span>
              <span className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-2 py-0.5 text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                Comparativo {period}
              </span>
            </div>

            <div className="mt-2 flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold tabular-nums text-zinc-900 dark:text-white">
                {latest
                  ? formatMoney(latest.close, {
                      minimumFractionDigits: 4,
                      maximumFractionDigits: 4,
                    })
                  : "0,0000"}
              </span>
              <span
                className={`text-sm font-semibold tabular-nums ${
                  isPositive
                    ? "text-orange-500 dark:text-[#22c55e]"
                    : "text-rose-500"
                }`}
              >
                {isPositive ? "+" : ""}
                {formatMoney(priceChangePercent, {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                })}
                %
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div
              role="group"
              aria-label="Filtro de período comparativo"
              className="inline-flex items-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-1"
            >
              {COMPARE_PERIODS.map((item) => {
                const active = item.value === period;
                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => onPeriodChange(item.value)}
                    className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                      active
                        ? "bg-orange-500 text-white"
                        : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-3 py-2 text-xs font-medium text-zinc-600 dark:text-zinc-300">
              <Clock className="h-3.5 w-3.5 text-orange-500" />
              <span className="tabular-nums">
                Próximo tick em {secondsUntilNextTick}s
              </span>
            </div>
          </div>
        </div>

        <div className="my-3 w-full overflow-hidden">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="h-64 sm:h-72 w-full select-none"
            role="img"
            aria-label={`Gráfico de velas ${from} para ${to} no período ${period}`}
          >
            {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
              const y = padTop + ratio * plotHeight;
              const priceLabel = maxPrice - ratio * range;
              return (
                <g key={ratio}>
                  <line
                    x1={padLeft}
                    y1={y}
                    x2={svgWidth - padRight}
                    y2={y}
                    stroke="currentColor"
                    strokeDasharray="3 3"
                    className="text-zinc-200 dark:text-zinc-800"
                    strokeWidth={1}
                  />
                  <text
                    x={svgWidth - padRight + 8}
                    y={y + 4}
                    className="fill-zinc-500 dark:fill-zinc-400 text-[11px]"
                  >
                    {formatMoney(priceLabel, {
                      minimumFractionDigits: 4,
                      maximumFractionDigits: 4,
                    })}
                  </text>
                </g>
              );
            })}

            {candles.map((candle, index) => {
              const centerX = padLeft + index * slotWidth + slotWidth / 2;
              const bullish = candle.close >= candle.open;
              const strokeColor = bullish ? "#0b9c33" : "#ef4444";
              const fillColor = bullish ? "#0b9c33" : "#ef4444";

              const yHigh = scaleY(candle.high);
              const yLow = scaleY(candle.low);
              const yOpen = scaleY(candle.open);
              const yClose = scaleY(candle.close);
              const rectTop = Math.min(yOpen, yClose);
              const rectHeight = Math.max(2, Math.abs(yClose - yOpen));

              const showTimeLabel =
                index === 0 ||
                index === Math.floor(candles.length / 2) ||
                index === candles.length - 1;

              return (
                <g key={`${candle.time}-${index}`}>
                  <line
                    x1={centerX}
                    y1={yHigh}
                    x2={centerX}
                    y2={yLow}
                    stroke={strokeColor}
                    strokeWidth={1.5}
                  />
                  <rect
                    x={centerX - bodyWidth / 2}
                    y={rectTop}
                    width={bodyWidth}
                    height={rectHeight}
                    rx={1.5}
                    fill={fillColor}
                  />
                  {showTimeLabel && (
                    <text
                      x={centerX}
                      y={svgHeight - 6}
                      textAnchor="middle"
                      className="fill-zinc-500 dark:fill-zinc-400 text-[10px]"
                    >
                      {candle.time}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {latest && (
          <div className="grid grid-cols-4 gap-2 border-t border-zinc-200 dark:border-zinc-800 pt-3 text-xs">
            <div>
              <span className="block text-zinc-500 dark:text-zinc-400">Open</span>
              <span className="font-semibold tabular-nums text-zinc-900 dark:text-white">
                {formatMoney(latest.open, {
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 4,
                })}
              </span>
            </div>
            <div>
              <span className="block text-zinc-500 dark:text-zinc-400">High</span>
              <span className="font-semibold tabular-nums text-orange-500 dark:text-[#22c55e]">
                {formatMoney(latest.high, {
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 4,
                })}
              </span>
            </div>
            <div>
              <span className="block text-zinc-500 dark:text-zinc-400">Low</span>
              <span className="font-semibold tabular-nums text-rose-500">
                {formatMoney(latest.low, {
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 4,
                })}
              </span>
            </div>
            <div>
              <span className="block text-zinc-500 dark:text-zinc-400">Close</span>
              <span className="font-semibold tabular-nums text-zinc-900 dark:text-white">
                {formatMoney(latest.close, {
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 4,
                })}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}