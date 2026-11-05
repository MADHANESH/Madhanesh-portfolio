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
          <article className="education-item glow-card" key={item.id} tabIndex={0}>
            <img
              alt="Adhiyamaan College of Engineering logo"
              className="education-logo"
              src="/college-logo.png"
            />
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
