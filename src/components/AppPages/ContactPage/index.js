// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
import './styles.scss';
import './stylesMediaQueries.scss';
import imgLinkedin from '../../../assets/images/linkedin.png'
import imgInsta from '../../../assets/images/insta.png'
import imgFacebook from '../../../assets/images/facebook.png'
import imgSelfie from '../../../assets/images/selfie.png'
import imgMap from '../../../assets/images/map.png'
import BtnLeft from '../AppBtn/BtnLeft';
import BtnRight from '../AppBtn/BtnRight';

// == Composant
function ContactPage() {
  return (
    <aside className='contact'>
    <Link to='/competence'><BtnLeft /></Link>
    <div class='contact__container'>
      <section className='contact__generale contact__section'>
        <h1 className='contact__title--page'>Contact</h1>
        <h2 className='contact__title'>A propos</h2>
        <p className='contact__txt'>
        Si vous souhaitez entrer en contact avec moi. Voici quelques informations utiles qui pourraient vous servir. A très bientôt.
        </p>
        <img className='contact__img' src={imgSelfie} alt='selfie Alix' />
        <div className='contact__txt contact__container--icones'>
            <a href='https://www.linkedin.com/in/alix-pinczon-du-sel/' className='contact__li'><img className='contact__icone' src={imgLinkedin} /></a>
            <a href='https://www.instagram.com/alix_pinczon/' className='contact__li'><img className='contact__icone' src={imgInsta} /></a>
            <a href='https://www.facebook.com/profile.php?id=100006893475954' className='contact__li'><img  className='contact__icone' src={imgFacebook} /></a>
        </div>
        <button className='contact__btn' type='button'><a href='mailto:alix.pinczondusel07@gmail'>Contactez moi</a></button>
      </section>
      <div className='contact__container--right'>
        <section className='contact__info contact__section'>
          <h2 className='contact__title'>Coordonnées</h2>
          <ul className='contact__txt'>
            <li className='contact__li'><p className='contact__p'>E-mail :</p><a href='mailto:alix.pinczondusel07@gmail'>alix.pinczondusel07@gmail</a></li>
            <li className='contact__li'><p className='contact__p'>Téléphone :</p><a href='tel:0786176738'>07 86 17 67 38</a></li>
            <li className='contact__li'><p className='contact__p'>Adresse : </p>11 route de Douarnenez, 29 000, Quimper, FRANCE 
              <a className='contact__link' href="https://goo.gl/maps/esshJj8zuTKi1x6c8"> consulter</a>
            </li>
          </ul>
          <img className='contact__map' src={imgMap} alt="carte localisation"/>
        </section>
        <section className='contact__litteraire competence__section'>
          <h2 className='contact__title'>Informations générales</h2>
          <ul className='contact__txt'>
            <li className='contact__li--info'><p className='contact__p'>Nom :</p><a href='mailto:alix.pinczondusel07@gmail'>Pinczon du Sel</a></li>
            <li className='contact__li--info'><p className='contact__p'>Prénom :</p><a href='tel:0786176738'>Alix</a></li>
            <li className='contact__li--info'><p className='contact__p'>Âge : </p>21</li>
            <li className='contact__li--info'><p className='contact__p'>Sexe : </p>Féminin</li>
            <li className='contact__li--info'><p className='contact__p'>Statut : </p>Célibataire</li>

          </ul>
        </section>
      </div>
    </div>
    <Link to='/'><BtnRight /></Link>
  </aside>
  );
}

// == Export
export default ContactPage;



<aside>
<h4>Si vous souhaitez entrer en contact avec moi. Voici quelques informations utiles qui pourraient vous servir ! A très bientôt.</h4>
<ul>
  <li><a><p>Numéro de téléphone :</p> 07 86 17 67 38</a></li>
  <li><a><p>E-mail :</p>alix.pinczondusel07@gmail.com</a></li>
</ul>
<div>
  <a href="#">linkdine</a>
  <a href="#">instagram</a>
  <a href="#">facebook</a>
</div>
<button type="button">Contacter moi</button>
</aside>