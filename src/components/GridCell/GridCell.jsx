import './style.scss'

import { useHistory } from 'react-router'
import { MyImage } from '../LazyImage'

const GridCell = ({ details }) => {
  let history = useHistory()
  const handleRouting = () => {
    history.push(`/${details.name}`)
    window.scrollTo(0, 0)
  }

  return (
    <div onClick={handleRouting} className="cell-container">
      <div className="overlay">
        <div className="project-item-count">2</div>
        <div className="project-title">
          <span>{details.title}</span>
        </div>
      </div>
      <MyImage image={details} />
      {/* <img src={details.thumbnail} alt="bg" /> */}
    </div>
  )
}

export default GridCell
