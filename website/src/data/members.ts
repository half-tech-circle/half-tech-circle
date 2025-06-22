import type { Member } from '../types/member';

export const members: Member[] = [
  {
    id: 'founder',
    name: {
      ja: '創設者',
      en: 'Founder'
    },
    role: {
      ja: 'サークル代表・フルスタック開発者',
      en: 'Circle Representative & Full-stack Developer'
    },
    bio: {
      ja: 'Web開発とAI技術に情熱を注ぐエンジニア。技術書の執筆を通じて知識の共有とコミュニティの発展に貢献することを目指しています。React、TypeScript、Pythonを得意とし、最新の技術トレンドを追いかけています。',
      en: 'An engineer passionate about web development and AI technology. Aims to contribute to knowledge sharing and community development through technical book writing. Specializes in React, TypeScript, and Python, while keeping up with the latest technology trends.'
    },
    avatar: '/images/members/founder-avatar.webp',
    skills: ['React', 'TypeScript', 'Python', 'AWS', 'Machine Learning', 'Technical Writing'],
    socialLinks: {
      twitter: 'https://twitter.com/half_tech_circle',
      github: 'https://github.com/half-tech-circle',
      website: 'https://half-tech-circle.github.io'
    },
    joinDate: '2023-01-01',
    status: 'active'
  },
  {
    id: 'tech-writer',
    name: {
      ja: 'テックライター',
      en: 'Tech Writer'
    },
    role: {
      ja: '技術ライター・コンテンツ制作',
      en: 'Technical Writer & Content Creator'
    },
    bio: {
      ja: '技術書の執筆と編集を専門とするライター。複雑な技術概念を分かりやすく伝えることを得意とし、読者の学習体験を向上させることに情熱を注いでいます。フロントエンド技術とUX/UIデザインに深い知識を持っています。',
      en: 'A writer specializing in technical book writing and editing. Excels at clearly communicating complex technical concepts and is passionate about improving readers\' learning experience. Has deep knowledge in frontend technologies and UX/UI design.'
    },
    avatar: '/images/members/writer-avatar.webp',
    skills: ['Technical Writing', 'UX/UI Design', 'Content Strategy', 'JavaScript', 'CSS', 'Documentation'],
    socialLinks: {
      twitter: 'https://twitter.com/tech_writer',
      linkedin: 'https://linkedin.com/in/tech-writer'
    },
    joinDate: '2023-03-15',
    status: 'active'
  },
  {
    id: 'ai-specialist',
    name: {
      ja: 'AI スペシャリスト',
      en: 'AI Specialist'
    },
    role: {
      ja: 'AI/機械学習エンジニア',
      en: 'AI/Machine Learning Engineer'
    },
    bio: {
      ja: '機械学習とデータサイエンスの専門家。AIの実用的な応用に焦点を当て、技術書を通じてAI技術の普及と教育に貢献しています。深層学習、自然言語処理、コンピュータビジョンの分野で豊富な経験を持っています。',
      en: 'A specialist in machine learning and data science. Focuses on practical applications of AI and contributes to AI technology dissemination and education through technical books. Has extensive experience in deep learning, natural language processing, and computer vision.'
    },
    avatar: '/images/members/ai-specialist-avatar.webp',
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch', 'Data Science'],
    socialLinks: {
      github: 'https://github.com/ai-specialist',
      linkedin: 'https://linkedin.com/in/ai-specialist'
    },
    joinDate: '2023-06-01',
    status: 'active'
  }
];