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
    title: "Linguaskill Business — CEFR B2",
    issuer: "Cambridge Assessment English",
    date: "Jun 2024",
    description: "Evaluated on reading, listening, writing, and speaking competencies aligned with the international CEFR standard for professional and technical communication.",
    skills: ["Technical English", "Professional Communication", "Writing", "Comprehension"],
    imageUrl: LinguaSkill
  },
  {
    title: "NPTEL Programming in Java",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "Jul - Oct 2024",
    description: "Completed an 8-week rigorous course covering object-oriented programming, multithreading, exception handling, Java collections framework, and GUI application design with a proctored exam.",
    skills: ["Java", "OOP", "Multithreading", "Data Structures", "Collections"],
    imageUrl: NPTELJava
  },
  {
    title: "Winter School on Generative AI",
    issuer: "IIT Jodhpur",
    date: "Dec 2024",
    description: "Completed specialized technical training on modern Generative AI models, neural networks, foundation model architectures, and applied deep learning paradigms.",
    skills: ["Generative AI", "Neural Networks", "Deep Learning", "Python", "LLMs"],
    imageUrl: WinterSchool
  },
  {
    title: "Java Full Stack Developer",
    issuer: "Eduskills / KL University",
    date: "Apr - Jun 2025",
    description: "10-week intensive software engineering program covering full-stack web architectures, Spring Boot backend development, relational database modeling with MySQL, and responsive user interfaces.",
    skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "JavaScript", "HTML/CSS"],
    imageUrl: JavaInternship
  },
  {
    title: "Entrepreneurial Essentials Program",
    issuer: "IIT Hyderabad",
    date: "May 2025",
    description: "Intensive 3-day workshop focusing on technology venture creation, product strategy, market validation, and agile innovation processes.",
    skills: ["Product Strategy", "Technology Innovation", "Leadership", "Market Validation"],
    imageUrl: IITH
  },
  {
    title: "Deloitte Australia Technology Simulation",
    issuer: "Forage / Deloitte Australia",
    date: "Jun 2025",
    skills: ["System Architecture", "Technical Analysis", "Python", "Data Structures", "Consulting"],
    imageUrl: Deloitte
  },
  {
    title: "Neo4j Certified Professional",
    issuer: "Neo4j",
    date: "Jun 2025",
    skills: ["Graph Databases", "Cypher Query Language", "Graph Data Modeling", "Neo4j"],
    imageUrl: neo4j
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    skills: ["OCI", "Generative AI", "LLM Deployment", "Vector Databases", "Prompt Engineering"],
    imageUrl: OCI_AI
  },
  {
    title: "Oracle Cloud Infrastructure 2024 DevOps Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    skills: ["OCI", "DevOps", "CI/CD Pipelines", "Containerization", "Infrastructure as Code"],
    imageUrl: OCI_DevOps
  }
];
