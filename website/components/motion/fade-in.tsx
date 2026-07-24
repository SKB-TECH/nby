"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type FadeInProps = HTMLMotionProps<"div">;

export function FadeIn({ children, ...props }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
