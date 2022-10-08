import GridContainer from '../components/GridContainer/GridContainer';
import { motion } from 'framer-motion';

import loadable from '@loadable/component';

const SkeletonCard = loadable(() =>
  import('../components/SkeletonCard/SkeletonCard')
);

const transition = { duration: 1, ease: 'easeInOut', delay: 0.8 };

const Home = ({ data, loading }) => {
  return (
    <>
      <motion.div
        exit={{ height: '100vh', transition }}
        className="transition2"
      />
      <div className="home">
        {!loading ? <GridContainer data={data} /> : <SkeletonCard />}
      </div>
    </>
  );
};

export default Home;
