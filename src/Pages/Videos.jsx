import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
// import ReactPlayer from 'react-player';
import TNail from '../assets/images/thumbnail.jpg';
import Play2 from '../assets/images/play.jpg';
import { BlACk_AND_WHITE_VIDEOS } from '../utils/queries';
import ModalVideo from 'react-modal-video';

const Videos = () => {
  const { data, error, loading } = useQuery(BlACk_AND_WHITE_VIDEOS);

  if (loading) return null;

  if (error) return `Error! ${error}`;

  return (
    <div className="Videos">
      <div className="Videos-content">
        {[...data?.blackAndWhiteVideos].map((vid) => (
          <div key={vid.id} className="Videos-player">
            <VideoComponent vid={vid} />
          </div>
        ))}
      </div>
    </div>
  );
};

const VideoComponent = ({ vid }) => {
  const videoId = vid.videoUrl.split('=')[1];
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        // autoplay={false}
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <div className="thumbnail" onClick={() => setOpen(true)}>
        <img src={TNail} alt="..." />
        <div class="img">
          <img
            src={Play2}
            height="70px"
            width="70px"
            alt="..."
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Videos;
