"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";
import { Icon } from "@gravity-ui/uikit";

const navItems = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Companies", href: "/companies" },
    { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 🔐 mock auth (replace later with real auth)
    const user = null;

    const dashboardRoute = {
        seeker: "/dashboard/seeker",
        recruiter: "/dashboard/recruiter",
        admin: "/dashboard/admin",
    };

    return (
        <nav className="sticky top-0 z-50 px-4 py-4">
            <div className="mx-auto max-w-7xl">

                {/* MAIN NAVBAR */}
                <header className="flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-background/70 px-6 backdrop-blur-xl">

                    {/* LEFT: LOGO ONLY */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.svg"
                            alt="HireLoop"
                            width={42}
                            height={42}
                            priority
                        />

                        <span className="text-2xl font-bold tracking-tight">
                            HireLoop
                        </span>
                    </Link>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-8 ">

                        {/* Desktop Menu */}
                        <ul className="hidden items-center gap-8 lg:flex rounded-full border border-white/10 bg-background/40 px-5 py-2">
                            {navItems.map((item) => {
                                const isActive =
                                    pathname === item.href ||
                                    pathname.startsWith(item.href + "/");

                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`text-sm font-medium transition ${isActive
                                                    ? "text-primary"
                                                    : "text-default-600 hover:text-foreground"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Divider */}
                        <div className="hidden h-6 w-px bg-white/15 lg:block" />

                        {/* Auth Actions */}
                        <div className="hidden items-center gap-4 lg:flex">

                            {!user ? (
                                <>
                                    <Link
                                        href="/login"
                                        className="text-sm font-medium text-primary hover:opacity-80"
                                    >
                                        Sign In
                                    </Link>

                                    <Button
                                        as={Link}
                                        href="/register"
                                        color="primary"
                                        radius="full"
                                    >
                                        Get Started
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        as={Link}
                                        href={dashboardRoute[user.role]}
                                        color="primary"
                                        variant="flat"
                                        radius="full"
                                    >
                                        Dashboard
                                    </Button>

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                                        {user.name?.charAt(0)}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="rounded-lg p-2 hover:bg-white/5 lg:hidden"
                            aria-label="Toggle menu"
                        >
                            <Icon
                                data={isMenuOpen ? Xmark : Bars}
                                size={20}
                            />
                        </button>

                    </div>
                </header>

                {/* MOBILE MENU */}
                {isMenuOpen && (
                    <div className="mt-3 rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl lg:hidden">
                        <ul className="flex flex-col p-4">

                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/5"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}

                            <div className="mt-4 border-t border-white/10 pt-4">

                                {!user ? (
                                    <>
                                        <Link
                                            href="/login"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="mb-3 block rounded-xl px-4 py-3 text-sm font-medium text-primary"
                                        >
                                            Sign In
                                        </Link>

                                        <Button
                                            as={Link}
                                            href="/register"
                                            color="primary"
                                            fullWidth
                                            radius="full"
                                        >
                                            Get Started
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            as={Link}
                                            href={dashboardRoute[user.role]}
                                            color="primary"
                                            fullWidth
                                            radius="full"
                                        >
                                            Dashboard
                                        </Button>
                                    </>
                                )}

                            </div>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
}