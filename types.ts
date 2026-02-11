
export interface Experience {
  company: string;
  period: string;
  role: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  metrics: string;
  demoLink?: string;
  githubLink?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools';
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}
