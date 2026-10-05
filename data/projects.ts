export type Project = {
    slug: string;                    // id único, usado em URL futura
    title: string;                   // nome do projeto
    description: {
        en: string;
        pt: string;
    };
    stack: string[];                 // tecnologias usadas
    category: 'web' | 'systems' | 'ai' | 'research';
    highlights?: string[];           // bullets curtos com "o que resolveu"
    repoUrl?: string;                // link do GitHub
    liveUrl?: string;                // link do deploy (se tiver)
    status: 'active' | 'completed' | 'wip';
    year: string;                    // "2024", "2025"
};

export const projects: Project[] = [
    {
        slug: 'portfolio',
        title: 'Personal Portfolio',
        description: {
            en: 'Bilingual portfolio with dark/light theme, custom i18n context, and a minimal cyber-goth aesthetic built on Next.js 16 + Tailwind v4.',
            pt: 'Portfólio bilíngue com tema claro/escuro, contexto de i18n próprio e estética cyber-goth minimalista em Next.js 16 + Tailwind v4.',
        },
        stack: ['Next.js', 'TypeScript', 'Tailwind', 'React'],
        category: 'web',
        highlights: [
            'Custom theme provider without external deps',
            'Route-based i18n with EN/PT contexts',
        ],
        repoUrl: 'https://github.com/raphaelamonteiro/portfolio',
        status: 'active',
        year: '2026',
    },
    // ... mais projetos aqui
];