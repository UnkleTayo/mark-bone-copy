import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import './style.scss';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <AnimatePresence>
      <div className="header">
        <div className="mobile-menu">
          <div className={`mobile-menu-container ${showMobileNav && 'show'}`}>
            {showMobileNav && (
              <motion.div
                key="mobile-menu"
                initial={{ x: 0, y: 10, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1, duration: 0.5 }}
                exit={{ opacity: 0, y: 10, duration: 0.5, delay: 0.5 }}
                id="menuNav"
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
                         {showMenu ? <FiChevronUp/> : <FiChevronDown/>}
                        </span>
                      </div>
                      {showMenu && (
                        <motion.div
                          initial={{ x: 0, y: 10, opacity: 0 }}
                          animate={{ x: 0, y: 0, opacity: 1, duration: 0.5 }}
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
                    <li className="page-collection">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </motion.div>
            )}

            <div className="page-divider"></div>
          </div>
          <div
            className="header-mobile"
            onClick={() => setShowMobileNav((prev) => !prev)}
          >
            <span>
            main
            </span>{' '}
            <span>
        {showMobileNav ? <FiChevronUp/> : <FiChevronDown/>}
            </span>
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
