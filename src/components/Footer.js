import { footerLink, socialLink } from '../data'
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerLink.map((link) => {
          return (
            <li id={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLink.map((link) => {
          return (
            <li id={link.id}>
              <a
                href={link.href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={link.text}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
