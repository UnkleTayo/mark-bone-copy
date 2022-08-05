import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useQuery } from '@apollo/client';


// eslint-disable-next-line no-unused-vars
import PreLoader from './components/Preloader/PreLoader';
import About from './Pages/About';
import BlackWhite from './Pages/BlackWhite';
import Home from './Pages/Home';
import Stills from './Pages/Stills';
// import { data as oldData } from './data';
import MotionDesign from './Pages/MotionDesign';
import PageNotFound from './Pages/404-page';
import { AnimatePresence, motion } from 'framer-motion';
import Contact from './Pages/Contact';
import Pricing from './Pages/Pricing';
import { PROJECT_QUERY } from './utils/queries';
import Videos from './Pages/Videos';



function App() {
  // const [themeState, setThemeState] = useState(false);
  const { data, loading } = useQuery(PROJECT_QUERY);

  useEffect(() => {
    if (data) {
      window.localStorage.setItem(
        'EZIC-projects',
        JSON.stringify(data.projects)
      );
    }
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);



  return (
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <Header />
          <div className="page-divider"></div>
        </div>

        <div className="Site-content">
        <AnimatePresence initial={false} exitBeforeEnter>
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
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/wedding-films">
              <Videos />
            </Route>
            <Route exact path="/">
              <PreLoader />
              <Home data={data} loading={loading} />
            </Route>
            <Route exact path="/projects/:slug">
              <Stills />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </AnimatePresence>

        </div>

        <Footer />
      </motion.div>
  );
}

export default App;
