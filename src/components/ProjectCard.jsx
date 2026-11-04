import ArrowIcon from './ArrowIcon.jsx'

function ProjectCard({ project }) {
  const projectDetails = [
    {
      label: 'My contribution',
      items: Array.isArray(project.contribution)
        ? project.contribution
        : [project.contribution],
    },
    { label: 'Key features', items: project.keyFeatures },
  ]

  return (
    <article aria-labelledby={`${project.id}-title`} className="project-card" id={project.id}>
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
          <p className="project-type">{project.categoryLabel}</p>
          <h3 id={`${project.id}-title`}>{project.name}</h3>
          <p className="project-category">{project.shortDescription}</p>
        </div>
        <div className="project-overview">
          <h4>Overview</h4>
          <p>{project.overview}</p>
        </div>
        <div className="project-role">
          <h4>My role</h4>
          <p>{project.role}</p>
        </div>
        {projectDetails.map(({ label, items }) => (
          <div className="project-detail" key={label}>
            <h4>{label}</h4>
            <ul>
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
        <div className="project-detail">
          <h4>Technologies</h4>
          <ul aria-label={`${project.name} technologies`} className="project-technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
        {(project.url || project.links?.length > 0) && (
          <div className="project-links">
            {project.url && (
              <a href={project.url} rel="noreferrer" target="_blank">
                Public project <ArrowIcon diagonal />
              </a>
            )}
            {project.links?.map((link) => (
              <a
                href={link.url}
                key={link.url}
                rel="noreferrer"
                target="_blank"
              >
                {link.label} <ArrowIcon diagonal />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
