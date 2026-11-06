import { profile } from '../data/portfolio.js'

const currentYear = new Date().getFullYear()

function SiteFooter() {
  return (
    <footer className="site-footer section-wrap">
      <a aria-label={`${profile.name}, back to top`} className="wordmark" href="#home">
        MS<span>.</span>
      </a>
      <div className="site-footer__meta">
        <p>{profile.name} · Java Backend Developer</p>
        <p>© {currentYear} {profile.name}. All rights reserved.</p>
      </div>
      <a href="#home">Back to top ↑</a>
    </footer>
  )
}

export default SiteFooter
