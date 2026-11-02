import React from 'react';
import { Layers, Bot, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const pillars = [
    {
      id: 'fullstack',
      icon: <Layers size={22} className="pillar-icon" />,
      title: 'Full-Stack Development',
      description:
        'Architecting resilient web applications from clean, component-driven user interfaces down to secure APIs and relational data models.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'RESTful APIs'],
    },
    {
      id: 'automation',
      icon: <Bot size={22} className="pillar-icon" />,
      title: 'Business Automation',
      description:
        'Designing intelligent operational workflows, custom Telegram bots (like Nexa), and queue management systems that cut manual overhead.',
      tags: ['Telegram Bot APIs', 'Workflow Automation', 'Queue Orchestration', 'Integration'],
    },
    {
      id: 'ai-ml',
      icon: <Sparkles size={22} className="pillar-icon" />,
      title: 'Applied AI & ML',
      description:
        'Integrating machine learning models and NLP capabilities into production software, including automated text classification and intelligent assistants.',
      tags: ['Text Classification', 'NLP', 'Data Processing', 'Applied Intelligence'],
    },
  ];

  const highlights = [
    'Clean, modular, and maintainable software architecture',
    'Focus on tangible user and business outcomes',
    'End-to-end execution from problem discovery to deployment',
  ];

  return (
    <section id="about" className="about-section" aria-label="About Aman Abdela">
      {/* Background ambient radial highlight */}
      <div className="about-ambient-glow" aria-hidden="true" />

      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineering Scalable Systems &{' '}
            <span className="title-highlight">Intelligent Solutions</span>
          </h2>
          <p className="section-subtitle">
            A software engineer dedicated to building clean, purposeful software that solves real-world operational and technical problems.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="about-grid">
          {/* Left Column: Narrative & Core Philosophy */}
          <div className="about-narrative-card">
            <h3 className="narrative-heading">
              Bridging engineering rigor with practical automation.
            </h3>

            <p className="narrative-paragraph">
              I am a Software Engineer focused on crafting dependable web platforms, business automation tools, and applied AI systems. I believe software should not just function correctly—it should directly streamline operations and eliminate everyday friction.
            </p>

            <p className="narrative-paragraph">
              My hands-on development journey spans end-to-end full-stack applications, intelligent Telegram business assistants like <strong className="text-highlight">Nexa</strong>, healthcare workflow platforms like <strong className="text-highlight">Queueless</strong> and Clinic Management Systems, as well as data classification pipelines.
            </p>

            {/* Key Pillars Checklist */}
            <div className="narrative-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <CheckCircle2 size={18} className="highlight-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Action */}
            <div className="narrative-cta">
              <a href="#projects" className="about-cta-link">
                <span>View Selected Projects</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Core Domains */}
          <div className="about-pillars-column">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="pillar-card">
                <div className="pillar-card-header">
                  <div className="pillar-icon-wrapper">{pillar.icon}</div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                </div>
                <p className="pillar-desc">{pillar.description}</p>
                <div className="pillar-tags">
                  {pillar.tags.map((tag, i) => (
                    <span key={i} className="pillar-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

