// =============================================
// Portfolio Chatbot — Predefined Response Data
// =============================================

export const BOT_NAME = "Rohit's Assistant";

export const WELCOME_MESSAGE =
  "Hi there! 👋 I'm Rohit's portfolio assistant. Ask me anything about his skills, projects, experience, or how to get in touch!";

export const QUICK_SUGGESTIONS = [
  "About Me",
  "Projects",
  "Skills",
  "Experience",
  "Contact",
  "Resume",
];

// ---------------------
// Responses (keyed by intent)
// ---------------------
export const RESPONSES = {
  about: {
    text: `I'm **Rohit Malyadri** — a Computer Science student specializing in AI, passionate about building scalable full-stack applications and intelligent systems. 🚀

• 🎓 B.Tech CSE - AI @ KL University, 3rd year
• 💡 Loves solving real-world problems with MERN + AI/ML
• 🌱 Actively improving via DSA, system design & cloud
• 🤝 Collaborative team player & innovation enthusiast`,
  },

  projects: {
    text: `Here are some of Rohit's key projects:

• 🛒 **FreshMart** — Scalable grocery platform (MERN, Gen AI, Redis)
• 🤖 **Brand Guidance System** — RAG-based AI using LangChain + LLMs
• 🌾 **Crop Prediction ML App** — Flask + Random Forest (~98% accuracy)
• 🏥 **Hospital Management System** — React + Spring Boot + MySQL
• ⏱️ **FlipClock Pomodoro** — Productivity timer app (React, TailwindCSS)

Want to see them live? Check out the Projects section above! 👆`,
  },

  skills: {
    text: `Rohit's technical skill set:

**Frontend:** React, HTML5, CSS3, JavaScript, TailwindCSS
**Backend:** Java, Spring Boot, MySQL, MongoDB, REST APIs
**AI / ML:** Python, Machine Learning, Neural Networks, Generative AI
**Tools & Cloud:** Git, GitHub, AWS, Postman, VS Code, PyCharm

He's especially strong in MERN stack and AI/ML integration! 🔥`,
  },

  experience: {
    text: `Rohit's experience & activities:

• 🏫 **CIIE Core Member** — Innovation Cell, organizing ideathons
• 🧠 **IIT Jodhpur Winter School** — Generative AI (Dec 2024)
• 💻 **Java Full Stack Internship** — 10-week program (Apr–Jun 2025)
• 🎓 **IIT Hyderabad Workshop** — Entrepreneurial Essentials (May 2025)
• 📊 **Deloitte Australia** — Technology Job Simulation (Jun 2025)
• 🤖 **Calibo AI Academy** — Industry-oriented AI trainee (Dec 2025–Present)
• 🚀 **Hackathons** — Byte Quest AI Challenge, Guidewire DEVTrails 2026
• 🏢 **ISB I-Venture Program** — Startup & innovation panels (Mar 2026)`,
  },

  contact: {
    text: `You can reach Rohit here:

📧 **Personal:** rohitmalyadri19@gmail.com
📧 **Academic:** 2300031803cseh1@gmail.com
🔗 **GitHub:** github.com/Rohitmalyadri
💼 **LinkedIn:** Check the social links in the footer

Feel free to scroll down to the **Contact** section to send a message directly! 💬`,
  },

  resume: {
    text: `Rohit's professional documents are available in the **Resume & Cover Letter** section of this portfolio. 📄

You can:
• ⬇️ **Download his Resume** (PDF)
• 📝 **View his Cover Letter** directly on the page

Scroll up to find them, or check the Navbar! 🔼`,
  },

  certificates: {
    text: `Rohit holds several impressive certifications:

• 🏅 LinguaSkill (Cambridge English) — Jun 2024
• ☕ NPTEL Programming in Java (IIT) — Oct 2024
• 🤖 Winter School on Generative AI (IIT Jodhpur) — Dec 2024
• 💻 Java Full Stack Internship Certificate — Jun 2025
• 🚀 Entrepreneurial Essentials (IIT Hyderabad) — May 2025
• 📊 Deloitte Australia Technology Certificate — Jun 2025
• 🔷 Neo4j Certified Professional — Jun 2025
• ☁️ OCI Gen AI & DevOps Professional (Oracle) — Oct 2025

Check the Certificates section for more details! 🎓`,
  },

  blogs: {
    text: `Rohit shares his knowledge and insights on **Medium**! 📝

He writes about topics like AI, full-stack development, and tech experiences. Check out the **Articles & Insights** section on this page, or visit his Medium profile directly at:

🔗 medium.com/@rohitmalyadri19`,
  },

  ai: {
    text: `Yes! AI/ML is one of Rohit's core interests. 🤖

• Completed IIT Jodhpur's Generative AI Winter School
• Built RAG-based AI systems (LangChain, LLMs)
• Oracle OCI Certified Gen AI Professional
• Active Calibo AI Academy Trainee
• Built ML models (Crop Prediction, Medical AI assistant)

He's passionate about combining AI with practical real-world products! 🔥`,
  },

  education: {
    text: `🎓 **Education:**

**B.Tech in Computer Science & Engineering (AI Specialization)**
KL University — 3rd Year (Expected Graduation: 2026)

Focuses: Data Structures, Algorithms, System Design, AI/ML, Full-Stack Development.`,
  },

  hello: {
    text: `Hey there! 👋 Great to meet you! I'm Rohit's portfolio assistant.

I can help you learn about:
• His projects & skills
• Work experience & achievements
• How to get in touch

What would you like to know? 😊`,
  },

  thanks: {
    text: `You're welcome! 😊 Feel free to ask anything else. Rohit would love to connect with you! 🚀`,
  },

  hackathon: {
    text: `Rohit is an active hackathon participant! 🏆

• **Byte Quest AI Challenge** — Built an AI-powered medical assistant (Jan 2026)
• **Guidewire DEVTrails 2026** — 45-day industry hackathon (Feb 2026–Present)

He loves the challenge of building fast and impactful solutions under pressure! 💪`,
  },
};

