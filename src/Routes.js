import { useQuery } from '@apollo/client';
import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PreLoader from './components/Preloader/PreLoader';
import { PROJECT_QUERY } from './utils/queries';

// Lazy loading pages
const PageNotFound = loadable(() => import('./Pages/404-page'));
const About = loadable(() => import('./Pages/About'));
const BlackWhite = loadable(() => import('./Pages/BlackWhite'));
const Contact = loadable(() => import('./Pages/Contact'));
const Home = loadable(() => import('./Pages/Home'));
const MotionDesign = loadable(() => import('./Pages/MotionDesign'));
const Pricing = loadable(() => import('./Pages/Pricing'));
const Stills = loadable(() => import('./Pages/Stills'));
const Videos = loadable(() => import('./Pages/Videos'));

const Routes = () => {
  const { data, loading } = useQuery(PROJECT_QUERY);

  React.useEffect(() => {
    if (data) {
      window.localStorage.setItem(
        'EZIC-projects',
        JSON.stringify(data.projects)
      );
    }
  }, [data]);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
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
  );
};

export default Routes;
