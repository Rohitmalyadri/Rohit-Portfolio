import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';
import { trackMediumClick } from '@/lib/analytics';

export const BlogCard = ({ title, description, link, pubDate }) => {
  // Format date nicely
  const formattedDate = new Date(pubDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  // Strip HTML from description if it's coming from RSS feed
  const stripHtml = (html) => {
    if (!html) return "";
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const cleanDescription = stripHtml(description);
  const shortDescription = cleanDescription.length > 120 ? cleanDescription.substring(0, 120) + '...' : cleanDescription;

  return (
    <Card className="glass-panel group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/40 flex flex-col h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative z-10 flex-grow pt-8">
        <div className="flex items-center text-xs text-muted-foreground mb-3 font-medium">
          <Calendar className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
          <time dateTime={new Date(pubDate).toISOString()}>{formattedDate}</time>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed mt-4 line-clamp-3">
          {shortDescription}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-0 pb-6 mt-auto">
        <Button variant="ghost" className="w-full justify-start px-0 text-primary hover:text-primary hover:bg-transparent group-hover:translate-x-1 transition-transform" asChild>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMediumClick(title)}
            aria-label={`Read article: ${title}`}
          >
            Read Article
            <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
