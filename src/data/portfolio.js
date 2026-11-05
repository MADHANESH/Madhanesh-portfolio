export const profile = {
  name: 'Madhaneshwaran M. S.',
  role: 'Associate Software Engineer',
  company: 'Vasara AI Labs',
  companyLogo: '/vasara-logo.png',
  experienceStartDate: '2025-11-01',
  email: 'madhaneshwwaranmadhan@gmail.com',
  summary:
    'I build Java and Spring Boot backend services, design REST APIs, and connect applications with databases and external services. I enjoy solving practical engineering problems and working across the API, data, and integration layers.',
}

export function getExperienceDuration(startDate, now = new Date()) {
  const start = new Date(`${startDate}T00:00:00`)
  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    now.getMonth() - start.getMonth()

  if (now.getDate() < start.getDate()) {
    months -= 1
  }

  months = Math.max(0, months)
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (years === 0) {
    return `${months} ${months === 1 ? 'month' : 'months'}`
  }

  const yearLabel = `${years} ${years === 1 ? 'year' : 'years'}`
  return remainingMonths === 0
    ? yearLabel
    : `${yearLabel} ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    id: 'backend',
    name: 'Backend development',
    skills: [
      { name: 'Java', icon: 'java' },
      { name: 'Spring Boot', icon: 'springboot' },
      { name: 'Spring Data JPA', mark: 'JPA' },
      { name: 'Hibernate', icon: 'hibernate' },
      { name: 'REST API', mark: 'API' },
      { name: 'Microservices', mark: 'MS' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'SQL', mark: 'SQL' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools and DevOps',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Apache Kafka', icon: 'apachekafka' },
      { name: 'Maven', icon: 'apachemaven' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
  {
    id: 'design',
    name: 'Design',
    skills: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Adobe XD', icon: 'adobexd' },
      { name: 'Adobe Illustrator', icon: 'adobeillustrator' },
    ],
  },
]

export const experience = [
  {
    id: 'vasara-ai-labs',
    role: 'Associate Software Engineer',
    organization: 'Vasara AI Labs',
    period: 'November 2025 – Present',
    startDate: profile.experienceStartDate,
    kind: 'Full-time role',
    projects: [
      { id: 'raize-connect', name: 'Raize Connect' },
      { id: 'mayil-mayil', name: 'Mayil-Mayil (M&M)' },
      { id: 'sales-hub', name: 'Sales Hub' },
    ],
    technologies: [
      { name: 'Java', icon: 'java' },
      { name: 'Spring Boot', icon: 'springboot' },
      { name: 'React', icon: 'react' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Spring Data JPA', mark: 'JPA' },
      { name: 'Hibernate', icon: 'hibernate' },
      { name: 'REST APIs', mark: 'API' },
      { name: 'Microservices', mark: 'MS' },
      { name: 'Google OAuth', icon: 'google' },
      { name: 'Apache Kafka', icon: 'apachekafka' },
      { name: 'Maven', icon: 'apachemaven' },
      { name: 'Git', icon: 'git' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
  {
    id: 'make-labs',
    role: 'UI/UX Design Intern',
    organization: 'Make Labs',
    period: 'June – July 2024',
    kind: 'Internship',
    highlights: [
      'Created wireframes for a web application.',
      'Worked with Adobe Illustrator and Adobe XD.',
    ],
  },
  {
    id: 'inspire-softtech',
    role: 'Python for Data Science Intern',
    organization: 'Inspire Softtech Solution',
    period: 'Internship',
    kind: 'Internship',
    highlights: [
      'Worked with Power BI and data visualization.',
    ],
  },
]

export const projectCategories = [
  {
    id: 'professional-projects',
    category: 'professional',
    eyebrow: 'Company projects',
    title: 'Company Projects',
    description:
      'Company projects I contributed to as part of my professional software development experience.',
  },
  {
    id: 'academic-projects',
    category: 'academic',
    eyebrow: 'College projects',
    title: 'College Projects',
    description:
      'Projects developed as part of my academic learning and college experience.',
  },
]

export const projects = [
  {
    id: 'raize-connect',
    name: 'Raize Connect',
    category: 'professional',
    categoryLabel: 'Company Project',
    shortDescription: 'Company project associated with professional experience.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Postman', 'Git'],
    image: null,
    url: null,
    artClassName: 'project-art--raize',
    mark: 'RC',
  },
  {
    id: 'mayil-mayil',
    name: 'Mayil-Mayil (M&M)',
    category: 'professional',
    categoryLabel: 'Company Project',
    shortDescription: 'E-commerce platform project.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'SQL'],
    image: null,
    url: null,
    artClassName: 'project-art--commerce',
    mark: 'M&M',
  },
  {
    id: 'sales-hub',
    name: 'Sales Hub',
    category: 'professional',
    categoryLabel: 'Company Project',
    shortDescription: 'Company project associated with professional experience.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Postman', 'Git'],
    image: null,
    url: null,
    artClassName: 'project-art--sales',
    mark: 'SH',
  },
  {
    id: 'resume-review',
    name: 'Resume Review Application',
    category: 'academic',
    categoryLabel: 'College Project',
    shortDescription:
      'A web application for reviewing resumes, with a React interface and Python in the stack.',
    technologies: ['React', 'Python'],
    image: null,
    url: 'https://smart-resume-analyzer-web.vercel.app',
    artClassName: 'project-art--resume',
    mark: 'CV',
  },
  {
    id: 'pharmaceutical-supply-chain',
    name: 'Pharmaceutical Supply Chain',
    category: 'academic',
    categoryLabel: 'College Project',
    shortDescription:
      'A blockchain-based project exploring pharmaceutical product traceability across a supply chain.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Web3'],
    image: null,
    url: 'https://pharmaceutical-supply.vercel.app/',
    artClassName: 'project-art--supply',
    mark: 'SC',
  },
]

export const engineeringAreas = [
  {
    id: 'api-engineering',
    name: 'API engineering',
    description:
      'Design and implementation of REST APIs for clear contracts between services and client applications.',
  },
  {
    id: 'service-integration',
    name: 'Service integration',
    description:
      'Connecting application services with frontend clients, OAuth flows, and other system integrations.',
  },
  {
    id: 'data-workflows',
    name: 'Data workflows',
    description:
      'Working with PostgreSQL and SQL to support application data and catalog or inventory workflows.',
  },
  {
    id: 'reliable-delivery',
    name: 'Testing and delivery',
    description:
      'Using Maven, Git, and Postman as part of implementation, collaboration, and API validation.',
  },
]

export const education = [
  {
    id: 'adhiyamaan-cse',
    qualification: 'Bachelor of Engineering, Computer Science and Engineering',
    institution: 'Adhiyamaan College of Engineering',
    period: '2021 – 2025',
  },
]
