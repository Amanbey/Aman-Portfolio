import React, { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Automation & AI', 'Healthcare Systems', 'Machine Learning'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section" aria-label="Portfolio Projects">
      {/* Background radial glow */}
      <div className="projects-ambient-glow" aria-hidden="true" />

      <div className="projects-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>Selected Projects</span>
          </div>
          <h2 className="section-title">
            Demonstrated Engineering &{' '}
            <span className="title-highlight">Practical Systems</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of real-world web applications, automation platforms, and machine learning pipelines developed with focus on measurable utility.
          </p>

          {/* Category Filter Tabs */}
          <div className="project-filter-tabs" role="tablist" aria-label="Project Categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeFilter === category}
                className={`filter-tab-btn ${activeFilter === category ? 'filter-tab-active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Note / Configurable Notice */}
        <div className="projects-footer-note">
          <span className="note-indicator" />
          <p>
            Project links and source repositories point to configured placeholders. Additional demonstration materials, private codebase walkthroughs, and architecture reviews are available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

