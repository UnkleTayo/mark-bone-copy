import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="ErrorPage" id="wrapper">
      <div className="img">
        <img alt="..." src="https://i.imgur.com/qIufhof.png" />
      </div>
      <div id="info">
        <h3>This page could not be found</h3>
        <p>
          <Link to="/">Go Home</Link>
        </p>
      </div>
    </div>
  )
}

export default PageNotFound
