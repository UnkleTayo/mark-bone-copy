import { FaInstagram, FaVimeo, FaYoutube } from 'react-icons/fa'
import './styles.scss'

const Footer = () => {
  return (
    <section className="Footer">
      <div className="social-links">
        <a href="https://vimeo.com/ezicfilmworks">
          <FaVimeo />
        </a>
        <a href="https://www.instagram.com/ezicfilmworks">
          <FaInstagram />
        </a>{' '}
        <a href="https://youtube.com/c/EzekiahAkande">
          <FaYoutube />
        </a>
      </div>
    </section>
  )
}

export default Footer
