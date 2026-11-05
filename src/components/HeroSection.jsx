import { useEffect, useState } from 'react'
import ArrowIcon from './ArrowIcon.jsx'
import { getExperienceDuration, profile } from '../data/portfolio.js'

function HeroSection() {
  const [typedName, setTypedName] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedName(profile.name)
      return
    }

    let characterIndex = 0
    let timeoutId
    const typeNextCharacter = () => {
      characterIndex += 1
      setTypedName(profile.name.slice(0, characterIndex))

      if (characterIndex < profile.name.length) {
        timeoutId = window.setTimeout(typeNextCharacter, 55)
      }
    }

    timeoutId = window.setTimeout(typeNextCharacter, 160)
    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow hero-name">
          <span className="visually-hidden">{profile.name}</span>
          <span aria-hidden="true">
            {typedName}
            {typedName.length < profile.name.length && <span className="typing-cursor" />}
          </span>
        </p>
        <p className="eyebrow hero-eyebrow">
          <span className="eyebrow-rule" />
          {profile.role} <span aria-hidden="true">/</span> {profile.company}
        </p>
        <h1>
          Java backend
          <br />
          engineer<span className="accent">.</span>
        </h1>
        <p className="hero-description">
          {profile.summary}
        </p>
        <p className="hero-experience">
          {getExperienceDuration(profile.experienceStartDate)} of professional experience
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#projects">
            View projects <ArrowIcon />
          </a>
          <a className="button button--secondary" href="#contact">
            Contact me
          </a>
        </div>
      </div>
      <div aria-hidden="true" className="hero-visual">
        <div className="code-window">
          <div className="code-window-bar">
            <span />
            <span />
            <span />
            <p>Engineering focus</p>
          </div>
          <div className="focus-list">
            <div className="focus-item">
              <span className="focus-index">01</span>
              <span className="focus-label">Backend</span>
              <span className="focus-value">Java · Spring Boot</span>
            </div>
            <div className="focus-item">
              <span className="focus-index">02</span>
              <span className="focus-label">API engineering</span>
              <span className="focus-value">REST · Microservices</span>
            </div>
            <div className="focus-item">
              <span className="focus-index">03</span>
              <span className="focus-label">Data</span>
              <span className="focus-value">PostgreSQL · SQL</span>
            </div>
            <div className="focus-item">
              <span className="focus-index">04</span>
              <span className="focus-label">Integrations</span>
              <span className="focus-value">OAuth · Kafka · React</span>
            </div>
          </div>
          <div className="code-window-status">
            <span>JAVA</span>
            <span>SPRING BOOT · REST</span>
          </div>
        </div>
        <span className="hero-orbit hero-orbit--one" />
        <span className="hero-orbit hero-orbit--two" />
        <span className="hero-visual-label">ENGINEERING, WITH INTENTION</span>
      </div>
    </section>
  )
}

export default HeroSection
