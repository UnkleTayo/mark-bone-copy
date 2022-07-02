import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import './style.scss';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="header">
      <AnimatePresence>
        <div className="mobile-menu">
          <div className={`mobile-menu-container ${showMobileNav && 'show'}`}>
            <div id="menuNav">
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
                      STILLS {!showMenu ? '+' : '-'}{' '}
                    </div>
                    {showMenu && (
                      <motion.div
                        initial={{ x: 50, y: 0, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="mobile-subnav"
                      >
                        <ul>
                          <li className="blog-collection">
                            <Link to="/black-white">BLACK &amp; WHITE</Link>
                          </li>
                          {/* <li className="blog-collection">
                            <Link to="/videos">Videos</Link>
                          </li> */}
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
                      </motion.div>
                    )}
                  </li>
                  <li className="page-collection">
                    <Link to="/videos">Wedding Films</Link>
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
                  {/* <li className="page-collection">
                    <Link to="/contact">Contact</Link>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div className="page-divider"></div>
          </div>
          <div
            className="header-mobile"
            onClick={() => setShowMobileNav((prev) => !prev)}
          >
            main
          </div>
          <div className="page-divider"></div>
        </div>
      </AnimatePresence>
      <div className="header-logo" id="logo" data-content-field="site-title">
        <h1 className="logo" style={{ letterSpacing: '0.205479em' }}>
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
                    <Link to="/videos">Videos</Link>
                  </li>
                  {/* 
                  <li className="blog-collection">
                    <Link to="/35mm">35MM/PORTRAIT</Link>
                  </li> */}

                  <li className="blog-collection">
                    <a href="https://www.instagram.com/ezicfilmworks">
                      INSTAGRAM
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="page-collection">
              <Link to="/videos">Wedding Films</Link>
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
            {/* <li className="page-collection">
              <Link to="/contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
