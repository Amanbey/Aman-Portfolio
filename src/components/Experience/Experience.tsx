import React from 'react';
import { EXPERIENCES } from '../../data/experience';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import './Experience.css';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section" aria-label="Professional Experience">
      {/* Background ambient radial glow */}
      <div className="experience-ambient-glow" aria-hidden="true" />

      <div className="experience-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>Professional Journey</span>
          </div>
          <h2 className="section-title">
            Engineering Milestones &{' '}
            <span className="title-highlight">Practical Experience</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of hands-on software development, specialized project executions, and computer science education.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          <div className="timeline-track-line" aria-hidden="true" />

          <div className="timeline-items">
            {EXPERIENCES.map((item, index) => (
              <div key={index} className="timeline-item">
                {/* Glowing Node Marker */}
                <div className="timeline-node" aria-hidden="true">
                  <div className="timeline-node-inner" />
                  <div className="timeline-node-pulse" />
                </div>

                {/* Timeline Content Card */}
                <div className="timeline-content-card">
                  {/* Card Header: Role & Period */}
                  <div className="timeline-card-header">
                    <div className="role-group">
                      <h3 className="timeline-role">{item.role}</h3>
                      <div className="timeline-org">
                        <Briefcase size={14} className="org-icon" />
                        <span>{item.organization}</span>
                      </div>
                    </div>

                    <div className="timeline-period-badge">
                      <Calendar size={13} className="period-icon" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="timeline-description">{item.description}</p>

                  {/* Highlights Bullet List */}
                  <div className="timeline-highlights-list">
                    {item.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="timeline-highlight-point">
                        <CheckCircle2 size={16} className="highlight-point-icon" />
                        <span className="highlight-point-text">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

