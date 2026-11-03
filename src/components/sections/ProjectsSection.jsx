import { Suspense, lazy } from 'react';
import { projects } from '@/data/projectsData';

const ProjectCard = lazy(() => import('@/components/ProjectCard').then(m => ({ default: m.ProjectCard })));

export const ProjectsSection = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Suspense fallback={<div className="md:col-span-2 lg:col-span-3 h-80 glass-panel rounded-xl animate-pulse" />}>
            {projects.length > 0 && (
              <div className="md:col-span-2 lg:col-span-3">
                <ProjectCard {...projects[0]} isFeatured={true} />
              </div>
            )}
            {projects.slice(1).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

