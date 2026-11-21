'use client';

import { useTranslation } from '@/app/providers';
import type { Project } from '@/data/projects';
import Link from 'next/link';

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-lilac/40 pointer-events-none" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-lilac/40 pointer-events-none" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-lilac/40 pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-lilac/40 pointer-events-none" />
    </>
  );
}

function SprbArchitectureDiagram() {
  return (
    <div className="w-full max-w-lg mt-6 p-4 bg-void/60 border border-lilac/40 rounded-sm">
      <div className="text-[10px] font-mono text-ash uppercase tracking-widest mb-3 flex items-center justify-between">
        <span>FIG 01 // 4-LAYER REFERENCE ARCHITECTURE</span>
        <span className="text-amethyst">137 TESTS PASS</span>
      </div>
      <svg
        viewBox="0 0 460 270"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--color-lilac)" />
          </marker>
        </defs>

        {/* Layer 1: Presentation */}
        <rect
          x="20"
          y="10"
          width="420"
          height="42"
          rx="2"
          stroke="var(--color-lilac)"
          fill="var(--color-surface)"
          strokeWidth="1.5"
        />
        <text
          x="36"
          y="35"
          fill="var(--color-bone)"
          fontSize="11"
          fontWeight="700"
          fontFamily="monospace"
        >
          [ 01 // PRESENTATION ]
        </text>
        <text
          x="225"
          y="35"
          fill="var(--color-ash)"
          fontSize="10"
          fontFamily="monospace"
        >
          React · Map Coverage Visualizer
        </text>

        {/* Down Arrow 1 */}
        <line
          x1="230"
          y1="52"
          x2="230"
          y2="76"
          stroke="var(--color-lilac)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />

        {/* Layer 2: Application */}
        <rect
          x="20"
          y="78"
          width="420"
          height="42"
          rx="2"
          stroke="var(--color-lilac)"
          fill="var(--color-surface)"
          strokeWidth="1.5"
        />
        <text
          x="36"
          y="103"
          fill="var(--color-bone)"
          fontSize="11"
          fontWeight="700"
          fontFamily="monospace"
        >
          [ 02 // APPLICATION ]
        </text>
        <text
          x="220"
          y="103"
          fill="var(--color-ash)"
          fontSize="10"
          fontFamily="monospace"
        >
          FastAPI · Commands & Telemetry API
        </text>

        {/* Down Arrow 2 */}
        <line
          x1="230"
          y1="120"
          x2="230"
          y2="144"
          stroke="var(--color-lilac)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />

        {/* Layer 3: Persistence */}
        <rect
          x="20"
          y="146"
          width="420"
          height="42"
          rx="2"
          stroke="var(--color-lilac)"
          fill="var(--color-surface)"
          strokeWidth="1.5"
        />
        <text
          x="36"
          y="171"
          fill="var(--color-bone)"
          fontSize="11"
          fontWeight="700"
          fontFamily="monospace"
        >
          [ 03 // PERSISTENCE ]
        </text>
        <text
          x="225"
          y="171"
          fill="var(--color-ash)"
          fontSize="10"
          fontFamily="monospace"
        >
          PostgreSQL · State & Event Logs
        </text>

        {/* Down Arrow 3 */}
        <line
          x1="230"
          y1="188"
          x2="230"
          y2="212"
          stroke="var(--color-lilac)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />

        {/* Layer 4: Analysis */}
        <rect
          x="20"
          y="214"
          width="420"
          height="42"
          rx="2"
          stroke="var(--color-lilac)"
          fill="var(--color-surface)"
          strokeWidth="1.5"
        />
        <text
          x="36"
          y="239"
          fill="var(--color-bone)"
          fontSize="11"
          fontWeight="700"
          fontFamily="monospace"
        >
          [ 04 // ANALYSIS ]
        </text>
        <text
          x="205"
          y="239"
          fill="var(--color-ash)"
          fontSize="10"
          fontFamily="monospace"
        >
          Apache Spark · Analytical Verification
        </text>
      </svg>
    </div>
  );
}

function DossierSection({
  index,
  title,
  content,
  children,
}: {
  index: string;
  title: string;
  content: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="relative p-6 sm:p-8 bg-surface/40 border border-lilac rounded-sm space-y-4">
      {/* Top index row */}
      <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-3 border-b border-lilac/20 text-ash">
        <span>
          // {index} · {title.toUpperCase()}
        </span>
        <span>SYS_SECTION</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        <div className="lg:col-span-3">
          <h2 className="text-amethyst font-mono text-xs uppercase tracking-widest sticky top-6">
            {title}
          </h2>
        </div>
        <div className="lg:col-span-9 space-y-4">
          <p className="text-ash leading-relaxed font-mono text-sm sm:text-base whitespace-pre-line">
            {content}
          </p>
          {children}
        </div>
      </div>
    </article>
  );
}

export default function CaseStudy({ project }: { project: Project }) {
  const { t, locale } = useTranslation();
  const cs = project.caseStudy;
  if (!cs) return null;

  return (
    <div className="relative min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-8 overflow-hidden fade-up">
      {/* Background Dot Matrix Pattern (32px, tactical radar screen feel) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--color-bone) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top Navigation */}
      <Link
        href="/projects"
        className="text-ash hover:text-bone font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 transition-colors mb-2"
      >
        <span>←</span>
        <span>$ cd ../projects</span>
      </Link>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* PANEL 001 — HEADER (Dossier Header)                           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative p-6 sm:p-10 lg:p-12 bg-surface/40 border border-lilac border-t border-t-bone/20 rounded-sm overflow-hidden">
        <CornerBrackets />

        {/* Top Header Row */}
        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-4 border-b border-lilac mb-8">
          <span className="text-ash">001 // DOSSIER</span>
          <div className="flex items-center gap-2 text-ash font-mono">
            <span>[{project.year}]</span>
            <span>·</span>
            <span>[{project.category.toUpperCase()}]</span>
            <span>·</span>
            <span
              className={
                project.status === 'active'
                  ? 'text-emerald-400'
                  : project.status === 'wip'
                  ? 'text-lilac'
                  : 'text-ash'
              }
            >
              ● {t.projects.status[project.status]}
            </span>
          </div>
        </div>

        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.0] tracking-tight bg-[linear-gradient(180deg,#C9B5E0_0%,#C9B5E0_48%,#433D8B_52%,#17153B_100%)] bg-clip-text text-transparent my-6">
          {project.title}
        </h1>

        <hr className="border-lilac max-w-xl my-6" />

        <p className="text-ash max-w-2xl font-mono text-sm sm:text-base leading-relaxed mb-6">
          {project.subtitle[locale]}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs font-mono text-ash/80 bg-void/50 border border-lilac/30 px-2.5 py-1 rounded-sm"
            >
              [ {s} ]
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.links?.repo || project.links?.paper || project.links?.live) && (
          <div className="flex flex-wrap gap-3 pt-4 border-t border-lilac/20 text-xs font-mono">
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-lilac hover:border-amethyst px-3 py-1 rounded-sm text-xs font-mono text-ash hover:text-bone transition-colors inline-flex items-center gap-1.5"
              >
                [ GITHUB ] ↗
              </a>
            )}
            {project.links?.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-lilac hover:border-amethyst px-3 py-1 rounded-sm text-xs font-mono text-ash hover:text-bone transition-colors inline-flex items-center gap-1.5"
              >
                [ PAPER ] ↗
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-lilac hover:border-amethyst px-3 py-1 rounded-sm text-xs font-mono text-amethyst hover:text-amethyst/80 transition-colors inline-flex items-center gap-1.5"
              >
                [ LIVE ] ↗
              </a>
            )}
          </div>
        )}
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* CONTENT SECTIONS (Panels 002-008)                             */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="space-y-6">
        <DossierSection
          index="002"
          title={locale === 'pt' ? 'Resumo' : 'Abstract'}
          content={cs.abstract[locale]}
        />

        <DossierSection
          index="003"
          title={locale === 'pt' ? 'Contexto' : 'Context'}
          content={cs.context[locale]}
        />

        <DossierSection
          index="004"
          title={locale === 'pt' ? 'Abordagem' : 'Approach'}
          content={cs.approach[locale]}
        />

        <DossierSection
          index="005"
          title={locale === 'pt' ? 'Arquitetura' : 'Architecture'}
          content={cs.architecture[locale]}
        >
          {project.slug === 'sprb-bd' && <SprbArchitectureDiagram />}
        </DossierSection>

        <DossierSection
          index="006"
          title={locale === 'pt' ? 'Implementação' : 'Implementation'}
          content={cs.whatIBuilt[locale]}
        />

        <DossierSection
          index="007"
          title={locale === 'pt' ? 'Resultados' : 'Results'}
          content={cs.results[locale]}
        />

        <DossierSection
          index="008"
          title={locale === 'pt' ? 'Reflexão' : 'Reflection'}
          content={cs.reflection[locale]}
        />
      </div>

      {/* Footer Nav */}
      <div className="pt-8 border-t border-lilac/20 flex items-center justify-between font-mono text-xs">
        <Link
          href="/projects"
          className="text-ash hover:text-bone transition-colors uppercase tracking-widest inline-flex items-center gap-2"
        >
          <span>←</span>
          <span>$ cd ../projects</span>
        </Link>
        <span className="text-ash/40 uppercase tracking-widest text-[10px]">
          END_OF_DOSSIER // {project.slug.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
