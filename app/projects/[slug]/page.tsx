import { projects, getProject } from '@/data/projects';
import { notFound } from 'next/navigation';
import CaseStudy from './case-study';

export function generateStaticParams() {
    return projects
        .filter((p) => p.hasCaseStudy)
        .map((p) => ({ slug: p.slug }));
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