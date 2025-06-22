"use client";

import Link from "next/link";
import { useState } from "react";

export default function BouncingLink({
    children,
    href,
    className,
}: {
    children: React.ReactNode;
    href: string;
    className?: string;
}) {
    const [bouncing, setBouncing] = useState(false);

    const linkClicked = () => {
        setBouncing(true);
        setTimeout(() => {
            setBouncing(false);
        }, 300);
    };

    const getClasses = (): string => {
        let out = "inline-block transition-transform duration-300 ease-out ";
        if (bouncing) {
            out += "-translate-y-1 ";
        } else {
            out += "translate-y-0 ";
        }
        if (className) {
            out += className;
        }
        return out;
    };

    return (
        <Link href={href} className={getClasses()} onClick={linkClicked}>
            {children}
        </Link>
    );
}
