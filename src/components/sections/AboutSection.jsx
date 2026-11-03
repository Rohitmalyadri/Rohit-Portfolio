import { Card, CardContent } from '@/components/ui/card';

export const AboutSection = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background orb for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-[120px] -z-10 pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
            I’m a Computer Science student specializing in Artificial Intelligence, passionate about building scalable full-stack applications and intelligent systems. I enjoy solving real-world problems using technologies like MERN stack and modern AI/ML tools.
            With hands-on experience in developing practical projects and participating in innovation-driven activities like ideathons, I focus on writing clean, efficient code and continuously improving my problem-solving skills through DSA and system design.
            Currently, I’m working towards becoming a high-impact software engineer by combining strong engineering fundamentals with intelligent, real-world solutions. 
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="text-center p-6 glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/30">
              <CardContent className="p-0">
                <div className="text-4xl mb-4 animate-float" aria-hidden="true">📚</div>
                <h3 className="font-semibold mb-2 text-foreground">Education</h3>
                <p className="text-sm text-muted-foreground">Currently pursuing 3rd year B.Tech in CSE at KL University.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/30" style={{ transitionDelay: '100ms' }}>
              <CardContent className="p-0">
                <div className="text-4xl mb-4 animate-float-delayed" aria-hidden="true">🚀</div>
                <h3 className="font-semibold mb-2 text-foreground">Goal</h3>
                <p className="text-sm text-muted-foreground">Seeking structured opportunities to build scalable apps and apply AI/ML to challenging problems.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

