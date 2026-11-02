export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategoryGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Constructing performant, accessible, and responsive user interfaces with modern component architectures.',
    skills: [
      { name: 'React', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript (ES6+)', highlight: true },
      { name: 'HTML5 & Modern CSS', highlight: false },
      { name: 'Tailwind CSS', highlight: false },
      { name: 'Responsive Web Design', highlight: false },
      { name: 'Component Systems', highlight: false },
      { name: 'State Management', highlight: false },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Engineering robust server-side logic, secure RESTful endpoints, and real-time event-driven pipelines.',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express', highlight: true },
      { name: 'RESTful API Design', highlight: true },
      { name: 'WebSockets', highlight: false },
      { name: 'Python', highlight: true },
      { name: 'Server Architecture', highlight: false },
      { name: 'Webhook Integrations', highlight: false },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Designing normalized relational schemas, query optimization, and reliable transactional integrity.',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'Relational Schema Design', highlight: false },
      { name: 'Data Normalization', highlight: false },
      { name: 'Query Optimization', highlight: false },
    ],
  },
  {
    id: 'automation',
    title: 'Business Automation',
    description: 'Building custom automated Telegram bots, background task orchestration, and workflow efficiency engines.',
    skills: [
      { name: 'Telegram Bot API', highlight: true },
      { name: 'Workflow Automation', highlight: true },
      { name: 'Operational State Machines', highlight: false },
      { name: 'Queue Management', highlight: false },
      { name: 'Process Automation', highlight: false },
    ],
  },
  {
    id: 'ai-ml',
    title: 'Applied AI & Machine Learning',
    description: 'Implementing practical machine learning models, text classification algorithms, and NLP data pipelines.',
    skills: [
      { name: 'Scikit-Learn', highlight: true },
      { name: 'Natural Language Processing (NLP)', highlight: true },
      { name: 'Text Classification', highlight: false },
      { name: 'Feature Extraction (TF-IDF)', highlight: false },
      { name: 'Model Inference APIs', highlight: false },
      { name: 'Pandas & NumPy', highlight: false },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools & DevOps',
    description: 'Leveraging modern version control, bundling utilities, and debugging toolsets for rapid production workflows.',
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'Vite', highlight: true },
      { name: 'Postman', highlight: false },
      { name: 'Linux / Bash Basics', highlight: false },
      { name: 'NPM & Node Tooling', highlight: false },
      { name: 'Clean Architecture', highlight: false },
    ],
  },
];

