import FlexContainer from '../components/FlexContainer/FlexContainer'
import Mark from '../assets/images/mark.jpg'
const About = () => {
  return (
    <div className="About">
      <FlexContainer>
        <div className="About-image__container">
          <img src={Mark} alt="bone" className="profile" />
        </div>
        <div className="About-content">
          <h1>Mark Bone</h1>

          <div className="About-moreContent">
            <p className="">
              Mark Bone is a passionate, award winning, multi-talented
              documentary and commercial director based in Toronto, Canada.
            </p>
            <p className="">
              Mark was first inspired to pursue documentary filmmaking when he
              spent time as an aid worker during the Darfur war helping refugees
              who were fleeing into Egypt. Mark has directed numerous
              documentaries, including his heart pounding CNN FILMS documentary;{' '}
              <em>58 HOURS</em>, which chronicles the heroic rescue of Jessica
              McClure the fallout from that event. Mark is also known for his
              highly accoladed film <em>Rescate</em> which chronicles the
              heroics of volunteer paramedics in the Dominican Republic. He
              recently released, <em>No Country is an Island, </em>which is a
              first hand look at the tragic Easter Bombings in Sri Lanka. This
              past year he also released <em>Battleground</em> which was awarded
              a Vimeo Staff Pick Premiere.{' '}
            </p>
            <p className="">
              Mark has also directed many commercial campaigns for global brands
              such Mercedes Benz, Nike, BMW and Nikon. His work focuses on
              characters in the midst of conflict or crisis, capturing their
              story with a dynamic cinematic verite style.&nbsp;
            </p>
            <p className="">Check him out on youtube.com/markandrewbone</p>
            <p className="">
              Mark also offers consulting on documentaries. Book a meeting{' '}
              <a href="https://superpeer.com/markbone">here</a>
            </p>
            <p className="">Contact:&nbsp;mark@markbone.com</p>
            <p className="">&nbsp;</p>
          </div>
        </div>
      </FlexContainer>
    </div>
  )
}

export default About
