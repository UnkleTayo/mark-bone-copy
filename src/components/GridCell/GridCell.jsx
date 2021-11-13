import './style.scss'
import { useHistory } from 'react-router'
const GridCell = ({ details }) => {
  let history = useHistory()
  const handleRouting = () => history.push(`/${details.name}`)
  return (
    <div onClick={handleRouting} className="cell-container">
      <div className="overlay"></div>
      {/* <div className="project-image"> */}
      <img src={details.thumbnail} alt="bg" />
      {/* </div> */}
      <div className="project-item-count">2</div>
      <div className="project-title">
        <span>{details.title}</span>
      </div>
    </div>
  )
}

export default GridCell
