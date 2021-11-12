import FlexContainer from '../components/FlexContainer/FlexContainer'
import Ezic from '../assets/images/ezic.jpg'
const About = () => {
  return (
    <div className="About">
      <FlexContainer>
        <div className="About-image__container">
          <img src={Ezic} alt="bone" className="profile" />
        </div>
        <div className="About-content">
          <h1>Ezekiah Akande</h1>

          <div className="About-moreContent">
            <p className="">
              Ezekiah Akande is highly motivated narrative filmmaker currently
              based in Lagos Nigeria, passionate about telling stories of people
              and brands with 8years of visual storytelling experience
              directing, filming, editing and producing video content.
            </p>
            <p>
              Eager to bring fresh perspective to the film industry. Directed
              award winning mini documentaries “Disability, Quarantine
              Chronicle, Uncle Steven”, Short films “Dear Kame, Sour grape, and
              commercial. Have an extensive portfolio that demonstrates
              originality in every of my work.
            </p>
            {/* <p className="">
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
            </p> */}
            <p className="">
              Check him out on{' '}
              <a href="https://youtube.com/c/EzekiahAkande">YouTube</a>
            </p>
            {/* <p className="">
              Mark also offers consulting on documentaries. Book a meeting{' '}
              <a href="https://superpeer.com/markbone">here</a>
            </p> */}
            {/* <p className="">Contact:&nbsp;mark@markbone.com</p> */}
            <p>
            Ezic also offers consulting on documentaries. Book a meeting here
            </p>
            <p>
              Contact:&nbsp;
              <a href="mailto:mark@markbone.com">mark@markbone.com</a>
            </p>
            <p className="">&nbsp;</p>
          </div>
        </div>
      </FlexContainer>
    </div>
  )
}

export default About
