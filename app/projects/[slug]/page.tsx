import { projects, getProject } from '@/data/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CaseStudy from './case-study';

export function generateStaticParams() {
  return projects
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} — Raphaela Monteiro`;
  const description = project.subtitle.en;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://raphaelamonteiro.vercel.app/projects/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.hasCaseStudy) notFound();

  return <CaseStudy project={project} />;
}
