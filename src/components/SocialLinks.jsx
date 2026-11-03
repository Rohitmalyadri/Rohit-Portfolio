import { Linkedin, Github } from 'lucide-react';
import { trackLinkedinClick, trackGithubClick } from '@/lib/analytics';

const SOCIALS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rohit-malyadri-gadamsetty-20181a281/',
    icon: Linkedin,
    color: 'text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-700/20',
    onClick: () => trackLinkedinClick(),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/rohitmalyadri',
    icon: Github,
    color: 'text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20',
    onClick: () => trackGithubClick('profile'),
  },
];

export const SocialLinks = ({ className = '', iconSize = 26 }) => {
  return (
    <div className={`flex flex-wrap gap-3 justify-center items-center ${className}`}>
      {SOCIALS.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={item.onClick}
            aria-label={`Connect with Rohit on ${item.name}`}
            className={`rounded-full p-2 transition-all duration-150 shadow hover:shadow-lg focus:ring-2 focus:ring-primary hover:scale-110 bg-white dark:bg-background border border-muted/40 ${item.color}`}
          >
            <IconComponent className="block" size={iconSize} strokeWidth={2} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
};
