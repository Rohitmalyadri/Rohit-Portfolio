import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ProjectCard } from '@/components/ProjectCard';
import { ExperienceCard } from '@/components/ExperienceCard';
import { CertificateCard } from '@/components/CertificateCard';
import { Navbar } from '@/components/Navbar';
import { Mail, User, Book, Rocket, Github, Code } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';
import { CodingHandles } from '@/components/CodingHandles';
import { RotatingText } from '@/components/RotatingText';
import {
  RohitPhoto,
  LinguaSkill,
  NPTELJava,
  WinterSchool,
  JavaInternship,
  IITH,
  Deloitte,
  ResumePDF,
  CodeChefLogo,
  LeetCodeLogo,
  HackerRankLogo
} from '@/assets/assets';



const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('about');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal state for certificate fullscreen view
  const [modalImage, setModalImage] = useState(null);

  // Close modal on escape
  useEffect(() => {
    if (!modalImage) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setModalImage(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalImage]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'certificates', 'resume', 'coding-handles', 'feedback', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "❌ Validation Error",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email.trim()) {
      toast({
        title: "❌ Validation Error", 
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "❌ Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.message.trim()) {
      toast({
        title: "❌ Validation Error",
        description: "Please enter a message.",
        variant: "destructive"
      });
      return;
    }

    if (formData.message.trim().length < 20) {
      toast({
        title: "❌ Message Too Short",
        description: "Message must be at least 20 characters long.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto URL with pre-filled content
      const subject = encodeURIComponent(`Portfolio Feedback from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from portfolio website`
      );
      const mailtoUrl = `mailto:rohitmalyadri19@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoUrl;
      
      // Simulate sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "✅ Email Client Opened!",
        description: "Your default email client should now be open with the pre-filled message. Please send it from there."
      });
      
      // Clear form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error opening email client:', error);
      toast({
        title: "❌ Something went wrong",
        description: "Please try copying the email address manually: rohitmalyadri19@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const projects = [
    {
      title: "Marvel",
      description: "A project based on Marvel superheroes, built with core web technologies.",
      techStack: ["HTML", "CSS"],
      githubUrl: "https://github.com/Rohitmalyadri/Marvel.git",
    },
    {
      title: "Hospital Management System",
      description: "A full-stack web app for managing doctors, patients, appointments. Built with React and Spring Boot.",
      techStack: ["React", "Spring Boot", "MySQL"],
      githubUrl: "https://github.com/Rohitmalyadri/HealthBridgeHospitals.git",
      liveUrl: "#"
    }, 
    {
      title: "FlipClock Pomodoro & Stopwatch",
      description: "A timer app with productivity tracking. TailwindCSS + React FlipClock.",
      techStack: ["React", "TailwindCSS"],
      githubUrl: "https://github.com/Rohitmalyadri/FlipClock.git",
      liveUrl: "https://RohitMalyadri.github.io/FlipClock/"
    }
  ];

  const experiences = [
    {
      title: "CIIE Core Member",
      description: "Led innovation event for 1st-year students, coordinated workshops and mentored teams on entrepreneurial projects.",
      icon: "🏫",
      date: "2023-Present"
    },
    {
      title: "IIT Jodhpur – Winter School on Generative AI",
      description: "Completed intensive program on AI/ML fundamentals and practical applications of generative AI technologies.",
      icon: "🧠",
      date: "December 2024"
    },
    {
      title: "IIT Hyderabad Workshop",
      description: "Completed 3-day Entrepreneurial Essentials Program focusing on startup fundamentals and business development.",
      icon: "🎓",
      date: "May 2025"
    },
    {
      title: "Java Full Stack Developer virtual Internship",
      description: "Completed a 10 weeks internship program where I gained hands-on experience in HTML, CSS, JavaScriptJava, Spring Boot, MySQL etc. I also learned about the latest trends in the industry and how to apply them in real-world projects.",
      icon: "💻",
      date: "April 2025 - June 2025"
    },
    {
      title: "Deloitte Australia Technology Completion Certificate",
      description: "Completed a virtual job simulation replicating real-world consulting scenarios by developing solutions and authoring a dashboard proposal addressing technical specifications, stakeholder needs, and user experience.",
      icon: "💻",
      date: "June 2025"
    }
  ];

  const certificates = [
    {
      title: "LinguaSkill Certification",
      issuer: "LinguaSkill",
      date: "Jun 2024",
      description: "Completed the Linguaskill English language assessment by Cambridge, covering reading, listening, writing, and speaking. The test evaluates real-world communication skills and aligns with international CEFR standards, supporting academic and professional language competence.",
      skills: ["Reading", "Listening", "Writing", "Speaking"],
      imageUrl: LinguaSkill
    },
    {
      title: "NPTEL Programming in Java",
      issuer: "Swayam",
      date: "Jul - Oct 2024",
      description: "Completed an 8-week course offered by IIT under the NPTEL platform, covering core Java concepts including object-oriented programming, exception handling, multithreading, Java collections, and GUI development. Gained hands-on experience through assignments and a proctored final exam.",
      skills: ["Core Java", "OOPs", "GUI"],
      imageUrl: NPTELJava
    },
    {
      title: "Winter School on Generative AI",
      issuer: "IIT Jodhpur",
      date: "Dec 2024",
      description: "Completed intensive program covering AI/ML fundamentals, neural networks, and practical applications of generative AI technologies including GPT models and computer vision.",
      skills: ["Machine Learning", "Neural Networks", "Generative AI", "Python", "Deep Learning"],
      imageUrl: WinterSchool
    },
    {
      title: "Java Full Stack Virtual Internship",
      issuer: "Eduskills KL University",
      date: "Apr - Jun 2025",
      description: "10-week intensive internship program focused on full-stack web development, including hands-on experience with HTML, CSS, JavaScript, Java, Spring Boot, and MySQL. Gained practical insights into current industry trends and their application in real-world projects.",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "Java", "Spring Boot", "MySQL"],
      imageUrl: JavaInternship
    },
    {
      title: "Entrepreneurial Essentials Program",
      issuer: "IIT Hyderabad",
      date: "May 2025",
      description: "3-day intensive workshop focusing on startup fundamentals, business development, innovation management, and entrepreneurial mindset development.",
      skills: ["Entrepreneurship", "Business Development", "Innovation", "Leadership", "Strategic Planning", "Finance"],
      imageUrl: IITH
    },
    {
      title: "Deloitte Australia Technology Completion Certificate",
      issuer: "Forage",
      date: "Jun 2025",
      skills: ["Data Structures","Formal Communication","Planning","Programming","Python","Software Development Processes"],
      imageUrl: Deloitte
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onSectionClick={scrollToSection} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20">
        {/* Anti-gravity glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hi, I'm Rohit Malyadri
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                I am a{' '}
                <RotatingText
                  messages={[
                    'Java Developer',
                    'Aspiring Full Stack Developer',
                    'AI & ML Enthusiast',
                    'Problem Solver',
                    'Tech Explorer',
                    'Innovative and Design Thinking'
                  ]}
                  interval={2200}
                  className="inline-block"
                  highlightClassName="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                />
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
              <div className="relative animate-float-slow">
                <div className="w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden shadow-anti-gravity dark:shadow-anti-gravity-dark ring-4 ring-white/60 dark:ring-white/10 glass-panel transition-all duration-500 hover:shadow-glow hover:-translate-y-2">
                  <img 
                    src={RohitPhoto}
                    alt="Rohit Malyadri"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-float-delayed blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-40 animate-float blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        {/* Subtle background orb for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
            I'm a B.Tech Computer Science student with a strong passion for software development, artificial intelligence, and creating impactful digital solutions. I have hands-on experience in full-stack web development and problem-solving using data structures and algorithms. My technical toolkit includes React, TailwindCSS, Spring Boot, MySQL, Git which I've used to build real-world applications.
            <br />
            Driven by curiosity, I continuously explore emerging technologies and enjoy turning innovative ideas into functional solutions. I thrive in collaborative environments and am always eager to learn, contribute, and grow as a developer.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6 glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/30">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4 animate-float">📚</div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">Currently pursuing 3rd year B.Tech in Computer Science and Engineering at KL University.</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/30" style={{ transitionDelay: '100ms' }}>
                <CardContent className="p-0">
                  <div className="text-4xl mb-4 animate-float-delayed">💻</div>
                  <h3 className="font-semibold mb-2">Tech Stack</h3>
                  <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript, React, Spring Boot, MySQL, MongoDB, Git, GitHub, TailwindCSS, AWS</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/30" style={{ transitionDelay: '200ms' }}>
                <CardContent className="p-0">
                  <div className="text-4xl mb-4 animate-float-slow">🚀</div>
                  <h3 className="font-semibold mb-2">Status</h3>
                  <p className="text-sm text-muted-foreground">Actively looking for internships and Jobs in the field of Software Development, AI/ML, and Web Development.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Projects</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow delay-1000"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience & Activities</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/40 dark:to-indigo-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">🎓 Certificates & Achievements</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={index}
                {...certificate}
                // Ensure 'description' is always present to satisfy CertificateCardProps
                description={certificate.description ?? ""}
                onImageClick={(url, title) => setModalImage({ url, title })}
              />
            ))}
          </div>
        </div>
        {/* Modal for fullscreen image */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all animate-fade-in"
            onClick={() => setModalImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={modalImage.title}
          >
            <img
              src={modalImage.url}
              alt={modalImage.title}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white/20 object-contain transition-all"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-8 text-white text-3xl font-bold bg-black/40 rounded-full px-3 py-1 hover:bg-black/70 transition"
              onClick={() => setModalImage(null)}
              aria-label="Close fullscreen preview"
            >
              ×
            </button>
          </div>
        )}
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Resume</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/50">
              <CardContent className="p-0">
                <div className="text-6xl mb-6">📄</div>
                <h3 className="text-2xl font-semibold mb-4">Download My Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my skills, experience, and academic background.<br/>
                  <span className="text-xs text-slate-400">(Opens/downloads the actual file)</span>
                </p>
                <a
                  href={ResumePDF}
                  download="Rohit_Malyadri_Resume.pdf"  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="px-8 py-6 text-lg rounded-xl"
                  >
                    Download Resume
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground mt-4">
                  (Resume previewed as image. For PDF, reach out by email!)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding-handles" className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
            <span>
              <svg className="inline-block w-8 h-8 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 18v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1" />
                <circle cx="12" cy="7" r="4" />
                <path d="M20 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </span>
            My Coding Platforms
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Enhanced Coding Handles with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* CodeChef */}
              <a
                href="https://www.codechef.com/users/klu2300031803"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-xl border bg-white dark:bg-slate-900 shadow hover:shadow-lg transition-all group hover:border-orange-500"
              >
                <img src={CodeChefLogo} alt="CodeChef" className="w-10 h-10" />
                <div>
                  <div className="font-semibold text-lg group-hover:text-orange-500 transition">CodeChef</div>
                  <div className="text-sm text-muted-foreground">klu2300031803</div>
                </div>
              </a>
              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/klu2300031803/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-xl border bg-white dark:bg-slate-900 shadow hover:shadow-lg transition-all group hover:border-yellow-400"
              >
                <img src={LeetCodeLogo} alt="LeetCode" className="w-10 h-10" />
                <div>
                  <div className="font-semibold text-lg group-hover:text-yellow-500 transition">LeetCode</div>
                  <div className="text-sm text-muted-foreground">klu2300031803</div>
                </div>
              </a>
              {/* HackerRank */}
              <a
                href="https://www.hackerrank.com/profile/h2300031803"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-xl border bg-white dark:bg-slate-900 shadow hover:shadow-lg transition-all group hover:border-blue-500"
              >
                <img src={HackerRankLogo} alt="Codeforces" className="w-10 h-10" />
                <div>
                  <div className="font-semibold text-lg group-hover:text-blue-500 transition">HackerRank</div>
                  <div className="text-sm text-muted-foreground">@h2300031803</div>
                </div>
              </a>
              
              {/* Add more platforms as needed */}
            </div>
            {/* Optionally, keep the original component for fallback or dynamic handles */}
            {/* <CodingHandles /> */}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Send Feedback</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 glass-panel transform transition-all duration-500 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/50">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-2"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-2"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Share your feedback, suggestions, or just say hello..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={5}
                      className="mt-2 resize-none"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Opening Email Client...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Send Feedback
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    This will open your default email client with a pre-filled message to rohitmalyadri19@gmail.com
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/20 relative overflow-hidden">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">Get in Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex flex-col gap-7 justify-center items-center mb-10">
              {/* Personal Email */}
              <div className="flex items-center gap-3">
                <Mail className="inline w-7 h-7 align-bottom text-blue-300" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-semibold text-muted-foreground text-blue-300">Personal Email</span>
                  <a
                    href="mailto:rohitmalyadri19@gmail.com"
                    className="text-lg font-medium hover:text-blue-300 transition-colors "
                  >
                    rohitmalyadri19@gmail.com
                  </a>
                </div>
              </div>
              {/* College Email */}
              <div className="flex items-center gap-3">
                <Mail className="inline w-7 h-7 align-bottom text-green-300" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-semibold text-muted-foreground text-green-300">College Email</span>
                  <a
                    href="mailto:2300031803cseh1@gmail.com"
                    className="text-lg font-medium hover:text-green-300 transition-colors"
                  >
                    2300031803cseh1@gmail.com
                  </a>
                </div>
              </div>
              <SocialLinks className="mt-2" iconSize={28} />
            </div>
            <footer className="text-center text-muted-foreground border-t pt-8 mt-10">
              <p>© 2025 Rohit Malyadri. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

// NOTE: src/pages/Index.tsx is long. Consider refactoring it into smaller files and components for future improvements.
