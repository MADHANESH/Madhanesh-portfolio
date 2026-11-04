import { skillGroups } from '../data/portfolio.js'

function SkillsSection() {
  return (
    <section aria-labelledby="skills-title" className="skills-section" id="skills">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Tools I work with</p>
            <h2 id="skills-title">Technical skills<span className="accent">.</span></h2>
          </div>
          <p className="section-note">
            A practical toolkit for
            <br />
            backend and integration work.
          </p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.id}>
              <h3>{group.name}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
