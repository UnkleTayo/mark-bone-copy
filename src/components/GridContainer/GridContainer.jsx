import GridCell from '../GridCell/GridCell';
import './style.scss';

const GridContainer = ({ data }) => {
  return (
    <div className="Grid-Container">
      {data?.projects?.map((item) => (
        <GridCell details={item} key={item.id} />
      ))}
    </div>
  );
};

export default GridContainer;
