export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'youtube' | 'telegram';
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Amanbey',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/amanabdela',
    icon: 'linkedin',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/@amanabdela',
    icon: 'youtube',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/Amanbey',
    icon: 'telegram',
  },
];

