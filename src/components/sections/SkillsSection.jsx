import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skillsCategories } from '@/data/skillsData';

const getCategoryIcon = (iconType) => {
  switch (iconType) {
    case 'frontend':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'backend':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      );
    case 'ai':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'tools':
    default:
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
  }
};

const colorStyles = {
  blue: {
    iconBg: 'bg-blue-500/10 text-blue-500',
    hoverBorder: 'hover:border-blue-500/50',
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20'
  },
  green: {
    iconBg: 'bg-green-500/10 text-green-500',
    hoverBorder: 'hover:border-green-500/50',
    badge: 'bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20'
  },
  purple: {
    iconBg: 'bg-purple-500/10 text-purple-500',
    hoverBorder: 'hover:border-purple-500/50',
    badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20'
  },
  orange: {
    iconBg: 'bg-orange-500/10 text-orange-500',
    hoverBorder: 'hover:border-orange-500/50',
    badge: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20'
  }
};

export const SkillsSection = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 md:py-24 bg-muted/10 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-center mb-16">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillsCategories.map((cat, idx) => {
            const style = colorStyles[cat.color] || colorStyles.blue;
            return (
              <Card
                key={cat.title}
                className={`glass-panel p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity border-transparent ${style.hoverBorder}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CardHeader className="p-0 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${style.iconBg}`}>
                    {getCategoryIcon(cat.iconType)}
                  </div>
                  <CardTitle className="text-xl">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((tech) => (
                      <Badge key={tech} variant="secondary" className={style.badge}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

