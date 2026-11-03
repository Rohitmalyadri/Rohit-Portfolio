import { CodeChefLogo, LeetCodeLogo, HackerRankLogo } from '@/assets/assets';
import { trackCodingProfileClick } from '@/lib/analytics';

const codingPlatforms = [
  {
    name: 'CodeChef',
    handle: 'klu2300031803',
    url: 'https://www.codechef.com/users/klu2300031803',
    logo: CodeChefLogo,
    hoverBorder: 'hover:border-orange-500',
    hoverText: 'group-hover:text-orange-500',
  },
  {
    name: 'LeetCode',
    handle: 'klu2300031803',
    url: 'https://leetcode.com/u/klu2300031803/',
    logo: LeetCodeLogo,
    hoverBorder: 'hover:border-yellow-400',
    hoverText: 'group-hover:text-yellow-500',
  },
  {
    name: 'HackerRank',
    handle: '@h2300031803',
    url: 'https://www.hackerrank.com/profile/h2300031803',
    logo: HackerRankLogo,
    hoverBorder: 'hover:border-blue-500',
    hoverText: 'group-hover:text-blue-500',
  }
];

export const CodingProfilesSection = () => {
  return (
    <section id="coding-handles" aria-labelledby="coding-heading" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-[120px] -z-10 pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 id="coding-heading" className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
          <span>
            <svg className="inline-block w-8 h-8 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 18v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1" />
              <circle cx="12" cy="7" r="4" />
              <path d="M20 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
          </span>
          My Coding Platforms
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {codingPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCodingProfileClick(platform.name)}
                aria-label={`Visit Rohit's ${platform.name} profile`}
                className={`flex items-center gap-4 p-6 rounded-xl border bg-white dark:bg-slate-900 shadow hover:shadow-lg transition-all group ${platform.hoverBorder}`}
              >
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  width="40"
                  height="40"
                />
                <div>
                  <div className={`font-semibold text-lg transition ${platform.hoverText}`}>{platform.name}</div>
                  <div className="text-sm text-muted-foreground">{platform.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

