import ArrowIcon from './ArrowIcon.jsx'
import { profile } from '../data/portfolio.js'

function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className="contact-section" id="contact">
      <div className="section-wrap">
        <p className="eyebrow">Get in touch</p>
        <h2 id="contact-title">
          Let&apos;s build
          <br />
          something useful<span className="accent">.</span>
        </h2>
        <p className="contact-intro">
          For backend engineering opportunities, collaborations, or a conversation
          about software, reach out.
        </p>
        <div className="contact-actions">
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowIcon diagonal />
          </a>
          <a
            className="button button--secondary"
            href={profile.github.url}
            rel="noreferrer"
            target="_blank"
          >
            View GitHub <ArrowIcon diagonal />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
