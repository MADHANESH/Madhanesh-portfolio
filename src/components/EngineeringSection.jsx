import { engineeringAreas } from '../data/portfolio.js'

function EngineeringSection() {
  return (
    <section
      aria-labelledby="engineering-title"
      className="engineering-section"
      id="engineering"
    >
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How I approach the work</p>
            <h2 id="engineering-title">
              Backend engineering<span className="accent">.</span>
            </h2>
          </div>
        </div>
        <div className="engineering-grid">
          {engineeringAreas.map((area, index) => (
            <article className="engineering-item glow-card" key={area.id} tabIndex={0}>
              <span aria-hidden="true" className="engineering-index">
                0{index + 1}
              </span>
              <h3>{area.name}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EngineeringSection
