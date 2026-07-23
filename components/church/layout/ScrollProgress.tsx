"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { usePathname } from "@/i18n/routing";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        let frame = 0;
        const update = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const scrollable = document.documentElement.scrollHeight - window.innerHeight;
                const next = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
                setProgress(next);
            });
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [pathname]);

    const rounded = Math.round(progress);
    const circumference = 2 * Math.PI * 25;
    const dashOffset = circumference - (progress / 100) * circumference;

    return (
        <>
            <div className="pointer-events-none fixed inset-x-0 top-0 z-[250] h-1 bg-black/5">
                <motion.div
                    className="h-full origin-left bg-gradient-to-r from-[#b87400] via-[#f0a40b] to-[#ffd36a] shadow-[0_0_12px_rgba(240,164,11,.65)]"
                    style={{ scaleX: progress / 100 }}
                />
            </div>

            <motion.button
                type="button"
                initial={false}
                animate={{ opacity: progress > 8 ? 1 : 0, scale: progress > 8 ? 1 : .8, y: progress > 8 ? 0 : 16 }}
                onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
                className={`fixed bottom-6 right-5 z-[90] grid h-16 w-16 place-items-center rounded-full bg-[#071117] text-white shadow-2xl shadow-black/25 transition hover:bg-[#151f26] sm:bottom-8 sm:right-8 ${progress > 8 ? "pointer-events-auto" : "pointer-events-none"}`}
                aria-label={`Retour en haut — ${rounded}% de la page parcourue`}
                title="Retour en haut"
            >
                <svg viewBox="0 0 60 60" className="absolute inset-1 h-14 w-14 -rotate-90" aria-hidden="true">
                    <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="2.5" />
                    <motion.circle
                        cx="30"
                        cy="30"
                        r="25"
                        fill="none"
                        stroke="#f0a40b"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        animate={{ strokeDashoffset: dashOffset }}
                        transition={{ duration: .15 }}
                    />
                </svg>
                <span className="relative flex flex-col items-center leading-none">
                    <ArrowUp className="h-4 w-4 text-[#f0a40b]" />
                    <span className="mt-1 text-[9px] font-black tabular-nums">{rounded}%</span>
                </span>
            </motion.button>
        </>
    );
}
