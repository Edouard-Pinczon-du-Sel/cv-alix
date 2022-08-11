// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function ContactPage() {
  return (
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
  );
}

// == Export
export default ContactPage;