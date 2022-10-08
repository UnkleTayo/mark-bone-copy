import loadable from '@loadable/component';
import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { BRANDS } from '../data';
import { buildImage } from '../utils/cloudinary';
import { sanitizedData } from './Stills';

// import { MyImage } from '../components/LazyImage';
const MyImage = loadable(() => import('../components/LazyImage'));
const FlexContainer = loadable(() =>
  import('../components/FlexContainer/FlexContainer')
);
const ABOUT = loadable(() => import('../utils/queries'));

const marqueConfig = {
  pauseOnHover: true,
  speed: 80,
  direction: 'right',
  gradientColor: 'red',
};

// const ImageProp = {
//   thumbnail: EzicImage,
//   title: 'ezekiah-akande',
// };

const transition = { duration: 1, ease: 'easeInOut', delay: 0.8 };

const About = () => {
  const { loading, error, data } = useQuery(ABOUT);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = 'Ezic Filmworks — About';
    // fadeUp(".about-inner", 0.8);
    gsap.from('.about__inner', {
      duration: 0.2,
      delay: 0.5,
      opacity: 0,
      ease: 'Power4.out',
    });
  }, []);

  if (loading) return null;

  if (error) return `Error! ${error}`;

  return (
    <>
      {/* <motion.div
        initial={{ height: '100vh' }}
        animate={{ height: '0%', transition: { ...transition, delay: 1 } }}
        className="transition"
      />
      <motion.div
        exit={{ height: '100%', transition }}
        className="transition2"
      /> */}
      <motion.div
        initial={{ height: 0, visibility: 'hidden' }}
        animate={{
          height: '100%',
          visibility: 'visible',
          transition: { ...transition, duration: 2, delay: -0.2 },
        }}
        className="About"
      >
        <div className="About__brands">
          <h2>Brands we've worked with</h2>
          <div className="About__brands-container">
            <div className="brand_logos">
              <Marquee {...marqueConfig}>
                {BRANDS.map((brand) => (
                  <img src={brand.logo} alt={brand.name} key={brand.id} />
                ))}
              </Marquee>
              {/* {BRANDS.map((brand) => (
                <img src={brand.logo} alt={brand.name} key={brand.id} />
              ))} */}
            </div>
          </div>
        </div>
        <div className="about__inner">
          <FlexContainer>
            <div className="About-image__container">
              <MyImage
                // image={buildImage(
                //   data?.projects[0]?.profileImage?.public_id
                // ).toURL()}
                image={buildImage(
                  data?.profiles[0]?.profileImage?.public_id
                ).toURL()}
                className="profile"
              />
              {/* <img
            src={buildImage(data?.profiles[0]?.profileImage?.public_id).toURL()}
            alt="..."
          /> */}
            </div>
            <div className="About-content">
              <h1 className="mt-2">{data?.profiles[0]?.name}</h1>

              <div className="About-moreContent">
                <div
                  dangerouslySetInnerHTML={sanitizedData(
                    data?.profiles[0]?.profileDetails?.html
                  )}
                />
                <p className="">&nbsp;</p>
              </div>
            </div>
          </FlexContainer>
        </div>
      </motion.div>
    </>
  );
};

export default About;
