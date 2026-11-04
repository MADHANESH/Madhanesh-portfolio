export const profile = {
  name: 'Madhaneshwaran M. S.',
  role: 'Associate Software Engineer',
  company: 'Vasara AI Labs',
  experience: 'About one year of professional software development experience',
  email: 'madhaneshwwaranmadhan@gmail.com',
  github: {
    label: 'GitHub',
    url: 'https://github.com/MADHANESH',
  },
  summary:
    'I build Java and Spring Boot backend services, design REST APIs, and connect applications with databases and external services. I enjoy solving practical engineering problems and working across the API, data, and integration layers.',
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
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
  },
  {
    id: 'data',
    name: 'Data and persistence',
    skills: ['PostgreSQL', 'SQL'],
  },
  {
    id: 'integration',
    name: 'Integrations and messaging',
    skills: ['Google OAuth', 'Authentication and authorization', 'Apache Kafka'],
  },
  {
    id: 'tools',
    name: 'Tools and collaboration',
    skills: ['Maven', 'Git and GitHub', 'Postman', 'React integration'],
  },
]

export const experience = [
  {
    id: 'vasara-ai-labs',
    role: 'Associate Software Engineer',
    organization: 'Vasara AI Labs',
    period: '[Add employment dates]',
    duration: 'Approximately 1 year',
    kind: 'Full-time role',
    responsibilities: [
      'Develop backend services and REST APIs using Java and Spring Boot.',
      'Contribute to service integration and database-backed application workflows.',
    ],
    projects: [
      { id: 'raize-connect', name: 'Raize Connect' },
      { id: 'mayil-mayil', name: 'Mayil-Mayil (M&M)' },
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Microservices',
      'PostgreSQL',
      'Spring Data JPA / Hibernate',
      'React',
      'Google OAuth',
      'Apache Kafka',
      'Maven',
      'Git / GitHub',
      'Postman',
      'DevOps workflows',
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
    title: 'Academic Projects',
    description:
      'Projects developed as part of my academic learning and college experience.',
  },
  {
    id: 'unclassified-projects',
    category: 'unconfirmed',
    eyebrow: 'Category to confirm',
    title: 'Other Existing Projects',
    description:
      'These existing projects are preserved here until their academic or professional category is confirmed.',
  },
]

export const projects = [
  {
    id: 'raize-connect',
    name: 'Raize Connect',
    category: 'professional',
    categoryLabel: 'Company project',
    shortDescription: 'Project description to be added.',
    overview: 'Project overview to be added.',
    role: 'Role to be added.',
    contribution: '[Add your contribution to this project.]',
    technologies: ['Technologies to be added.'],
    keyFeatures: ['Key features to be added.'],
    image: null,
    url: null,
    artClassName: 'project-art--raize',
    mark: 'RC',
  },
  {
    id: 'mayil-mayil',
    name: 'Mayil-Mayil (M&M)',
    category: 'professional',
    categoryLabel: 'Company project',
    shortDescription:
      'E-commerce platform with backend work spanning catalog and inventory services.',
    overview:
      'Professional contributions to catalog and inventory services, REST APIs, and integrations supporting e-commerce and CRM workflows.',
    role: 'Software development contributor',
    contribution: [
      'Contributed to REST APIs for catalog and inventory workflows.',
      'Worked on service integrations across e-commerce and CRM use cases.',
    ],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'SQL'],
    keyFeatures: [
      'Catalog and inventory service workflows.',
      'Backend integrations for e-commerce and CRM use cases.',
    ],
    image: null,
    url: null,
    artClassName: 'project-art--commerce',
    mark: 'M&M',
  },
  {
    id: 'sales-hub',
    name: 'Sales Hub',
    category: 'academic',
    categoryLabel: 'College project',
    shortDescription: 'Project description to be added.',
    overview: 'Project overview to be added.',
    role: 'Role to be added.',
    contribution: '[Add your contribution to this project.]',
    technologies: ['Technologies to be added.'],
    keyFeatures: ['Key features to be added.'],
    image: null,
    url: null,
    artClassName: 'project-art--sales',
    mark: 'SH',
  },
  {
    id: 'resume-review',
    name: 'Resume Review Application',
    category: 'unconfirmed',
    categoryLabel: 'Category to confirm',
    shortDescription:
      'A web application for reviewing resumes, with a React interface and Python in the stack.',
    overview:
      'A resume-review web application listed on the existing portfolio. Its academic or professional classification has not been confirmed.',
    role: 'Role to be added.',
    contribution: '[Add your contribution to this project.]',
    technologies: ['React', 'Python'],
    keyFeatures: ['Resume review workflow.'],
    image: null,
    url: 'https://smart-resume-analyzer-web.vercel.app',
    artClassName: 'project-art--resume',
    mark: 'CV',
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/MADHANESH/react-resume-review-web-application',
      },
    ],
  },
  {
    id: 'pharmaceutical-supply-chain',
    name: 'Pharmaceutical Supply Chain',
    category: 'unconfirmed',
    categoryLabel: 'Category to confirm',
    shortDescription:
      'A blockchain-based project exploring pharmaceutical product traceability across a supply chain.',
    overview:
      'A web application concept for tracking pharmaceutical product movement and transactions using Ethereum. Its academic or professional classification has not been confirmed.',
    role: 'Role to be added.',
    contribution: '[Add your contribution to this project.]',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Web3'],
    keyFeatures: [
      'Blockchain-based records for pharmaceutical product movement.',
    ],
    image: null,
    url: 'https://pharmaceutical-supply.vercel.app/',
    artClassName: 'project-art--supply',
    mark: 'SC',
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/MADHANESH/Pharmaceutical-Supply-chain-management-using-Ethereum-Blockchain-main',
      },
    ],
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
