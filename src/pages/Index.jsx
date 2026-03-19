import { useState, useEffect, Suspense, lazy } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Navbar } from '@/components/Navbar';
import { Mail, User, Book, Rocket, Github, Code, FileText, FileSignature, X, MessageSquare, Send, Loader2, CheckCircle2 } from 'lucide-react';

const ProjectCard = lazy(() => import('@/components/ProjectCard').then(m => ({ default: m.ProjectCard })));
const ExperienceCard = lazy(() => import('@/components/ExperienceCard').then(m => ({ default: m.ExperienceCard })));
const CertificateCard = lazy(() => import('@/components/CertificateCard').then(m => ({ default: m.CertificateCard })));
const BlogCard = lazy(() => import('@/components/BlogCard').then(m => ({ default: m.BlogCard })));
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
  HackerRankLogo,
  neo4j,
  OCI_AI,
  OCI_DevOps
} from '@/assets/assets';



const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('about');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Modal state for certificate fullscreen view and cover letter
  const [modalImage, setModalImage] = useState(null);
  const [showCoverLetter, setShowCoverLetter] = useState(false);

  // Blogs state
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  // Fetch Medium Blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rohitmalyadri19');
        const data = await response.json();
        if (data.status === 'ok') {
          setBlogs(data.items.slice(0, 3)); // show top 3
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoadingBlogs(false);
      }
    };
    fetchBlogs();
  }, []);

  // Close modal on escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setModalImage(null);
        setShowCoverLetter(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalImage, showCoverLetter]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'blogs', 'experience', 'certificates', 'resume', 'coding-handles', 'contact'];
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

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("https://formspree.io/f/mqaeerll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", feedback: "" });
        toast({
          title: "Feedback Sent! 🚀",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
    title: "FreshMart (Online Grocery App)",
    description: "Built a scalable online grocery platform with product listings, authentication, and real-time updates using Firebase, enhancing user shopping experience.",
    techStack: ["MERN Stack", "Gen AI", "Redis"],
    githubUrl: "https://github.com/Rohitmalyadri/FreshMart.git"
  },
  {
    title: "Brand Guidance System (RAG-based)",
    description: "Developing an AI-powered system using Retrieval-Augmented Generation to analyze YouTube video content and guide brands on compliance with policies and standards.",
    techStack: ["Python", "RAG", "LangChain", "LLMs", "React"],
    githubUrl: "https://github.com/Rohitmalyadri/Brand_Guardian.git"
  },
  {
    title: "Crop Prediction ML Web App",
    description: "Created a machine learning-based web application using Flask and Random Forest to predict optimal crops based on soil and environmental parameters with ~98% accuracy.",
    techStack: ["Python", "Flask", "ML", "Random Forest"],
    githubUrl: "https://github.com/Rohitmalyadri/Crop_Predictions.git"
  },
   {
    title: "Hospital Management System",
    description: "Developed a full-stack healthcare platform to manage patients, doctors, and appointments with role-based access, improving workflow efficiency and data handling.",
    techStack: ["React", "Spring Boot", "MySQL"],
    githubUrl: "https://github.com/Rohitmalyadri/HealthBridgeHospitals.git"
  },
  {
    title: "FlipClock Pomodoro & Stopwatch",
    description: "Designed a productivity-focused timer application with Pomodoro and stopwatch features, featuring a modern UI built with React and Tailwind CSS.",
    techStack: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/Rohitmalyadri/FlipClock.git",
    liveUrl: "https://RohitMalyadri.github.io/FlipClock/"
  },
  {
    title: "Marvel Web Project",
    description: "Developed a responsive web project showcasing Marvel superheroes using core web technologies, focusing on UI design and layout structuring.",
    techStack: ["HTML", "CSS"],
    githubUrl: "https://github.com/Rohitmalyadri/Marvel.git"
  }
];
 const experiences = [
  {
    title: "CIIE Core Member (Innovation Cell)",
    description: "Actively contributed to organizing innovation-driven events and ideathons, mentoring peers on entrepreneurial thinking, problem-solving, and early-stage startup ideas.",
    icon: "🏫",
    date: "2023 – Present"
  },
  {
    title: "IIT Jodhpur – Winter School on Generative AI",
    description: "Completed an intensive program covering AI/ML fundamentals and practical applications of generative AI, focusing on real-world problem-solving approaches.",
    icon: "🧠",
    date: "December 2024"
  },
  {
    title: "Java Full Stack Developer Internship",
    description: "Completed a 10-week virtual internship gaining hands-on experience in building full-stack applications using HTML, CSS, JavaScript, Java, Spring Boot, and MySQL, along with exposure to industry practices.",
    icon: "💻",
    date: "Apr 2025 – Jun 2025"
  },
  {
    title: "IIT Hyderabad – Entrepreneurial Essentials Workshop",
    description: "Participated in a 3-day program focused on startup fundamentals, business models, and entrepreneurial thinking.",
    icon: "🎓",
    date: "May 2025"
  },
  {
    title: "Deloitte Australia – Technology Job Simulation",
    description: "Completed a virtual consulting simulation involving solution development and dashboard proposal creation, focusing on technical requirements, stakeholder needs, and user experience.",
    icon: "📊",
    date: "June 2025"
  },
  {
    title: "Calibo AI Academy – Trainee",
    description: "Selected for Calibo AI Academy, undergoing industry-oriented training with mentorship from professionals. Gaining hands-on experience in solving real-world problems, working on case studies, and developing a product-driven mindset.",
    icon: "🤖",
    date: "Dec 2025 – Present"
  },
  {
    title: "Byte Quest Hackathon – AI Vibe Coding Challenge",
    description: "Participated in a 24-hour hackathon where our team built an AI-powered medical assistant to help doctors analyze patient data and generate insights using a Random Forest model, React, and FastAPI.",
    icon: "🚀",
    date: "Jan 4–5, 2026"
  },
  {
    title: "Guidewire DEVTrails Hackathon 2026",
    description: "Currently participating in a 45-day intensive hackathon focused on solving real-world industry problems, collaborating in teams, and building impactful solutions.",
    icon: "⚡",
    date: "Feb 2026 – Present"
  },
  {
    title: "ISB I-Venture Program Participant",
    description: "Selected to attend ISB I-Venture, engaging in panel discussions and networking with professionals across industries on innovation, entrepreneurship, and the future of Indian startups.",
    icon: "🏢",
    date: "Mar 5–6, 2026"
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
    },
    {
      title: "Neo4j Certified Professional",
      issuer: "Neo4j",
      date: "Jun 2025",
      skills: ["Graph Databases","Cypher Query Language","Neo4j"],
      imageUrl: neo4j
    },
    {
      title: "Oracle Cloud Infrastructure Certified Gen AI Professional",
      issuer: "Oracle",
      date: "Oct 2025",
      skills: ["OCI","Gen AI"],
      imageUrl: OCI_AI
    },
    {
      title: "Oracle Cloud Infrastructure Certified DevOps Professional",
      issuer: "Oracle",
      date: "Oct 2025",
      skills: ["OCI","DevOps"],
      imageUrl: OCI_DevOps
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hi, I'm Rohit Malyadri
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center justify-center lg:justify-start gap-2 text-foreground/90">
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
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
               Designing and developing intelligent, scalable systems that turn real-world challenges into impactful solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="px-8 py-6 rounded-full shadow-glow hover:shadow-anti-gravity transition-all duration-300 text-base"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 rounded-full glass-panel hover:bg-primary/10 transition-all duration-300 text-base" 
                  asChild
                >
                  <a href={ResumePDF} download="Rohit_Malyadri_Resume.pdf" target="_blank" rel="noopener noreferrer">
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
      <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* Subtle background orb for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
           I’m a Computer Science student specializing in Artificial Intelligence, passionate about building scalable full-stack applications and intelligent systems. I enjoy solving real-world problems using technologies like MERN stack and modern AI/ML tools.
With hands-on experience in developing practical projects and participating in innovation-driven activities like ideathons, I focus on writing clean, efficient code and continuously improving my problem-solving skills through DSA and system design.
Currently, I’m working towards becoming a high-impact software engineer by combining strong engineering fundamentals with intelligent, real-world solutions. 
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="text-center p-6 glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/30">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4 animate-float">📚</div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">Currently pursuing 3rd year B.Tech in CSE at KL University.</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/30" style={{ transitionDelay: '100ms' }}>
                <CardContent className="p-0">
                  <div className="text-4xl mb-4 animate-float-delayed">🚀</div>
                  <h3 className="font-semibold mb-2">Goal</h3>
                  <p className="text-sm text-muted-foreground">Seeking structured opportunities to build scalable apps and apply AI/ML to challenging problems.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-muted/10 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="glass-panel p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity border-transparent hover:border-blue-500/50">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <CardTitle className="text-xl">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  {["React", "HTML5", "CSS3", "JavaScript", "TailwindCSS"].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="glass-panel p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity border-transparent hover:border-green-500/50" style={{ transitionDelay: '100ms' }}>
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 text-green-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                </div>
                <CardTitle className="text-xl">Backend</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "MySQL", "MongoDB", "REST APIs"].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="glass-panel p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity border-transparent hover:border-purple-500/50" style={{ transitionDelay: '200ms' }}>
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 text-purple-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <CardTitle className="text-xl">AI / ML</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  {["Python", "Machine Learning", "Neural Networks", "Generative AI"].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="glass-panel p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity border-transparent hover:border-orange-500/50" style={{ transitionDelay: '300ms' }}>
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 text-orange-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <CardTitle className="text-xl">Tools</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "AWS", "VS Code", "Postman", "PyCharm"].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Suspense fallback={<div className="md:col-span-2 lg:col-span-3 h-80 glass-panel rounded-xl animate-pulse"></div>}>
              {/* Featured Project */}
              {projects.length > 0 && (
                <div className="md:col-span-2 lg:col-span-3">
                  <ProjectCard {...projects[0]} isFeatured={true} />
                </div>
              )}
              {/* Standard Projects */}
              {projects.slice(1).map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      {/* Tech Blogs Section */}
      <section id="blogs" className="py-16 md:py-24 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-6 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center sm:text-left">Articles & Insights</h2>
            <Button variant="outline" className="glass-panel" asChild>
              <a href="https://medium.com/@rohitmalyadri19" target="_blank" rel="noopener noreferrer">
                View All Blogs
              </a>
            </Button>
          </div>
          
          {loadingBlogs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-[250px] glass-panel rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <Suspense fallback={<div className="h-[250px] glass-panel rounded-xl animate-pulse"></div>}>
                {blogs.map((blog, index) => (
                  <BlogCard key={index} {...blog} />
                ))}
              </Suspense>
            </div>
          ) : (
            <div className="text-center text-muted-foreground p-8 glass-panel rounded-xl max-w-2xl mx-auto">
              <p>Check out my Medium profile for my latest writing and insights.</p>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow delay-1000"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience & Activities</h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline vertical line */}
            <div className="absolute left-[38px] md:left-[50%] top-4 bottom-4 w-1 bg-border rounded-full hidden sm:block"></div>
            <div className="space-y-12">
              <Suspense fallback={<div className="h-40 glass-panel rounded-xl animate-pulse"></div>}>
                {experiences.map((experience, index) => (
                  <ExperienceCard key={index} {...experience} index={index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/40 dark:to-indigo-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">🎓 Certificates & Achievements</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <Suspense fallback={<div className="h-96 glass-panel rounded-xl animate-pulse"></div>}>
              {certificates.map((certificate, index) => (
                <CertificateCard
                  key={index}
                  {...certificate}
                  description={certificate.description ?? ""}
                  onImageClick={(url, title) => setModalImage({ url, title })}
                />
              ))}
            </Suspense>
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

      {/* Resume & Cover Letter Section */}
      <section id="resume" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Resume & Cover Letter</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 text-center glass-panel transform transition-all duration-500 hover:-translate-y-2 hover:shadow-anti-gravity dark:hover:shadow-anti-gravity-dark border-transparent hover:border-primary/50">
              <CardContent className="p-0">
                <div className="flex justify-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center animate-float">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div className="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center animate-float-delayed">
                    <FileSignature className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Professional Documents</h3>
                <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
                  Get a detailed overview of my skills, experience, and academic background, or read my cover letter to understand my drive and passion.
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
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto px-8 py-6 text-base rounded-full glass-panel hover:bg-primary/10 transition-all duration-300"
                    onClick={() => setShowCoverLetter(true)}
                  >
                    <FileSignature className="w-5 h-5 mr-2" />
                    View Cover Letter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cover Letter Modal */}
      {showCoverLetter && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all animate-fade-in px-4"
          onClick={() => setShowCoverLetter(false)}
        >
          <div 
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel bg-white dark:bg-slate-900 rounded-2xl p-8 relative shadow-anti-gravity dark:shadow-anti-gravity-dark animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors bg-muted/50 hover:bg-muted p-2 rounded-full"
              onClick={() => setShowCoverLetter(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Cover Letter</h2>
              <p className="text-sm text-muted-foreground">To Hiring Manager,</p>
            </div>
            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-foreground/80 leading-relaxed font-serif">
              <p>
                I am writing to express my strong interest in joining your team as a Software Developer. As a dedicated Bachelor of Technology student specializing in Computer Science and Engineering, I have consistently pursued opportunities that challenge me to apply theoretical knowledge to practical, real-world problems.
              </p>
              <br/>
              <p>
                Throughout my academic journey and recent virtual internships, I have cultivated a robust skill set in full-stack development, with a particular focus on building scalable web applications. Furthermore, my hands-on experience with modern frameworks like React and Spring Boot—evidenced by projects like the Hospital Management System—demonstrates my capability to architect and deliver complete digital solutions.
              </p>
              <br/>
              <p>
                What drives me is not just writing code, but understanding how technology can drive business innovation. My participation in the Winter School on Generative AI and my role as a Core Member at CIIE highlight my commitment to staying ahead of technological trends and fostering a culture of continuous learning.
              </p>
              <br/>
              <p>
                I would welcome the opportunity to discuss how my technical skills, coupled with my passion for artificial intelligence and software engineering, align with the goals of your organization.
              </p>
              <br/>
              <p>
                Thank you for your time and consideration.
              </p>
              <br/>
              <p className="mt-8">
                Sincerely,<br/>
                <strong>Rohit Malyadri</strong>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Coding Profiles Section */}
      <section id="coding-handles" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
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

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gradient leading-tight">Let's Build Something Impactful Together</h2>
            <p className="text-base md:text-lg text-muted-foreground w-full max-w-2xl mx-auto">
              Have an idea, opportunity, or feedback? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto px-2 sm:px-0">
            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl md:rounded-3xl shadow-anti-gravity dark:shadow-anti-gravity-dark hover:shadow-glow transition-all duration-500 relative overflow-hidden group h-full">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
                <div className="space-y-6 flex-grow">
                  {/* Personal Email */}
                  <a href="mailto:rohitmalyadri19@gmail.com" className="flex items-center gap-4 group/link">
                    <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center shrink-0 group-hover/link:scale-110 group-hover/link:bg-blue-500/20 transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-muted-foreground mb-1">Personal</div>
                      <div className="text-sm sm:text-base font-semibold group-hover/link:text-blue-500 transition-colors truncate">rohitmalyadri19@gmail.com</div>
                    </div>
                  </a>
                  {/* College Email */}
                  <a href="mailto:2300031803cseh1@gmail.com" className="flex items-center gap-4 group/link">
                    <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center shrink-0 group-hover/link:scale-110 group-hover/link:bg-green-500/20 transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-muted-foreground mb-1">Academic</div>
                      <div className="text-sm sm:text-base font-semibold group-hover/link:text-green-500 transition-colors truncate">2300031803cseh1@gmail.com</div>
                    </div>
                  </a>
                </div>
                
                <div className="mt-10 pt-8 border-t border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-4">Connect with me</div>
                  <SocialLinks iconSize={24} className="gap-4 flex-wrap" />
                </div>
              </div>
            </div>
            
            {/* Feedback Form */}
            <div className="lg:col-span-3">
              <Card className="glass-panel p-6 sm:p-10 shadow-anti-gravity dark:shadow-anti-gravity-dark border-primary/20 hover:border-primary/40 transition-colors duration-500 rounded-2xl md:rounded-3xl relative overflow-hidden h-full">
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                <CardContent className="p-0 relative z-10 h-full flex flex-col justify-center">
                  {submitStatus === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-12 animate-scale-in text-center h-full">
                      <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-glow">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3">Message Sent! 🚀</h3>
                      <p className="text-muted-foreground text-sm sm:text-base mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                      <Button 
                        variant="outline" 
                        className="rounded-full glass-panel px-8" 
                        onClick={() => setSubmitStatus(null)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleFeedbackSubmit} className="space-y-5 sm:space-y-6 text-left animate-fade-in flex flex-col h-full justify-between">
                      <div className="space-y-2 group">
                        <Label htmlFor="name" className="text-foreground/80 font-medium ml-1 text-sm sm:text-base">Name</Label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 sm:top-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300 pointer-events-none" />
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="pl-12 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-background/50 border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 shadow-sm text-sm sm:text-base"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2 group">
                        <Label htmlFor="email" className="text-foreground/80 font-medium ml-1 text-sm sm:text-base">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3.5 sm:top-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300 pointer-events-none" />
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                            className="pl-12 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-background/50 border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 shadow-sm text-sm sm:text-base"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2 group flex-grow">
                        <Label htmlFor="feedback" className="text-foreground/80 font-medium ml-1 text-sm sm:text-base">Message</Label>
                        <div className="relative h-[calc(100%-24px)]">
                          <MessageSquare className="absolute left-4 top-3.5 sm:top-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300 pointer-events-none" />
                          <Textarea
                            id="feedback"
                            name="feedback"
                            placeholder="I'd love to discuss..."
                            required
                            className="pl-12 min-h-[120px] sm:min-h-[150px] rounded-xl sm:rounded-2xl bg-background/50 border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 shadow-sm text-sm sm:text-base resize-y py-3.5 sm:py-4 h-full"
                            value={formData.feedback}
                            onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                          />
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl shadow-glow hover:shadow-anti-gravity transition-all duration-300 text-sm sm:text-base font-semibold group relative overflow-hidden mt-4 shrink-0"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                        <span className="relative flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
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
          
          <footer className="text-center text-muted-foreground border-t border-border/30 pt-8 mt-16 md:mt-24">
            <p className="text-sm sm:text-base">© 2026 Rohit Malyadri. All rights reserved.</p>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Index;

// NOTE: src/pages/Index.tsx is long. Consider refactoring it into smaller files and components for future improvements.
