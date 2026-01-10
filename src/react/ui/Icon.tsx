import {
  Shield,
  TrendingUp,
  Zap,
  BarChart3,
  HeadphonesIcon,
  FileCheck,
  Quote,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  TrendingUp,
  Zap,
  BarChart3,
  HeadphonesIcon,
  FileCheck,
  Quote,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  MapPin,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = '', size = 24 }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
}
