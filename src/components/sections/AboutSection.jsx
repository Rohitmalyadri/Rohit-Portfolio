import { Card, CardContent } from '@/components/ui/card';
import { PROFILE } from '@/data/profileData';

export const AboutSection = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background orb for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-[120px] -z-10 pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-lg text-muted-foreground text-center mb-10 leading-relaxed space-y-4">
            <p>
              I am an <strong className="text-foreground font-semibold">AI Engineer Intern at {PROFILE.company}</strong> and a <strong className="text-foreground font-semibold">{PROFILE.academic.status}</strong> at {PROFILE.academic.institution} (Batch {PROFILE.academic.batch}, graduating in {PROFILE.academic.graduationYear}).
            </p>
            <p>
              My engineering focus centers on building production-ready AI-powered applications, intelligent agentic workflows, Retrieval-Augmented Generation (RAG) architectures, and resilient full-stack systems. Rather than viewing AI in isolation, I bridge the gap between machine learning models and robust software engineering using FastAPI, Spring Boot, React, and modern databases.
            </p>
            <p>
              Whether engineering scalable REST APIs, fine-tuning retrieval pipelines, or designing high-performance interfaces, I prioritize maintainable architectures, clean code principles, and measurable business impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="text-center p-6 glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/30">
              <CardContent className="p-0">
                <div className="text-4xl mb-4 animate-float" aria-hidden="true">🎓</div>
                <h3 className="font-semibold mb-2 text-foreground">Education</h3>
                <p className="text-sm text-muted-foreground">
                  {PROFILE.academic.degree} ({PROFILE.academic.specialization})<br />
                  <span className="font-medium text-foreground/80">{PROFILE.academic.institution}</span> ({PROFILE.academic.batch})<br />
                  <span className="text-xs text-primary font-medium">{PROFILE.academic.status} </span>
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/30" style={{ transitionDelay: '100ms' }}>
              <CardContent className="p-0">
                <div className="text-4xl mb-4 animate-float-delayed" aria-hidden="true">🚀</div>
                <h3 className="font-semibold mb-2 text-foreground">Engineering Direction</h3>
                <p className="text-sm text-muted-foreground">
                  Architecting intelligent AI/ML solutions, agentic workflows, and scalable full-stack platforms that solve complex real-world challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
