import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { SocialLinks } from '@/components/SocialLinks';
import { Mail, User, MessageSquare, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { validateContactForm, submitContactForm } from '@/services/contactService';
import { trackContactSubmit } from '@/lib/analytics';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    _gotcha: '' // Honeypot field for bot spam trapping
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});

    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setFieldErrors(validation.errors);
      const firstError = Object.values(validation.errors)[0];
      toast({
        title: "Validation Error",
        description: firstError,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await submitContactForm(formData);

    if (result.ok) {
      // Track successful submission in GA4 (zero PII sent)
      trackContactSubmit();
      setSubmitStatus('success');
      setFormData({ name: '', email: '', feedback: '', _gotcha: '' });
      toast({
        title: "Message Sent! 🚀",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setTimeout(() => setSubmitStatus(null), 6000);
    } else {
      toast({
        title: "Submission Error",
        description: result.error || "Something went wrong. Please try again or email directly.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gradient leading-tight">
            Let's Build Something Impactful Together
          </h2>
          <p className="text-base md:text-lg text-muted-foreground w-full max-w-2xl mx-auto">
            Have an idea, opportunity, or feedback? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto px-2 sm:px-0">
          {/* Contact Info Card */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl md:rounded-3xl shadow-anti-gravity dark:shadow-anti-gravity-dark hover:shadow-glow transition-all duration-500 relative overflow-hidden group h-full">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Contact Information</h3>
              <div className="space-y-6 flex-grow">
                {/* Personal Email */}
                <a
                  href="mailto:rohitmalyadri19@gmail.com"
                  aria-label="Send email to personal address rohitmalyadri19@gmail.com"
                  className="flex items-center gap-4 group/link"
                >
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center shrink-0 group-hover/link:scale-110 group-hover/link:bg-blue-500/20 transition-all duration-300">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Personal</div>
                    <div className="text-sm sm:text-base font-semibold group-hover/link:text-blue-500 transition-colors truncate">
                      rohitmalyadri19@gmail.com
                    </div>
                  </div>
                </a>

                {/* College Email */}
                <a
                  href="mailto:2300031803cseh1@gmail.com"
                  aria-label="Send email to academic address 2300031803cseh1@gmail.com"
                  className="flex items-center gap-4 group/link"
                >
                  <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center shrink-0 group-hover/link:scale-110 group-hover/link:bg-green-500/20 transition-all duration-300">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Academic</div>
                    <div className="text-sm sm:text-base font-semibold group-hover/link:text-green-500 transition-colors truncate">
                      2300031803cseh1@gmail.com
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-border/50">
                <div className="text-sm font-medium text-muted-foreground mb-4">Connect with me</div>
                <SocialLinks iconSize={24} className="gap-4 flex-wrap" />
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-3">
            <Card className="glass-panel p-6 sm:p-10 shadow-anti-gravity dark:shadow-anti-gravity-dark border-primary/20 hover:border-primary/40 transition-colors duration-500 rounded-2xl md:rounded-3xl relative overflow-hidden h-full">
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
              <CardContent className="p-0 relative z-10 h-full flex flex-col justify-center">
                {submitStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 animate-scale-in text-center h-full">
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-glow">
                      <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3">Message Sent! 🚀</h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-8">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button 
                      variant="outline" 
                      className="rounded-full glass-panel px-8" 
                      onClick={() => setSubmitStatus(null)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6 text-left animate-fade-in flex flex-col h-full justify-between">
                    {/* Invisible anti-spam honeypot field */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="_gotcha">Leave this field blank</label>
                      <input
                        type="text"
                        id="_gotcha"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData._gotcha}
                        onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="contact-name" className="text-foreground/80 font-medium ml-1 text-sm sm:text-base">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 sm:top-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300 pointer-events-none" aria-hidden="true" />
                        <Input
                          id="contact-name"
                          name="name"
                          placeholder="Your Name"
                          required
                          aria-required="true"
                          aria-invalid={!!fieldErrors.name}
                          className={`pl-12 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-background/50 border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 shadow-sm text-sm sm:text-base ${
                            fieldErrors.name ? 'border-destructive' : ''
                          }`}
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: null });
                          }}
                        />
                      </div>
                      {fieldErrors.name && (
                        <p className="text-xs text-destructive ml-2" role="alert">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="contact-email" className="text-foreground/80 font-medium ml-1 text-sm sm:text-base">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 sm:top-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300 pointer-events-none" aria-hidden="true" />
                        <Input
                          type="email"
                          id="contact-email"
                          name="email"
                          placeholder="your.email@example.com"
                          required
                          aria-required="true"
                          aria-invalid={!!fieldErrors.email}
                          className={`pl-12 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-background/50 border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 shadow-sm text-sm sm:text-base ${
                            fieldErrors.email ? 'border-destructive' : ''
                          }`}
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: null });
                          }}
                        />
                      </div>
                      {fieldErrors.email && (
                        <p className="text-xs text-destructive ml-2" role="alert">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2 group flex-grow">
                      <Label htmlFor="contact-feedback" className="text-foreground/80 font-medium ml-1 text-sm sm:text-base">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative h-[calc(100%-24px)]">
                        <MessageSquare className="absolute left-4 top-3.5 sm:top-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300 pointer-events-none" aria-hidden="true" />
                        <Textarea
                          id="contact-feedback"
                          name="feedback"
                          placeholder="I'd love to discuss..."
                          required
                          aria-required="true"
                          aria-invalid={!!fieldErrors.feedback}
                          className={`pl-12 min-h-[120px] sm:min-h-[150px] rounded-xl sm:rounded-2xl bg-background/50 border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 shadow-sm text-sm sm:text-base resize-y py-3.5 sm:py-4 h-full ${
                            fieldErrors.feedback ? 'border-destructive' : ''
                          }`}
                          value={formData.feedback}
                          onChange={(e) => {
                            setFormData({ ...formData, feedback: e.target.value });
                            if (fieldErrors.feedback) setFieldErrors({ ...fieldErrors, feedback: null });
                          }}
                        />
                      </div>
                      {fieldErrors.feedback && (
                        <p className="text-xs text-destructive ml-2" role="alert">{fieldErrors.feedback}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl shadow-glow hover:shadow-anti-gravity transition-all duration-300 text-sm sm:text-base font-semibold group relative overflow-hidden mt-4 shrink-0"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

