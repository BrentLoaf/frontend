import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "ghost" | "glow" | "none" | "selected" | "text";
    color?: string;
    className?: string;
    wrapperClassName?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};

export default function Button({
    children,
    variant = "ghost",
    color = "#00C97A",
    className = "",
    wrapperClassName = "",
    onClick,
    type = "button"
}: ButtonProps) {

    const base = "px-4 py-1 rounded-3xl transition-all duration-300";

    const styles = {
        none: "cursor-pointer",

        ghost: "text-white/50 hover:text-white hover:bg-black/50 cursor-pointer",

        selected: "text-white cursor-default cursor-pointer",

        text: "cursor-pointer",

        glow: `
            text-[var(--primary)] 
            hover:text-white 
            border border-[var(--primary)]/[0.25] 
            hover:border-[var(--primary)] 
            bg-[var(--primary)]/[0.1] 
            hover:bg-[var(--primary)]/[0.4] 
            shadow-[0_0_16px_var(--primary)]/[0.25] 
            hover:shadow-[0_0_20px_var(--primary)] 
            cursor-pointer
        `
    };

    return (
        <div
            className={`px-3 ${wrapperClassName}`}
            style={{ "--primary": color } as React.CSSProperties}
        >
            <div className="flex flex-col items-start">
                <button
                    onClick={onClick}
                    type={type}
                    className={`${base} ${styles[variant]} ${className}`}
                >
                    {children}
                </button>

                {variant === "selected" && (
                    <div
                        className="h-[2px] w-full"
                        style={{
                            background: `linear-gradient(to right, transparent, ${color}, transparent)`
                        }}
                    />
                )}
            </div>
        </div>
    );
}