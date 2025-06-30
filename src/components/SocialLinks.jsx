import { Linkedin, Github } from 'lucide-react';

const SOCIALS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rohit-malyadri-gadamsetty-20181a281/',
    icon: Linkedin,
    color: 'text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-700/20',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/rohitmalyadri',
    icon: Github,
    color: 'text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20',
  },
];

export const SocialLinks = ({ className = '', iconSize = 26 }) => {
  return (
    <div className={`flex flex-wrap gap-3 justify-center items-center ${className}`}>
      {/* eslint-disable-next-line no-unused-vars */}
      {SOCIALS.map(({ name, url, icon: Icon, color }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Connect on ${name}`}
          className={`rounded-full p-2 transition-all duration-150 shadow hover:shadow-lg focus:ring-2 focus:ring-primary hover:scale-110 bg-white dark:bg-background border border-muted/40 ${color}`}
        >
          <Icon className="block" size={iconSize} strokeWidth={2} />
        </a>
      ))}
    </div>
  );
};