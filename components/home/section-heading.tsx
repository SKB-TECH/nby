import {cn} from "@/lib/utils";

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    mutedTitle?: string;
    centered?: boolean;
    className?: string;
};

export function SectionHeading({
    eyebrow,
    title,
    mutedTitle,
    centered = false,
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn(centered && "text-center", className)}>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-500">
                {eyebrow}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                {title}
                {mutedTitle && <span className="font-medium text-slate-500"> {mutedTitle}</span>}
            </h2>
        </div>
    );
}
