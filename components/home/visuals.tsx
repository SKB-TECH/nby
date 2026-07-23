import {Play} from "lucide-react";
import Image from "next/image";
import {decorativeIcons, techBubbles} from "@/components/home/home-data";
import {cn} from "@/lib/utils";

export function CircuitBackdrop({className}: {className?: string}) {
    return (
        <Image
            src="/home/hero-circuit-wide.png"
            alt=""
            fill
            sizes="100vw"
            className={cn("pointer-events-none object-cover opacity-70", className)}
            aria-hidden="true"
        />
    );
}

export function HeroLeftCircuit({className}: {className?: string}) {
    return (
        <Image
            src="/home/hero-circuit-left.png"
            alt=""
            width={300}
            height={226}
            className={cn("pointer-events-none absolute object-contain", className)}
            aria-hidden="true"
        />
    );
}

export function DotWave({className}: {className?: string}) {
    return (
        <div
            className={cn("pointer-events-none absolute h-64 w-64 rounded-full opacity-35", className)}
            style={{
                backgroundImage: "radial-gradient(circle, rgb(14 165 233) 1.2px, transparent 1.2px)",
                backgroundSize: "11px 11px",
                maskImage: "radial-gradient(circle, black 15%, transparent 68%)",
            }}
        />
    );
}

export function HeroPhoto() {
    return (
        <div className="relative aspect-square w-full max-w-[360px] lg:max-w-[375px]">
            <Image
                src="/home/hero-team.png"
                alt="Two IT consultants reviewing work on a laptop"
                fill
                priority
                sizes="(max-width: 768px) 82vw, 375px"
                className="object-contain"
            />
        </div>
    );
}

export function VideoCard() {
    return (
        <div className="relative overflow-hidden rounded-sm bg-slate-900 shadow-xl">
            <div className="aspect-[1.25] bg-[linear-gradient(135deg,rgba(2,6,23,.25),rgba(14,165,233,.25)),radial-gradient(circle_at_50%_30%,#475569_0_12%,transparent_13%),linear-gradient(110deg,#0f172a,#334155)]" />
            <button className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/30">
                <Play className="h-5 w-5 fill-white" />
            </button>
            <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-bold">Casper Deploy</p>
                <p className="text-xs text-white/70">Meet our featured case study</p>
            </div>
        </div>
    );
}

export function TechOrbit() {
    return (
        <div className="relative mx-auto aspect-square w-full max-w-[470px]">
            <div className="absolute inset-0 rounded-full border border-blue-100" />
            <div className="absolute inset-[13%] rounded-full border border-blue-100" />
            <div className="absolute inset-[27%] rounded-full border border-blue-100" />
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600" />
            {techBubbles.map((bubble) => (
                <div
                    key={bubble.label}
                    className={cn(
                        "absolute flex h-16 w-16 items-center justify-center rounded-full text-sm font-bold shadow-xl shadow-slate-900/10",
                        bubble.className
                    )}
                >
                    {bubble.label}
                </div>
            ))}
            {decorativeIcons.map((Icon, index) => (
                <span
                    key={index}
                    className="absolute flex h-3 w-3 items-center justify-center rounded-full bg-slate-900 text-white"
                    style={{
                        left: `${18 + index * 23}%`,
                        top: `${12 + (index % 2) * 70}%`,
                    }}
                >
                    <Icon className="h-2 w-2" />
                </span>
            ))}
            <span className="absolute -left-8 top-1/2 h-14 w-14 rounded-full bg-blue-600" />
            <span className="absolute left-[40%] top-0 h-12 w-12 rounded-full bg-cyan-400" />
        </div>
    );
}
