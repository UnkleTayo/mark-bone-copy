import { FaInstagram, FaVimeo, FaYoutube } from 'react-icons/fa'
import './styles.scss'

const Footer = () => {
  return (
    <section className="Footer">
      <div className="social-links">
        <a href="/">
          <FaVimeo />
        </a>
        <a href="/">
          <FaInstagram />
        </a>{' '}
        <a href="/">
          <FaYoutube />
        </a>
      </div>
    </section>
  )
}

export default Footer
