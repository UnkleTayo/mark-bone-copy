import { bnw } from '../data'
import { motion } from 'framer-motion'

// import LazyLoad from 'react-lazy-load'
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const BlackWhite = () => {
  return (
    <div className="BlackWhite">
      {bnw.map((data) => (
        <div className="image-container">
          <motion.img
            whileHover={{ scale: 0.95 }}
            transition={transition}
            src={data}
            alt="..."
            loading="lazy"
            width="100%"
            height="100%"
          />
        </div>
      ))}
    </div>
  )
}

export default BlackWhite
