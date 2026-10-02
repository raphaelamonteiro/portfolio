'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';
type Resolved = 'light' | 'dark';

type Ctx = {
    theme: Theme;
    resolved: Resolved;
    setTheme: (t: Theme) => void;
};

const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('system');
    const [resolved, setResolved] = useState<Resolved>('dark');

    useEffect(() => {
        const stored = (localStorage.getItem('theme') as Theme | null) ?? 'system';
        setThemeState(stored);
    }, []);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');

        const apply = () => {
            const next: Resolved =
                theme === 'system' ? (mq.matches ? 'dark' : 'light') : theme;
            setResolved(next);
            document.documentElement.classList.toggle('light', next === 'light');
            document.documentElement.style.colorScheme = next;
        };

        apply();
        mq.addEventListener('change', apply);
        return () => mq.removeEventListener('change', apply);
    }, [theme]);

    const setTheme = (t: Theme) => {
        setThemeState(t);
        localStorage.setItem('theme', t);
    };

    return (
        <ThemeCtx.Provider value={{ theme, resolved, setTheme }}>
            {children}
        </ThemeCtx.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeCtx);
    if (!ctx) throw new Error('useTheme must be inside ThemeProvider');
    return ctx;
}