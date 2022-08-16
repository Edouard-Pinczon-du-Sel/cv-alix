// == Import
// import PropTypesLib from 'prop-types';
import { Link } from 'react-router-dom';
import BtnLeft from '../AppBtn/BtnLeft';
import BtnRight from '../AppBtn/BtnRight';
import imgStage from '../../../assets/images/stage.jpg'
import imgEspagne from '../../../assets/images/espagne.png'


import './styles.scss';
import './stylesMediaQueries.scss';


// == Composant
function ExperiencePage() {
  return (
<aside className='experiences'>
      <Link to='/'><BtnLeft /></Link>
      <div class='experiences__container'>
        <section className='experiences__pro experiences__section'>
          <h1 className='experiences__title--page'>Expérience</h1>
          <h2 className='experiences__title'>Expériences professionnelles</h2>
          <p className='experiences__txt'>
            Mes études m'ont persmise de mettre un pied ans le monde du travail et de me forger de réelles expériences en société
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
          </section>
          <section className='experiences__cursus experiences__section'>
            <h2 className='experiences__title'>Mon curriculum vitæ</h2>
            <p className='experiences__txt'>
             Si vous voulez en savoir plus sur moi, mon parcours et mes expériences vous pouvez cliquer 
             <a className='experiences__cursus--link' href='../../../assets/images/cv.pdf' target="blank">ici</a>
             pour consulter mon cv
            </p>
          </section>
        </div>
      </div>
      <Link to='/competences'><BtnRight /></Link>
    </aside>
  );
}

// == Export
export default ExperiencePage;
