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

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
