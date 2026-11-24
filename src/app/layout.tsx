import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "FXPulse | Conversão de Moedas em Tempo Real e Gráfico 5s",
  description:
    "Converta USD, BRL, EUR, GBP, JPY e CAD com gráfico de velas atualizado a cada 5 segundos, dark mode e layout moderno.",
};

const THEME_INIT_SCRIPT = `
  try {
    var saved = window.localStorage.getItem("theme");
    var isDark = saved ? saved === "dark" : true;
    var root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}