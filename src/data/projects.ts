import { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nexa-telegram-assistant',
    title: 'Nexa — Telegram Business Assistant',
    category: 'Automation & AI',
    problem:
      'Businesses face manual bottlenecks and delayed response times when handling repetitive customer inquiries, catalog requests, and orders on Telegram.',
    solution:
      'Engineered an automated Telegram bot assistant that manages user interactions, processes operational commands, provides automated business responses, and logs interactions seamlessly.',
    techStack: ['TypeScript', 'Node.js', 'Telegram Bot API', 'PostgreSQL', 'Workflow Automation'],
    role: 'Lead Developer — Architected state machine, conversational branching, webhook integration, and database persistence.',
    githubUrl: 'https://github.com/Amanbey',
    liveUrl: 'https://t.me/Amanbey',
    featured: true,
  },
  {
    id: 'queueless-hospital-platform',
    title: 'Queueless — Hospital Queue Platform',
    category: 'Healthcare Systems',
    problem:
      'Overcrowded clinical waiting rooms and unpredictable wait times lead to patient distress, scheduling bottlenecks, and administrative strain.',
    solution:
      'Built a real-time queue orchestration platform enabling patients to monitor queue progress dynamically while providing hospital staff with an intuitive triage dispatch console.',
    techStack: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'PostgreSQL', 'REST API'],
    role: 'Full-Stack Engineer — Implemented real-time ticket status updates, provider administration view, and responsive client portal.',
    githubUrl: 'https://github.com/Amanbey',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 'clinic-management-system',
    title: 'Clinic Management System (CMS)',
    category: 'Healthcare Systems',
    problem:
      'Private medical practices struggle with fragmented patient documentation, conflicting appointment bookings, and inefficient paper-based records.',
    solution:
      'Delivered an integrated clinic operations management system that centralizes patient medical histories, practitioner availability schedules, and consultation records.',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Role-Based Access Control'],
    role: 'Full-Stack Developer — Designed normalized database schema, secure role-based authorization, and clinical encounter workflows.',
    githubUrl: 'https://github.com/Amanbey',
    liveUrl: '#',
    featured: false,
  },
  {
    id: 'spam-email-classification',
    title: 'Spam Email Classification Pipeline',
    category: 'Machine Learning',
    problem:
      'High volumes of unsolicited and potentially malicious emails degrade communication productivity and expose users to phishing vulnerabilities.',
    solution:
      'Developed a machine learning classification pipeline using NLP text preprocessing, TF-IDF feature extraction, and supervised classification algorithms to reliably filter incoming messages.',
    techStack: ['Python', 'Scikit-Learn', 'NLP', 'Pandas', 'Flask API'],
    role: 'ML Developer — Conducted exploratory text analysis, model benchmarking, hyperparameter tuning, and lightweight REST inference serving.',
    githubUrl: 'https://github.com/Amanbey',
    liveUrl: '#',
    featured: false,
  },
];

