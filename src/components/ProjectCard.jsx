import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Rocket } from 'lucide-react';

export const ProjectCard = ({ title, description, techStack, githubUrl, liveUrl, isFeatured }) => {
  return (
    <Card className={`glass-panel group relative overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/40 ${isFeatured ? 'flex flex-col md:flex-row' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Optional Featured Image/Preview block */}
      {isFeatured && (
        <div className="md:w-1/2 p-6 flex flex-col justify-center bg-muted/30 dark:bg-slate-800/30 border-b md:border-b-0 md:border-r border-border/50">
           <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden group-hover:shadow-glow transition-all">
             <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
             <Rocket className="w-16 h-16 text-primary/50 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
           </div>
        </div>
      )}

      <div className={isFeatured ? "md:w-1/2 flex flex-col justify-center p-2" : ""}>
        <CardHeader className="relative z-10">
          {isFeatured && <Badge className="w-fit mb-2 bg-gradient-to-r from-blue-600 to-purple-600 border-0">Featured Project</Badge>}
          <CardTitle className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} group-hover:text-primary transition-colors duration-300`}>{title}</CardTitle>
          <CardDescription className="text-sm md:text-base leading-relaxed mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4 pt-2">
              {liveUrl && liveUrl !== "#" && (
                <Button size={isFeatured ? "default" : "sm"} asChild className="rounded-full shadow-md hover:shadow-glow">
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <Rocket className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {githubUrl && (
                <Button variant="outline" size={isFeatured ? "default" : "sm"} asChild className="rounded-full glass-panel">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};