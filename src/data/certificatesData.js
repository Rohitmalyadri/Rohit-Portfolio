import {
  LinguaSkill,
  NPTELJava,
  WinterSchool,
  JavaInternship,
  IITH,
  Deloitte,
  neo4j,
  OCI_AI,
  OCI_DevOps
} from '@/assets/assets';

export const certificates = [
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
    skills: ["Data Structures", "Formal Communication", "Planning", "Programming", "Python", "Software Development Processes"],
    imageUrl: Deloitte
  },
  {
    title: "Neo4j Certified Professional",
    issuer: "Neo4j",
    date: "Jun 2025",
    skills: ["Graph Databases", "Cypher Query Language", "Neo4j"],
    imageUrl: neo4j
  },
  {
    title: "Oracle Cloud Infrastructure Certified Gen AI Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    skills: ["OCI", "Gen AI"],
    imageUrl: OCI_AI
  },
  {
    title: "Oracle Cloud Infrastructure Certified DevOps Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    skills: ["OCI", "DevOps"],
    imageUrl: OCI_DevOps
  }
];

