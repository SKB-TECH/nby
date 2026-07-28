"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { PublicPraiseVideo } from "../../../lib/church-api";
import { plainText } from "../../../lib/church-api";
import type { HomeCopy } from "./HomePage";

const localVideo: PublicPraiseVideo = {
    id: "nby-local-praise",
    title: "Un moment de louange à NBY",
    description: "Un peuple rassemblé pour célébrer Dieu et accueillir sa présence.",
    videoUrl: "/church/nby-praise-moment.mp4",
    locale: "fr",
    sortOrder: 0,
    featured: true,
};

export default function PraiseVideoSection({ copy: c, videos }: { copy: HomeCopy; videos: PublicPraiseVideo[] }) {
    const english = c.first === "First name";
    const items = videos.length ? videos : [localVideo];
    const [selectedId, setSelectedId] = useState(items[0].id);
    const selected = items.find(item => item.id === selectedId) ?? items[0];

    useEffect(() => {
        if (!items.some(item => item.id === selectedId)) setSelectedId(items[0].id);
    }, [items, selectedId]);

    return (
        <section className="relative overflow-hidden bg-[#241f1b] py-24 text-white lg:py-32">
            <div className="pointer-events-none absolute right-[-15%] top-[-20%] h-[620px] w-[620px] bg-[#df9200]/10 blur-[160px]" />
            <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8">
                <motion.header initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
                    <div>
                        <p className="border-l-2 border-[#df9200] pl-4 text-[10px] font-black uppercase tracking-[.3em] text-[#f0a40b]">{english ? "Praise at NBY" : "La louange à NBY"}</p>
                        <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.02] sm:text-7xl">{english ? "Moments of praise." : "Nos moments de louange."}</h2>
                    </div>
                    <p className="max-w-xl text-base leading-8 text-white/55 lg:justify-self-end">{english ? "More than music: a people united to celebrate God, proclaim his greatness and welcome his presence." : "Plus qu’un chant : un peuple rassemblé pour célébrer Dieu, proclamer sa grandeur et accueillir sa présence."}</p>
                </motion.header>

                <div className="mt-12 grid gap-5 xl:grid-cols-[1fr_340px]">
                    <motion.div initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .8 }} className="border border-white/15 bg-black">
                        <AnimatePresence mode="wait">
                            <motion.div key={selected.videoUrl} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3 }}>
                                <video controls playsInline preload="metadata" poster={selected.thumbnailUrl} className="aspect-video w-full bg-black object-cover">
                                    <source src={selected.videoUrl} />
                                    {english ? "Your browser cannot play this video." : "Votre navigateur ne peut pas lire cette vidéo."}
                                </video>
                            </motion.div>
                        </AnimatePresence>
                        <div className="grid gap-4 border-t border-white/15 bg-[#171411] p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:p-8">
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-[.24em] text-[#f0a40b]">NBY · Cité du Surnaturel</p>
                                <h3 className="mt-3 font-serif text-2xl sm:text-3xl">{selected.title}</h3>
                                {selected.description && <p className="mt-3 max-w-3xl text-sm leading-6 text-white/50">{plainText(selected.description)}</p>}
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[.2em] text-white/35">{String(items.findIndex(item => item.id === selected.id) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
                        </div>
                    </motion.div>

                    <aside className="border border-white/15 bg-[#2d2823]">
                        <div className="flex items-center justify-between border-b border-white/15 px-5 py-4">
                            <p className="text-[9px] font-black uppercase tracking-[.2em] text-white/45">{english ? "Playlist" : "Toutes les vidéos"}</p>
                            <span className="text-[10px] text-[#f0a40b]">{items.length}</span>
                        </div>
                        <div className="max-h-[680px] overflow-y-auto">
                            {items.map((video, index) => {
                                const active = video.id === selected.id;
                                return <button key={video.id} type="button" onClick={() => setSelectedId(video.id)} className={`group grid w-full grid-cols-[112px_1fr] gap-4 border-b border-white/10 p-4 text-left transition ${active ? "bg-[#f0a40b] text-[#171411]" : "hover:bg-white/[.05]"}`}>
                                    <span className="relative aspect-video overflow-hidden bg-[#171411]">
                                        {video.thumbnailUrl ? <img src={video.thumbnailUrl} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <span className={`grid h-full place-items-center font-serif text-2xl ${active ? "text-white/70" : "text-white/25"}`}>0{index + 1}</span>}
                                    </span>
                                    <span className="self-center">
                                        <strong className="line-clamp-2 font-serif text-base leading-5">{video.title}</strong>
                                        <small className={`mt-2 block text-[8px] font-black uppercase tracking-[.16em] ${active ? "text-[#171411]/60" : "text-white/30"}`}>{active ? (english ? "Now playing" : "En lecture") : (english ? "Watch" : "Regarder")}</small>
                                    </span>
                                </button>;
                            })}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
