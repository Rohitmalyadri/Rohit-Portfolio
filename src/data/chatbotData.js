// =============================================
// Portfolio Chatbot — Predefined Response Data
// =============================================
import { PROFILE } from '@/data/profileData';

export const BOT_NAME = "Rohit's Assistant";

export const WELCOME_MESSAGE =
  "Hi there! 👋 I'm Rohit's portfolio assistant. Ask me anything about his AI engineering work, projects, technical skills, experience, or how to get in touch!";

export const QUICK_SUGGESTIONS = [
  "About Me",
  "Projects",
  "Skills",
  "Experience",
  "Education",
  "Contact",
];

// ---------------------
// Responses (keyed by intent)
// ---------------------
export const RESPONSES = {
  about: {
    text: `I'm **${PROFILE.name}** — AI Engineer Intern at ${PROFILE.company} and a ${PROFILE.academic.status} at ${PROFILE.academic.institution} (Class of ${PROFILE.academic.graduationYear}). 🚀

• 🤖 **Current Role:** AI Engineer Intern @ ${PROFILE.company} (Aug 2026–Present)
• 🎓 **Education:** ${PROFILE.academic.degree} (${PROFILE.academic.specialization}) at ${PROFILE.academic.institution} (${PROFILE.academic.batch})
• 💡 **Focus:** Generative AI, RAG Systems, FastAPI, Spring Boot, React, and Scalable Architectures
• 🌱 **Philosophy:** Building practical, production-ready systems that solve real business challenges.`,
  },

  projects: {
    text: `Here are Rohit's featured engineering projects:

• 🛒 **FreshMart** — Full-stack grocery platform with Gen AI recommendations, Redis caching & real-time updates.
• 🛡️ **Brand Guidance System** — RAG-powered compliance engine using LangChain, LLMs & vector search for video analysis.
• 🌾 **Crop Prediction ML App** — Production ML pipeline using Flask & Random Forest (~98% accuracy).
• 🏥 **Hospital Management System** — Full-stack healthcare portal (React, Spring Boot, MySQL) with role-based access.
• ⏱️ **FlipClock Pomodoro** — Accessible productivity application built with React & Tailwind CSS.

Check out the Projects section above for source code and live demos! 👆`,
  },

  skills: {
    text: `Rohit's technical skill set across core domains:

• 🧠 **AI & ML:** Generative AI, RAG Systems, LLM Integrations, LangChain, NLP, Machine Learning
• 💻 **Languages:** Python, Java, JavaScript, C
• ⚙️ **Backend:** FastAPI, Spring Boot, RESTful APIs, System Design
• 🎨 **Frontend:** React.js, Tailwind CSS, Modern HTML5 & CSS3
• 🗄️ **Databases:** PostgreSQL, MySQL, MongoDB, Redis, Snowflake, Supabase
• 🛠️ **Tools & Platforms:** Git, GitHub, Docker, Postman, Figma, OCI

He specializes in integrating intelligent AI models into robust full-stack software! 🔥`,
  },

  experience: {
    text: `Rohit's professional timeline & experience:

• 🚀 **Calibo** — AI Engineer Intern (Aug 2026 – Present)
• 🤖 **Calibo AI Academy** — AI Trainee (Dec 2025 – Jul 2026)
• 🏫 **CIIE (Innovation Cell)** — Core Member & Ideathon Organizer (2023 – 2026)
• 🏢 **ISB I-Venture Program** — Participant (Mar 2026)
• ⚡ **Guidewire DEVTrails Hackathon** — 45-Day Industry Challenge (Feb – Mar 2026)
• 🎯 **Byte Quest AI Challenge** — Built AI Medical Assistant (Jan 2026)
• 💻 **Java Full Stack Internship** — Eduskills / KL University (Apr – Jun 2025)
• 🎓 **IIT Hyderabad** — Entrepreneurial Essentials Workshop (May 2025)
• 📊 **Deloitte Australia** — Technology Job Simulation (Jun 2025)
• 🧠 **IIT Jodhpur** — Winter School on Generative AI (Dec 2024)`,
  },

  contact: {
    text: `You can reach Rohit directly through:

📧 **Personal Email:** ${PROFILE.contact.personalEmail}
📧 **Academic Email:** ${PROFILE.contact.academicEmail}
💼 **LinkedIn:** linkedin.com/in/rohit-malyadri-gadamsetty-20181a281
🔗 **GitHub:** ${PROFILE.contact.github}
📝 **Medium:** ${PROFILE.contact.medium}

You can also use the **Contact Form** at the bottom of the page to send a direct message! 💬`,
  },

  resume: {
    text: `Rohit's resume and verified cover letter are available in the **Resume & Cover Letter** section! 📄

You can:
• ⬇️ **Download Resume (PDF)** for a complete summary of technical experience & education.
• 📝 **Read Cover Letter** directly on the site for details on his AI engineering approach.

Scroll to the Resume section or click the button in the Hero section! 🔼`,
  },

  certificates: {
    text: `Rohit holds verified technical credentials:

• ☁️ **Oracle Cloud Infrastructure** — Certified Gen AI Professional (Oct 2025)
• ☁️ **Oracle Cloud Infrastructure** — Certified DevOps Professional (Oct 2025)
• 🔷 **Neo4j** — Certified Professional in Graph Databases (Jun 2025)
• 🤖 **IIT Jodhpur** — Winter School on Generative AI (Dec 2024)
• ☕ **NPTEL (IIT Kharagpur)** — Programming in Java (Jul–Oct 2024)
• 🏅 **Cambridge Assessment English** — Linguaskill Business CEFR B2 (Jun 2024)
• 💻 **Java Full Stack Developer** — Eduskills / KL University (Jun 2025)

Check the Certificates section on this page to view badges and certificates! 🎓`,
  },

  blogs: {
    text: `Rohit publishes technical articles on **Medium**! 📝

He writes about Generative AI, full-stack architectures, and hands-on software development. Explore the **Articles & Insights** section above, or visit his Medium profile directly:

🔗 ${PROFILE.contact.medium}`,
  },

  ai: {
    text: `AI & Machine Learning are central to Rohit's engineering work! 🤖

• **Current Role:** AI Engineer Intern at ${PROFILE.company} (Aug 2026–Present)
• **Architectures:** Retrieval-Augmented Generation (RAG), Agentic workflows, LangChain & LLM integrations
• **Certified:** Oracle Certified Gen AI Professional (OCI)
• **Academic Training:** IIT Jodhpur Generative AI Winter School
• **Applications:** Brand Guidance Compliance Engine, Crop Prediction ML, Medical AI Assistant

He builds practical, production-ready AI applications rather than isolated demos! 🔥`,
  },

  education: {
    text: `🎓 **Academic Background:**

**${PROFILE.academic.degree}**
• **Specialization:** ${PROFILE.academic.specialization}
• **Institution:** ${PROFILE.academic.institution}
• **Status:** ${PROFILE.academic.status} (Batch ${PROFILE.academic.batch})
• **Graduation:** ${PROFILE.academic.graduationYear}

Focus areas include Data Structures & Algorithms, Artificial Intelligence, Machine Learning, System Design, and Full-Stack Engineering.`,
  },

  hello: {
    text: `Hey there! 👋 Great to meet you! I'm Rohit's portfolio assistant.

I can tell you all about:
• His current work as an AI Engineer Intern at Calibo
• Full-stack & AI/ML projects
• Technical skills across 6 categories
• Experience, certifications & contact info

What would you like to explore? 😊`,
  },

  thanks: {
    text: `You're very welcome! 😊 Feel free to explore the rest of the portfolio or reach out to Rohit directly via email or LinkedIn! 🚀`,
  },

  hackathon: {
    text: `Rohit actively builds under pressure in engineering hackathons: 🏆

• **Guidewire DEVTrails 2026** — 45-day intensive industry hackathon solving real-world challenges (Feb–Mar 2026)
• **Byte Quest Hackathon** — Built an AI-powered medical assistant with FastAPI, React, and Random Forest (Jan 2026)

He enjoys collaborative problem-solving, rapid prototyping, and engineering high-impact solutions! 💪`,
  },
};

