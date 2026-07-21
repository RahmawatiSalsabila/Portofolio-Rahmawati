export const profile = {
  name: 'Rahmawati Salsabila',
  role: 'Software Engineer & Information Systems Education Student',
  shortIntro:
    'I design and build elegant, human-centered web experiences — blending clean engineering with a deep passion for education and technology.',
  email: 'rahmawatisalsabila84@gmail.com',
  github: 'https://github.com/RahmawatiSalsabila',
  linkedin: 'https://linkedin.com/in/rahmawati-salsabila-0271b9311',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
] as const

export const about = {
  intro: [
  "I'm an Information Systems Education student who enjoys building digital products, exploring data, and conducting research. My interests lie at the intersection of software engineering, educational technology, and data-driven decision making.",
  "I have experience developing web applications, creating educational media, analyzing research data, and publishing academic work. I'm always excited to solve problems through technology while continuously learning new tools and methodologies."
  ],
  education: {
    degree: 'B.Ed. in Information Systems Education (In Progress)',
    school: 'Indonesia University of Education',
    period: '2023 — Present',
    detail: 'Undergraduate student in Information Systems Education, focusing on software development, educational technology, data analysis, and instructional design.',
  },
  interests: [
  "Full-stack web development",
  "Educational technology & e-learning",
  "Data analysis & data visualization",
  "Research & scientific publication",
  "UI/UX design & design systems",
  "Human-computer interaction",
  "Building technology that supports learning"
  ],
}

export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  { title: 'Frontend',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'Chart.js'],
  },
  { title: 'Backend',
    skills: [ 'PHP'],
  },
  { title: 'Database',
    skills: [ 'MySQL'],
  },
  { title: 'Research & Data',
    skills: ['Microsoft Excel', 'SPSS', 'Biblioshiny', 'VOSviewer'],
  },
  { title: 'Tools',
    skills: [ 'Git', 'GitHub', 'VS Code', 'Figma', 'Canva', 'XAMPP', 'Microsoft Word', 'Microsoft PowerPoint'],
  },
];

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  role: string
  github?: string
  demo?: string
  figma?: string
}

export const projects: Project[] = [
  {
    title: 'TOEFL Arena',
    description:
      'A Roblox-based educational game designed to help students prepare for the TOEFL exam through interactive gameplay, developed using the Game Development Life Cycle (GDLC) methodology.',
    image: '/projects/Roblox.png',
    tech: ['Roblox Studio', 'Lua', 'Canva'],
    role: 'Game Developer',
    github: 'https://github.com/RahmawatiSalsabila/toefl-arena',
    demo: 'https://toefl-arena.example.com',
  },
  {
    title: 'SiRekap',
    description:
      'A personal finance management web application for managing income, expenses, budgeting, and cash flow. Contributed to the development of the Home dashboard and Navigation system, integrating frontend interfaces with backend functionality for a seamless user experience.',
    image: '/projects/sirekap.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    role: 'Frontend & Backend Developer',
    github: 'https://github.com/RahmawatiSalsabila/sirekap',
  },
  {
    title: 'WikiKamus Redesign',
    description:
      'A complete UX redesign of an online dictionary — faster search, cleaner typography, and a reading experience that feels calm and focused.',
    image: '/projects/wikikamus.png',
    tech: ['Canva', 'Figma'],
    role: 'UI/UX & Frontend',
    figma: 'https://www.figma.com/design/S3xrZeEAWunGNlHzreaFq2/IMK-KELOMPOK-6?node-id=46-2&t=ndJxaxr2MEI2Vbo8-1',
    demo: 'https://www.figma.com/proto/S3xrZeEAWunGNlHzreaFq2/IMK-KELOMPOK-6?node-id=570-3936&p=f&viewport=357%2C-1391%2C0.35&t=EzE5hwerWgFz7MiP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=570%3A3919&page-id=46%3A2',
  },
  {
    title: 'Matika Ceria',
    description:
      'A playful math learning game for children, turning arithmetic drills into colorful, rewarding challenges that keep young learners engaged.',
    image: '/projects/matika.png',
    tech: ['PHP', 'JavaScript', 'MySQL'],
    role: 'Full-Stack Developer',
    github: 'https://github.com/RahmawatiSalsabila/matika-ceria',
    demo: 'https://matika-ceria.example.com',
  },
  {
   title: 'ArtistryHub',
   description:
     'A booking and discovery platform connecting makeup artists with clients, featuring portfolio browsing, availability scheduling, and seamless appointment booking.',
   image: '/projects/artistry.png',
   tech: ['Figma'],
   role: 'UI/UX Designer',
   figma: 'https://www.figma.com/file/3N22KSNlERlsSaqZJxDBE4/ArtistryHub?node-id=0-1&t=FM4IUUGOTgURejUY-1',
   demo: 'https://www.figma.com/proto/3N22KSNlERlsSaqZJxDBE4/ArtistryHub?node-id=1-324&p=f&viewport=6931%2C-1355%2C0.48&t=jd48t2OCkNbk9W3s-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1716&show-proto-sidebar=1&page-id=0%3A1',
  },
  {
   title: 'Evidence Data Hunt',
   description:
     'Developed a 2D educational game using Unity and C# to support statistics learning for 9th-grade students. The game combines interactive gameplay, learning materials, instructional videos, and quizzes to improve students’ understanding of mean, median, and mode through an engaging pixel-art experience.',
   image: '/projects/unity.png',
   tech: ['Unity', 'C#', 'Canva'],
   role: 'Game Developer & Game Designer',
   github: 'https://github.com/RahmawatiSalsabila/Evidance-Data-Hunt',
}
]

