import * as React from "react"

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline"
    size?: "default" | "icon"
}

export function Button({
    children,
    variant = "default",
    size = "default",
    className = "",
    ...props
}: ButtonProps) {
    const variantStyles = {
        default:
            "bg-primary text-primary-foreground hover:bg-primary/90",

        outline:
            "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
    }

    const sizeStyles = {
        default: "h-10 px-4",
        icon: "h-10 w-10",
    }

    return (
        <button
            {...props}
            className={[
                "inline-flex items-center justify-center",
                "rounded-md text-sm font-medium",
                "transition-colors",
                "focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:pointer-events-none disabled:opacity-50",
                variantStyles[variant],
                sizeStyles[size],
                className,
            ].join(" ")}
        >
            {children}
        </button>
    )
}