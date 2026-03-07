export interface Portfolio {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  accentColor?: string;
  links: Record<string, string | undefined>;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    description: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    url?: string;
    tags: string[];
  }>;
  skills: string[];
  techStack: string[];
}
