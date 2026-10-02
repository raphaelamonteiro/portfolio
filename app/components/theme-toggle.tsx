'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="w-5 h-5" />;

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="text-sm text-ash hover:text-bone transition-colors font-mono"
            aria-label="Toggle theme"
        >
            {isDark ? '☾' : '☀'}
        </button>
    );
}