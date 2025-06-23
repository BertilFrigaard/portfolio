"use client";
import { useState } from "react";

export default function ExpandableText({ content }: { content: string[] }) {
    const [expanded, setExpanded] = useState(false);
    if (expanded) {
        return (
            <>
                {content.map((value, key) => (
                    <p className="text-gray-800 text-base leading-relaxed mb-2" key={key}>
                        {value}
                    </p>
                ))}
                <p
                    className="text-primary text-sm cursor-pointer"
                    onClick={() => {
                        setExpanded(false);
                    }}
                >
                    See less
                </p>
            </>
        );
    } else if (content.length >= 1) {
        return (
            <>
                <p className="text-gray-800 text-base leading-relaxed">
                    {content[0].slice(0, 100)}
                    {content[0].length > 100 ? "..." : content.length > 1 ? ".." : ""}
                </p>
                <p
                    className="text-primary text-sm cursor-pointer"
                    onClick={() => {
                        setExpanded(true);
                    }}
                >
                    See more
                </p>
            </>
        );
    } else {
        return;
    }
}
