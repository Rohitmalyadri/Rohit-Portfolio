import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const ExperienceCard = ({ title, description, icon, date }) => {
  return (
    <Card className="glass-panel group transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent border-l-4 border-l-primary/50 hover:border-l-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="text-3xl transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">{icon}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <CardTitle className="text-lg">{title}</CardTitle>
              <span className="text-sm text-muted-foreground font-medium">{date}</span>
            </div>
            <CardDescription className="mt-2 leading-relaxed">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};