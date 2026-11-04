import { projectCategories, projects } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.jsx'

function WorkSection() {
  return (
    <section aria-labelledby="projects-title" className="work-section section-wrap" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title">Projects<span className="accent">.</span></h2>
        </div>
        <p className="section-note">
          Detailed project showcases,
          <br />
          separate from employment history.
        </p>
      </div>
      {projectCategories.map((group) => {
        const groupProjects = projects.filter(
          (project) => project.category === group.category,
        )

        if (groupProjects.length === 0) {
          return null
        }

        return (
          <section
            aria-labelledby={`${group.id}-title`}
            className={`project-group project-group--${group.category}`}
            key={group.id}
          >
            <header className="project-group-heading">
              <div>
                <p className="eyebrow">{group.eyebrow}</p>
                <h3 id={`${group.id}-title`}>{group.title}</h3>
              </div>
              <p>{group.description}</p>
            </header>
            <div className="project-grid">
              {groupProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )
      })}
    </section>
  )
}

export default WorkSection
