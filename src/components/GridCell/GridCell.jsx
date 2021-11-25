import './style.scss'
import { useHistory } from 'react-router'
const GridCell = ({ details }) => {
  let history = useHistory()
  const handleRouting = () => {
    history.push(`/${details.name}`)
    window.scrollTo(0, 0)
  }
  return (
    <div onClick={handleRouting} className="cell-container">
      <div className="overlay"></div>
      <img src={details.thumbnail} alt="bg" />
      <div className="project-item-count">2</div>
      <div className="project-title">
        <span>{details.title}</span>
      </div>
    </div>
  )
}

export default GridCell
