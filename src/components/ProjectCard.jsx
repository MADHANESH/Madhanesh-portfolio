import TechnologyLogo from './TechnologyLogo.jsx'

function ProjectCard({ project }) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="project-card glow-card"
      id={project.id}
      tabIndex={0}
    >
      {project.image ? (
        <img
          alt={`${project.name} project`}
          className="project-image"
          loading="lazy"
          src={project.image}
        />
      ) : (
        <div aria-hidden="true" className={`project-art ${project.artClassName}`}>
          <span className="project-art-mark">{project.mark}</span>
          <span className="project-art-line" />
        </div>
      )}
      <div className="project-content">
        <div className="project-meta">
          <div className="project-meta-heading">
            <p className="project-type">{project.categoryLabel}</p>
            {project.category === 'professional' ? (
              <img
                alt="Vasara AI Labs logo"
                className="project-company-logo"
                src="/vasara-logo.png"
              />
            ) : project.category === 'academic' ? (
              <img
                alt="Adhiyamaan College of Engineering logo"
                className="project-college-logo"
                src="/college-logo.png"
              />
            ) : null}
          </div>
          <h3 id={`${project.id}-title`}>{project.name}</h3>
          <p className="project-category">{project.shortDescription}</p>
        </div>
        {project.technologies.length > 0 && (
          <div className="project-detail">
            <h4>Technologies</h4>
            <ul aria-label={`${project.name} technologies`} className="project-technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <TechnologyLogo technology={technology} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {project.url && (
          <div className="project-links">
            <a href={project.url} rel="noreferrer" target="_blank">
              View project
            </a>
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
