import {
  siApachekafka,
  siApachemaven,
  siCss,
  siEthereum,
  siExpress,
  siFigma,
  siGit,
  siGithub,
  siGoogle,
  siHibernate,
  siHtml5,
  siJavascript,
  siJenkins,
  siMongodb,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siSpringboot,
  siVercel,
  siWeb3dotjs,
} from 'simple-icons'

const icons = {
  apachekafka: siApachekafka,
  apachemaven: siApachemaven,
  css3: siCss,
  ethereum: siEthereum,
  express: siExpress,
  figma: siFigma,
  git: siGit,
  github: siGithub,
  google: siGoogle,
  hibernate: siHibernate,
  html5: siHtml5,
  javascript: siJavascript,
  jenkins: siJenkins,
  mongodb: siMongodb,
  nodedotjs: siNodedotjs,
  postgresql: siPostgresql,
  postman: siPostman,
  python: siPython,
  react: siReact,
  springboot: siSpringboot,
  vercel: siVercel,
  web3dotjs: siWeb3dotjs,
}

const imageByKey = {
  adobexd: '/technology-logos/adobe-xd.svg',
  adobeillustrator: '/technology-logos/adobe-illustrator.svg',
  java: '/technology-logos/java.svg',
}

const iconByName = {
  'Adobe XD': 'adobexd',
  'Adobe Illustrator': 'adobeillustrator',
  'Apache Kafka': 'apachekafka',
  CSS3: 'css3',
  Figma: 'figma',
  Ethereum: 'ethereum',
  Express: 'express',
  Git: 'git',
  GitHub: 'github',
  'Google OAuth': 'google',
  Hibernate: 'hibernate',
  HTML5: 'html5',
  Java: 'java',
  JavaScript: 'javascript',
  Jenkins: 'jenkins',
  MongoDB: 'mongodb',
  'Node.js': 'nodedotjs',
  PostgreSQL: 'postgresql',
  Postman: 'postman',
  Python: 'python',
  React: 'react',
  'Spring Boot': 'springboot',
  Vercel: 'vercel',
  Web3: 'web3dotjs',
}

const markByName = {
  'Microservices': 'MS',
  'REST API': 'API',
  'REST APIs': 'API',
  'Spring Data JPA': 'JPA',
  SQL: 'SQL',
}

function TechnologyLogo({ technology }) {
  const name = typeof technology === 'string' ? technology : technology.name
  const iconName = typeof technology === 'string'
    ? iconByName[name]
    : technology.icon ?? iconByName[name]
  const icon = iconName ? icons[iconName] : null
  const image = iconName ? imageByKey[iconName] : null
  const mark = typeof technology === 'string'
    ? markByName[name]
    : technology.mark ?? markByName[name]

  return (
    <span
      aria-label={name}
      className={[
        'technology-logo',
        icon || image ? '' : 'technology-logo--text',
        iconName === 'github' || iconName === 'vercel'
          ? 'technology-logo--contrast'
          : '',
      ].filter(Boolean).join(' ')}
      title={name}
    >
      {image ? (
        <img alt={`${name} logo`} src={image} />
      ) : icon ? (
        <svg
          aria-label={`${name} logo`}
          role="img"
          viewBox="0 0 24 24"
        >
          <path d={icon.path} fill={`#${icon.hex}`} />
        </svg>
      ) : (
        <span aria-hidden="true">{mark ?? name.slice(0, 3).toUpperCase()}</span>
      )}
      <span className="technology-logo-name">{name}</span>
    </span>
  )
}

export default TechnologyLogo
