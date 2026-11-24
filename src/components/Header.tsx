"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftRight, Coffee, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS = [
    { href: "/", label: "Inicial" },
    { href: "/sobre", label: "Sobre" },
    { href: "/apoie", label: "Apoie" },
];

export function Header() {
    const pathname = usePathname();
    const { dark, toggleTheme } = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            aria-label="Abrir menu lateral"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 lg:hidden"
                        >
                            <Menu className="h-5 w-5" />
                        </button>

                        <Link href="/" className="flex items-center gap-2.5">
                            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-white">
                                <ArrowLeftRight className="h-5 w-5" />
                            </span>
                            <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                                FXPulse<span className="text-orange-500">.</span>
                            </span>
                        </Link>
                    </div>

                    <nav className="hidden items-center gap-1 lg:flex">
                        {NAV_LINKS.map((item) => {
                            const active = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${active
                                        ? "bg-orange-500/15 text-orange-500 dark:text-[#22c55e]"
                                        : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2.5">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label="Alternar tema"
                            className="rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-orange-500/10 dark:shadow-orange-500/10 p-0.5"
                        >
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 shadow-inner">
                                <Sun className="hidden h-4 w-4 text-amber-400 dark:block" />
                                <Moon className="block h-4 w-4 text-zinc-700 dark:hidden" />
                            </div>
                        </button>

                        <Link
                            href="/apoie"
                            className="rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-orange-500/20 dark:shadow-orange-500/10 p-0.5"
                        >
                            <div className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-orange-100 dark:bg-orange-800/45 px-4 py-2.5 text-sm font-semibold text-orange-400 hover:text-white dark:hover:text-amber-900 hover:bg-orange-500 dark:hover:bg-amber-500 shadow-inner transition-colors">
                                <Coffee className="h-4 w-4" />
                                <span>Me pague um café</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            {sidebarOpen && (
                <div className="fixed inset-0 z-50 flex lg:hidden">
                    <div
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 bg-black/60"
                    />
                    <aside className="relative z-10 flex w-72 max-w-[85vw] flex-col justify-between border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5">
                        <div>
                            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
                                <Link
                                    href="/"
                                    onClick={() => setSidebarOpen(false)}
                                    className="flex items-center gap-2"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white">
                                        <ArrowLeftRight className="h-4 w-4" />
                                    </span>
                                    <span className="text-base font-bold text-zinc-900 dark:text-white">
                                        FXPulse
                                    </span>
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => setSidebarOpen(false)}
                                    aria-label="Fechar menu lateral"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            <nav className="mt-5 flex flex-col gap-1.5">
                                {NAV_LINKS.map((item) => {
                                    const active = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setSidebarOpen(false)}
                                            className={`rounded-lg px-3.5 py-2.5 text-sm font-medium ${active
                                                ? "bg-orange-500 text-white"
                                                : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>

                        <Link
                            href="/apoie"
                            onClick={() => setSidebarOpen(false)}
                            className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-orange-600 hover:text-white hover:bg-orange-500"
                        >
                            <Coffee className="h-4 w-4" />
                            <span>Me pague um café</span>
                        </Link>
                    </aside>
                </div>
            )}
        </>
    );
}