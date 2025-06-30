import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, ZoomIn } from 'lucide-react';

export const CertificateCard = ({
  title,
  issuer,
  date,
  description,
  skills,
  certificateUrl,
  imageUrl,
  onImageClick,
}) => {
  return (
    <Card className="group card-hover border-2 border-transparent hover:border-primary/70 transition-all duration-200 overflow-hidden bg-white/90 dark:bg-slate-900/85 shadow-lg hover:shadow-2xl relative p-0">
      {imageUrl && (
        <button
          type="button"
          onClick={() => onImageClick && onImageClick(imageUrl, title)}
          className="block w-full focus:outline-none"
          tabIndex={0}
          aria-label={`View ${title} certificate fullscreen`}
        >
          <div className="relative h-52 overflow-hidden transition-shadow duration-300 group-hover:ring-2 group-hover:ring-primary/40">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {/* Zoom overlay */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-200">
              <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg" />
            </span>
          </div>
        </button>
      )}
      <CardHeader className="flex-row py-5 px-6 gap-4 items-start bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900/90">
        <div className="p-2 bg-primary/15 rounded-lg flex items-center justify-center">
          <Award className="w-7 h-7 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
            <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary">
              {title}
            </CardTitle>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">{date}</span>
          </div>
          <p className="text-sm font-semibold text-primary mb-1">{issuer}</p>
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-4 pb-6 px-6">
        <div className="space-y-2">
          <div>
            <p className="text-xs font-semibold uppercase mb-1 text-muted-foreground">Skills / Tech:</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs px-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          {certificateUrl && (
            <Button
              asChild
              size="sm"
              className="w-full mt-5 group-hover:scale-105 transition-transform shadow"
              variant="outline"
            >
              <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Original Certificate
              </a>
            </Button>
          )}
        </div>
      </CardContent>
      <div className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-blue-400/40 via-purple-500/30 to-indigo-500/40 rounded-t group-hover:h-1.5 transition-all duration-200" />
    </Card>
  );
};
