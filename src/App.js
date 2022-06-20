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

// function setThemePreference() {
//   var d = new Date();
//   /*
//    * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
//    * Day = 0 - 11
//    * Night = 12 - 23
//    */
//   var currentHour = d.getHours();

//   /*
//    * The dark theme load early morning and night
//    * The light theme load morning and evening
//    */

//   if (currentHour >= 19 || currentHour <= 6) {
//     document.body.setAttribute('data-theme', 'dark');
//     document.documentElement.setAttribute('data-theme', 'dark');
//   } else {
//     document.body.setAttribute('data-theme', 'light');
//     document.documentElement.setAttribute('data-theme', 'light');
//   }
// }

function App() {
  // const [themeState, setThemeState] = useState(false);
  const { data } = useQuery(PROJECT_QUERY);

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

  // useEffect(() => {
  //   setThemePreference();
  // });

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <Header />
        </div>
        <div className="page-divider">
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
            <Route path="/videos">
              <Videos />
            </Route>
            <Route exact path="/">
              <PreLoader />
              <Home data={data} />
            </Route>
            <Route exact path="/projects/:slug">
              <Stills />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>

          <div>
            <Footer />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
