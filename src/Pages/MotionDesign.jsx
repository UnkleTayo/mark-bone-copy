import React from 'react'
import ReactPlayer from 'react-player'

const MotionDesign = () => {
  return (
    <div className="Motions">
      <div className="motion">
        <ReactPlayer
          width={`100%`}
          height={`500px`}
          url={`https://youtu.be/cVGDoQuRpao`}
        />
      </div>
      <div className="motion">
        <ReactPlayer
          width={`100%`}
          height={`500px`}
          url={`https://youtu.be/cVGDoQuRpao`}
        />
      </div>{' '}
      <div className="motion">
        <ReactPlayer
          width={`100%`}
          height={`500px`}
          url={`https://youtu.be/cVGDoQuRpao`}
        />
      </div>{' '}
      <div className="motion">
        <ReactPlayer
          width={`100%`}
          height={`500px`}
          url={`https://youtu.be/cVGDoQuRpao`}
        />
      </div>
    </div>
  )
}

export default MotionDesign
