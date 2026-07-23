"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function VideoPlayerModal({ videoId, title, onClose }: { videoId: string | null; title: string; onClose: () => void }) {
    return <AnimatePresence>{videoId && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4 backdrop-blur-md" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}><motion.div initial={{ opacity: 0, y: 30, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .97 }} className="w-full max-w-5xl" onClick={(event) => event.stopPropagation()}><div className="mb-3 flex items-center justify-between gap-5 text-white"><h2 className="line-clamp-1 font-serif text-xl sm:text-2xl">{title}</h2><button type="button" onClick={onClose} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 transition hover:bg-[#df9200]" aria-label="Fermer la vidéo"><X className="h-5 w-5" /></button></div><div className="aspect-video overflow-hidden rounded-lg bg-black shadow-2xl"><iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} title={title} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></motion.div></motion.div>}</AnimatePresence>;
}
