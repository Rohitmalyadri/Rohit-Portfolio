import { Button } from '@/components/ui/button';
import { RotatingText } from '@/components/RotatingText';
import { RohitPhoto, ResumePDF } from '@/assets/assets';
import { trackResumeDownload } from '@/lib/analytics';

export const HeroSection = ({ onScrollToProjects }) => {
  return (
    <section
      id="hero"
      aria-label="Introduction and Overview"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20"
    >
      {/* Ambient glowing background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Rohit Malyadri
            </h1>
            <div className="text-2xl md:text-3xl font-semibold mb-6 flex items-center justify-center lg:justify-start gap-2 text-foreground/90">
              <RotatingText
                messages={[
                  "AI + Full Stack Developer",
                  "Building Scalable Real-World Applications",
                  "AI/ML Enthusiast",
                  "MERN Stack Developer",
                  "Problem Solver & DSA Practitioner",
                  "Innovative mindset",
                  "Exploring System Design & Cloud",
                  "Driven to Build Impactful Tech Solutions"
                ]}
              />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Designing and developing intelligent, scalable systems that turn real-world challenges into impactful solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="px-8 py-6 rounded-full shadow-glow hover:shadow-anti-gravity transition-all duration-300 text-base"
                onClick={onScrollToProjects}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 rounded-full glass-panel hover:bg-primary/10 transition-all duration-300 text-base" 
                asChild
              >
                <a
                  href={ResumePDF}
                  download="Rohit_Malyadri_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackResumeDownload()}
                  aria-label="Download Rohit Malyadri's Resume (PDF)"
                >
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative animate-float-slow">
              <div className="w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden shadow-anti-gravity dark:shadow-anti-gravity-dark ring-4 ring-white/60 dark:ring-white/10 glass-panel transition-all duration-500 hover:shadow-glow hover:-translate-y-2">
                <img 
                  src={RohitPhoto}
                  alt="Rohit Malyadri - AI Engineer and Software Developer"
                  width="320"
                  height="400"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-float-delayed blur-xl pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-40 animate-float blur-xl pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