// ---------------------
// Keyword → Intent Map
// ---------------------
export const KEYWORD_MAP = [
  { keywords: ["about", "yourself", "who are you", "introduce", "bio"], intent: "about" },
  { keywords: ["project", "projects", "built", "work", "portfolio", "freshmart", "brand", "crop", "hospital", "flipclock", "marvel"], intent: "projects" },
  { keywords: ["skill", "skills", "technology", "technologies", "tech stack", "stack", "tools", "language", "framework", "what do you use", "what can"], intent: "skills" },
  { keywords: ["experience", "internship", "ciie", "iit", "deloitte", "calibo", "activity", "activities", "workshop"], intent: "experience" },
  { keywords: ["contact", "reach", "email", "linkedin", "github", "social", "connect", "message", "hire"], intent: "contact" },
  { keywords: ["resume", "cv", "curriculum", "download", "cover letter", "documents"], intent: "resume" },
  { keywords: ["certificate", "certification", "certified", "achievement", "nptel", "linguaskill", "oracle", "neo4j"], intent: "certificates" },
  { keywords: ["blog", "blogs", "article", "articles", "medium", "writing", "write"], intent: "blogs" },
  { keywords: ["ai", "artificial intelligence", "machine learning", "ml", "gen ai", "generative", "llm", "rag", "langchain"], intent: "ai" },
  { keywords: ["education", "study", "college", "university", "kl university", "degree", "btech", "b.tech"], intent: "education" },
  { keywords: ["hello", "hi", "hey", "howdy", "greetings", "good morning", "good afternoon", "good evening"], intent: "hello" },
  { keywords: ["thank", "thanks", "thankyou", "thank you", "awesome", "great", "perfect", "nice"], intent: "thanks" },
  { keywords: ["hackathon", "hack", "competition", "byte quest", "guidewire"], intent: "hackathon" },
];

export const FALLBACK_RESPONSE =
  "Hmm, I'm not sure about that one! 🤔 You can ask me about Rohit's **projects, skills, experience, contact details, resume, or blogs**. What would you like to know?";
