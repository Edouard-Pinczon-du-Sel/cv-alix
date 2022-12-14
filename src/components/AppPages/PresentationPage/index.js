// == Import
// import PropTypesLib from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import './stylesMediaQueries.scss';
import imgProfile from '../../../assets/images/profile.JPG'
import imgEcole from '../../../assets/images/ecole.png'
import imgBook from '../../../assets/images/book.png'
import imgHistory from '../../../assets/images/history.png'
import imgArt from '../../../assets/images/art.png'
import imgGeo from '../../../assets/images/geopolitic.png'
import BtnLeft from '../AppBtn/BtnLeft';
import BtnRight from '../AppBtn/BtnRight';



// == Composant
function PresentationPage() {
  return (
    
      <aside className='presentation'>
        <Link to='/contact'><BtnLeft /></Link>
        <div className='presentation__container'>
          <section className='presentation__welcome presentation__section'>
            <h1 className='presentation__title--page'>Présentation</h1>
            <img className='presentation__img--profile' src={imgProfile} alt="photo de profile" />
            <h2 className='presentation__title'>Bienvenue sur mon site Web !</h2>
            <p className='presentation__txt'>
              Je m'appelle Alix Pinczon du Sel, j'ai 21 ans et je suis sur le point
              d'intégrer l’institut Mac Luhan de l’IRCOM pour un master management de la communication l'année prochaine ! 
              N'hésitez pas à parcourir ce site ou à 
              <a className='presentation__video' href='https://youtu.be/ySyCLjHCVs4'> regarder cette vidéo </a> 
              de présentation si vous voulez en savoir plus !
            </p>
          </section>
          <div className='presentation__container--right'>
            <section className='presentation__passions presentation__section'>
              <h2 className='presentation__title'>Mes Passions</h2>
              <p className='presentation__txt'>
                Je suis passionnée par la lecture, l'Histoire et les arts créatifs.
                Mais j'aime aussi des sujets plus divers tels que le droit, la géopolitique et les nouvelles technologies
              </p>
              <div className='presentation__container--icones'>
                <span><img className='presentation__icone' src={imgBook} /></span>
                <span><img className='presentation__icone' src={imgHistory} /></span>
                <span><img className='presentation__icone' src={imgArt} /></span>
                <span><img className='presentation__icone' src={imgGeo} /></span>
              </div>
            </section>
            <section className='presentation__objectifs presentation__section'>
              <h2 className='presentation__title'>Mes Objectifs</h2>
              <p className='presentation__txt'>
                Continuer et progresser dans mes études, découvrir de nouvelles choses, me perfectionner et trouver l’entreprise qui me permettra 
                de m’accomplir professionnellement en donnant du sens à ma vie.
              </p>
              <img className="presentation__img presentation__img--ecole" src={imgEcole} alt="école ircom" />
            </section>
          </div>
        </div>
        <Link to='/experience'><BtnRight /></Link>
      </aside>
  );
}

// == Export
export default PresentationPage;