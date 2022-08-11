// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function PresentationPage() {
  return (
    <aside className='presentation'>
      <section className='presentation__welcome'>
        <img className='presentation__welcome--img__profil' src="#" alt="photo de profile" />
        <h1 className='presentation__welcome--title'>Bienvenue sur mon site Web !</h1>
        <p className='presentation__welcome--txt'>
          Je m'appelle Alix Pinczon du Sel, j'ai 21 ans et je suis sur le point
          d'intégrer l’institut Mac Luhan de l’IRCOM pour un master management de la communication l'année prochaine ! 
          N'hésitez pas à parcourir ce site si vous voulez en savoir plus !
        </p>
        <img className='presentation__welcome--img__ircom' src="#" alt="école ircom" />
      </section>
      <section className='presentation__passions'>
        <h2 className='presentation__passions--title'>Mes Passions</h2>
        <p className='presentation__passions--txt'>
          Je suis passionnée par la lecture, l'Histoire et les arts créatifs.
          Mais j'aime aussi des sujets plus divers tels que le droit, la géopolitiqueles et les nouvelles technologies
        </p>
      </section>
      <section className='presentation__objectifs'>
        <h2 className='presentation__objectifs'>Mes Objectifs</h2>
        <p className='presentation__objectifs'>
          Continuer mes études, découvrir de nouvelles choses, me perfectionner et trouver l’entreprise qui me permettra 
          de m’accomplir professionnellement en donnant du sens à ma vie.
        </p>
      </section>
      <section className='presentation__about'>
        <h2 className='presentation__about'>Quelques mots sur moi</h2>
      </section>
    </aside>
  );
}

// == Export
export default PresentationPage;