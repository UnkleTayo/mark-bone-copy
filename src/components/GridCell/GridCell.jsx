import './style.scss'
import Image1 from '../../assets/images/image-asset12.jpeg'
const GridCell = () => {
  return (
    <div className="cell-container">
      <div className="overlay"></div>
      {/* <div className="project-image"> */}
      <img src={Image1} alt="bg" />
      {/* </div> */}
      <div className="project-item-count">2</div>
      <div className="project-title">
        <span>BAG</span>
      </div>
    </div>
  )
}

export default GridCell
