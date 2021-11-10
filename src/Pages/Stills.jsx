import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import GridContainer from '../components/GridContainer/GridContainer'
import { data } from '../data'

const Stills = () => {
  const { page } = useParams()
  console.log(useParams())
  const [pageData, setPageData] = useState({})
  useEffect(() => {
    let i = data.filter((item) => item.name === page)
    setPageData({ ...i[0] })
  }, [page])

  const handlePagination = (whereTo) => {
    console.log(whereTo)
    console.log(pageData)
  }
  return (
    <>
      <div className="Stills">
        <h1>{pageData.title}</h1>
        <div className="still-image">
          <img src={pageData.thumbnail} alt={pageData.name} />
          <div className="image-meta">
            <strong>{pageData.title}</strong>
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
    </>
  )
}

export default Stills
