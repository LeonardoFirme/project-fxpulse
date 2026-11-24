import {
  CandlePoint,
  ComparePeriod,
  CurrencyCode,
  CurrencyMeta,
} from "@/types/currency";

export const CURRENCIES: Record<CurrencyCode, CurrencyMeta> = {
  USD: {
    code: "USD",
    name: "Dólar Americano",
    symbol: "$",
    flag: "🇺🇸",
    baseRateToUSD: 1,
  },
  BRL: {
    code: "BRL",
    name: "Real Brasileiro",
    symbol: "R$",
    flag: "🇧🇷",
    baseRateToUSD: 5.82,
  },
  EUR: {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    flag: "🇪🇺",
    baseRateToUSD: 0.92,
  },
  GBP: {
    code: "GBP",
    name: "Libra Esterlina",
    symbol: "£",
    flag: "🇬🇧",
    baseRateToUSD: 0.79,
  },
  JPY: {
    code: "JPY",
    name: "Iene Japonês",
    symbol: "¥",
    flag: "🇯🇵",
    baseRateToUSD: 154.4,
  },
  CAD: {
    code: "CAD",
    name: "Dólar Canadense",
    symbol: "C$",
    flag: "🇨🇦",
    baseRateToUSD: 1.4,
  },
  AUD: {
    code: "AUD",
    name: "Dólar Australiano",
    symbol: "A$",
    flag: "🇦🇺",
    baseRateToUSD: 1.53,
  },
  CHF: {
    code: "CHF",
    name: "Franco Suíço",
    symbol: "CHF",
    flag: "🇨🇭",
    baseRateToUSD: 0.88,
  },
  CNY: {
    code: "CNY",
    name: "Yuan Chinês",
    symbol: "¥",
    flag: "🇨🇳",
    baseRateToUSD: 7.24,
  },
  HKD: {
    code: "HKD",
    name: "Dólar de Hong Kong",
    symbol: "HK$",
    flag: "🇭🇰",
    baseRateToUSD: 7.78,
  },
  NZD: {
    code: "NZD",
    name: "Dólar da Nova Zelândia",
    symbol: "NZ$",
    flag: "🇳🇿",
    baseRateToUSD: 1.69,
  },
  SEK: {
    code: "SEK",
    name: "Coroa Sueca",
    symbol: "kr",
    flag: "🇸🇪",
    baseRateToUSD: 10.85,
  },
  NOK: {
    code: "NOK",
    name: "Coroa Norueguesa",
    symbol: "kr",
    flag: "🇳🇴",
    baseRateToUSD: 11.05,
  },
  MXN: {
    code: "MXN",
    name: "Peso Mexicano",
    symbol: "MX$",
    flag: "🇲🇽",
    baseRateToUSD: 20.35,
  },
  ARS: {
    code: "ARS",
    name: "Peso Argentino",
    symbol: "$",
    flag: "🇦🇷",
    baseRateToUSD: 1005.0,
  },
  CLP: {
    code: "CLP",
    name: "Peso Chileno",
    symbol: "CLP$",
    flag: "🇨🇱",
    baseRateToUSD: 975.0,
  },
  COP: {
    code: "COP",
    name: "Peso Colombiano",
    symbol: "COL$",
    flag: "🇨🇴",
    baseRateToUSD: 4410.0,
  },
  PEN: {
    code: "PEN",
    name: "Sol Peruano",
    symbol: "S/",
    flag: "🇵🇪",
    baseRateToUSD: 3.76,
  },
  UYU: {
    code: "UYU",
    name: "Peso Uruguaio",
    symbol: "$U",
    flag: "🇺🇾",
    baseRateToUSD: 42.8,
  },
  INR: {
    code: "INR",
    name: "Rúpia Indiana",
    symbol: "₹",
    flag: "🇮🇳",
    baseRateToUSD: 84.4,
  },
  KRW: {
    code: "KRW",
    name: "Won Sul-Coreano",
    symbol: "₩",
    flag: "🇰🇷",
    baseRateToUSD: 1395.0,
  },
  SGD: {
    code: "SGD",
    name: "Dólar de Singapura",
    symbol: "S$",
    flag: "🇸🇬",
    baseRateToUSD: 1.34,
  },
  AED: {
    code: "AED",
    name: "Dirham dos Emirados",
    symbol: "AED",
    flag: "🇦🇪",
    baseRateToUSD: 3.67,
  },
  SAR: {
    code: "SAR",
    name: "Riyal Saudita",
    symbol: "SAR",
    flag: "🇸🇦",
    baseRateToUSD: 3.75,
  },
  ZAR: {
    code: "ZAR",
    name: "Rand Sul-Africano",
    symbol: "R",
    flag: "🇿🇦",
    baseRateToUSD: 18.1,
  },
  TRY: {
    code: "TRY",
    name: "Lira Turca",
    symbol: "₺",
    flag: "🇹🇷",
    baseRateToUSD: 34.5,
  },
  PLN: {
    code: "PLN",
    name: "Zloty Polonês",
    symbol: "zł",
    flag: "🇵🇱",
    baseRateToUSD: 4.08,
  },
  CZK: {
    code: "CZK",
    name: "Coroa Tcheca",
    symbol: "Kč",
    flag: "🇨🇿",
    baseRateToUSD: 23.6,
  },
  HUF: {
    code: "HUF",
    name: "Florim Húngaro",
    symbol: "Ft",
    flag: "🇭🇺",
    baseRateToUSD: 378.0,
  },
  ILS: {
    code: "ILS",
    name: "Novo Shekel Israelense",
    symbol: "₪",
    flag: "🇮🇱",
    baseRateToUSD: 3.72,
  },
};

