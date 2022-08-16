// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
import './styles.scss';
import './stylesMediaQueries.scss';
import imgAdjectifs from '../../../assets/images/adjectifs.png';
import imgSpain from '../../../assets/images/spain.png';
import imgUK from '../../../assets/images/uk.png';
import BtnLeft from '../AppBtn/BtnLeft';
import BtnRight from '../AppBtn/BtnRight';

// == Composant
function CompetencePage() {
  return (
<aside className='competence'>
      <Link to='/experience'><BtnLeft /></Link>
      <div class='competence__container'>
        <section className='competence__generale competence__section'>
          <h1 className='competence__title--page'>Compétences</h1>
          <h2 className='competence__title'>Générales</h2>
          <p className='competence__txt'>
            Mes études et mes expériences personnelles et professiionnelles m'ont apprise à être 
            une personne rigoureuse, organisée, motivée et attentionnée... J'ai l'esprit d'équipe et du travail bien fait.
            Je suis passionnée par ce que j'entreprends et en constante évolution.
          </p>
          <img className='competence__img' src={imgAdjectifs} alt="représentation par adjéctifs" />
          <div className='competence__container--img'>
          <img className='competence__img--spain' src={imgSpain} alt="drapeau espagnole" />
          <img className='competence__img--uk' src={imgUK} alt="drapeau anglais" />
          </div>
        </section>
        <div className='competence__container--right'>
          <section className='competence__info competence__section'>
            <h2 className='competence__title'>Informatiques</h2>
            <ul className='competence__txt'>
              <li className='competence__li'><p className='competence__p'>Je maitrîse le Pack Office 365</p> de Microsoft</li>
              <li className='competence__li'><p className='competence__p'>Les bases de WordPress</p> pour créer de jolies sites fonctionnels</li>
              <li className='competence__li'><p className='competence__p'>Canva</p> afin de produire des documents travaillés</li>
              <li className='competence__li'>La communication sur <p className='competence__p'>les réseaux sociaux : </p>Facebook, Instagram, WhatsApp...</li>
              <li className='competence__li'><p className='competence__p'>Première Pro</p> de la suite Adobe pour du montage vidéo</li>
            </ul>
          </section>
          <section className='competence__litteraire competence__section'>
            <h2 className='competence__title'>Littéraires</h2>
            <ul className='competence__txt'>
              <li className='competence__li--litteraire'><p className='competence__p'>Français :</p>Test Voltaire</li>
              <li className='competence__li--litteraire'><p className='competence__p'>Anglais :</p>niveau B2</li>
              <li className='competence__li--litteraire'><p className='competence__p'>Espagnol :</p>niveau B2</li>
              <li className='competence__li--litteraire'>Capacités argumentaires, de rédactions et d'analyses</li>
          </ul>
          </section>
        </div>
      </div>
      <Link to='/contact'><BtnRight /></Link>
    </aside>
  );
}

// == Export
export default CompetencePage;
