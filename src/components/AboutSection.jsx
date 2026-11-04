import { skills } from '../data/portfolio.js'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner section-wrap">
        <div className="about-heading">
          <p className="eyebrow">About Madhanesh</p>
          <h2>
            Growing as a
            <br />
            developer<span className="accent">.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m an Associate Software Developer at Vasara AI Labs. I enjoy
            solving problems, learning new technologies, and building useful
            software. My internship experience helped me develop a practical
            foundation and a curiosity for how great products are made.
          </p>
          <ul aria-label="Skills" className="skills-list">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
