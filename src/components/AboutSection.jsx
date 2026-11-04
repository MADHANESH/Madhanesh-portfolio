import ArrowIcon from './ArrowIcon.jsx'

function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="about-section section-wrap" id="about">
      <div className="about-heading">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">
          Practical software.
          <br />
          Thoughtful engineering<span className="accent">.</span>
        </h2>
      </div>
      <div className="about-copy">
        <p>
          With about one year in professional software development, I focus on
          practical backend work: clear API boundaries, reliable data flows, and
          integrations that are straightforward to maintain.
        </p>
        <p>
          I hold a B.E. in Computer Science and Engineering from Adhiyamaan
          College of Engineering, and bring a hands-on approach to learning and
          solving real product problems.
        </p>
        <a className="inline-link" href="#experience">
          Explore my experience <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

export default AboutSection
