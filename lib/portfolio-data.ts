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
    title: 'Gamification in TOEFL Preparation: Impact on Learner Motivation',
    description:
      'An empirical study measuring how game mechanics — points, streaks, and leaderboards — affect motivation and retention among TOEFL learners.',
    keywords: ['Gamification', 'EdTech', 'Motivation', 'Assessment'],
    status: 'Published',
    year: '2024',
  },
  {
    title: 'Designing Accessible E-Learning Interfaces for Young Learners',
    description:
      'Exploring UI/UX principles that improve accessibility and comprehension in educational web apps built for children.',
    keywords: ['Accessibility', 'UI/UX', 'E-Learning', 'Child-Centered Design'],
    status: 'Under Review',
    year: '2024',
  },
  {
    title: 'Laravel-Based Information Systems for School Administration',
    description:
      'A case study on building maintainable, secure school administration systems using the Laravel framework and MySQL.',
    keywords: ['Laravel', 'Information Systems', 'Software Engineering'],
    status: 'In Progress',
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
    role: 'Web Developer Intern',
    organization: 'Digital Solutions Studio',
    period: 'Jun 2024 — Dec 2024',
    type: 'Internship',
    description:
      'Built and maintained client web applications with Laravel and Tailwind CSS, collaborating with designers to ship responsive, accessible interfaces.',
  },
  {
    role: 'Freelance Web Developer',
    organization: 'Self-Employed',
    period: '2023 — Present',
    type: 'Freelance',
    description:
      'Delivered custom websites and booking systems for small businesses, handling everything from design to deployment.',
  },
  {
    role: 'Head of Tech Division',
    organization: 'Student Information Systems Association',
    period: '2023 — 2024',
    type: 'Organization',
    description:
      'Led a team of student developers, organized coding workshops, and mentored peers on web development fundamentals.',
  },
  {
    role: 'Speaker — Intro to Web Development',
    organization: 'Campus Tech Week',
    period: 'Oct 2023',
    type: 'Event',
    description:
      'Delivered a hands-on session introducing HTML, CSS, and JavaScript to over 80 first-year students.',
  },
]

export type Certificate = {
  title: string
  issuer: string
  image: string
}

export const certificates: Certificate[] = [
  { title: 'Web Development Fundamentals', issuer: 'Dicoding Academy', image: '/certificates/cert-web.png' },
  { title: 'Laravel Backend Development', issuer: 'BuildWithAngga', image: '/certificates/cert-laravel.png' },
  { title: 'UI/UX Design Workshop', issuer: 'Figma Community', image: '/certificates/cert-uiux.png' },
  { title: 'Educational Technology Seminar', issuer: 'State University', image: '/certificates/cert-teaching.png' },
  { title: 'Database Management with MySQL', issuer: 'Coursera', image: '/certificates/cert-database.png' },
  { title: 'Git & Version Control', issuer: 'GitHub Education', image: '/certificates/cert-git.png' },
]
