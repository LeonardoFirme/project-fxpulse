export type CurrencyCode =
  | "USD"
  | "BRL"
  | "EUR"
  | "GBP"
  | "JPY"
  | "CAD"
  | "AUD"
  | "CHF"
  | "CNY"
  | "HKD"
  | "NZD"
  | "SEK"
  | "NOK"
  | "MXN"
  | "ARS"
  | "CLP"
  | "COP"
  | "PEN"
  | "UYU"
  | "INR"
  | "KRW"
  | "SGD"
  | "AED"
  | "SAR"
  | "ZAR"
  | "TRY"
  | "PLN"
  | "CZK"
  | "HUF"
  | "ILS";

export type ComparePeriod = "1D" | "15D" | "30D" | "6M" | "1A";

export interface CurrencyMeta {
  code: CurrencyCode;
  name: string;
  symbol: string;
  flag: string;
  baseRateToUSD: number;
}

export interface CandlePoint {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}