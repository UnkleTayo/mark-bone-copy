import { useQuery } from '@apollo/client';
import React from 'react';
import ReactPlayer from 'react-player';
import { BlACk_AND_WHITE_VIDEOS } from '../utils/queries';

const Videos = () => {
  const { data, error, loading } = useQuery(BlACk_AND_WHITE_VIDEOS);

  if (loading) return null;

  if (error) return `Error! ${error}`;

  return (
    <div className="Videos">
      <div className="Videos-content">
        {data?.blackAndWhiteVideos.map((vid) => (
          <div key={vid.id} className="Videos-player">
            <ReactPlayer
              controls
              url={vid.videoUrl}
              height={'100%'}
              width={'100%'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
