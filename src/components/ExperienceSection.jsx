import { experience } from '../data/portfolio.js'

function ExperienceSection() {
  return (
    <section aria-labelledby="experience-title" className="experience-section">
      <div className="experience-inner section-wrap">
        <div className="experience-heading">
          <p className="eyebrow">Where I&apos;ve been</p>
          <h2 id="experience-title">
            Experience<span className="accent">.</span>
          </h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.id}>
              <p className="experience-type">{item.type}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="experience-organization">{item.organization}</p>
                <p className="experience-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
