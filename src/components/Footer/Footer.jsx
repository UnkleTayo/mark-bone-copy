import { FaInstagram, FaVimeo, FaYoutube } from 'react-icons/fa'
import './styles.scss'

const Footer = () => {
  return (
    <section className="Footer">
      <div className="social-links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://vimeo.com/ezicfilmworks"
        >
          <FaVimeo />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/ezicfilmworks"
        >
          <FaInstagram />
        </a>{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://youtube.com/c/EzekiahAkande"
        >
          <FaYoutube />
        </a>
      </div>
    </section>
  )
}

export default Footer
