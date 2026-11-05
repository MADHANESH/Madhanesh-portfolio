import { skillGroups } from '../data/portfolio.js'
import TechnologyLogo from './TechnologyLogo.jsx'

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
            <article className="skill-group glow-card" key={group.id}>
              <h3>{group.name}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li className="skill-card" key={skill.name} tabIndex={0}>
                    <TechnologyLogo technology={skill} />
                  </li>
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
