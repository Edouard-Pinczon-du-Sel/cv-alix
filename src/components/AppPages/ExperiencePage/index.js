// == Import
// import PropTypesLib from 'prop-types';
import { Link } from 'react-router-dom';
import BtnLeft from '../AppBtn/BtnLeft';
import BtnRight from '../AppBtn/BtnRight';
import imgStage from '../../../assets/images/stage.jpg'
import imgEspagne from '../../../assets/images/spain.png'
import imgTrophy from '../../../assets/images/trophy.png'
import imgKnight from '../../../assets/images/knight.png'
import imgFire from '../../../assets/images/fire.png'
import './styles.scss';
import './stylesMediaQueries.scss';
import { useEffect } from 'react';


// == Composant
function ExperiencePage() {
  const url = {
    video: 'https://youtube.com/shorts/9g917riH64o?feature=share'
  }
  
  return (
    <aside className='experiences'>
      <Link to='/'><BtnLeft /></Link>
      <div className='experiences__container'>
        <section className='experiences__pro experiences__section'>
          <h1 className='experiences__title--page'>Expérience</h1>
          <h2 className='experiences__title'>Expériences professionnelles</h2>
          <p className='experiences__txt'>
            Mes études m'ont permis de mettre un pied dans le monde du travail et de me forger de réelles expériences en société
          </p>
          <ul className='experiences__list'>
            <li className='experiences__li'>2021 :  Stage chez DDay wedding planner Nantes (2 mois)</li>
            <li className='experiences__li'>2022 :  Stage dans la “team bonheur” de Gens de Confiance (4 mois)</li>
            <img className='experiences__img experiences__img--stage' src={imgStage} alt='stage gens chez gens de confiances' />
          </ul>
          <h2 className='experiences__title'>Semestre à Madrid</h2>
          <p className='experiences__txt'>
            Au cours de ma licence, j’ai eu l’occasion d’aller étudier durant un semestre à Madrid. Ce fut l’occasion d’une très
            belle expérience internationale autant du point de vue des langues que du point de vue culturel et touristique.
            Voici une vidéo pour en <a className='experiences__cursus--link' href={url.video} target='blanck'>savoir plus.</a>
          </p>
          <img className='experiences__img experiences__img--espagne' src={imgEspagne} alt='drapeau espagnole' />
        </section>
        <div className='experiences__container--right'>
          <section className='experiences__perso experiences__section'>
            <h2 className='experiences__title'>Expériences personnelles</h2>
              <ul className='experiences__list'>
                <li className='experiences__li'>2019 : Concours d'éloquence Initiadroit</li>
                <li className='experiences__li'>2019 - 2020 : Maraudes hebdomadaires - Tous les samedis à Angers (presbytère Ste Victoire)</li>
                <li className='experiences__li'>2020 : Eté 2020 Université d'été "Devenez Créateur - Partenariat entre l'ICES et le Puy du Fou</li>
                <li className='experiences__li'>2020 - 2021 : Cheftaine aux scouts unitaires de France</li>
              </ul>
            <div className='experiences__container--icones'>
              <span><img className='experiences__icone' src={imgTrophy} /></span>
              <span><img className='experiences__icone' src={imgKnight} /></span>
              <span><img className='experiences__icone' src={imgFire} /></span>
            </div>
          </section>
          <section className='experiences__cursus experiences__section'>
            <h2 className='experiences__title'>Mon curriculum vitæ</h2>
            <p className='experiences__txt'>
            Si vous voulez en savoir plus sur moi, mon parcours et mes expériences vous pouvez 
            <Link to='/cv'><a className='experiences__cursus--link' target="blank"> cliquer ici </a></Link>
            pour consulter mon CV
            </p>
          </section>
        </div>
      </div>
      <Link to='/competence'><BtnRight /></Link>
    </aside>
  );
}

// == Export
export default ExperiencePage;
