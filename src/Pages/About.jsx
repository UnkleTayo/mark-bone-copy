import FlexContainer from '../components/FlexContainer/FlexContainer';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// import EzicImage from '../assets/images/Bio.png';
import { MyImage } from '../components/LazyImage';
import { ABOUT } from '../utils/queries';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { sanitizedData } from './Stills';
import { buildImage } from '../utils/cloudinary';

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
    gsap.from(".about__inner", {
      duration: 0.2,
      delay: .5,
      opacity: 0,
      ease: "Power4.out",
    });
  }, []);

  if (loading) return null;

  if (error) return `Error! ${error}`;

  return (
    <>
      <motion.div
        initial={{ height: '100vh' }}
        animate={{ height: "0%", transition: { ...transition, delay: 1 } }}
        className="transition"
      />
      <motion.div
        exit={{ height: '100%', transition }}
        className="transition2"
      />
      <motion.div
        initial={{ height: 0, visibility: 'hidden' }}
        animate={{
          height: '100%',
          visibility: 'visible',
          transition: { ...transition, duration: 2, delay: -0.2 },
        }}
        className="About"
      >
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
              <h1 className='mt-2'>{data?.profiles[0]?.name}</h1>

              <div className="About-moreContent">
                <div
                  dangerouslySetInnerHTML={sanitizedData(
                    data?.profiles[0]?.profileDetails?.html
                  )}
                />
                {/* <p className="">
              Ezekiah Akande is a highly motivated narrative filmmaker currently
              based in Lagos Nigeria, passionate about telling stories of people
              and brands with 8years of visual storytelling experience
              directing, filming, editing and producing video content.
            </p>
            <p>
              Eager to bring a fresh perspective to the film industry. Directed
              mini documentaries,Short films, Commercials “Disability,
              Quarantine Chronicle, Uncle Steven, Dear Kame, Sour grape". He has
              an extensive portfolio that demonstrates originality in every of
              his works.
            </p>
            <p>
              He has documented places and worked with several brands across
              Africa. Mest Africa, Julikana - Kenya, WARIF - Lagos, Nigeria,
              amongst others.{' '}
            </p>
            <p>Preserving history for the next Generation.</p>

            <p className="">
              Check him out on{' '}
              <a href="https://youtube.com/c/EzekiahAkande">YouTube</a>
            </p>
            <p>
              Ezic also offers consulting on documentaries. Book a meeting here
            </p>
            <p>
              Contact:&nbsp;
              <a href="mailto:ezicfilmworks@hotmail.com">
                ezicfilmworks@hotmail.com
              </a>
            </p> */}
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
