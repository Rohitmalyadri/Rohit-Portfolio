import { Link } from "lucide-react";

const platforms = [
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/klu2300031803",
    icon: "/lovable-uploads/codechef.svg",
    fallbackIcon: <span className="font-semibold text-sm text-orange-600">CC</span>,
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/h2300031803",
    icon: "/lovable-uploads/hackerrank.svg",
    fallbackIcon: <span className="font-semibold text-sm text-green-600">HR</span>,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/klu2300031803/",
    icon: "/lovable-uploads/leetcode.svg",
    fallbackIcon: <span className="font-semibold text-sm text-yellow-500">LC</span>,
  },
];

export const CodingHandles = ({ className = "" }) => (
  <div className={`flex flex-wrap gap-4 mt-2 justify-center ${className}`}>
    {platforms.map((p) => (
      <a
        key={p.url}
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={p.name}
        className="flex items-center gap-2 bg-background hover:bg-muted p-2 px-4 rounded-lg text-sm font-medium transition-colors shadow-sm border group"
      >
        {p.icon ? (
          <img
            src={p.icon}
            alt={p.name}
            className="w-5 h-5 object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : (
          p.fallbackIcon
        )}
        <span>{p.name}</span>
        <Link className="w-3.5 h-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
      </a>
    ))}
  </div>
);