import './style.scss';

import { useHistory } from 'react-router';

import { buildImage } from '../../utils/cloudinary';

const GridCell = ({ details }) => {
  let history = useHistory();
  const handleRouting = () => {
    history.push(`/projects/${details.slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div onClick={handleRouting} className="cell-container">
      <div className="overlay">
        <div className="project-item-count">2</div>
        <div className="project-title">
          <span>{details.name}</span>
        </div>
      </div>
      {/* <MyImage image={details} /> */}
      <img
        src={buildImage(details.projectImage?.public_id).toURL()}
        alt={details.name}
      />
    </div>
  );
};

export default GridCell;
