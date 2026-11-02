import React from 'react';

interface StatsPanelProps {
  projectsCount?: string;
  projectsLabel?: string;
  experienceCount?: string;
  experienceLabel?: string;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({
  projectsCount = '5+',
  projectsLabel = 'Projects',
  experienceCount = '1+',
  experienceLabel = 'Years Exp.',
}) => {
  return (
    <div className="hero-stats-panel" aria-label="Professional Highlights">
      <div className="stats-group">
        <span className="stats-number">{projectsCount}</span>
        <span className="stats-label">{projectsLabel}</span>
      </div>

      <div className="stats-divider" aria-hidden="true" />

      <div className="stats-group">
        <span className="stats-number">{experienceCount}</span>
        <span className="stats-label">{experienceLabel}</span>
      </div>
    </div>
  );
};

export default StatsPanel;
