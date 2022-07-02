// import { bnw } from '../data';
import { motion } from 'framer-motion';
import { BlACk_AND_WHITE } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { buildImage } from '../utils/cloudinary';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import LazyLoad from 'react-lazy-load'
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const BlackWhite = () => {
  const { loading, error, data } = useQuery(BlACk_AND_WHITE);

  if (loading) return null;

  if (error) return `Error! ${error}`;
  return (
    <div className="BlackWhite">
      {data?.stills.map((data) => (
        <div key={data?.id} className="image-container">
          <motion.div whileHover={{ scale: 0.95 }} transition={transition}>
            <LazyLoadImage
              alt={data?.name}
              effect="blur"
              loading="lazy"
              src={buildImage(data?.image?.public_id).toURL()}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default BlackWhite;
