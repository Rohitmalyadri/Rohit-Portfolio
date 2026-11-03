import { Suspense, lazy } from 'react';
import { Button } from '@/components/ui/button';
import { useMediumBlogs } from '@/hooks/useMediumBlogs';
import { trackMediumClick } from '@/lib/analytics';

const BlogCard = lazy(() => import('@/components/BlogCard').then(m => ({ default: m.BlogCard })));

export const BlogsSection = () => {
  const { blogs, loading } = useMediumBlogs(3);

  return (
    <section id="blogs" aria-labelledby="blogs-heading" className="py-16 md:py-24 bg-muted/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-6 max-w-7xl mx-auto">
          <h2 id="blogs-heading" className="text-3xl md:text-4xl font-bold text-center sm:text-left">Articles & Insights</h2>
          <Button variant="outline" className="glass-panel" asChild>
            <a
              href="https://medium.com/@rohitmalyadri19"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMediumClick()}
              aria-label="View all blogs by Rohit Malyadri on Medium"
            >
              View All Blogs
            </a>
          </Button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[250px] glass-panel rounded-xl animate-pulse" />
            ))}
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Suspense fallback={<div className="h-[250px] glass-panel rounded-xl animate-pulse" />}>
              {blogs.map((blog, index) => (
                <BlogCard key={blog.guid || index} {...blog} />
              ))}
            </Suspense>
          </div>
        ) : (
          <div className="text-center text-muted-foreground p-8 glass-panel rounded-xl max-w-2xl mx-auto">
            <p className="mb-4">Check out my Medium profile for my latest writing, deep-dives, and AI insights.</p>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://medium.com/@rohitmalyadri19"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMediumClick()}
              >
                Explore Medium Articles
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

