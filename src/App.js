import { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
// eslint-disable-next-line no-unused-vars
import PreLoader from './components/Preloader/PreLoader'
import About from './Pages/About'
import BlackWhite from './Pages/BlackWhite'
import Home from './Pages/Home'
import Stills from './Pages/Stills'
import { data } from './data'
import MotionDesign from './Pages/MotionDesign'
import PageNotFound from './Pages/404-page'
import { AnimatePresence, motion } from 'framer-motion'
import Contact from './Pages/Contact'

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  //   function setThemePreference() {
  //   var d = new Date();
  //   /*
  //   * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
  //   * Day = 0 - 11
  //   * Night = 12 - 23
  //   */
  //   var currentHour = d.getHours();

  //   /*
  //   * The dark theme load early morning and night
  //   * The light theme load morning and evening
  //   */

  //   if(currentHour >= 19 || currentHour <= 6) {
  //     document.body.setAttribute("data-theme", "dark_theme")
  //   }else {
  //     document.body.setAttribute("data-theme", "light_theme")
  //   }
  // }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <div className="page-divider home"></div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/motion-design">
            <MotionDesign />
          </Route>
          <Route path="/black-white">
            <BlackWhite />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {data.map((item) => {
            return (
              <Route
                exact
                path={'/' + item.name}
                key={item.id}
                children={<Stills still={item} />}
              />
            )
          })}
          <Route exact path="/">
            <PreLoader />
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <div className="page-divider home"></div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

export default App
