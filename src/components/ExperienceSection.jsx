import { experience, getExperienceDuration } from '../data/portfolio.js'
import TechnologyLogo from './TechnologyLogo.jsx'

function ExperienceSection() {
  return (
    <section
      aria-labelledby="experience-title"
      className="experience-section"
      id="experience"
    >
      <div className="experience-inner section-wrap">
        <div className="experience-heading">
          <p className="eyebrow">Professional journey</p>
          <h2 id="experience-title">
            Experience<span className="accent">.</span>
          </h2>
          <p className="section-intro">
            Professional experience, separate from project showcases.
          </p>
        </div>
        <ol className="experience-list">
          {experience.map((item) => (
            <li className="experience-item" key={item.id}>
              <article className="glow-card" tabIndex={0}>
                <div className="experience-item-heading">
                  <div>
                    <p className="experience-type">{item.kind}</p>
                    <h3>{item.role}</h3>
                    <p className="experience-organization">{item.organization}</p>
                  </div>
                  <div className="experience-dates">
                    <p className="experience-period">{item.period}</p>
                    {item.startDate && (
                      <p className="experience-duration">
                        {getExperienceDuration(item.startDate)}
                      </p>
                    )}
                    {item.organization === 'Vasara AI Labs' && (
                      <img
                        alt="Vasara AI Labs logo"
                        className="experience-company-logo"
                        src="/vasara-logo.png"
                      />
                    )}
                  </div>
                </div>
                {item.projects ? (
                  <>
                    <div className="experience-projects">
                      <span>Associated projects</span>
                      <ul>
                        {item.projects.map((project) => (
                          <li key={project.id}>
                            <a href={`#${project.id}`}>{project.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="experience-stack">
                      <span>Technology stack</span>
                      <ul
                        aria-label={`${item.organization} technology stack`}
                        className="experience-technologies"
                      >
                        {item.technologies.map((technology) => (
                          <li key={technology.name}>
                            <TechnologyLogo technology={technology} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ExperienceSection
