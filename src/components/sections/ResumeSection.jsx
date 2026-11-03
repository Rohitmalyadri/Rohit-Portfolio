import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, FileSignature, X } from 'lucide-react';
import { ResumePDF } from '@/assets/assets';
import { trackResumeDownload } from '@/lib/analytics';
import { PROFILE } from '@/data/profileData';

export const ResumeSection = () => {
  const [showCoverLetter, setShowCoverLetter] = useState(false);

  // Close cover letter modal on Escape
  useEffect(() => {
    if (!showCoverLetter) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setShowCoverLetter(false);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [showCoverLetter]);

  return (
    <section id="resume" aria-labelledby="resume-heading" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 id="resume-heading" className="text-3xl md:text-4xl font-bold text-center mb-16">Resume & Cover Letter</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 text-center glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/50">
            <CardContent className="p-0">
              <div className="flex justify-center gap-6 mb-8">
                <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center animate-float" aria-hidden="true">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center animate-float-delayed" aria-hidden="true">
                  <FileSignature className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Professional Documents</h3>
              <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
                Review my technical background, verified experience, and academic trajectory, or read my cover letter outlining my engineering approach.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 text-base rounded-full shadow-glow hover:shadow-anti-gravity transition-all duration-300"
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
                    <FileText className="w-5 h-5 mr-2" aria-hidden="true" />
                    Download Resume
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 text-base rounded-full glass-panel hover:bg-primary/10 transition-all duration-300"
                  onClick={() => setShowCoverLetter(true)}
                  aria-haspopup="dialog"
                  aria-expanded={showCoverLetter}
                >
                  <FileSignature className="w-5 h-5 mr-2" aria-hidden="true" />
                  View Cover Letter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Accessible Cover Letter Modal */}
      {showCoverLetter && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all animate-fade-in px-4"
          onClick={() => setShowCoverLetter(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cover-letter-title"
        >
          <div 
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel bg-white dark:bg-slate-900 rounded-2xl p-8 relative shadow-anti-gravity dark:shadow-anti-gravity-dark animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors bg-muted/50 hover:bg-muted p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setShowCoverLetter(false)}
              aria-label="Close cover letter modal"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
            <div className="mb-8">
              <h2 id="cover-letter-title" className="text-2xl font-bold mb-2">Cover Letter</h2>
              <p className="text-sm text-muted-foreground">To Hiring Manager & Engineering Leadership,</p>
            </div>
            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-foreground/80 leading-relaxed font-serif">
              <p>
                I am writing to express my strong interest in AI Engineer and Full-Stack Engineering roles within your organization. As a final-year Computer Science and Engineering student at {PROFILE.academic.institution} (Class of {PROFILE.academic.graduationYear}) and currently an AI Engineer Intern at {PROFILE.company}, I focus on engineering resilient software systems and production-ready AI applications.
              </p>
              <br />
              <p>
                My technical experience combines backend system architecture, modern frontend frameworks, and applied artificial intelligence. In my current internship at {PROFILE.company} and through projects like the Brand Guidance System (RAG-based compliance engine) and FreshMart, I have designed modular services in FastAPI and Spring Boot, developed dynamic interfaces in React, and architected retrieval pipelines with LangChain and vector databases.
              </p>
              <br />
              <p>
                Rather than treating AI as an isolated experiment, my priority is shipping robust, business-viable products. I focus on clean code structure, predictable latency, efficient caching with Redis, well-structured relational and document databases (PostgreSQL, MongoDB, Snowflake), and rigorous API contracts. My active involvement as a CIIE Core Member and participant in intensive hackathons like Guidewire DEVTrails and Byte Quest has further strengthened my rapid iteration and collaborative problem-solving capabilities.
              </p>
              <br />
              <p>
                I welcome the opportunity to discuss how my technical skills, engineering rigor, and applied AI capabilities can contribute directly to your team’s product goals and business challenges.
              </p>
              <br />
              <p>
                Thank you for your time, consideration, and leadership.
              </p>
              <br />
              <p className="mt-8 font-sans">
                Sincerely,<br />
                <strong>{PROFILE.name}</strong><br />
                <span className="text-xs text-muted-foreground">{PROFILE.headline}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