export type Research = {
  title: string
  description: string
  keywords: string[]
  status: string
  year: string
}

export const research: Research[] = [
  {
    title: 'Immersive TOEFL Preparation in the Metaverse: Usability and Navigability of a Roblox-Based Game Developed via GDLC',
    description:
      'An R&D study developing a Roblox-based TOEFL learning game using the Game Development Life Cycle (GDLC) and evaluating its usability and navigability through formative evaluation. The results show high user satisfaction and demonstrate the effectiveness of immersive game-based learning for TOEFL preparation.',
    keywords: ['Roblox', 'TOEFL', 'Metaverse', 'Game-Based Learning', 'GDLC'],
    status: 'Published',
    year: '2026',
  },
  {
    title: 'The Transformation of Teachers Digital Competence in Online Learning: Analysis of Success Factors and Implementation Challenges',
    description:
      'A systematic literature review analyzing the transformation of teachers digital competence in online and blended learning. The study identifies key success factors, implementation challenges, and dominant frameworks such as TPACK and DigCompEdu for effective technology integration in education.',
    keywords: ['Online Learning', 'Systematic Literature Review', 'Teacher Digital Competence', 'TPACK'],
    status: 'Published',
    year: '2025',
  },
]

export type Experience = {
  role: string
  organization: string
  period: string
  type: 'Internship' | 'Freelance' | 'Organization' | 'Event'
  description: string
}

export const experiences: Experience[] = [
  {
    role: 'Head of Entrepreneurship & Sponsorship Department',
    organization: 'HIMA PSTI',
    period: '2024 – 2025',
    type: 'Organization',
    description:
    'Managed departmental programs, coordinated sponsorship partnerships, led fundraising initiatives, and collaborated with student committees to support organizational activities.',
  },
  {
    role: 'Head of Sponsorship Division',
    organization: 'MIKASI ESTIFEST 2025 - HIMA PSTI',
    period: '2025',
    type: 'Event',
    description:
      'Led the Sponsorship Division by securing partnerships, communicating with potential sponsors, preparing sponsorship proposals, and coordinating sponsorship activities to support the successful execution of MIKASI 2025.',
  },
]

export type Certificate = {
  title: string
  issuer: string
  image: string
}

export const certificates: Certificate[] = [
  {
    title: 'Apple Teacher',
    issuer: 'Apple Education',
    image: '/certificates/sertifikat-apple-teacher.png',
  },
  {
    title: 'AI-Powered Digital Marketing for Entrepreneurs',
    issuer: 'Digital Entrepreneurship Academy (Komdigi)',
    image: '/certificates/test.png',
  },
  {
    title: 'Chat Application for Beginner Entrepreneurs',
    issuer: 'Digital Talent Scholarship (Komdigi)',
    image: '/certificates/sertifikat-digitalent.png',
  },
  {
    title: 'Microsoft Online Course Workshop',
    issuer: 'Microsoft & Virtual Edu Academy',
    image: '/certificates/sertifikat-online-course-microsoft.png',
  },
  {
    title: 'Intro to Digital Marketing',
    issuer: 'RevoU',
    image: '/certificates/sertifikat-digital-marketing.png',
  },
]