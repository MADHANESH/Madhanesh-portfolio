import ArrowIcon from './ArrowIcon.jsx'

function HeroSection() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span aria-hidden="true" className="availability-dot" />
          Associate Software Developer · Vasara AI Labs
        </p>
        <h1>
          Software
          <br />
          developer<span className="accent">.</span>
        </h1>
        <p className="hero-description">
          I&apos;m Madhanesh, a software developer who enjoys turning ideas into
          useful, thoughtful digital experiences.
        </p>
        <a className="text-link" href="#work">
          Explore my work <ArrowIcon />
        </a>
      </div>
      <div aria-hidden="true" className="hero-visual">
        <div className="orbit orbit--one" />
        <div className="orbit orbit--two" />
        <div className="hero-sun" />
        <div className="hero-card">
          <span className="hero-card-kicker">A little bit of</span>
          <span className="hero-card-title">
            curiosity
            <br />
            goes a long way.
          </span>
          <span className="hero-card-mark">*</span>
        </div>
        <span className="visual-caption">SOFTWARE · CURIOSITY · CONTINUOUS LEARNING</span>
      </div>
      <a className="scroll-cue" href="#work">
        <span aria-hidden="true" className="scroll-line" />
        Scroll to explore
      </a>
    </section>
  )
}

export default HeroSection
