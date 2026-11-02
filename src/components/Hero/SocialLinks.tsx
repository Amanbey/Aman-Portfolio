import React from 'react';
import { Github, Linkedin, Youtube, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/socials';

export const SocialLinks: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <Github size={19} strokeWidth={2} />;
      case 'linkedin':
        return <Linkedin size={19} strokeWidth={2} />;
      case 'youtube':
        return <Youtube size={19} strokeWidth={2} />;
      case 'telegram':
        return <Send size={19} strokeWidth={2} />;
      default:
        return null;
    }
  };

  return (
    <div className="hero-socials" aria-label="Social Profiles">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          aria-label={link.name}
          title={link.name}
        >
          {getIcon(link.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
