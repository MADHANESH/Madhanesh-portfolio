import { projects } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.jsx'

function WorkSection() {
  return (
    <section className="work-section section-wrap" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A few things I&apos;ve made</p>
          <h2>Selected work<span className="accent">.</span></h2>
        </div>
        <p className="section-note">
          A mix of thoughtful ideas
          <br />
          and hands-on making.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.id}
            project={project}
            total={projects.length}
          />
        ))}
      </div>
      <p className="sample-note">
        Portfolio starter content — replace these sample projects with your own.
      </p>
    </section>
  )
}

export default WorkSection
