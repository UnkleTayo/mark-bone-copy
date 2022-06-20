import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import DOMPurify from 'dompurify';
import ReactPlayer from 'react-player';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHistory } from 'react-router';
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

  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  // useEffect(() => {
  //   scrollRef.current.scrollTo(0, 0);
  //   scrollToTop();
  //   // setPageData(still);
  // }, []);

  // console.log(pageData);

  const dataIndex = data?.projects.findIndex(
    (item) => item?.slug === data?.project?.slug
  );

  useEffect(() => {
    if (!data && !data?.project && !data?.project) {
      return;
    }

    if (dataIndex < 1) {
      setPrev(true);
    } else if (dataIndex === data.projects.length - 1) {
      setNext(true);
    }
  }, [data, dataIndex]);

  const handlePagination = (whereTo) => {
    // const dataIndex = data?.projects.findIndex(
    //   (item) => item.id === data.project.slug
    // );
    if (whereTo === 'prev') {
      if (dataIndex < 1) {
        setPrev(true);
        return;
      }
      history.push(`/projects/${data?.projects[dataIndex - 1].slug}`);
    }

    if (whereTo === 'next') {
      if (dataIndex === data?.projects.length - 1) {
        setNext(true);
        return;
      }
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

              <ReactPlayer
                width={`100%`}
                height={isPageWide ? '700px' : '350px'}
                url={pageData?.videoUrl}
              />
              <div className="stills-navigation">
                <Link to="/">Back To FILMS</Link>
                <div className="projectNav">
                  <span
                    onClick={() => handlePagination('prev')}
                    className={`${prev && 'disable'}`}
                  >
                    prev
                  </span>{' '}
                  /
                  <span
                    onClick={() => handlePagination('next')}
                    className={`${next && 'disable'}`}
                  >
                    next
                  </span>
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
