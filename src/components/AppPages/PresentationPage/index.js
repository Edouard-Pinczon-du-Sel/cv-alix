// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import './stylesMediaQueries.scss';
import imgEcole from '../../../assets/images/ecole.png'


// == Composant
function PresentationPage() {
  return (
    <aside className='presentation'>
      <button className='presentation__btn' type="button">Test</button>
      <div class='presentation__container'>
        <section className='presentation__welcome presentation__section'>
          <h1 className='presentation__title--page'>Présentation</h1>
          <img className='presentation__img--profile' src="https://fakeimg.pl/300/" alt="photo de profile" />
          <h1 className='presentation__title'>Bienvenue sur mon site Web !</h1>
          <p className='presentation__txt'>
            Je m'appelle Alix Pinczon du Sel, j'ai 21 ans et je suis sur le point
            d'intégrer l’institut Mac Luhan de l’IRCOM pour un master management de la communication l'année prochaine ! 
            N'hésitez pas à parcourir ce site si vous voulez en savoir plus !
          </p>
          <img className='presentation__img presentation__img--ecole' src={imgEcole} alt="école ircom" />
        </section>
        <div className='presentation__container--right'>
          <section className='presentation__passions presentation__section'>
            <h2 className='presentation__title'>Mes Passions</h2>
            <p className='presentation__txt'>
              Je suis passionnée par la lecture, l'Histoire et les arts créatifs.
              Mais j'aime aussi des sujets plus divers tels que le droit, la géopolitiqueles et les nouvelles technologies
            </p>
          </section>
          <section className='presentation__objectifs presentation__section'>
            <h2 className='presentation__title'>Mes Objectifs</h2>
            <p className='presentation__txt'>
              Continuer mes études, découvrir de nouvelles choses, me perfectionner et trouver l’entreprise qui me permettra 
              de m’accomplir professionnellement en donnant du sens à ma vie.
            </p>
          </section>
        </div>
      </div>
      <button className='presentation__btn' type="button">Test</button>
    </aside>
  );
}

// == Export
export default PresentationPage;