// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
import './styles.scss';
import './stylesMediaQueries.scss';
import imgLinkedin from '../../../assets/images/linkedin.png'
import imgInsta from '../../../assets/images/insta.png'
import imgWhatsapp from '../../../assets/images/whatsapp.png'
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
        <div className='contact__txt contact__container--icones'>
            <span className='contact__li'><img src={imgLinkedin} /></span>
            <span className='contact__li'><img src={imgInsta} /></span>
            <span className='contact__li'><img src={imgWhatsapp} /></span>
        </div>
        <button className='contact__btn' type='button'>Contacter moi</button>
      </section>
      <div className='contact__container--right'>
        <section className='contact__info contact__section'>
          <h2 className='contact__title'>Coordonnées</h2>
          <ul className='contact__txt'>
            <li className='contact__li'><p className='contact__p'>E-mail :</p><a href='mailto:alix.pinczondusel07@gmail'>alix.pinczondusel07@gmail</a></li>
            <li className='contact__li'><p className='contact__p'>Téléphone :</p><a href='tel:0786176738'>07 86 17 67 38</a></li>
            <li className='contact__li'><p className='contact__p'>Adresse : </p>11 route de Douarnenez, 29 000, Quimper, FRANCE</li>
          </ul>
        </section>
        <section className='contact__litteraire competence__section'>
          <h2 className='contact__title'>Informations générales</h2>
          <ul className='contact__txt'>
            <li className='contact__li--info'><p className='contact__p'>Nom :</p><a href='mailto:alix.pinczondusel07@gmail'>Pinczon du Sel</a></li>
            <li className='contact__li--info'><p className='contact__p'>Prénom :</p><a href='tel:0786176738'>Alix</a></li>
            <li className='contact__li--info'><p className='contact__p'>Âge : </p>21</li>
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