// ---------------------
// Keyword → Intent Map
// ---------------------
export const KEYWORD_MAP = [
  { keywords: ["about", "yourself", "who are you", "introduce", "bio", "background", "role", "profile"], intent: "about" },
  { keywords: ["project", "projects", "built", "work", "portfolio", "freshmart", "brand", "crop", "hospital", "flipclock", "marvel"], intent: "projects" },
  { keywords: ["skill", "skills", "technology", "technologies", "tech stack", "stack", "tools", "language", "framework", "what do you use", "what can", "fastapi", "spring boot", "react", "python"], intent: "skills" },
  { keywords: ["experience", "internship", "ciie", "iit", "deloitte", "calibo", "activity", "activities", "workshop", "work"], intent: "experience" },
  { keywords: ["contact", "reach", "email", "linkedin", "github", "social", "connect", "message", "hire"], intent: "contact" },
  { keywords: ["resume", "cv", "curriculum", "download", "cover letter", "documents"], intent: "resume" },
  { keywords: ["certificate", "certification", "certified", "achievement", "nptel", "linguaskill", "oracle", "neo4j"], intent: "certificates" },
  { keywords: ["blog", "blogs", "article", "articles", "medium", "writing", "write"], intent: "blogs" },
  { keywords: ["ai", "artificial intelligence", "machine learning", "ml", "gen ai", "generative", "llm", "rag", "langchain"], intent: "ai" },
  { keywords: ["education", "study", "college", "university", "kl university", "degree", "btech", "b.tech", "graduation"], intent: "education" },
  { keywords: ["hello", "hi", "hey", "howdy", "greetings", "good morning", "good afternoon", "good evening"], intent: "hello" },
  { keywords: ["thank", "thanks", "thankyou", "thank you", "awesome", "great", "perfect", "nice"], intent: "thanks" },
  { keywords: ["hackathon", "hack", "competition", "byte quest", "guidewire", "challenge"], intent: "hackathon" },
];

export const FALLBACK_RESPONSE =
  "Hmm, I'm not sure about that one! 🤔 You can ask me about Rohit's **current AI internship, projects, skills, education, experience, contact details, or resume**. What would you like to know?";
