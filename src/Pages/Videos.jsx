import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
// import ReactPlayer from 'react-player';
import TNail from '../assets/images/SHOWREEL.png';
import { BlACk_AND_WHITE_VIDEOS } from '../utils/queries';
import ModalVideo from 'react-modal-video';

const Videos = () => {
  const { data, error, loading } = useQuery(BlACk_AND_WHITE_VIDEOS);

  if (loading) return null;

  if (error) return `Error! ${error}`;

  return (
    <div className="Videos">
      <div className="Videos-content">
        {[...data?.blackAndWhiteVideos, ...data?.blackAndWhiteVideos, ...data?.blackAndWhiteVideos].map((vid) => (
          <div key={vid.id} className="Videos-player">
            {/* <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button> */}
            {/* <ReactPlayer
              controls
              url={vid.videoUrl}
              height={'100%'}
              width={'100%'}
            /> */}

            <Okay vid={vid} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Okay = ({ vid }) => {
  const videoId = vid.videoUrl.split('=')[1];
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <div className="btn-primary" onClick={() => setOpen(true)}>
        <img src={TNail} alt="..." />
      </div>
    </React.Fragment>
  );
};

export default Videos;
