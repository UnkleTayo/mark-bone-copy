import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <div className="header">
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
                    <div className="mobile-subnav">
                      <ul>
                        <li className="blog-collection">
                          <Link to="/black-white">BLACK &amp; WHITE</Link>
                        </li>
                        {/* 
                        <li className="blog-collection">
                          <Link to="/commercial">COMMERCIAL</Link>
                        </li>

                         <li className="blog-collection">
                          <Link to="/35mm">35MM/PORTRAIT</Link>
                        </li> */}

                        <li className="blog-collection">
                          <Link to="/instagram">INSTAGRAM</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li className="page-collection">
                  <Link to="/about">About</Link>
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
          main
        </div>
        <div className="page-divider"></div>
      </div>
      <div className="header-logo" id="logo" data-content-field="site-title">
        <h1 className="logo" style={{ letterSpacing: '0.205479em' }}>
          <Link to="/">EZICFILMWORKS</Link>
        </h1>
        <div className="logo-subtitle" data-shrink-original-size="22">
          Director || Cinematographer || Motion Designer
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
                  {/* 
                  <li className="blog-collection">
                    <Link to="/commercial">COMMERCIAL</Link>
                  </li>

                  <li className="blog-collection">
                    <Link to="/35mm">35MM/PORTRAIT</Link>
                  </li> */}

                  <li className="blog-collection">
                    <Link to="/instagram">INSTAGRAM</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="page-collection">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header