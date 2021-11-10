import { useEffect } from 'react'
import { preLoaderAnim } from '../../animations'
// import { motion } from 'framer-motion'

import './preloader.scss'

// const container = {
//   show: {
//     transition: {
//       staggerChildren: 0.35,
//     },
//   },
// }
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim()
  }, [])
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Director,</span>
        <span>Cinematographer,</span>
        <span>Motion Designer.</span>
      </div>
    </div>
  )
}

export default PreLoader
