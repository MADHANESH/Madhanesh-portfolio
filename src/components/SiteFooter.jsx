import { profile } from '../data/portfolio.js'

function SiteFooter() {
  return (
    <footer className="site-footer section-wrap">
      <a aria-label={`${profile.name}, back to top`} className="wordmark" href="#home">
        MS<span>.</span>
      </a>
      <p>{profile.name} · Java Backend Developer</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  )
}

export default SiteFooter
