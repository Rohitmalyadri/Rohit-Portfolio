import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const ExperienceCard = ({ title, description, icon, date, index }) => {
  // Alternate left/right based on index for desktop view
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex sm:justify-between items-center w-full ${isLeft ? 'sm:flex-row-reverse' : ''} group`}>
      {/* Timeline Node */}
      <div className="hidden sm:flex absolute left-1/2 -ml-[24px] z-10 w-12 h-12 rounded-full border-4 border-background bg-primary/20 items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
        <span className="text-xl group-hover:animate-float">{icon}</span>
      </div>

      <div className="hidden sm:block sm:w-5/12"></div>
      
      <div className="w-full sm:w-5/12 pl-12 sm:pl-0 sm:pr-0">
        <Card className="glass-panel group/card transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
          
          <CardHeader className="relative z-10 p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl sm:hidden transform transition-transform duration-500 group-hover/card:scale-110 group-hover/card:-translate-y-1">{icon}</div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">{date}</span>
                <CardTitle className="text-xl mb-3 group-hover/card:text-primary transition-colors">{title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};