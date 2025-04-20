
import { BrainCircuit, FileText, BarChart, GraduationCap, BookOpen, BookText, FileBadge, Scale, Stethoscope, Share2 } from "lucide-react";

// All assessment categories
export const assessmentCategories = [
  {
    id: "tech",
    label: "Technology",
    assessments: [
      {
        title: "Data Structures & Algorithms",
        description: "Test your knowledge of arrays, linked lists, trees, sorting algorithms, etc.",
        icon: BrainCircuit,
        time: "45",
        questions: 25,
        color: "bg-interview-blue/10 text-interview-blue"
      },
      {
        title: "Database Systems",
        description: "SQL queries, database design, normalization, indexing, and transactions.",
        icon: BarChart,
        time: "30",
        questions: 20,
        color: "bg-interview-purple/10 text-interview-purple"
      },
      {
        title: "System Design",
        description: "Architecture, scalability, microservices, caching, load balancing.",
        icon: FileText,
        time: "60",
        questions: 15,
        color: "bg-interview-teal/10 text-interview-teal"
      },
      {
        title: "Operating Systems",
        description: "Processes, threads, memory management, file systems, and scheduling.",
        icon: BrainCircuit,
        time: "30",
        questions: 20,
        color: "bg-interview-blue/10 text-interview-blue"
      },
      {
        title: "Computer Networks",
        description: "TCP/IP, HTTP, DNS, network security, and socket programming.",
        icon: BarChart,
        time: "45",
        questions: 25,
        color: "bg-interview-purple/10 text-interview-purple"
      },
      {
        title: "General Aptitude",
        description: "Logical reasoning, quantitative aptitude, and verbal ability.",
        icon: FileText,
        time: "30",
        questions: 30,
        color: "bg-interview-teal/10 text-interview-teal"
      }
    ]
  },
  {
    id: "civil-services",
    label: "Civil Services",
    assessments: [
      {
        title: "UPSC Prelims - General Studies",
        description: "Based on last 10 years' question papers on current affairs, history, geography, economics.",
        icon: BookOpen,
        time: "120",
        questions: 100,
        color: "bg-interview-blue/10 text-interview-blue"
      },
      {
        title: "UPSC Prelims - CSAT",
        description: "Comprehension, logical reasoning, analytical ability, and basic numeracy.",
        icon: BrainCircuit, 
        time: "120",
        questions: 80,
        color: "bg-interview-purple/10 text-interview-purple"
      },
      {
        title: "Indian Constitution & Polity",
        description: "Constitutional framework, amendments, governance, and political system of India.",
        icon: Scale,
        time: "60",
        questions: 50,
        color: "bg-interview-teal/10 text-interview-teal"
      },
      {
        title: "Indian & World Geography",
        description: "Physical, social, and economic geography of India and the world.",
        icon: GraduationCap,
        time: "45",
        questions: 40,
        color: "bg-interview-blue/10 text-interview-blue"
      },
      {
        title: "Indian History & Culture",
        description: "Ancient, medieval, modern history, and cultural heritage of India.",
        icon: BookText,
        time: "60",
        questions: 50,
        color: "bg-interview-purple/10 text-interview-purple"
      },
      {
        title: "Economy & International Relations",
        description: "Economic concepts, Indian economy, and foreign relations.",
        icon: Share2,
        time: "45",
        questions: 40,
        color: "bg-interview-teal/10 text-interview-teal"
      }
    ]
  },
  {
    id: "banking",
    label: "Banking",
    assessments: [
      {
        title: "Banking Awareness",
        description: "Banking history, institutions, financial policies, and current banking trends.",
        icon: FileBadge,
        time: "30",
        questions: 40,
        color: "bg-interview-blue/10 text-interview-blue"
      },
      {
        title: "Quantitative Aptitude",
        description: "Mathematical problems relevant to banking exams like SBI, IBPS, RBI.",
        icon: BrainCircuit,
        time: "45",
        questions: 35,
        color: "bg-interview-purple/10 text-interview-purple"
      },
      {
        title: "Reasoning Ability",
        description: "Logical reasoning, analytical reasoning, and verbal reasoning for banking exams.",
        icon: FileText,
        time: "45",
        questions: 35,
        color: "bg-interview-teal/10 text-interview-teal"
      }
    ]
  },
  {
    id: "healthcare",
    label: "Healthcare",
    assessments: [
      {
        title: "Medical Terminology",
        description: "Common medical terms, abbreviations, and definitions for healthcare professionals.",
        icon: Stethoscope,
        time: "30",
        questions: 50,
        color: "bg-interview-blue/10 text-interview-blue"
      },
      {
        title: "Anatomy & Physiology",
        description: "Human body systems, functions, and anatomical structures.",
        icon: BrainCircuit,
        time: "45",
        questions: 60,
        color: "bg-interview-purple/10 text-interview-purple"
      },
      {
        title: "Patient Care & Ethics",
        description: "Medical ethics, patient communication, and healthcare standards.",
        icon: FileText,
        time: "30",
        questions: 40,
        color: "bg-interview-teal/10 text-interview-teal"
      }
    ]
  }
];
