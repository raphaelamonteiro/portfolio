"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { LuCloudMoon, LuCloudSun } from "react-icons/lu"

import { Button } from "../theme-switcher/button"

export function Toggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const isLight = resolvedTheme === "light"

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(isLight ? "dark" : "light")}
            aria-label="Alternar tema"
            className="relative"
        >
            <LuCloudMoon
                className={`
                    absolute h-5 w-5
                    transform-gpu
                    transition-all duration-300 ease-in-out
                    ${isLight
                        ? "rotate-90 scale-0 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                    }
                `}
            />

            <LuCloudSun
                className={`
                    absolute h-5 w-5
                    transform-gpu
                    transition-all duration-300 ease-in-out
                    ${isLight
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-90 scale-0 opacity-0"
                    }
                `}
            />
        </Button>
    )
}