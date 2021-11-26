import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useHistory } from 'react-router'
import GridContainer from '../components/GridContainer/GridContainer'
import { data } from '../data'

const Stills = ({ still }) => {
  const scrollRef = useRef()
  const history = useHistory()
  const isPageWide = useMediaQuery('(min-width: 768px)')

  const [pageData, setPageData] = useState({})
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)
  useEffect(() => {
    scrollRef.current.scrollTo(0, 0)
    setPageData(still)
  }, [still])

  useEffect(() => {
    const dataIndex = data.indexOf(still)
    if (dataIndex < 1) {
      setPrev(true)
    } else if (dataIndex === data.length - 1) {
      setNext(true)
    }
  }, [still])

  const handlePagination = (whereTo) => {
    const dataIndex = data.indexOf(still)
    if (whereTo === 'prev') {
      if (dataIndex < 1) {
        setPrev(true)
        return
      }
      history.push(`/${data[dataIndex - 1].name}`)
    }

    if (whereTo === 'next') {
      if (dataIndex === data.length - 1) {
        setNext(true)
        return
      }
      history.push(`/${data[dataIndex + 1].name}`)
    }
  }
  return (
    <AnimatePresence>
      <motion.div
        key="still"
        ref={scrollRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="Stills">
          <div className="Stills-container">
            <h1>{pageData.title}</h1>
            <div className="still-image">
              {/* <img src={pageData.thumbnail} alt={pageData.name} /> */}
              <ReactPlayer
                width={`100%`}
                height={isPageWide ? '500px' : '350px'}
                url={pageData?.videoUrl}
              />
              <div className="stills-navigation">
                <Link to="/">Back To FILMS</Link>
                <div className="projectNav">
                  <span
                    onClick={() => handlePagination('prev')}
                    className={`${prev && 'disable'}`}
                  >
                    prev
                  </span>{' '}
                  /
                  <span
                    onClick={() => handlePagination('next')}
                    className={`${next && 'disable'}`}
                  >
                    next
                  </span>
                </div>
              </div>
              <div className="image-meta">
                <strong>{pageData?.title}</strong>
              </div>
            </div>
            {pageData?.imageTitle}
            {pageData?.crew?.map((member, idx) => (
              <p key={idx}>{member}</p>
            ))}
          </div>
          {/* <div className="stills-navigation">
            <Link to="/">Back To FILMS</Link>
            <div className="projectNav">
              <span
                onClick={() => handlePagination('prev')}
                className={`${prev && 'disable'}`}
              >
                prev
              </span>{' '}
              /
              <span
                onClick={() => handlePagination('next')}
                className={`${next && 'disable'}`}
              >
                next
              </span>
            </div>
          </div> */}
        </div>
        <GridContainer data={data} />
      </motion.div>
    </AnimatePresence>
  )
}

export default Stills
