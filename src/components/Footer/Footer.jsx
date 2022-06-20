import { FaInstagram, FaVimeo, FaYoutube } from 'react-icons/fa';
import './styles.scss';

const Footer = () => {
  return (
    <section className="Footer">
      <div className="social-links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://vimeo.com/ezicfilmworks"
        >
          <FaVimeo size={24} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/ezicfilmworks"
        >
          <FaInstagram size={24} />
        </a>{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://youtube.com/c/EzekiahAkande"
        >
          <FaYoutube size={24} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
