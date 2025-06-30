import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Rocket } from 'lucide-react';

export const ProjectCard = ({ title, description, techStack, githubUrl, liveUrl }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Rocket className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};