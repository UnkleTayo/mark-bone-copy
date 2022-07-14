import React from "react";
import Skeleton from "react-loading-skeleton";
import './styles.scss'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () => {
    return (
      <section>
        <div className="list">
          {Array(6)
            .fill()
            .map((item, index) => (
              <div className="card" key={index}>
                <Skeleton height={300} width={"100%"} />
              </div>
            ))}
        </div>
      </section>
    );
  };
  export default SkeletonCard;
