import React, { useRef, useState } from 'react';
import { Github, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Restrained tilt (-6 to +6 degrees)
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`project-card ${project.featured ? 'project-card-featured' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      }}
    >
      {/* Ambient card top border shimmer */}
      <div className="card-shimmer" aria-hidden="true" />

      {/* Header: Category & Featured Flag */}
      <div className="project-card-top">
        <span className="project-category-badge">{project.category}</span>
        {project.featured && (
          <span className="project-featured-badge">
            <Sparkles size={12} />
            <span>Featured</span>
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="project-title">{project.title}</h3>

      {/* Problem & Solution */}
      <div className="project-description-block">
        <div className="desc-section">
          <span className="desc-label">Problem:</span>
          <p className="desc-text">{project.problem}</p>
        </div>

        <div className="desc-section">
          <span className="desc-label">Solution:</span>
          <p className="desc-text">{project.solution}</p>
        </div>
      </div>

      {/* Role & Contribution */}
      <div className="project-role-box">
        <Terminal size={14} className="role-icon" />
        <span className="role-text">{project.role}</span>
      </div>

      {/* Tech Stack Pills */}
      <div className="project-tech-stack" aria-label="Technologies used">
        {project.techStack.map((tech, i) => (
          <span key={i} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>

      {/* Action Footer: GitHub & Live Demo */}
      <div className="project-card-footer">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-btn btn-code"
            aria-label={`View ${project.title} Source Code on GitHub`}
          >
            <Github size={15} />
            <span>Code</span>
          </a>
        )}

        {project.liveUrl && project.liveUrl !== '#' ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-btn btn-demo"
            aria-label={`View ${project.title} Live Demo`}
          >
            <span>Live Preview</span>
            <ExternalLink size={14} />
          </a>
        ) : (
          <span className="project-demo-placeholder" title="Deployment preview available upon request">
            <span>Demo Placeholder</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

