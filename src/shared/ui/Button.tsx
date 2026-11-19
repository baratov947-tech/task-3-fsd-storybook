import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
}

export function Button({
                           children,
                           variant = "primary",
                           className = "",
                           ...props
                       }: ButtonProps) {
    const baseStyles =
        "px-4 py-2 font-medium text-sm border transition-colors cursor-pointer disabled:opacity-50";
    const variantStyles =
        variant === "primary"
            ? "bg-amber-400 text-zinc-950 border-black hover:bg-amber-300"
            : "bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-700";

    return (
        <button
            type="button"
            className={`${baseStyles} ${variantStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}