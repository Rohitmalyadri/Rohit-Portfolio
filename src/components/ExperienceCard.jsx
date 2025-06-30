import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const ExperienceCard = ({ title, description, icon, date }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="text-3xl">{icon}</div>
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