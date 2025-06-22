export interface Member {
  id: string;
  name: {
    ja: string;
    en: string;
  };
  role: {
    ja: string;
    en: string;
  };
  bio: {
    ja: string;
    en: string;
  };
  avatar: string;
  skills: string[];
  socialLinks: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
  joinDate: string;
  status: 'active' | 'alumni';
}