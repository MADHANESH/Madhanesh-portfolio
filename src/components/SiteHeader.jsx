import { useRef, useState } from 'react'
import { navigation, profile } from '../data/portfolio.js'

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeMenu()
      menuButtonRef.current?.focus()
    }
  }

  function toggleMenu() {
    setMenuOpen((isOpen) => !isOpen)
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <a
        aria-label={`${profile.name} with ${profile.company}, home`}
        className="header-brand-lockup"
        href="#home"
        onClick={closeMenu}
      >
        <span className="wordmark">
          MS<span>.</span>
        </span>
        <span aria-hidden="true" className="header-brand-connector">×</span>
        <img
          alt={`${profile.company} logo`}
          className="header-company-logo"
          src={profile.companyLogo}
        />
      </a>
      <button
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        onClick={toggleMenu}
        ref={menuButtonRef}
        type="button"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav
        aria-label="Main navigation"
        className={`main-nav${menuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
      >
        {navigation.map((item) => (
          <a
            href={item.href}
            key={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default SiteHeader
