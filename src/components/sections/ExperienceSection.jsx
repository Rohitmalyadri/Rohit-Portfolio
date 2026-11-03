import { Suspense, lazy } from 'react';
import { experiences } from '@/data/experienceData';

const ExperienceCard = lazy(() => import('@/components/ExperienceCard').then(m => ({ default: m.ExperienceCard })));

export const ExperienceSection = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow delay-1000 pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-center mb-16">Experience & Activities</h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline vertical line */}
          <div className="absolute left-[38px] md:left-[50%] top-4 bottom-4 w-1 bg-border rounded-full hidden sm:block" aria-hidden="true" />
          <div className="space-y-12">
            <Suspense fallback={<div className="h-40 glass-panel rounded-xl animate-pulse" />}>
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} {...experience} index={index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

