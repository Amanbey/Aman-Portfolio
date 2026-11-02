import React from 'react';
import { SKILL_CATEGORIES } from '../../data/skills';
import { Code2, Server, Database, Bot, Sparkles, Wrench } from 'lucide-react';
import './Skills.css';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 size={20} className="cat-icon" />;
      case 'backend':
        return <Server size={20} className="cat-icon" />;
      case 'databases':
        return <Database size={20} className="cat-icon" />;
      case 'automation':
        return <Bot size={20} className="cat-icon" />;
      case 'ai-ml':
        return <Sparkles size={20} className="cat-icon" />;
      case 'tools':
        return <Wrench size={20} className="cat-icon" />;
      default:
        return <Code2 size={20} className="cat-icon" />;
    }
  };

  return (
    <section id="skills" className="skills-section" aria-label="Technical Skills">
      {/* Ambient background glow */}
      <div className="skills-ambient-glow" aria-hidden="true" />

      <div className="skills-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills, Frameworks &{' '}
            <span className="title-highlight">Production Tooling</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of the programming languages, architectural frameworks, and specialized automation tools I actively use to develop software.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="skill-category-card">
              <div className="skill-card-top">
                <div className="skill-icon-bubble">
                  {getCategoryIcon(category.id)}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <p className="skill-category-desc">{category.description}</p>

              <div className="skill-badges-container" aria-label={`${category.title} Skills`}>
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`skill-badge ${skill.highlight ? 'skill-badge-highlight' : ''}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

