declare module 'lucide-react' {
  import * as React from 'react';

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
    className?: string;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  export const Download: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Mail: LucideIcon;
  export const Github: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Youtube: LucideIcon;
  export const Send: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Code2: LucideIcon;
  export const Layers: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Check: LucideIcon;
  export const Copy: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronRight: LucideIcon;
}
