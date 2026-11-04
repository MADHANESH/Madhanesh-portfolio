import ArrowIcon from './ArrowIcon.jsx'

function ProjectCard({ project, index, total }) {
  const number = String(index + 1).padStart(2, '0')
  const projectTotal = String(total).padStart(2, '0')

  return (
    <article className="project-card">
      <div
        aria-hidden="true"
        className={`project-art ${project.artClassName}`}
      >
        <span className="project-art-index">{number} / {projectTotal}</span>
        <span className="project-art-mark">{project.mark}</span>
        <span className="project-art-note">{project.note}</span>
      </div>
      <div className="project-meta">
        <h3>{project.name}</h3>
        <p>{project.category}</p>
        <span aria-hidden="true" className="project-arrow">
          <ArrowIcon diagonal />
        </span>
      </div>
    </article>
  )
}

export default ProjectCard
