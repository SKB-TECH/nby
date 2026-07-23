"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PageLoader({ overlay = false }: { overlay?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${overlay ? "fixed inset-0 z-[200]" : "min-h-[70vh]"} grid place-items-center bg-[#071117] text-white`}
            role="status"
            aria-live="polite"
            aria-label="Chargement de la page"
        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    animate={{ opacity: [.35, .7, .35], scale: [.92, 1.12, .92] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-16 rounded-full bg-[#df9200]/25 blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: .85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .45 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                >
                    <Image src="/church/nby-logo.jpg" alt="NBY" width={112} height={112} priority className="h-28 w-28 object-cover" />
                </motion.div>
                <div className="relative mt-8 flex h-8 items-end gap-1.5">
                    {[18, 30, 22, 38, 26].map((height, index) => (
                        <motion.span
                            key={height}
                            animate={{ height: [8, height, 8], opacity: [.4, 1, .4] }}
                            transition={{ duration: 1, repeat: Infinity, delay: index * .12, ease: "easeInOut" }}
                            className="w-1.5 rounded-full bg-[#f0a40b]"
                        />
                    ))}
                </div>
                <motion.p
                    animate={{ opacity: [.45, 1, .45] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative mt-5 text-[10px] font-black uppercase tracking-[.35em] text-white/70"
                >
                    Cité du Surnaturel
                </motion.p>
                <span className="sr-only">Chargement en cours…</span>
            </div>
        </motion.div>
    );
}
