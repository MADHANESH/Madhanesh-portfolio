import { education } from '../data/portfolio.js'

function EducationSection() {
  return (
    <section
      aria-labelledby="education-title"
      className="education-section section-wrap"
      id="education"
    >
      <div>
        <p className="eyebrow">Academic background</p>
        <h2 id="education-title">Education<span className="accent">.</span></h2>
      </div>
      <div className="education-list">
        {education.map((item) => (
          <article className="education-item" key={item.id}>
            <div>
              <h3>{item.qualification}</h3>
              <p>{item.institution}</p>
            </div>
            <span>{item.period}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
