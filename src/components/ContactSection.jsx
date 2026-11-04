import ArrowIcon from './ArrowIcon.jsx'

function ContactSection() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <p className="eyebrow">Have something in mind?</p>
      <h2>
        Let&apos;s make it
        <br />
        mean something<span className="accent">.</span>
      </h2>
      <a className="contact-link" href="mailto:hello@example.com">
        hello@example.com <ArrowIcon diagonal />
      </a>
    </section>
  )
}

export default ContactSection
