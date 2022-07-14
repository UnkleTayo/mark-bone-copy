import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import DOMPurify from 'dompurify';
import ReactPlayer from 'react-player';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHistory } from 'react-router';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import GridContainer from '../components/GridContainer/GridContainer';
// import { data } from '../data';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SINGLE_PROJECT } from '../utils/queries';

export const sanitizedData = (data) => ({
  __html: DOMPurify.sanitize(data),
});

const Stills = () => {
  const scrollRef = useRef();
  const history = useHistory();
  let { slug } = useParams();

  const { loading, error, data } = useQuery(SINGLE_PROJECT, {
    variables: { slug },
  });

  const isPageWide = useMediaQuery('(min-width: 768px)');

  const [pageData, setPageData] = useState({});
  useEffect(() => {
    if (data && data.project) {
      setPageData(data.project);
    }
  }, [data]);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo(0, 0, {
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const dataIndex = data?.projects.findIndex(
    (item) => item?.slug === data?.project?.slug
  );

  const handlePagination = (whereTo) => {
    if (whereTo === 'prev') {
      history.push(`/projects/${data?.projects[dataIndex - 1].slug}`);
    } else {
      history.push(`/projects/${data?.projects[dataIndex + 1].slug}`);
    }
  };

  if (loading) return null;

  if (error) return `Error! ${error}`;
  return (
    <AnimatePresence>
      <motion.div
        key="still"
        ref={scrollRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="Stills">
          <div className="Stills-container">
            <h1>{pageData?.name}</h1>
            <div className="still-image">
              {/* <img src={pageData.thumbnail} alt={pageData.name} /> */}
              <LazyLoadComponent>
                <ReactPlayer
                  width={`100%`}
                  height={isPageWide ? '700px' : '350px'}
                  url={pageData?.videoUrl}
                />
              </LazyLoadComponent>
              <div className="stills-navigation">
                <Link to="/">Back To FILMS</Link>
                <div className="projectNav">
                  {dataIndex > 0 && (
                    <span onClick={() => handlePagination('prev')}>prev</span>
                  )}
                  {dataIndex >= 1 && dataIndex < data.projects.length - 1 && (
                    <span>/</span>
                  )}
                  {dataIndex < data.projects.length - 1 && (
                    <span onClick={() => handlePagination('next')}>next</span>
                  )}
                </div>
              </div>
              <div className="image-meta">
                <strong>{pageData?.name}</strong>
              </div>
            </div>
            <div className="still-description">
              <p>{pageData?.projectDescription}</p>
            </div>
            <div
              dangerouslySetInnerHTML={sanitizedData(
                pageData?.crewAlternative?.html
              )}
            />
          </div>
        </div>
        <GridContainer data={data} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Stills;
