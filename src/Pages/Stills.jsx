import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import GridContainer from '../components/GridContainer/GridContainer'
import { data } from '../data'
import ReactPlayer from 'react-player'

const Stills = ({ still }) => {
  const scrollRef = useRef()

  const [pageData, setPageData] = useState({})
  useEffect(() => {
    scrollRef.current.scrollTo(0, 0)
    setPageData(still)
  }, [still])

  const handlePagination = (whereTo) => {
    console.log(whereTo)
    console.log(pageData)
  }
  return (
    <div ref={scrollRef}>
      <div className="Stills">
        <h1>{pageData.title}</h1>
        <div className="still-image">
          {/* <img src={pageData.thumbnail} alt={pageData.name} /> */}
          <ReactPlayer
            width={`100%`}
            height={`500px`}
            url={pageData?.videoUrl}
          />
          <div className="image-meta">
            <strong>{pageData?.title}</strong>
          </div>
        </div>
        {pageData?.imageTitle}
        {pageData?.crew?.map((member, idx) => (
          <p key={idx}>{member}</p>
        ))}
      </div>
      <div className="stills-navigation">
        <Link to="/">Back To FILMS</Link>
        <div className="projectNav">
          <span
            onClick={() => handlePagination('prev')}
            className="prev-project"
          >
            prev
          </span>{' '}
          /
          <span
            onClick={() => handlePagination('next')}
            className="next-project"
          >
            next
          </span>
        </div>
      </div>
      <GridContainer data={data} />
    </div>
  )
}

export default Stills
