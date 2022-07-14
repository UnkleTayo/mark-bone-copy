import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import './style.scss';
import { fadeIn, fadeOut } from '../../animations';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const navRef = useRef();
  const menuRef = useRef();

  showMenu ? fadeIn(navRef.current) : fadeOut(navRef.current)
  showMobileNav ? fadeIn(menuRef.current) : fadeOut(menuRef.current)

  const location = useLocation();


  useEffect(() => {
    setShowMenu(false);
    setShowMobileNav(false);
  }, [location]);



  return (
    <AnimatePresence>
      <div className="header">
        <div className="mobile-menu">
          <div className={`mobile-menu-container ${showMobileNav && 'show'}`}>
              <div
                key="mobile-menu"
                id="menuNav"
                className='menuNav'
                ref={menuRef}
              >
                <nav className="mobile-nav nav">
                  <ul>
                    <li className="index-collection active-link">
                      <Link to="/">FILMS</Link>
                    </li>

                    <li className="mobile-folder-collection">
                      <div
                        className="mobile-submenu"
                        onClick={() => setShowMenu((prev) => !prev)}
                      >
                        <span>STILLS</span>
                        <span>
                          {showMenu ? <FiChevronUp /> : <FiChevronDown />}
                        </span>
                      </div>

                      <div
                        ref={navRef}
                        className="mobile-subnav"
                      >
                        <ul>
                          <li className="blog-collection">
                            <Link to="/black-white">BLACK &amp; WHITE</Link>
                          </li>
                          <li className="blog-collection">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://www.instagram.com/ezicfilmworks"
                            >
                              INSTAGRAM
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="page-collection">
                      <Link to="/wedding-films">Wedding Films</Link>
                    </li>
                    <li className="page-collection">
                      <Link to="/motion-design">Motion Design</Link>
                    </li>
                    <li className="page-collection">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="page-collection">
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li className="page-collection">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            <div className="page-divider"></div>
          </div>
          <div
            className="header-mobile"
            onClick={() => setShowMobileNav((prev) => !prev)}
          >
            <div>main</div>
            <div>{showMobileNav ? <FiChevronUp /> : <FiChevronDown />}</div>
          </div>
          <div className="page-divider"></div>
        </div>
        <div className="header-logo" id="logo" data-content-field="site-title">
          <h1 className="logo">
            <Link to="/">EZICFILMWORKS</Link>
          </h1>
          <div className="logo-subtitle" data-shrink-original-size="22">
            Cinéaste | Director | Motion Designer
          </div>
        </div>
        <div id="topNav" className="desktop-menu">
          <nav className="main-nav nav">
            <ul>
              <li className="index-collection active-link">
                <Link to="/">FILMS</Link>
              </li>

              <li className="folder-collection">
                <div className="desktop-submenu">STILLS</div>
                <div className="subnav">
                  <ul>
                    <li className="blog-collection">
                      <Link to="/black-white">BLACK &amp; WHITE</Link>
                    </li>
                    <li className="blog-collection">
                      <a href="https://www.instagram.com/ezicfilmworks">
                        INSTAGRAM
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="page-collection">
                <Link to="/wedding-films">Wedding Films</Link>
              </li>
              <li className="page-collection">
                <Link to="/motion-design">Motion Design</Link>
              </li>
              <li className="page-collection">
                <Link to="/about">About</Link>
              </li>
              <li className="page-collection">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="page-collection">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Header;
