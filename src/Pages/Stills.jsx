import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import GridContainer from '../components/GridContainer/GridContainer'
import { data } from '../data'
import ReactPlayer from 'react-player'

const Stills = ({ still }) => {
  const scrollRef = useRef()
  const history = useHistory()

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
      <GridContainer data={data} />
    </div>
  )
}

export default Stills