export const CURRENCY_LIST: CurrencyMeta[] = Object.values(CURRENCIES);

export const COMPARE_PERIODS: Array<{ value: ComparePeriod; label: string }> = [
  { value: "1D", label: "1D" },
  { value: "15D", label: "15D" },
  { value: "30D", label: "30D" },
  { value: "6M", label: "6M" },
  { value: "1A", label: "1A" },
];

const PERIOD_CONFIG: Record<
  ComparePeriod,
  { waveAmp: number; stepAmp: number; wickFactor: number; stepSeconds: number }
> = {
  "1D": { waveAmp: 0.0022, stepAmp: 0.0014, wickFactor: 0.0012, stepSeconds: 5 },
  "15D": { waveAmp: 0.014, stepAmp: 0.009, wickFactor: 0.0055, stepSeconds: 3600 },
  "30D": { waveAmp: 0.024, stepAmp: 0.015, wickFactor: 0.0085, stepSeconds: 7200 },
  "6M": { waveAmp: 0.055, stepAmp: 0.032, wickFactor: 0.016, stepSeconds: 43200 },
  "1A": { waveAmp: 0.09, stepAmp: 0.05, wickFactor: 0.025, stepSeconds: 86400 },
};

export function formatMoney(
  value: number,
  options?: { minimumFractionDigits?: number; maximumFractionDigits?: number }
): string {
  const safeValue = Number.isFinite(value) ? value : 0;
  return safeValue.toLocaleString("pt-BR", {
    minimumFractionDigits: options?.minimumFractionDigits ?? 2,
    maximumFractionDigits: options?.maximumFractionDigits ?? 2,
  });
}

export function formatGroupedInput(rawValue: string): {
  display: string;
  numeric: number;
} {
  const cleaned = rawValue.replace(/[^\d,]/g, "");
  if (!cleaned) {
    return { display: "", numeric: 0 };
  }

  const parts = cleaned.split(",");
  const intDigits = parts[0].replace(/^0+(?=\d)/, "");
  const hasComma = cleaned.includes(",");
  const decDigits = parts.slice(1).join("").slice(0, 6);

  const groupedInt = intDigits
    ? Number(intDigits).toLocaleString("pt-BR", { maximumFractionDigits: 0 })
    : "0";

  const display = hasComma ? `${groupedInt},${decDigits}` : groupedInt;

  const safeInt = intDigits.length > 0 ? intDigits : "0";
  const safeDec = decDigits.length > 0 ? decDigits : "0";
  const normalizedNumberString = `${safeInt}.${safeDec}`;
  const numeric = Math.max(0, Number(normalizedNumberString) || 0);

  return { display, numeric };
}

export function getCrossRate(
  from: CurrencyCode,
  to: CurrencyCode,
  jitterFactor = 1
): number {
  if (from === to) {
    return 1;
  }
  const fromUsd = CURRENCIES[from].baseRateToUSD;
  const toUsd = CURRENCIES[to].baseRateToUSD;
  return (toUsd / fromUsd) * jitterFactor;
}

export function formatTimeLabel(date: Date): string {
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function formatPeriodPointLabel(index: number, period: ComparePeriod): string {
  const totalSeconds = index * PERIOD_CONFIG[period].stepSeconds;
  if (period === "1D") {
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `00:${mins}:${secs}`;
  }
  if (period === "15D" || period === "30D") {
    const day = Math.floor(totalSeconds / 86400) + 1;
    const hour = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(
      2,
      "0"
    );
    return `D${day} ${hour}h`;
  }
  const dayIndex = Math.floor(totalSeconds / 86400) + 1;
  return `Dia ${dayIndex}`;
}

export function createDeterministicCandles(
  from: CurrencyCode,
  to: CurrencyCode,
  period: ComparePeriod = "1D",
  count = 24
): CandlePoint[] {
  const baseRate = getCrossRate(from, to, 1);
  const cfg = PERIOD_CONFIG[period];
  let currentClose = baseRate;
  const points: CandlePoint[] = [];

  for (let i = 0; i < count; i++) {
    const wave = Math.sin((i + 1) * 0.55) * cfg.waveAmp;
    const step = Math.cos((i + 2) * 0.35) * cfg.stepAmp;
    const open = currentClose;
    const close = Number((baseRate * (1 + wave + step)).toFixed(6));
    const wickSize = open * cfg.wickFactor;
    const high = Number((Math.max(open, close) + wickSize).toFixed(6));
    const low = Number((Math.min(open, close) - wickSize).toFixed(6));

    points.push({
      time: formatPeriodPointLabel(i, period),
      open,
      high,
      low,
      close,
    });

    currentClose = close;
  }

  return points;
}

export function generateNextCandle(
  previousCandle: CandlePoint,
  timestamp: Date,
  period: ComparePeriod = "1D"
): CandlePoint {
  const cfg = PERIOD_CONFIG[period];
  const open = previousCandle.close;
  const deltaScale = period === "1D" ? 0.0045 : cfg.stepAmp * 1.4;
  const deltaPercent = (Math.random() - 0.495) * deltaScale;
  const close = Number((open * (1 + deltaPercent)).toFixed(6));
  const extraWick = open * (cfg.wickFactor * 0.35 + Math.random() * cfg.wickFactor);
  const high = Number((Math.max(open, close) + extraWick).toFixed(6));
  const low = Number((Math.min(open, close) - extraWick).toFixed(6));

  return {
    time: period === "1D" ? formatTimeLabel(timestamp) : previousCandle.time,
    open,
    high,
    low,
    close,
  };
}