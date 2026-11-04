import { useState } from 'react'
import ArrowIcon from './ArrowIcon.jsx'

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeMenu()
    }
  }

  function toggleMenu() {
    setMenuOpen((isOpen) => !isOpen)
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <a
        aria-label="Madhanesh, home"
        className="wordmark"
        href="#home"
        onClick={closeMenu}
      >
        M<span>.</span>
      </a>
      <button
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        onClick={toggleMenu}
        type="button"
      >
        <span />
        <span />
      </button>
      <nav
        aria-label="Main navigation"
        className={`main-nav${menuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
      >
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>
          Let&apos;s talk <ArrowIcon diagonal />
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
