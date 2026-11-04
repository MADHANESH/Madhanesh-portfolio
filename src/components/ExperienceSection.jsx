import { experience } from '../data/portfolio.js'

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
            Employment and internship experience, separate from project showcases.
          </p>
        </div>
        <ol className="experience-list">
          {experience.map((item) => (
            <li className="experience-item" key={item.id}>
              <article>
                <div className="experience-item-heading">
                  <div>
                    <p className="experience-type">{item.kind}</p>
                    <h3>{item.role}</h3>
                    <p className="experience-organization">{item.organization}</p>
                  </div>
                  <div className="experience-dates">
                    <p className="experience-period">{item.period}</p>
                    {item.duration && (
                      <p className="experience-duration">{item.duration}</p>
                    )}
                  </div>
                </div>
                {item.responsibilities ? (
                  <>
                    <ul className="experience-highlights">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                    <div className="experience-projects">
                      <span>Project involvement</span>
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
                      <ul aria-label={`${item.organization} technology stack`}>
                        {item.technologies.map((technology) => (
                          <li key={technology}>{technology}</li>
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
